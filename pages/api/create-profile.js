import { createServiceClient } from '@/utils/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { email, fullName } = req.body || {}
  if (!email) {
    return res.status(400).json({ error: 'email is required' })
  }

  try {
    const supabase = createServiceClient()

    // Find existing user by email (since public.users is not linked to auth.users)
    const { data: existingUser } = await supabase
      .from('users')
      .select('user_id')
      .eq('email', email)
      .single()

    if (existingUser) {
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
          email,
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


