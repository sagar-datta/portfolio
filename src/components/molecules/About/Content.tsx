import { SiReact, SiTypescript, SiRedux, SiLighthouse } from "react-icons/si";
import {
  MdOutlineDesignServices,
  MdOutlineArchitecture,
  MdSecurity,
  MdApi,
} from "react-icons/md";
import { TbBrandCypress, TbDeviceMobile, TbAccessible } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export const Content = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-8">
      {/* Hero Section */}
      <section className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark">
          Hi, I&apos;m Sagar 👋
        </h1>
        <p className="text-xl md:text-2xl text-primary/90 dark:text-primary-dark/90 leading-relaxed">
          A frontend engineer from Perth, specialising in responsive,
          performance-driven React applications with a focus on intuitive user
          experiences and mobile-first design.
        </p>
      </section>

      {/* Engineering Approach */}
      <section className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-dark">
          Engineering Approach
        </h2>
        <p className="text-lg md:text-xl text-primary/80 dark:text-primary-dark/80 leading-relaxed">
          My development process emphasises component-driven architecture and
          robust state management patterns. I deliver production-ready code
          through comprehensive type safety, automated testing workflows, and
          systematic code review processes. This methodical approach ensures
          scalable, maintainable applications that stand up to enterprise
          demands.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3 p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
            <h3 className="text-lg font-medium text-primary dark:text-primary-dark">
              <a
                href="https://sagar-datta.github.io/gastronaut-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Gastronaut AI
              </a>
            </h3>
            <p className="text-primary/70 dark:text-primary-dark/70">
              Engineered a production-ready recipe generator using React and
              Google Gemini Pro API. Implemented comprehensive error handling,
              ARIA compliance, and sophisticated UX patterns for an
              enterprise-grade user experience.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
            <h3 className="text-lg font-medium text-primary dark:text-primary-dark">
              Wildfire Protection Dashboard
            </h3>
            <p className="text-primary/70 dark:text-primary-dark/70">
              At{" "}
              <a
                href="https://homewildfireprotection.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primary-dark hover:underline"
              >
                Fyto Inc.
              </a>
              , designed and developed an interactive dashboard for monitoring
              real-time wildfire protection systems. Implemented mobile-first
              responsive design with optimised state management for efficient
              cross-device performance.
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
            <ul className="space-y-2 text-primary/80 dark:text-primary-dark/80">
              <li className="flex items-center gap-2">
                <SiReact className="w-4 h-4" />
                React.js
              </li>
              <li className="flex items-center gap-2">
                <SiTypescript className="w-4 h-4" />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <SiRedux className="w-4 h-4" />
                State Management
              </li>
              <li className="flex items-center gap-2">
                <SiLighthouse className="w-4 h-4" />
                Performance Optimisation
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-primary/60 dark:text-primary-dark/60">
              Architecture & Design
            </h3>
            <ul className="space-y-2 text-primary/80 dark:text-primary-dark/80">
              <li className="flex items-center gap-2">
                <MdOutlineArchitecture className="w-4 h-4" />
                Component Design
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineDesignServices className="w-4 h-4" />
                Design Systems
              </li>
              <li className="flex items-center gap-2">
                <VscWorkspaceTrusted className="w-4 h-4" />
                Type Safety
              </li>
              <li className="flex items-center gap-2">
                <MdApi className="w-4 h-4" />
                REST APIs
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-primary/60 dark:text-primary-dark/60">
              Development
            </h3>
            <ul className="space-y-2 text-primary/80 dark:text-primary-dark/80">
              <li className="flex items-center gap-2">
                <MdSecurity className="w-4 h-4" />
                CI/CD Workflows
              </li>
              <li className="flex items-center gap-2">
                <TbBrandCypress className="w-4 h-4" />
                Test-Driven Development
              </li>
              <li className="flex items-center gap-2">
                <TbDeviceMobile className="w-4 h-4" />
                Mobile-First Design
              </li>
              <li className="flex items-center gap-2">
                <TbAccessible className="w-4 h-4" />
                Accessibility (ARIA)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Recognition */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
          Education & Recognition
        </h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-primary dark:text-primary-dark">
                Bachelor of Information Technology
                <span className="text-primary/90 dark:text-primary-dark/90 font-normal">
                  {" "}
                  with Distinction
                </span>
              </h3>
              <p className="text-primary/70 dark:text-primary-dark/70">
                RMIT University, Melbourne • 2018 - 2024 • GPA: 3.5/4.0
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-primary/60 dark:text-primary-dark/60">
                Key Coursework
              </p>
              <p className="text-sm text-primary/70 dark:text-primary-dark/70">
                Full Stack Development • User-Centred Design • Cloud Security •
                Software Engineering Project Management • AI Foundations for
                STEM
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium text-primary dark:text-primary-dark">
              International Exchange
            </h3>
            <p className="text-primary/70 dark:text-primary-dark/70">
              Technische Universität München • 2019 - 2020
            </p>
            <p className="text-primary/60 dark:text-primary-dark/60">
              Advanced computer science studies with focus on international
              software development practices
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium text-primary dark:text-primary-dark">
              Professional Certifications
            </h3>
            <ul className="space-y-1.5 text-primary/70 dark:text-primary-dark/70">
              <li>
                Foundations of User Experience (UX) Design - Google (2024)
              </li>
              <li>
                RMIT Global Leadership Program - Global Citizenship (2021-2023)
              </li>
              <li>First Place in Applied Information Technology (2015)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
