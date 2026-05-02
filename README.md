# 🌴 Suriya Coir: Engineered by Nature

**Suriya Coir** is a modern, responsive web application showcasing industrial-grade coir products designed for domestic elegance and commercial durability. The platform emphasizes a sustainable approach to carbon-neutral, high-performance coir alternatives.

## ✨ Project Overview
This project serves as the digital storefront and product catalog for Suriya Coir. It brings "The Living Loom" to the web, emphasizing sustainability, premium ("Pure Quality") products, and green solutions tailored for modern agriculture and industries all over the world.

## 🚀 Key Features
- **Dynamic Product Carousel**: An effortlessly smooth, infinitely scrolling showcase displaying our meticulously crafted collections.
- **Interactive UI Elements**: Features dynamic 3D tilt-cards powered by calculated mouse coordinates and smooth transitions for a deeply engaging user experience.
- **Dedicated Product Spotlights**: High-fidelity product displays, such as Premium Grow Bags engineered for high-yield greenhouse cultivation.
- **Voices of the Loom**: A beautifully structured testimonial layout that spotlights feedback from our global clientele, reinforcing trust and quality.

## 🥥 Our Collections
The current web catalog features a robust lineup of our sustainable, natural coir-based solutions:
- **120kg Fiber Baling**
- **5kg Coco Chips & Coco Peat**
- **650g Coco Peat Blocks**
- **Curling Coir Rolls**
- **Premium Grow Bags**
- **Two-Ply Yarn Coir Ropes**

## 🛠️ Technology Stack
Built with cutting-edge web technologies to ensure lightning-fast performance, maintainability, and a stunning aesthetic:
- **Core Engine**: React 19 & React Router DOM for seamless, single-page application routing.
- **Build Tooling**: Vite for uncompromised speed and optimized production builds.
- **Styling & Theming**: Tailwind CSS v4, utilizing a highly customized design system of color tokens (primary, secondary, and dynamic surface containers).
- **Animations**: Framer Motion alongside custom vanilla CSS animations to breathe life into the pages.

## 🌍 Sustainability First
Suriya Coir stands for ecological balance. We believe in providing businesses globally with the power to easily transition to sustainable, eco-friendly resources—products not just manufactured, but truly *Engineered by Nature*.

---
*"Ready to Weave a Better World?"*

## GitHub Pages Deployment
- The repository is configured to deploy automatically to GitHub Pages from the `main` branch using GitHub Actions.
- The custom domain is stored in `public/CNAME`, so every production build preserves `suriyacoirs.com`.
- For single-page app routing on GitHub Pages, the deploy workflow copies `index.html` to `404.html` so route refreshes keep working.

### Required DNS Records For `suriyacoirs.com`
- `A` record: `185.199.108.153`
- `A` record: `185.199.109.153`
- `A` record: `185.199.110.153`
- `A` record: `185.199.111.153`
- `CNAME` record for `www`: `nithees-sj.github.io`

### Deploy Flow
1. Push to `main`.
2. Wait for the `Deploy to GitHub Pages` GitHub Actions workflow to finish.
3. In GitHub repository settings, keep the Pages source as `GitHub Actions`.
4. After DNS propagation completes, enable HTTPS in the Pages settings.
