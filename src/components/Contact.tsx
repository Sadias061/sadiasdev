import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const CONTACT_EMAIL = "agnawaleayantayoesdras@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau message portfolio - ${formData.name}`,
          _captcha: "false",
          _template: "table",
          _honey: formData.website,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };

      const isSuccess =
        response.ok && (result.success === true || result.success === "true");

      if (!isSuccess) {
        throw new Error(result.message || "Erreur lors de l'envoi.");
      }

      toast.success("Message envoyé avec succès.");
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch {
      toast.error("Impossible d'envoyer le message. Réessaie plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travaillons <span className="text-gradient-gold">ensemble</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Vous avez un projet en tête ou une opportunité ? N'hésitez pas à me
            contacter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-stretch">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-4 md:space-y-5 md:h-full"
          >
            {[
              { Icon: Mail, label: "Email", value: CONTACT_EMAIL },
              { Icon: Phone, label: "Téléphone", value: "+229 01 90 70 50 60" },
              { Icon: MessageCircle, label: "WhatsApp", value: "+229 01 90 70 50 60" },
              { Icon: MapPin, label: "Localisation", value: "Calavi, Womey – Bénin" },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 sm:gap-4 p-4 rounded-lg bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm text-foreground font-medium leading-snug break-words">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 flex flex-col gap-4 md:h-full"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Votre email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="hidden"
                aria-hidden="true"
              />
            </div>
            <div className="flex-1 min-h-[180px]">
              <textarea
                placeholder="Votre message..."
                rows={5}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="h-full w-full px-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:glow-gold-strong transition-all duration-300 w-full disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
