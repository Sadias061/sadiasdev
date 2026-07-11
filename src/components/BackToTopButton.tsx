import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const BackToTopButton = () => {
  const { locale } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleScrollTop}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          aria-label={locale === "fr" ? "Retour en haut" : "Back to top"}
          className="fixed bottom-5 right-4 sm:right-6 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/35 bg-glass-strong text-primary shadow-[0_10px_24px_hsl(var(--gold-glow)/0.1)] backdrop-blur-xl transition-colors duration-200 hover:border-primary/20"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
