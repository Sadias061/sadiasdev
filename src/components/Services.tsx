import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Layers3, Handshake, LifeBuoy } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Services = () => {
  const { locale } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const content = locale === "fr"
    ? {
        sectionLabel: "Services",
        heading: "Services",
        headingAccent: "proposes",
        subtitle: "Des solutions completes adaptees a vos besoins.",
        items: [
          {
            title: "Developpement Frontend",
            description:
              "Interfaces web modernes, rapides et responsives avec React, Next.js, Angular et Flutter Web.",
            Icon: Code2,
          },
          {
            title: "Developpement Backend",
            description:
              "Conception d'APIs securisees, logique metier solide et integration de bases de donnees.",
            Icon: Server,
          },
          {
            title: "Applications Full Stack",
            description:
              "Developpement de solutions completes, de l'interface utilisateur jusqu'au deploiement.",
            Icon: Layers3,
          },
          {
            title: "Conseil & Accompagnement",
            description:
              "Accompagnement en informatique et coaching trading: strategie, discipline et gestion du risque.",
            Icon: Handshake,
          },
          {
            title: "Maintenance & Support",
            description:
              "Suivi continu, corrections, evolutions et assistance technique pour garder vos applications stables.",
            Icon: LifeBuoy,
          },
        ],
      }
    : {
        sectionLabel: "Services",
        heading: "Services",
        headingAccent: "offered",
        subtitle: "Complete solutions tailored to your needs.",
        items: [
          {
            title: "Frontend Development",
            description:
              "Modern, fast and responsive web interfaces built with React, Next.js, Angular and Flutter Web.",
            Icon: Code2,
          },
          {
            title: "Backend Development",
            description:
              "Secure API design, strong business logic and reliable database integration.",
            Icon: Server,
          },
          {
            title: "Full Stack Applications",
            description:
              "End-to-end product development, from user interface to deployment.",
            Icon: Layers3,
          },
          {
            title: "Consulting & Coaching",
            description:
              "Guidance in IT and trading coaching: strategy, discipline and risk management.",
            Icon: Handshake,
          },
          {
            title: "Maintenance & Support",
            description:
              "Ongoing support, fixes and improvements to keep your applications stable.",
            Icon: LifeBuoy,
          },
        ],
      };

  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            {content.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {content.heading} <span className="text-gradient-gold">{content.headingAccent}</span>
          </h2>
          <p className="text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.items.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 * index }}
              className="rounded-xl border border-border bg-card p-6 hover:border-gold-subtle transition-all duration-300 h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.Icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
