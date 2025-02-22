# 🚀 Sagar Datta's Portfolio

A modern, personal portfolio site built with cutting-edge web technologies, featuring a minimal desktop-inspired interface.

## 🎨 Design Philosophy

The site features a minimalist dock interface, drawing inspiration from familiar desktop environments whilst embracing modern web capabilities. Built with a mobile-first approach, it's fully responsive and accessible across all devices.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15.1.7 with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom utilities
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes) for seamless dark/light mode

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
- `npm run typecheck` - Check TypeScript types

## 🎯 Design Decisions

- **Atomic Design**: Components are organised using atomic design principles for better maintainability
- **App Router**: Utilizing Next.js 14+ App Router for enhanced routing and layouts
- **Client Components**: Strategic use of 'use client' for interactive elements
- **Type Safety**: Strict TypeScript configuration for robust code

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with 💖 by Sagar Datta
