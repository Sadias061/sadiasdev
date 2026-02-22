import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding"
    >
      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
            Analyste Programmeur · Full-Stack & Mobile
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Esdras{" "}
          <span className="text-gradient-gold">AGNAWALE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed px-1"
        >
          Analyste programmeur avec 1 an d'expérience, passionné par la
          création d'applications web & mobile modernes et performantes.
          Disponible pour des projets freelances et contrats de travail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:glow-gold-strong transition-all duration-300 w-full sm:w-auto"
          >
            <Mail size={16} />
            Contactez-moi
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
          >
            Voir mes projets
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-16"
        >
          {[
            { Icon: Github, href: "https://github.com/Sadias061", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/esdras-agnawale-sadias", label: "LinkedIn" },
            { Icon: MessageCircle, href: "https://wa.me/2290190705060", label: "WhatsApp" },
            { Icon: Mail, href: "mailto:agnawaleayantayoesdras@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow-gold"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center"
        >
          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-muted-foreground hover:text-primary transition-colors animate-float-slow"
          >
            <ArrowDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
