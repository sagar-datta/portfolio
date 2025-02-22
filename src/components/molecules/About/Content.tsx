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

      {/* Rest of the content... */}
      {/* Note: I'm abbreviating the content for brevity in this example */}
    </div>
  );
};
