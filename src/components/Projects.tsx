import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title:
      "Plateforme de réservation de salles de réunion ou d'espaces de travail ",
    description:
      "Système de gestion des réservations de salles de réunion et d’espaces de travail, avec intégration d’un module de paiement.",
    techs: ["Laravel", "Figma", "Bootstrap", "FedaPay"],
    github: "#",
    live: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif pour la visualisation de données en temps réel avec graphiques dynamiques.",
    techs: ["Node.js", "Next.js", "Postman", "PostgreSQL", "REST API"],
    github: "#",
    live: "#",
  },
  {
    title: "Sadias Stock",
    description:
      "Application de gestion de stock moderne simple et efficace, permettant une gestion facile des produits et des stocks. ",
    techs: ["Next.js", "Prisma", "Tailwind CSS", "Vercel"],
    github: "#",
    live: "#",
  },
  {
    title: "Système de Gestion",
    description:
      "Tableau de bord interactif pour une application de gestion de suivi d'une formation au sein d'une institution ou d'une entreprise, avec des visualisations de données en temps réel et des fonctionnalités de collaboration. ",
    techs: ["Angular", "Figma", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
   {
    title: "E-commerce SylaceShop",
    description:
      "Site de commerce électronique avec une interface utilisateur moderne et une expérience d'achat fluide. ",
    techs: ["HTML & CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/Sadias061/sylace-commerce.git",
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
