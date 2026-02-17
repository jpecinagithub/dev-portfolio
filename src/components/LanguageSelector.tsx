import { useI18n } from "@/i18n/I18nContext";
import { languageNames, languageFlags, type Language } from "@/i18n/translations";
import { ChevronDown, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface LanguageSelectorProps {
  dropUp?: boolean;
}

const LanguageSelector = ({ dropUp = false }: LanguageSelectorProps) => {
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
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[13px] leading-none">
          {languageFlags[lang]}
        </span>
        <span>{languageNames[lang]}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className={`absolute start-0 z-50 min-w-[160px] rounded-lg border border-border bg-card p-1 shadow-xl animate-fade-in ${dropUp ? "bottom-full mb-1" : "top-full mt-1"}`}>
          {(Object.keys(languageNames) as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-start text-sm transition-colors hover:bg-secondary ${
                l === lang ? "text-primary font-medium" : "text-card-foreground"
              }`}
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[13px] leading-none">
                {languageFlags[l]}
              </span>
              {languageNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
