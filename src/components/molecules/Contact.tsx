"use client";

import { PageTransition } from "@/components/atoms/PageTransition";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Contact = () => {
  return (
    <PageTransition>
      <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-8">
        {/* Header Section */}
        <section className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark">
            Let&apos;s Connect
          </h1>
          <p className="text-xl md:text-2xl text-primary/90 dark:text-primary-dark/90 leading-relaxed">
            I&apos;m always open to discussing new opportunities, projects, or
            just having a friendly chat about technology.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Direct Contact */}
            <div className="space-y-4 p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
              <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
                Direct Contact
              </h2>
              <div className="space-y-3">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 text-lg text-primary/80 dark:text-primary-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  <FiMail className="w-5 h-5" />
                  your.email@example.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
              <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
                Social Links
              </h2>
              <div className="space-y-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-primary/80 dark:text-primary-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-primary/80 dark:text-primary-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Alternative */}
        <section className="space-y-4">
          <div className="p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
            <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-4">
              Preferred Contact Method
            </h2>
            <p className="text-lg text-primary/80 dark:text-primary-dark/80 leading-relaxed">
              The best way to reach me is through LinkedIn or email. I typically
              respond within 24-48 hours and am happy to schedule a call if
              needed.
            </p>
          </div>
        </section>

        {/* Location */}
        <section className="space-y-4">
          <div className="p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
            <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-4">
              Location
            </h2>
            <p className="text-lg text-primary/80 dark:text-primary-dark/80 leading-relaxed">
              Based in Perth, Australia
              <br />
              Available for remote opportunities worldwide
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
