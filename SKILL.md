---
name: fix_vercel_deployment
description: Fixes Vercel 404 routing errors for TanStack Start/Nitro projects and resolves blocked deployments due to invalid Git commit author email (jeer3989@gmail.com).
---

# Fix Vercel Deployment Skill

Use this skill when a Vercel deployment fails or gets blocked due to either:
1. **Invalid Git commit author email** (e.g. `you@example.com` instead of `jeer3989@gmail.com`).
2. **Vercel 404: NOT_FOUND routing error** on TanStack Start / Nitro / Vinxi projects.

## Action Steps

### Step 1: Configure Git Identity Correctly
If Vercel blocks deployment due to an invalid commit author email, set the user email and name both locally and globally:

1. Set the email:
   ```bash
   git config --global user.email "jeer3989@gmail.com"
   git config user.email "jeer3989@gmail.com"
   ```
2. Set the name:
   ```bash
   git config --global user.name "ncettoiit"
   git config user.name "ncettoiit"
   ```

### Step 2: Fix Vercel 404 Routing / Nitro output
If Vercel deployments succeed but the app returns 404 routing errors, ensure the application builds correctly using the Vercel Build Output API:

1. Update `vite.config.ts` to force-enable Nitro with the Vercel preset:
   ```typescript
   // Ensure vite.config.ts has this within defineConfig:
   nitro: {
     preset: "vercel",
   }
   ```
2. Create or verify `vercel.json` in the project root:
   ```json
   {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "version": 2,
     "buildCommand": "npm run build",
     "outputDirectory": ".vercel/output"
   }
   ```
3. Add `.vercel` to `.gitignore`.

### Step 3: Trigger a Safe Redeployment
To trigger Vercel to rebuild without rewriting the Git history (keeping Lovable history intact):

1. Create a safe empty commit:
   ```bash
   git commit --allow-empty -m "chore: trigger deployment with correct git author email"
   ```
2. Push the changes to GitHub:
   ```bash
   git push
   ```
