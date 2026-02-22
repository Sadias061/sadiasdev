import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            À propos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Qui suis-je<span className="text-gradient-gold"> ?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              Je suis{" "}
              <span className="text-foreground font-medium">
                Esdras AGNAWALE
              </span>
              , analyste programmeur Full-Stack & Mobile avec 1 an d'expérience,
              passionné par la technologie et l'innovation. Diplômé en Systèmes
              Informatiques et Logiciel, je maîtrise un large éventail de
              technologies web et mobiles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Basé à Calavi (Womey), je suis disponible pour des projets
              freelances et des contrats de travail. Mon objectif est de
              concevoir des solutions robustes, élégantes et performantes qui
              répondent aux besoins réels des utilisateurs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="space-y-4"
          >
            {[
              {
                Icon: GraduationCap,
                title: "Formation",
                desc: "Diplômé en Systèmes Informatiques et Logiciel",
              },
              {
                Icon: MapPin,
                title: "Localisation",
                desc: "Calavi, Womey – Bénin",
              },
              {
                Icon: Sparkles,
                title: "Passion",
                desc: "Créer des expériences web modernes et performantes",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-gold-subtle transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
