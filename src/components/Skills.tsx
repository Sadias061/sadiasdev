import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Braces } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Skills = () => {
  const { locale } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const content = locale === "fr"
    ? {
        sectionLabel: "Competences",
        heading: "Stack",
        headingAccent: "technique",
        categories: [
          {
            title: "Langages de programmation",
            subtitle: "Fondamentaux de developpement",
            Icon: Braces,
            skills: [
              { name: "HTML & CSS", level: 90 },
              { name: "Dart", level: 70 },
              { name: "JavaScript", level: 65 },
              { name: "SQL", level: 65 },
              { name: "PHP", level: 60 },
            ],
          },
          {
            title: "Frontend & UI cross-platform",
            subtitle: "Interfaces web et applications UI modernes",
            Icon: Code2,
            skills: [
              { name: "React", level: 70 },
              { name: "Next.js", level: 70 },
              { name: "Flutter", level: 70 },
              { name: "Angular", level: 60 },
            ],
          },
          {
            title: "Backend",
            subtitle: "APIs robustes et architecture serveur",
            Icon: Server,
            skills: [
              { name: "Node.js", level: 65 },
              { name: "Symfony", level: 60 },
              { name: "Nest.js", level: 40 },
            ],
          },
          {
            title: "Outils & DB",
            subtitle: "Productivite, base de donnees et DevOps",
            Icon: Database,
            skills: [
              { name: "Git / GitHub / GitLab", level: 85 },
              { name: "MySQL", level: 80 },
              { name: "REST APIs", level: 80 },
              { name: "Postman", level: 75 },
              { name: "PostgreSQL", level: 65 },
            ],
          },
        ],
      }
    : {
        sectionLabel: "Skills",
        heading: "Technical",
        headingAccent: "stack",
        categories: [
          {
            title: "Programming Languages",
            subtitle: "Core development fundamentals",
            Icon: Braces,
            skills: [
              { name: "HTML & CSS", level: 90 },
              { name: "Dart", level: 70 },
              { name: "JavaScript", level: 65 },
              { name: "SQL", level: 65 },
              { name: "PHP", level: 60 },
            ],
          },
          {
            title: "Frontend & Cross-platform UI",
            subtitle: "Modern web interfaces and UI apps",
            Icon: Code2,
            skills: [
              { name: "React", level: 70 },
              { name: "Next.js", level: 70 },
              { name: "Flutter", level: 70 },
              { name: "Angular", level: 60 },
            ],
          },
          {
            title: "Backend",
            subtitle: "Robust APIs and server architecture",
            Icon: Server,
            skills: [
              { name: "Node.js", level: 65 },
              { name: "Symfony", level: 60 },
              { name: "Nest.js", level: 40 },
            ],
          },
          {
            title: "Tools & DB",
            subtitle: "Productivity, databases and DevOps",
            Icon: Database,
            skills: [
              { name: "Git / GitHub / GitLab", level: 85 },
              { name: "MySQL", level: 80 },
              { name: "REST APIs", level: 80 },
              { name: "Postman", level: 75 },
              { name: "PostgreSQL", level: 65 },
            ],
          },
        ],
      };

  return (
    <section id="skills" className="section-padding">
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

        <div className="grid md:grid-cols-2 gap-6">
          {content.categories.map(({ title, subtitle, Icon, skills }, catIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * catIndex }}
              className="rounded-xl bg-card border border-border p-5 sm:p-6 hover:border-gold-subtle transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-mono text-primary uppercase tracking-wider">
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="rounded-lg border border-border/80 bg-background/30 px-3 py-2.5"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-sm text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary shrink-0">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 0.7,
                          delay: 0.2 + catIndex * 0.12 + skillIndex * 0.06,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
