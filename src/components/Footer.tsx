import {
  Github,
  Linkedin,
  LinkedinIcon,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { locale } = useI18n();
  const rightsText =
    locale === "fr" ? "Tous droits reserves." : "All rights reserved.";
  const lastUpdatedIso = "2026-03-02";
  const lastUpdatedLabel =
    locale === "fr" ? "Derniere modification :" : "Last update:";
  const lastUpdatedDate = new Intl.DateTimeFormat(
    locale === "fr" ? "fr-FR" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    },
  ).format(new Date(`${lastUpdatedIso}T00:00:00Z`));

  return (
    <footer className="border-t border-border/70 py-8 sm:py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 text-center sm:text-left">
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground break-words">
                © {new Date().getFullYear()}{" "}
                <span className="text-gradient-gold font-semibold">
                  Esdras AGNAWALE
                </span>
                . {rightsText}
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-end gap-2 sm:gap-3">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/Sadias061",
                  label: "GitHub",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/esdras-agnawale-sadias",
                  label: "LinkedIn",
                },
                {
                  Icon: MessageCircle,
                  href: "https://wa.me/2290190705060",
                  label: "WhatsApp",
                },
                {
                  Icon: Mail,
                  href: "mailto:agnawaleayantayoesdras@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow-gold"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-border/70 flex justify-center sm:justify-start">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs gap-1.5">
              <span className="inline-flex items-center gap-1 text-primary">
                <span className="font-mono">{lastUpdatedLabel}</span>
              </span>
              <span className="text-muted-foreground">{lastUpdatedDate}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
