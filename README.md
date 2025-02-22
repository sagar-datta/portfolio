# 🚀 Sagar Datta's Portfolio

A modern, personal portfolio site built with cutting-edge web technologies, featuring a minimalist desktop-inspired interface.

## 🎨 Design Philosophy

The site features a minimalist dock interface, drawing inspiration from familiar desktop environments while embracing modern web capabilities. Built with a mobile-first approach, it's fully responsive and accessible across all devices.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15.1.7 with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom utilities
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for smooth animations
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes) for seamless dark/light mode
- **State Management**: [@tanstack/react-query](https://tanstack.com/query/latest) for efficient data fetching
- **Icons**: [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/) for beautiful UI elements

## 🏗 Project Structure

```bash
src/
├── app/             # Next.js app router pages and layouts
├── components/      # React components (Atomic Design)
│   ├── atoms/      # Basic building blocks
│   ├── molecules/  # Combinations of atoms
│   └── organisms/  # Complex UI components
├── config/         # Configuration files and constants
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
└── utils/          # Helper functions and utilities
```

## ✨ Features

- 🌓 Dark/Light mode with system preference support
- 📱 Fully responsive design
- 🎯 Interactive dock with smooth animations
- 🏃‍♂️ Static site generation for blazing-fast performance
- ⚛️ Atomic design pattern for component organisation
- 📦 Modern build optimisations
- 🔍 SEO optimised with Next.js metadata
- 🎨 Custom SVG favicons with theme support
- 🌐 Optimised image loading with remote patterns support

## 🚀 Development

1. Clone the repository:

   ```bash
   git clone https://github.com/sagar-datta/portfolio.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open in your browser:
   ```
   http://localhost:3000
   ```

## 🛠 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Check for code issues
- `npm run lint:fix` - Automatically fix code issues
- `npm run clean` - Remove build directories
- `npm run typecheck` - Check TypeScript types

## 🎯 Design Decisions

- **Atomic Design**: Components are organised using atomic design principles for better maintainability
- **App Router**: Utilizing Next.js 14+ App Router for enhanced routing and layouts
- **Client Components**: Strategic use of 'use client' for interactive elements
- **Type Safety**: Strict TypeScript configuration for robust code

## 📦 Deployment

The site is deployed as a project site on GitHub Pages and can be accessed at:

```
https://sagar-datta.github.io/portfolio
```

To deploy your own version:

1. Update the `next.config.js` to include the correct base path:

   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     basePath: "/portfolio",
     output: "export",
     images: {
       unoptimized: true,
     },
   };
   ```

2. Push changes to the main branch and GitHub Actions will handle the deployment

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with 💖 by Sagar Datta
