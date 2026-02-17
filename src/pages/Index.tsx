import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import AboutMe from "@/components/AboutMe";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/data/projects";
import { useI18n } from "@/i18n/I18nContext";
import { Menu } from "lucide-react";

const Index = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  const activeProject = activeId ? projects.find((p) => p.id === activeId) : null;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        activeId={activeId}
        onSelect={setActiveId}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Mobile header */}
      <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md lg:hidden">
        <button onClick={() => setMobileOpen(true)} className="rounded-md p-1.5 text-muted-foreground hover:text-foreground">
          <Menu className="h-5 w-5" />
        </button>
        <span className="font-display text-sm font-semibold text-foreground">
          {activeProject ? activeProject.title : t("aboutMe")}
        </span>
      </div>

      {/* Main content */}
      <main className="lg:ms-72">
        <div className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
          {activeProject ? (
            <ProjectDetail key={activeProject.id} project={activeProject} />
          ) : (
            <AboutMe />
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
