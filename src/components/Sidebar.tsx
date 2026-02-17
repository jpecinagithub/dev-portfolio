import { useI18n } from "@/i18n/I18nContext";
import { projects } from "@/data/projects";
import LanguageSelector from "./LanguageSelector";
import { User, FolderKanban, X } from "lucide-react";

interface SidebarProps {
  activeId: string | null;
  onSelect: (id: string | null) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const Sidebar = ({ activeId, onSelect, mobileOpen, onCloseMobile }: SidebarProps) => {
  const { t } = useI18n();

  const handleSelect = (id: string | null) => {
    onSelect(id);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden" onClick={onCloseMobile} />
      )}

      <aside
        className={`fixed inset-y-0 start-0 z-50 flex w-72 flex-col border-e border-sidebar-border bg-sidebar transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "ltr:-translate-x-full rtl:translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sidebar-border px-5 py-5">
          <div>
            <h1 className="font-display text-lg font-bold text-sidebar-accent-foreground">
              Jon Peciña
            </h1>
            <p className="text-xs text-muted-foreground">{t("aboutIntro")}</p>
          </div>
          <button onClick={onCloseMobile} className="rounded-md p-1 text-muted-foreground hover:text-foreground lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-4">
          {/* About */}
          <button
            onClick={() => handleSelect(null)}
            className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
              activeId === null
                ? "bg-sidebar-accent text-primary font-medium"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <User className="h-4 w-4 shrink-0" />
            {t("aboutMe")}
          </button>

          {/* Projects section */}
          <div className="mb-1 mt-5 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {t("projects")}
          </div>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelect(p.id)}
              className={`mb-0.5 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                activeId === p.id
                  ? "bg-sidebar-accent text-primary font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <FolderKanban className="h-4 w-4 shrink-0" />
              <span className="truncate">{p.title}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border px-3 py-3">
          <LanguageSelector />
          <p className="mt-2 px-3 text-[10px] text-muted-foreground">{t("madeWith")}</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
