# Gameworld Chronicles & Algorithmic Atelier

An elegantly crafted, responsive single-screen immersive image gallery designed with a high-contrast dark industrial theme. Seamlessly browse conceptual artworks spanning RPG environments, 16-bit canvas nostalgia, live multimedia rooms, and algorithmic procedural abstract canvases.

---

## 🎨 Design Vision

*   **Cybernetic Slate Theme**: Features stylized `#FF5C00` (Safety Orange) branding accents on absolute black container nodes, paired with minimalist metadata matrices.
*   **Tactile Navigation**: Implements desktop-first key-binding listeners (Left/Right arrow keys), desktop hover micro-shifts, and unified physical layouts.
*   **Precision Exhibition HUD**: Features real-time simulation presets (interactive camera film LUT filters) that modify the grid renders instantly.

---

## 🚀 Local Development

To run this application locally, ensure you have [Node.js](https://nodejs.org/) installed, and then follow these commands:

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Node
```bash
npm run dev
```
Open your browser to the URL output in your terminal (typically `http://localhost:3000`).

### 3. Production Compilation
To compile optimized static assets under `dist/`:
```bash
npm run build
```

---

## 🐙 Complete GitHub Deployment Guide

Integrating your local codebase with GitHub is a straightforward, logical sequence.

### Step 1: Export from AI Studio
1. Open the **Settings** menu page in the top right corner of AI Studio.
2. Select **Export to GitHub** to link your repository directly, or select **Export as ZIP** to download the archive to your local device and unpack it.

### Step 2: Initialize Git Locally (If starting from ZIP)
If you downloaded the code as a ZIP archive, open your local terminal inside the project root and run:
```bash
# Initialize local repo
git init

# Stage all project files
git add .

# Create the initial version commit
git commit -m "feat: initial release of immersive image gallery"
```

### Step 3: Publish to a Remote GitHub Repository
1. Navigate to [GitHub](https://github.com/) and click **New** to create a empty repository.
2. Name your repo (e.g., `gameworld-chronicles-gallery`) and do **not** check any initialization files (README, .gitignore, etc.).
3. Copy the Git URLs from the setup commands and execute them inside your terminal:
```bash
# Point local branch name to 'main'
git branch -M main

# Link local repository to your remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/gameworld-chronicles-gallery.git

# Write changes to the remote branch
git push -u origin main
```

*(Replace `YOUR_USERNAME` with your actual GitHub username!)*

---

## 🌐 Complete Hosting Deployment Guide

Since this is a client-side Single Page Application (SPA), hosting is fully automated and 100% free. Below are the three most popular deployment nodes.

### Opt 1: Vercel (Recommended — 2-Minute Setup)
1. Navigate to [Vercel](https://vercel.com/) and register with your GitHub account.
2. Click **Add New...** -> **Project**.
3. Select your GitHub repository from the import list.
4. Leave all default build configurations (Vercel automatically detects the Vite configuration).
5. Click **Deploy**. Your custom deployment domain is active instantly!

### Opt 2: Netlify (Fast & Intuitive)
1. Register/Login at [Netlify](https://www.netlify.com/) using your GitHub credentials.
2. Click **Import from Git** -> **GitHub**.
3. Select your repository.
4. Under settings, confirm:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5. Click **Deploy Site**.

### Opt 3: GitHub Pages (Direct Native Deployment)
To deploy directly from your GitHub repository:
1. Install the pages deployment helper package locally:
   ```bash
   npm install -D gh-pages
   ```
2. Open `package.json` and add an external `"homepage"` attribute at the root level and deploy scripts:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/gameworld-chronicles-gallery",
   "scripts": {
     ...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.ts` to include your repository base path to ensure relative URLs load:
   ```ts
   export default defineConfig({
     base: '/gameworld-chronicles-gallery/',
     ...
   })
   ```
4. Run the deploy script inside your terminal:
   ```bash
   npm run deploy
   ```
5. Navigate to your GitHub repository **Settings** -> **Pages** and verify the active URL link.
