import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Angular", level: 75 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Nest.js", level: 80 },
      { name: "Laravel", level: 85 },
      { name: "Symfony", level: 75 },
      { name: "PHP", level: 85 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", level: 80 },
      { name: "Dart", level: 80 },
    ],
  },
  {
    title: "Outils & DB",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Git", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 70 },
      { name: "REST APIs", level: 90 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            Compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Stack <span className="text-gradient-gold">technique</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * catIndex }}
              className="p-6 rounded-xl bg-card border border-border hover:border-gold-subtle transition-all duration-300 group"
            >
              <h3 className="text-sm font-mono text-primary mb-6 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 0.8,
                          delay: 0.3 + i * 0.1 + catIndex * 0.15,
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
