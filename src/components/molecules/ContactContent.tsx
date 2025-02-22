import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiFlag } from "react-icons/fi";

interface ContactContentProps {
  showCopied: boolean;
  isHovering: boolean;
  onEmailClick: (e: React.MouseEvent) => void;
  onEmailHover: () => void;
  onEmailLeave: () => void;
}

export const ContactContent = ({
  showCopied,
  isHovering,
  onEmailClick,
  onEmailHover,
  onEmailLeave,
}: ContactContentProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-8">
      {/* Header Section */}
      <section className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark">
          Let&apos;s Build Something Together
        </h1>
        <p className="text-xl md:text-2xl text-primary/90 dark:text-primary-dark/90 leading-relaxed">
          Frontend Engineer with expertise in React, TypeScript, and modern web
          technologies. Open to discussing innovative projects and
          opportunities.
        </p>
      </section>

      {/* Professional Profile */}
      <section className="space-y-4">
        <div className="p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <FiMapPin className="w-5 h-5 text-primary/70 dark:text-primary-dark/70 flex-shrink-0" />
              <span className="text-lg text-primary/90 dark:text-primary-dark/90">
                Perth, Western Australia
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiFlag className="w-5 h-5 text-primary/70 dark:text-primary-dark/70 flex-shrink-0" />
              <span className="text-lg text-primary/90 dark:text-primary-dark/90">
                Australian Citizen
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Professional Networks */}
          <div className="space-y-4 p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
            <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
              Professional Networks
            </h2>
            <div className="space-y-4">
              <div className="flex">
                <a
                  href="https://linkedin.com/in/sagar-datta98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg text-primary/80 dark:text-primary-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors group"
                >
                  <FiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    LinkedIn Profile
                  </span>
                </a>
              </div>
              <div className="flex">
                <a
                  href="https://github.com/sagar-datta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg text-primary/80 dark:text-primary-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors group"
                >
                  <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    GitHub Projects
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="space-y-4 p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
            <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
              Direct Contact
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col relative">
                <div className="flex">
                  <a
                    href="mailto:s@gar.jp.net"
                    onClick={onEmailClick}
                    onMouseEnter={onEmailHover}
                    onMouseLeave={onEmailLeave}
                    className="inline-flex items-center gap-3 text-lg text-primary/80 dark:text-primary-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors group"
                  >
                    <FiMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      s@gar.jp.net
                    </span>
                  </a>
                </div>
                <div
                  className={`absolute -bottom-8 left-8 px-3 py-1 bg-glass-button dark:bg-glass-button-dark backdrop-blur-glass text-primary dark:text-primary-dark rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none select-none transition-all duration-200 ease-in-out ${
                    (showCopied && isHovering) || (!showCopied && isHovering)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="absolute -top-1 left-4 w-2 h-2 bg-glass-button dark:bg-glass-button-dark backdrop-blur-glass transform rotate-45" />
                  {showCopied
                    ? "Copied email to clipboard successfully!"
                    : "Click to copy email to clipboard"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="space-y-4">
        <div className="p-6 rounded-2xl bg-glass-blur/30 dark:bg-glass-blur-dark/30 backdrop-blur-glass">
          <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-4">
            Professional Engagement
          </h2>
          <p className="text-lg text-primary/80 dark:text-primary-dark/80 leading-relaxed">
            I&apos;m currently exploring opportunities where I can leverage my
            expertise in frontend development and modern web technologies. I
            specialise in building responsive, performance-driven applications
            with a focus on exceptional user experiences.
          </p>
          <ul className="mt-4 space-y-2 text-lg text-primary/80 dark:text-primary-dark/80">
            <li className="flex items-center gap-2 before:content-['•'] before:text-primary/60 before:dark:text-primary-dark/60">
              Available for full-time positions and contract work
            </li>
            <li className="flex items-center gap-2 before:content-['•'] before:text-primary/60 before:dark:text-primary-dark/60">
              Open to remote, hybrid, or on-site opportunities
            </li>
            <li className="flex items-center gap-2 before:content-['•'] before:text-primary/60 before:dark:text-primary-dark/60">
              Quick response time within 24-48 hours
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
