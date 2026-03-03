import { createServerClient, createServiceClient } from '@/utils/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { userId, email, fullName } = req.body || {}
  if (!userId || !email) {
    return res.status(400).json({ error: 'userId and email are required' })
  }

  try {
    const normalizedEmail = email.trim().toLowerCase()
    const supabase = createServiceClient()
    const authHeader = req.headers.authorization || ''
    const bearerToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null

    if (bearerToken) {
      const anonClient = createServerClient()
      const { data: authedUserData, error: authedUserError } = await anonClient.auth.getUser(bearerToken)

      if (authedUserError || !authedUserData?.user) {
        return res.status(401).json({ error: 'Authentication required' })
      }

      const authedEmail = authedUserData.user.email?.trim().toLowerCase()
      if (authedUserData.user.id !== userId || !authedEmail || authedEmail !== normalizedEmail) {
        return res.status(403).json({ error: 'Authenticated user does not match provided profile data' })
      }
    }

    const { data: authUserData, error: authUserError } = await supabase.auth.admin.getUserById(userId)

    if (authUserError) throw authUserError

    const authEmail = authUserData?.user?.email?.trim().toLowerCase()
    if (!authEmail || authEmail !== normalizedEmail) {
      return res.status(403).json({ error: 'Provided email does not match email on record for the specified userId' })
    }

    // Find existing user by email (since public.users is not linked to auth.users)
    const { data: existingUser } = await supabase
      .from('users')
      .select('user_id')
      .eq('email', normalizedEmail)
      .single()

    if (existingUser) {
      if (!bearerToken) {
        return res.status(401).json({ error: 'Authentication required to update an existing profile' })
      }

      const updatePayload = {
        updated_at: new Date().toISOString(),
      }

      if (fullName) {
        updatePayload.full_name = fullName
        updatePayload.name = fullName
      }

      // Update existing user
      const { data, error } = await supabase
        .from('users')
        .update(updatePayload)
        .eq('user_id', existingUser.user_id)
        .select()
        .single()

      if (error) throw error
      return res.status(200).json({ success: true, user: data })
    } else {
      // Create new user (user_id will be auto-generated)
      const { data, error } = await supabase
        .from('users')
        .insert({
          email: normalizedEmail,
          full_name: fullName || null,
          name: fullName || null, // Also set name field
          password_hash: '', // Required field, but not used for auth.users linked accounts
          status: 'active',
        })
        .select()
        .single()

      if (error) throw error
      return res.status(200).json({ success: true, user: data })
    }
  } catch (error) {
    console.error('Error creating profile:', error)
    return res.status(500).json({ error: error.message })
  }
}
