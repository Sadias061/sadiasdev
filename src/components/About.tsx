import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const About = () => {
  const { locale } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const content =
    locale === "fr"
      ? {
          sectionLabel: "A propos",
          heading: "Qui suis-je",
          intro1:
            "Je suis Esdras AGNAWALE, analyste programmeur avec 1 an d'experience, passionné par la technologie et l'innovation. Diplômé en Systemes Informatiques et Logiciel à l'UATM GASA FORMATION de Calavi, je maitrise un large eventail de technologies web.",
          intro2:
            "Je suis disponible pour toute demande de création de site web ou application web. Mon objectif est de concevoir des solutions claires et utiles pour des besoins concrets.",
          cards: [
            {
              Icon: GraduationCap,
              title: "Formation",
              desc: "Diplome en Systemes Informatiques et Logiciel",
            },
            {
              Icon: MapPin,
              title: "Localisation",
              desc: "Calavi, Atlantique - Benin",
            },
            {
              Icon: Sparkles,
              title: "Passion",
              desc: "Créer des sites et applications simples, rapides et utiles au quotidien",
            },
          ],
        }
      : {
          sectionLabel: "About",
          heading: "Who am I",
          intro1:
            "I am Esdras AGNAWALE, a software analyst with 1 year of experience, passionate about technology and innovation. Graduated in Information Systems and Software at UATM GASA FORMATION in Calavi, I work with a broad range of web technologies.",
          intro2:
            "I am available for any request for the creation of a website or web application. My goal is to design clear and useful solutions for concrete needs.",
          cards: [
            {
              Icon: GraduationCap,
              title: "Education",
              desc: "Graduated in Information Systems and Software",
            },
            {
              Icon: MapPin,
              title: "Location",
              desc: "Calavi, Atlantique - Benin",
            },
            {
              Icon: Sparkles,
              title: "Passion",
              desc: "Building simple, clear, and useful websites and apps for everyday needs",
            },
          ],
        };

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            {content.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            {content.heading}
            <span className="text-gradient-gold"> ?</span>
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
              {content.intro1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {content.intro2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="space-y-4"
          >
            {content.cards.map(({ Icon, title, desc }) => (
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
