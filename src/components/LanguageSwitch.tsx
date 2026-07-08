import { useI18n } from "@/lib/i18n";

const LanguageSwitch = () => {
  const { locale, setLocale } = useI18n();

  const isFrench = locale === "fr";

  return (
    <div
      role="group"
      aria-label={isFrench ? "Selection de langue" : "Language selection"}
      className="inline-flex items-center rounded-full border border-border/60 p-0.5"
    >
      <button
        onClick={() => setLocale("fr")}
        aria-pressed={isFrench}
        className={`px-2.5 py-1 text-[11px] font-mono rounded-full transition-colors ${
          isFrench  
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-white/70"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLocale("en")}
        aria-pressed={!isFrench}
        className={`px-2.5 py-1 text-[11px] font-mono rounded-full transition-colors ${
          !isFrench
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-white/70"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
