import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import AboutMe from "@/components/AboutMe";
import ProjectDetail from "@/components/ProjectDetail";
import LanguageSelector from "@/components/LanguageSelector";
import { projects } from "@/data/projects";
import { useI18n } from "@/i18n/I18nContext";
import { Terminal } from "lucide-react";

const Index = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { t } = useI18n();

  const activeProject = activeId ? projects.find((p) => p.id === activeId) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(13,147,242,0.2),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(13,147,242,0.12),transparent_36%)]" />

      <Sidebar activeId={activeId} onSelect={setActiveId} />

      <div className="ms-80">
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Terminal className="h-4 w-4" />
                </span>
                <span className="font-display text-sm font-bold tracking-wide">DevPortfolio</span>
              </div>
            </div>
            <LanguageSelector />
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl px-4 py-10 lg:px-8">
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {activeProject ? (
              <ProjectDetail key={activeProject.id} project={activeProject} />
            ) : (
              <AboutMe />
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
