import { useI18n } from "@/i18n/I18nContext";
import { projects } from "@/data/projects";
import { User, FolderKanban, Github } from "lucide-react";
import { GITHUB_REPOSITORIES_VIEW_ID } from "@/constants/views";

interface SidebarProps {
  activeId: string | null;
  onSelect: (id: string | null) => void;
}

const Sidebar = ({ activeId, onSelect }: SidebarProps) => {
  const { t, lang } = useI18n();

  return (
    <aside className="fixed inset-y-0 start-0 z-50 flex w-80 flex-col border-e border-sidebar-border bg-sidebar shadow-2xl">
        {/* Header */}
        <div className="border-b border-sidebar-border px-5 py-5">
          <div>
            <h1 className="font-display text-lg font-bold text-sidebar-accent-foreground">
              Jon Peciña
            </h1>
            <p className="text-xs text-muted-foreground">{t("aboutIntro")}</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-4">
          {/* About */}
          <button
            onClick={() => onSelect(null)}
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
              onClick={() => onSelect(p.id)}
              className={`mb-0.5 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                activeId === p.id
                  ? "bg-sidebar-accent text-primary font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <FolderKanban className="h-4 w-4 shrink-0" />
              <span className="truncate">{p.titleI18n?.[lang] || p.titleI18n?.es || p.title}</span>
            </button>
          ))}

          <button
            onClick={() => onSelect(GITHUB_REPOSITORIES_VIEW_ID)}
            className={`mt-4 flex w-full items-center gap-3 rounded-lg border-t border-sidebar-border px-3 py-3 text-sm transition-colors ${
              activeId === GITHUB_REPOSITORIES_VIEW_ID
                ? "bg-sidebar-accent text-primary font-medium"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Github className="h-4 w-4 shrink-0" />
            <span className="truncate">{t("githubRepositories")}</span>
          </button>
        </nav>
      </aside>
  );
};

export default Sidebar;
