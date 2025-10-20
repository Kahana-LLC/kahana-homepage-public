## Oasis Buyer Guide Page

This repository includes a responsive Next.js page at `/oasis-buyer-guide` styled with Tailwind.

### Editing Content

- Source file: `content/oasis-guide.json`
- Structure:
  - `hero`: `title`, `subtitle`, `description`, `image`
  - `sections`: array of objects `{ title, slug, html | markdown, table? }`
  - Use `html` for simple rich text or `markdown` for longer lists and code blocks.
  - Tables can be provided as `{ columns: string[], rows: string[][] }` and render responsively.

### Assets

- Logo placeholder is a colored block in the header of `pages/oasis-buyer-guide.jsx`. Replace with your logo import:
  - Add the image at `public/assets/logo.png`
  - In `pages/oasis-buyer-guide.jsx`, import and replace the placeholder:
    // import KahanaLogo from '../public/assets/logo.png'
    // <Image src={KahanaLogo} alt="Kahana" width={28} height={28} />

- Hero/OpenGraph images: place files in `public/` (e.g., `public/og-placeholder.jpg`) and update `content/oasis-guide.json`.

### Theme

Tailwind theme is extended in `tailwind.config.js` under `theme.extend.colors.brand`:

- `brand.primary` = #0A2240
- `brand.accent` = #009999
- `brand.page` = #F5F7FA
- `brand.card` = #FFFFFF
- `brand.muted` = #5C6B7A

### Development

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open: `http://localhost:3000/oasis-buyer-guide`

### Deployment

- Standard Next.js build/deploy:
  - `npm run build`
  - `npm run start`
  - Or deploy to Vercel (recommended). Ensure `content/` and `public/` are included.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
