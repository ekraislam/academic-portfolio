# Ekra Islam Ohi | Academic & Research Portfolio

A personal academic and research portfolio website for **Ekra Islam Ohi**, an undergraduate student in Computer Science and Engineering at **Green University of Bangladesh**.

The website presents verified academic background, core areas of research interest (Machine Learning, Natural Language Processing, LLM Reliability, and Explainable Computer Vision), and a curated catalog of 13 software and AI engineering projects.

---

## Technical Stack

* **Framework & UI:** [React](https://react.dev/) 19 with [TypeScript](https://www.typescriptlang.org/)
* **Build Tool & Bundler:** [Vite](https://vite.dev/)
* **Styling:** Vanilla CSS using CSS Custom Properties (Design Tokens)
* **Iconography:** [Lucide React](https://lucide.dev/) & accessible SVG components
* **Linter:** [Oxlint](https://oxc.rs/)

The application operates as a fast, accessible, static single-page website without requiring a backend server or database for its public presentation.

---

## Project Structure

```text
ohi-academic-portfolio/
├── public/                 # Static assets (favicons, documents)
│   └── assets/             # Reserved for genuine headshot and CV document
├── src/
│   ├── components/         # Reusable UI primitives (Navbar, Footer, SectionHeading, etc.)
│   ├── sections/           # Section modules (Hero, About, Research, Projects, Education, Contact)
│   ├── data/               # Typed data models (profile, research, projects, education)
│   ├── index.css           # Global academic design system & typography tokens
│   ├── App.tsx             # Root page assembler
│   └── main.tsx            # Application entrypoint
├── index.html              # Document metadata, Open Graph tags, and typography links
├── package.json            # Scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## Local Development & Build Instructions

### Prerequisites
* [Node.js](https://nodejs.org/) (v20+ recommended; verified with v24.19)
* npm (v10+; verified with v11.17)

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Production Build
Compile TypeScript and build the optimized production bundle:
```bash
npm run build
```
Output artifacts are generated in the `dist/` directory.

### 4. Local Preview
Preview the production build locally:
```bash
npm run preview
```
Open the provided local URL (typically `http://localhost:4173/`).

### 5. Linting
Run static code analysis using Oxlint:
```bash
npm run lint
```

---

## Future GitHub & Vercel Deployment Guide

*(This guide documents the deployment steps for when the site is ready to be published. The repository is currently local only.)*

### Step 1: Create a GitHub Repository
1. Log in to your GitHub account ([https://github.com/ekraislam](https://github.com/ekraislam)).
2. Create a new public repository (e.g., `academic-portfolio` or `ekraislam.github.io`).
3. Link your local repository and push:
   ```bash
   git add .
   git commit -m "feat: complete academic portfolio website"
   git remote add origin https://github.com/ekraislam/<repository-name>.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel (Free Hobby Tier)
1. Sign in to [Vercel](https://vercel.com/) using your GitHub account.
2. Click **Add New Project** and select **Import Git Repository**.
3. Select your portfolio repository.
4. Vercel automatically detects the **Vite** framework preset:
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
   * **Install Command:** `npm install`
5. Click **Deploy**. Vercel will build and assign a free `.vercel.app` production domain.
6. Custom domain (e.g., `ekraislam.me` or `ohi.academic`) can be optionally attached in the Vercel project settings at any time.

---

## Academic Integrity & Content Policy

* All project descriptions and technical attributes cited on this website are grounded in public repository documentation.
* Project statuses distinguish clearly between ongoing explorations, educational simulators, and software prototypes.
* No claims of peer-reviewed publication or formal preprint status are made unless explicitly verified.
