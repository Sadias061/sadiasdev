import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import LoadingDots from "@/components/ui/LoadingDots";
import { toast } from "@/components/ui/sonner-toast";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "agnawaleayantayoesdras@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const CONTACT_TOAST_ID = "contact-form";

type ContactField = "name" | "email" | "message";

const Contact = () => {
  const { locale } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldError, setFieldError] = useState<ContactField | null>(null);

  const fieldClassName = (field: ContactField, extra?: string) =>
    cn(
      "w-full px-4 py-3 rounded-lg bg-card border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors",
      fieldError === field
        ? "border-primary ring-1 ring-primary/30 focus:border-primary focus:ring-primary/30"
        : "border-border focus:border-primary",
      extra,
    );

  const showFieldError = (field: ContactField, message: string) => {
    setFieldError(field);
    toast.error(message, { id: CONTACT_TOAST_ID });
  };

  const content = locale === "fr"
    ? {
        sectionLabel: "Contact",
        heading: "Travaillons",
        headingAccent: "ensemble",
        intro:
          "Avez-vous un projet en tête ou une opportunité ? N'hésitez pas à me faire part.",
        form: {
          namePlaceholder: "Votre nom",
          emailPlaceholder: "Votre email",
          messagePlaceholder: "Votre message...",
          sendingLabel: "Envoi en cours",
          submitLabel: "Envoyer",
        },
        notices: {
          success: "Message envoyé avec succès.",
          error: "Impossible d'envoyer le message. Réessayer plus tard.",
          submitError: "Erreur lors de l'envoi.",
          subjectPrefix: "Nouveau message",
          nameRequired: "Veuillez renseigner votre nom.",
          emailRequired: "Veuillez renseigner votre email.",
          emailInvalid: "Veuillez saisir une adresse email valide.",
          messageRequired: "Veuillez renseigner votre message.",
        },
        infos: [
          { Icon: Mail, label: "Email", value: CONTACT_EMAIL, wrapAnywhere: true },
          { Icon: Phone, label: "Téléphone", value: "+229 01 90 70 50 60", wrapAnywhere: false },
          { Icon: WhatsAppIcon, label: "WhatsApp", value: "+229 01 90 70 50 60", wrapAnywhere: false },
          { Icon: MapPin, label: "Localisation", value: "Calavi, Womey - Benin", wrapAnywhere: false },
        ],
      }
    : {
        sectionLabel: "Contact",
        heading: "Let's",
        headingAccent: "work together",
        intro:
          "Do you have a project in mind or an opportunity? Feel free to send me a message.",
        form: {
          namePlaceholder: "Your name",
          emailPlaceholder: "Your email",
          messagePlaceholder: "Your message...",
          sendingLabel: "Sending",
          submitLabel: "Send",
        },
        notices: {
          success: "Message sent successfully.",
          error: "Unable to send the message. Please try again later.",
          submitError: "Error while sending message.",
          subjectPrefix: "New portfolio message",
          nameRequired: "Please enter your name.",
          emailRequired: "Please enter your email.",
          emailInvalid: "Please enter a valid email address.",
          messageRequired: "Please enter your message.",
        },
        infos: [
          { Icon: Mail, label: "Email", value: CONTACT_EMAIL, wrapAnywhere: true },
          { Icon: Phone, label: "Phone", value: "+229 01 90 70 50 60", wrapAnywhere: false },
          { Icon: WhatsAppIcon, label: "WhatsApp", value: "+229 01 90 70 50 60", wrapAnywhere: false },
          { Icon: MapPin, label: "Localisation", value: "Calavi, Womey - Benin", wrapAnywhere: false },
        ],
      };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      showFieldError("name", content.notices.nameRequired);
      return;
    }

    if (!email) {
      showFieldError("email", content.notices.emailRequired);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFieldError("email", content.notices.emailInvalid);
      return;
    }

    if (!message) {
      showFieldError("message", content.notices.messageRequired);
      return;
    }

    setFieldError(null);

    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `${content.notices.subjectPrefix} - ${name}`,
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
        throw new Error(result.message || content.notices.submitError);
      }

      toast.success(content.notices.success, { id: CONTACT_TOAST_ID });
      setFieldError(null);
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch {
      toast.error(content.notices.error, { id: CONTACT_TOAST_ID });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            {content.sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.heading} <span className="text-gradient-gold">{content.headingAccent}</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            {content.intro}
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
            {content.infos.map(({ Icon, label, value, wrapAnywhere }) => (
              <div
                key={label}
                className="w-full flex items-start gap-3 sm:gap-4 p-4 rounded-lg bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p
                    className={`text-sm text-foreground font-medium leading-snug max-w-full ${
                      wrapAnywhere ? "[overflow-wrap:anywhere]" : "break-words"
                    }`}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 flex flex-col gap-4 md:h-full"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={content.form.namePlaceholder}
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (fieldError === "name") setFieldError(null);
                }}
                className={fieldClassName("name")}
              />
              <input
                type="email"
                placeholder={content.form.emailPlaceholder}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (fieldError === "email") setFieldError(null);
                }}
                className={fieldClassName("email")}
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
                placeholder={content.form.messagePlaceholder}
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (fieldError === "message") setFieldError(null);
                }}
                className={fieldClassName("message", "h-full resize-none")}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold w-full min-h-[46px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <span>{content.form.sendingLabel}</span>
                  <LoadingDots />
                </span>
              ) : (
                <>
                  <Send size={16} />
                  {content.form.submitLabel}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
