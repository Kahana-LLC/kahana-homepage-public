import { createServiceClient } from '@/utils/supabase'

export default async function handler(req, res) {
  try {
    const supabase = createServiceClient()
    const { data, error } = await supabase.from('users').select('*').limit(1)

    if (error) {
      return res.status(500).json({ ok: false, error: error.message })
    }

    return res.status(200).json({ ok: true, message: 'Supabase connected', sample: data })
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message })
  }
}



