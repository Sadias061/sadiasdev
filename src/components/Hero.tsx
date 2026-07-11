import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AnimatedContactIcon from "@/components/icons/AnimatedContactIcon";
import AnimatedServicesIcon from "@/components/icons/AnimatedServicesIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useI18n } from "@/lib/i18n";

const Hero = () => {
  const { locale } = useI18n();
  const content =
    locale === "fr"
      ? {
          role: "Analyste Programmeur · Développeur Web",
          description:
            "Je crée des sites et applications web simples à utiliser. Mon objectif est d'analyser les besoins et de proposer des solutions claires et utiles pour des besoins concrets.",
          contactCta: "Contactez-moi",
          servicesCta: "Voir mes services",
        }
      : {
          role: "Software Analyst · Web Developer",
          description:
            "I build websites and web apps that are simple to use. My goal is to analyze the needs and deliver solutions that are clear and useful for real business needs.",
          contactCta: "Contact me",
          servicesCta: "View my services",
        };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding"
    >
      <div className="max-w-7xl mx-auto text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-4">
            {content.role}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Esdras <span className="text-gradient-gold">AGNAWALE</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-muted-foreground font-normal"></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed px-1"
        >
          {content.description}
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
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold w-full sm:w-auto"
          >
            <AnimatedContactIcon size={16} />
            {content.contactCta}
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline-primary inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold w-full sm:w-auto"
          >
            <AnimatedServicesIcon size={16} />
            {content.servicesCta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-16"
        >
          {[
            {
              Icon: GithubIcon,
              href: "https://github.com/Sadias061",
              label: "GitHub",
            },
            {
              Icon: LinkedinIcon,
              href: "https://www.linkedin.com/in/esdras-agnawale-sadias",
              label: "LinkedIn",
            },
            {
              Icon: WhatsAppIcon,
              href: "https://wa.me/2290190705060",
              label: "WhatsApp",
            },
            {
              Icon: FacebookIcon,
              href: "https://www.facebook.com/EsdrasAGN",
              label: "Facebook",
            },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300 hover:glow-gold"
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
