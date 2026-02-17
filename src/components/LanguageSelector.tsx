import { useI18n } from "@/i18n/I18nContext";
import { languageNames, type Language } from "@/i18n/translations";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LanguageSelector = () => {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <Globe className="h-4 w-4" />
        <span>{languageNames[lang]}</span>
      </button>
      {open && (
        <div className="absolute bottom-full mb-1 start-0 z-50 min-w-[160px] rounded-lg border border-border bg-card p-1 shadow-xl animate-fade-in">
          {(Object.keys(languageNames) as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={`block w-full rounded-md px-3 py-2 text-start text-sm transition-colors hover:bg-secondary ${
                l === lang ? "text-primary font-medium" : "text-card-foreground"
              }`}
            >
              {languageNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
