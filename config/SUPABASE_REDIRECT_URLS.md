# Supabase Auth redirect URLs

After a user clicks **Confirm your email** in the confirmation email, Supabase redirects them to the URL you configure. This project sends them to `/confirm-success`.

## Dashboard setup

**Supabase Dashboard → Authentication → URL Configuration**

1. **Site URL**
   - **Production:** `https://kahana.co`
   - **Local dev:** `http://localhost:3000` (use when testing confirmation emails locally)

2. **Redirect URLs** (allowed list)

   Add both of these so confirmation works in production and locally:

   - `https://kahana.co/confirm-success`
   - `http://localhost:3000/confirm-success`

Supabase will only redirect to URLs in this list. If the confirm-success URL is missing, users may see an error or land on the wrong page after confirming.

## Flow

1. User signs up on `/oasis-auth` → Supabase sends confirmation email with a link.
2. The link includes `emailRedirectTo` set to `{origin}/confirm-success` (see `utils/auth.js`).
3. User clicks **Confirm your email** → Supabase verifies the token → redirects to `/confirm-success`.
4. User sees the success page and can sign in or go to downloads.
