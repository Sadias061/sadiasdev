import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-sm text-muted-foreground break-words">
          © {new Date().getFullYear()}{" "}
          <span className="text-gradient-gold font-semibold">Esdras AGNAWALE</span>
          . Tous droits réservés.
        </p>
        <div className="flex items-center justify-center gap-4">
          {[
            { Icon: Github, href: "https://github.com/Sadias061", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/esdras-agnawale-sadias", label: "LinkedIn" },
            { Icon: MessageCircle, href: "https://wa.me/2290190705060", label: "WhatsApp" },
            { Icon: Mail, href: "mailto:agnawaleayantayoesdras@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
