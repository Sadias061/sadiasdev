import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plateforme e-commerce complète avec panier, paiement et gestion des commandes. Interface moderne et responsive.",
    techs: ["Next.js", "Stripe", "Tailwind", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif pour la visualisation de données en temps réel avec graphiques dynamiques.",
    techs: ["React", "TypeScript", "Recharts", "REST API"],
    github: "#",
    live: "#",
  },
  {
    title: "API REST Manager",
    description:
      "Application backend robuste avec authentification JWT, gestion des rôles et documentation Swagger.",
    techs: ["Nest.js", "JWT", "Swagger", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Créatif",
    description:
      "Site portfolio moderne avec animations fluides, design responsive et optimisation SEO.",
    techs: ["React", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Système de Gestion",
    description:
      "Application de gestion interne avec CRUD complet, filtrage avancé et exportation de données.",
    techs: ["Laravel", "Vue.js", "MySQL", "Docker"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Mes <span className="text-gradient-gold">projets</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-5 rounded-xl bg-card border border-border hover:border-gold-subtle transition-all duration-300 hover:glow-gold flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder size={28} className="text-primary" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    aria-label="GitHub"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    aria-label="Live"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                    {tech !== project.techs[project.techs.length - 1] && (
                      <span className="ml-1.5 text-border">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
