# Environment Setup Guide

This guide will help you set up the development environment for the Kahana homepage project.

## Prerequisites

- Node.js 20.x
- npm 10.x
- Git

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env.local` file in the root directory with the following variables:

## Required Environment Variables

### Supabase (Required for database/auth features)

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**Where to find these:**
- Go to your Supabase project dashboard
- Navigate to Settings → API
- Copy the "Project URL" for `NEXT_PUBLIC_SUPABASE_URL`
- Copy the "anon public" key for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Copy the "service_role" key for `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

### Cloudinary (Required for image optimization)

```bash
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

**Where to find this:**
- Go to your Cloudinary dashboard
- The cloud name is shown in the dashboard URL or in Settings
- Example: If your dashboard URL is `https://console.cloudinary.com/console/c/dlhpqrucv`, then `dlhpqrucv` is your cloud name

**Note:** The project will work without Cloudinary, but images will fallback to local paths. For production, Cloudinary is recommended for image optimization.

### Stripe (Optional - Only needed for payment features)

```bash
# Stripe Configuration (Optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
```

**Where to find this:**
- Go to Stripe Dashboard → Developers → API keys
- Copy the "Secret key" (starts with `sk_`)

**Note:** Only needed if you're working on payment/subscription features. The site will work without it for basic development.

## Running the Development Server

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variable Priority

The project uses the following priority for environment variables:
1. `.env.local` (local development - not committed to git)
2. System environment variables
3. Default fallbacks (for some features)

## What Works Without API Keys?

### ✅ Works Without Any Keys:
- Basic site navigation
- Blog posts (uses static Unsplash images)
- Most static content
- UI components

### ⚠️ Limited Functionality:
- **Without Supabase:** User authentication, database features, and user management won't work
- **Without Cloudinary:** Images will use local paths instead of optimized CDN URLs
- **Without Stripe:** Payment and subscription features won't work

## Troubleshooting

### Images Not Loading
- Check that `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is set correctly
- Images will fallback to local paths if Cloudinary is not configured
- Check browser console for Cloudinary warnings

### Supabase Errors
- Verify all three Supabase environment variables are set
- Check that your Supabase project is active
- Ensure the service role key is correct (server-side only)

### Build Errors
- Make sure Node.js version is 20.x: `node --version`
- Clear `.next` folder: `npm run clean`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## Production Deployment

For production (Heroku/Vercel), set these environment variables in your hosting platform's dashboard:

1. **Heroku:**
   - Go to Settings → Config Vars
   - Add all required environment variables

2. **Vercel:**
   - Go to Project Settings → Environment Variables
   - Add all required environment variables

## Security Notes

⚠️ **Important:**
- Never commit `.env.local` to git (it's already in `.gitignore`)
- The `SUPABASE_SERVICE_ROLE_KEY` has admin access - keep it secret
- The `STRIPE_SECRET_KEY` should never be exposed client-side
- Only `NEXT_PUBLIC_*` variables are exposed to the browser

## Getting API Keys

### Supabase
1. Sign up at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your keys from Settings → API

### Cloudinary
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name from the dashboard

### Stripe
1. Sign up at [stripe.com](https://stripe.com)
2. Get your API keys from Dashboard → Developers → API keys
3. Use test keys for development, live keys for production

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Check server logs when running `npm run dev`
3. Verify all environment variables are set correctly
4. Ensure you're using the correct Node.js version (20.x)

