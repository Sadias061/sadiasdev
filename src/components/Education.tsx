import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, GraduationCap, School } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Education = () => {
  const { locale } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const content = locale === "fr"
    ? {
        sectionLabel: "Formation",
        heading: "Mon",
        headingAccent: "parcours academique",
        items: [
          {
            type: "degree",
            level: "Diplome",
            title: "Systemes Informatiques et Logiciel",
            institution: "Formation superieure",
            period: "2022 - 2025",
            description:
              "Parcours axe sur le developpement web/mobile, l'ingenierie logicielle, les APIs et les bases de donnees.",
            highlights: [
              "Genie logiciel",
              "Bases de donnees",
              "Developpement web",
              "Developpement mobile",
            ],
          },
          {
            type: "project",
            level: "Soutenance",
            title: "Systeme de reservation d'espaces de travail",
            institution: "Projet academique",
            period: "2025",
            description:
              "Conception et developpement d'une application de gestion des reservations avec module de paiement. Mention: Excellent.",
            highlights: [
              "Laravel",
              "MySQL",
              "Architecture applicative",
              "Gestion de projet",
            ],
          },
        ],
      }
    : {
        sectionLabel: "Education",
        heading: "My",
        headingAccent: "academic journey",
        items: [
          {
            type: "degree",
            level: "Degree",
            title: "Information Systems and Software",
            institution: "Higher education",
            period: "2022 - 2025",
            description:
              "Program focused on web/mobile development, software engineering, APIs and databases.",
            highlights: [
              "Software engineering",
              "Databases",
              "Web development",
              "Mobile development",
            ],
          },
          {
            type: "project",
            level: "Thesis Project",
            title: "Workspace Reservation System",
            institution: "Academic project",
            period: "2025",
            description:
              "Design and development of a reservation management application with payment module. Distinction: Excellent.",
            highlights: [
              "Laravel",
              "MySQL",
              "Application architecture",
              "Project management",
            ],
          },
        ],
      };

  return (
    <section id="education" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            {content.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            {content.heading} <span className="text-gradient-gold">{content.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {content.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * index }}
              className="relative pl-8"
            >
              {index !== content.items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[7px] top-6 bottom-[-22px] w-px bg-border"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-primary/40 bg-background"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </span>

              <div className="rounded-xl border border-border bg-card/90 p-5 sm:p-6 hover:border-gold-subtle transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      {item.type === "degree" ? (
                        <GraduationCap size={18} className="text-primary" />
                      ) : (
                        <School size={18} className="text-primary" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">
                        {item.level}
                      </p>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary shrink-0">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

          {/* Certification */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Certifications
              </h3>
              <p className="text-xs text-muted-foreground">
                Parcours en cours de preparation
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingCertifications.map((cert, index) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.42 + index * 0.08 }}
                className="rounded-xl border border-border bg-card p-4 sm:p-5 hover:border-gold-subtle transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Award size={16} className="text-primary" />
                  </div>
                  <span className="inline-flex text-[10px] font-mono px-2 py-1 rounded border border-primary/30 bg-primary/10 text-primary uppercase tracking-wide">
                    A venir
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground">{cert.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.focus}</p>
              </motion.article>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Education;
