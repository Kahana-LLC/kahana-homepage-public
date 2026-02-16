import ForgotPassword from './forgot-password'

// Alias route: Supabase projects commonly use /update-password as the redirect target.
// Keep this to prevent 404s if Supabase URL Configuration or older clients send users here.
export default ForgotPassword

