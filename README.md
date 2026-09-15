# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Deployment

Recommended: deploy to Vercel for zero-config hosting of Vite apps.

- Vercel will use the `build` script (`npm run build`) and serve the `dist` directory.
- I added a `vercel.json` to ensure SPA routing and static-build configuration: [vercel.json](vercel.json)

Dashboard deploy steps:

1. Connect your GitHub repo to Vercel.
2. If not auto-detected, set Build Command: `npm run build` and Output Directory: `dist`.
3. Deploy and open the provided URL.

CLI deploy (from project root):

```bash
npx vercel --prod
```

If you need environment variables, add them in the Vercel dashboard or with `vercel env`.

For troubleshooting: confirm `npm run build` produces a `dist/` folder locally before deploying.
