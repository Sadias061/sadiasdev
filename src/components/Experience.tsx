import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Experience = () => {
  const { locale } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const content = locale === "fr"
    ? {
        sectionLabel: "Parcours",
        heading: "Mes",
        headingAccent: "experiences",
        items: [
          {
            role: "Développeur Web",
            company: "H-KIM",
            period: "mars 2025 - Present",
            description:
              "Développement d'un système de gestion des réservations de salles de réunion et d'espaces de travail, avec intégration d'un module de paiement - Projet de soutenance. Mention: Excellente.",
            techs: ["Laravel", "HTML/CSS", "Tailwind CSS", "PHP", "JavaScript", "Git"],
          },
          {
            role: "Développeur Web",
            company: "DIHA'S",
            period: "sept. 2025 - nov. 2025",
            description:
              "Développement d'APIs RESTful avec Node.js. Développement d'un site de type blog sous Laravel, destiné à la publication et à la gestion des articles et contenus de l'entreprise. Analyse et conception d'un tableau de bord de gestion et suivi d'événements islamiques.",
            techs: ["Node.js", "Laravel", "Next.js", "Postman", "Git"],
          },
          {
            role: "Développeur mobile",
            company: "RAB-TECH",
            period: "juil. 2024 - aout 2024",
            description:
              "Initiation à Flutter et création d'une application mobile de location de voitures: Locar.",
            techs: ["Flutter", "Dart", "Git"],
          },
        ],
      }
    : {
        sectionLabel: "Journey",
        heading: "My",
        headingAccent: "experience",
        items: [
          {
            role: "Web Developer",
            company: "H-KIM",
            period: "Mar 2025 - Present",
            description:
              "Development of a meeting room and workspace reservation management system with a payment module - graduation project. Distinction: Excellent.",
            techs: ["Laravel", "HTML/CSS", "Tailwind CSS", "PHP", "JavaScript", "Git"],
          },
          {
            role: "Web Developer",
            company: "DIHA'S",
            period: "Sep 2025 - Nov 2025",
            description:
              "Built RESTful APIs with Node.js. Developed a Laravel blog platform for publishing and content management. Contributed to analysis and design of an events management and tracking dashboard.",
            techs: ["Node.js", "Laravel", "Next.js", "Postman", "Git"],
          },
          {
            role: "Mobile App Developer",
            company: "RAB-TECH",
            period: "Jul 2024 - Aug 2024",
            description:
              "Flutter onboarding and development of a car rental mobile app named Locar.",
            techs: ["Flutter", "Dart", "Git"],
          },
        ],
      };

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            {content.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {content.heading} <span className="text-gradient-gold">{content.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {content.items.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * i }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[12px] top-1 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-[15px] h-[15px] rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-[5px] h-[5px] rounded-full bg-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2" />
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    i % 2 === 1 ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div className="p-5 rounded-xl bg-card border border-border hover:border-gold-subtle transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} className="text-primary shrink-0" />
                      <span className="text-xs font-mono text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
