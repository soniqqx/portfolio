# Supasita Pochawat - Portfolio Website

This portfolio website showcases my software development projects, technical skills, and experience in building web applications using modern JavaScript frameworks.

![Portfolio Preview](./public/preview.png) *(Note: You can add a preview screenshot later)*

## 🚀 Features

- **Sleek Dark Theme:** A minimalist, highly-readable design heavily utilizing contrast, subtle gradients, and glassmorphism.
- **Fully Responsive Design:** Carefully crafted layouts that scale fluidly from desktop computers down to mobile devices, featuring a responsive pill-shaped floating navigation bar on small viewports.
- **Project Showcase:** A detailed page for every project showing roles, descriptions, technologies used, and functional preview galleries.
- **Fast Performance:** Built using the Next.js App Router for optimal rendering performance, zero layout shift, and SEO benefits.

## 🛠️ Built With

- [Next.js (App Router)](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - For strictly-typed, scalable code
- **CSS3** - Custom structured global styles without heavy utility wrappers (Vanilla CSS, CSS Flexbox/Grid).

## 📂 Project Navigation

- `app/page.tsx`: The main landing page containing the Hero, About, Skills, and Projects sections.
- `app/projects/[id]/page.tsx`: Dynamic routing for displaying detailed insights into individual projects (Roles, Gallery, Repository Links).
- `data/projects.ts`: The central data source file that feeds project objects throughout the application.
- `app/globals.css`: Contains the primary design system encompassing tokens, media queries, animations, and the global grid system.

## 💻 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You need to have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository directly from GitHub:
   ```bash
   git clone https://github.com/soniqqx/portfolio.git
   ```
2. Navigate into the project directory:
   ```bash
   cd portfolio
   ```
3. Install the required dependencies using npm (or yarn/pnpm):
   ```bash
   npm install
   ```

### Running the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx` and the page will strictly auto-update as you hit save.

## 📬 Contact me

- **Email:** [supasitapcw@gmail.com](mailto:supasitapcw@gmail.com)
- **GitHub:** [https://github.com/soniqqx](https://github.com/soniqqx)