import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Folder, Github, ImageIcon, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type ProjectItem = {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  live?: string;
  image: string;
};

const Projects = () => {
  const { locale } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activePreview, setActivePreview] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!activePreview) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePreview(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePreview]);

  const content =
    locale === "fr"
      ? {
          sectionLabel: "Portfolio",
          heading: "Mes",
          headingAccent: "projets",
          previewActionLabel: "Voir l'image",
          previewTitleLabel: "Apercu du projet",
          closePreviewLabel: "Fermer l'apercu",
          liveLabel: "Live",
          projects: [
            {
              title:
                "Plateforme de reservation de salles et d'espaces de travail",
              description:
                "Systeme de gestion des reservations de salles de reunion et d'espaces de travail, avec integration d'un module de paiement.",
              techs: ["Laravel", "Figma", "Bootstrap", "FedaPay"],
              image: "/projects/reservation.png",
            },
            {
              title: "Dashboard Analytics",
              description:
                "Tableau de bord interactif pour la visualisation de donnees en temps reel avec graphiques dynamiques.",
              techs: [
                "Node.js",
                "Next.js",
                "Postman",
                "PostgreSQL",
                "REST API",
              ],
              image: "/projects/islam-pilier.png",
            },
            {
              title: "Sadias Stock",
              description:
                "Application de gestion de stock moderne, simple et efficace, permettant une gestion facile des produits et des stocks.",
              techs: ["Next.js", "Prisma", "Tailwind CSS", "Vercel"],
              image: "/projects/sadias-stock.png",
            },
            {
              title: "Systeme de Gestion",
              description:
                "Dashboard de suivi de formation pour institution ou entreprise, avec visualisations en temps reel et fonctionnalites de collaboration.",
              techs: ["Angular", "Figma", "Tailwind CSS"],
              image: "/projects/bynuss.png",
            },
              {
                title: "E-commerce SylaceShop",
              description:
                "Site e-commerce avec interface utilisateur moderne et experience d'achat fluide.",
              techs: ["HTML & CSS", "Bootstrap", "JavaScript"],
              github: "https://github.com/Sadias061/sylace-commerce.git",
              image: "/projects/sylaceshop-ecommerce.svg",
            },
          ],
        }
      : {
          sectionLabel: "Portfolio",
          heading: "My",
          headingAccent: "projects",
          previewActionLabel: "View image",
          previewTitleLabel: "Project preview",
          closePreviewLabel: "Close preview",
          liveLabel: "Live",
          projects: [
            {
              title: "Meeting Room and Workspace Booking Platform",
              description:
                "Reservation management system for meeting rooms and workspaces, with integrated payment module.",
              techs: ["Laravel", "Figma", "Bootstrap", "FedaPay"],
              image: "/projects/reservation.png",
            },
            {
              title: "Analytics Dashboard",
              description:
                "Interactive dashboard for real-time data visualization with dynamic charts.",
              techs: [
                "Node.js",
                "Next.js",
                "Postman",
                "PostgreSQL",
                "REST API",
              ],
              image: "/projects/islam-pilier.png",
            },
            {
              title: "Sadias Stock",
              description:
                "Modern stock management application focused on simple and efficient product and inventory handling.",
              techs: ["Next.js", "Prisma", "Tailwind CSS", "Vercel"],
              image: "/projects/sadias-stock.png",
            },
            {
              title: "Management System",
              description:
                "Training tracking dashboard for institutions or companies, with real-time data views and collaboration features.",
              techs: ["Angular", "Figma", "Tailwind CSS"],
              image: "/projects/bynuss.png",
            },
            {
              title: "SylaceShop E-commerce",
              description:
                "E-commerce website with a modern user interface and a smooth shopping experience.",
              techs: ["HTML & CSS", "Bootstrap", "JavaScript"],
              github: "https://github.com/Sadias061/sylace-commerce.git",
              image: "/projects/sylaceshop-ecommerce.svg",
            },
          ],
        };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            {content.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {content.heading}{" "}
            <span className="text-gradient-gold">{content.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.projects.map((project, i) => (
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
                    <button
                      type="button"
                      onClick={() => setActivePreview(project)}
                      aria-label={`${content.previewActionLabel} - ${project.title}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ImageIcon size={16} />
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={content.liveLabel}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
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

        <AnimatePresence>
          {activePreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActivePreview(null)}
              className="fixed inset-0 z-[80] bg-background/85 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-4xl rounded-2xl border border-border bg-card/95 p-3 sm:p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-primary uppercase tracking-wider">
                      {content.previewTitleLabel}
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground mt-1">
                      {activePreview.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActivePreview(null)}
                    aria-label={content.closePreviewLabel}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="rounded-xl overflow-hidden border border-border bg-background">
                  <img
                    src={activePreview.image}
                    alt={`${content.previewActionLabel} ${activePreview.title}`}
                    className="w-full max-h-[70vh] object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
