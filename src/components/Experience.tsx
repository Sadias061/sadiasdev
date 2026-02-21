import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Développeur Full-Stack",
    company: "Projet Freelance",
    period: "2024 — Présent",
    description:
      "Conception et développement d'applications web modernes avec React, Next.js et Laravel. Gestion de projets de bout en bout.",
    techs: ["React", "Next.js", "Laravel", "MySQL"],
  },
  {
    role: "Développeur Backend",
    company: "Stage / Projet académique",
    period: "2023 — 2024",
    description:
      "Développement d'APIs RESTful avec Nest.js et Symfony. Mise en place de bases de données relationnelles et optimisation des performances.",
    techs: ["Nest.js", "Symfony", "PHP", "Postman"],
  },
  {
    role: "Développeur Web Junior",
    company: "Projets personnels",
    period: "2022 — 2023",
    description:
      "Apprentissage et application des frameworks modernes. Développement de sites web responsives et d'applications SPA.",
    techs: ["Angular", "PHP", "Git", "HTML/CSS"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            Parcours
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Mes <span className="text-gradient-gold">expériences</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
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
                      <Briefcase
                        size={14}
                        className="text-primary shrink-0"
                      />
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
