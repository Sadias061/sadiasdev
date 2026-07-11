import { useTheme } from "next-themes";
import { X } from "lucide-react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      visibleToasts={1}
      closeButton
      icons={{
        close: <X className="h-4 w-4" aria-hidden="true" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-foreground group-[.toaster]:text-background group-[.toaster]:border-background/15 group-[.toaster]:shadow-none",
          description: "group-[.toast]:text-background/75",
          actionButton:
            "group-[.toast]:bg-background group-[.toast]:text-foreground",
          cancelButton:
            "group-[.toast]:bg-background/15 group-[.toast]:text-background",
          closeButton:
            "group-[.toast]:text-background/70 group-[.toast]:hover:text-background !bg-transparent !border-0 hover:!bg-transparent",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
