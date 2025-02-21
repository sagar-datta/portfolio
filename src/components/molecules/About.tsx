"use client";

import { PageTransition } from "@/components/atoms/PageTransition";

export const About = () => {
  return (
    <PageTransition>
      <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-8">
        {/* Hero Section */}
        <section className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark">
            Hi, I'm Sagar 👋
          </h1>
          <p className="text-xl md:text-2xl text-primary/90 dark:text-primary-dark/90 leading-relaxed">
            A frontend engineer from Perth, specializing in React applications
            with a focus on performance optimization and type safety.
          </p>
        </section>

        {/* Experience Section */}
        <section className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-dark">
            Frontend Engineer
          </h2>
          <p className="text-lg md:text-xl text-primary/80 dark:text-primary-dark/80 leading-relaxed">
            I build high-performance web applications using React, TypeScript,
            and modern web technologies. My work emphasizes code quality through
            strict typing, automated testing, and measurable performance
            improvements.
          </p>
        </section>

        {/* Experience Highlights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
            Experience Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
              <h3 className="text-lg font-medium text-primary dark:text-primary-dark">
                Frontend Software Engineer
              </h3>
              <p className="text-primary/70 dark:text-primary-dark/70">
                Led development of a real-time data visualization dashboard for
                wildfire monitoring, achieving 40% faster load times through
                optimized state management and caching strategies.
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
              <h3 className="text-lg font-medium text-primary dark:text-primary-dark">
                Frontend Developer
              </h3>
              <p className="text-primary/70 dark:text-primary-dark/70">
                Architected reusable component libraries and implemented
                mobile-first responsive layouts with modern performance
                optimization techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-primary/60 dark:text-primary-dark/60">
                Frontend Core
              </h3>
              <ul className="space-y-1 text-primary/80 dark:text-primary-dark/80">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-primary/60 dark:text-primary-dark/60">
                Architecture
              </h3>
              <ul className="space-y-1 text-primary/80 dark:text-primary-dark/80">
                <li>Component Design</li>
                <li>State Management</li>
                <li>REST APIs</li>
                <li>Type Safety</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-primary/60 dark:text-primary-dark/60">
                Development
              </h3>
              <ul className="space-y-1 text-primary/80 dark:text-primary-dark/80">
                <li>Git</li>
                <li>CI/CD</li>
                <li>TDD</li>
                <li>Agile</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Recognition */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
            Education & Recognition
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-primary dark:text-primary-dark">
                Bachelor of Information Technology
              </h3>
              <p className="text-primary/70 dark:text-primary-dark/70">
                RMIT University with Distinction (GPA: 3.5/4.0)
              </p>
              <p className="text-primary/60 dark:text-primary-dark/60">
                Focus: Full Stack Development, Cloud Security, AI Foundations
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-primary dark:text-primary-dark">
                International Experience
              </h3>
              <p className="text-primary/70 dark:text-primary-dark/70">
                Exchange studies at Technische Universität München
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
