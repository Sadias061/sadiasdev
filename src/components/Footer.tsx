import { MessageCircle } from "lucide-react";
import FacebookIcon from "@/components/icons/FacebookIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { locale } = useI18n();
  const rightsText =
    locale === "fr" ? "Tous droits reserves." : "All rights reserved.";
  const lastUpdatedIso = "2026-03-02";
  const lastUpdatedDate = new Intl.DateTimeFormat(
    locale === "fr" ? "fr-FR" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    },
  ).format(new Date(`${lastUpdatedIso}T00:00:00Z`));
  const lastUpdatedText =
    locale === "fr"
      ? `Mis à jour le ${lastUpdatedDate}`
      : `Last updated ${lastUpdatedDate}`;

  return (
    <footer className="border-t border-border/70 py-8 sm:py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 text-center sm:text-left">
            <div className="min-w-0 space-y-1">
              <p className="text-sm text-muted-foreground break-words">
                © {new Date().getFullYear()}{" "}
                <span className="text-gradient-gold font-semibold">
                  Esdras AGNAWALE
                </span>
                . {rightsText}
              </p>
              <p className="text-xs text-muted-foreground/70">
                <time dateTime={lastUpdatedIso}>{lastUpdatedText}</time>
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-end gap-2 sm:gap-3">
              {[
                {
                  Icon: GithubIcon,
                  href: "https://github.com/Sadias061",
                  label: "GitHub",
                },
                {
                  Icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/esdras-agnawale-sadias",
                  label: "LinkedIn",
                },
                {
                  Icon: MessageCircle,
                  href: "https://wa.me/2290190705060",
                  label: "WhatsApp",
                },
                {
                  Icon: FacebookIcon,
                  href: "https://www.facebook.com/EsdrasAGN",
                  label: "Facebook",
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
