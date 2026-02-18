import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { useI18n } from "@/i18n/I18nContext";
import SafeExternalLink from "./SafeExternalLink";

const GithubRepositories = () => {
  const { t, lang } = useI18n();

  const repositories = projects
    .filter((project) => Boolean(project.github))
    .map((project) => ({
      id: project.id,
      title: project.titleI18n?.[lang] || project.titleI18n?.es || project.title,
      github: project.github as string,
    }));

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
          <Github className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">{t("githubRepositories")}</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-foreground">{t("portfolioRepositories")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("repositoriesDescription")}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {repositories.map((repo) => (
          <SafeExternalLink
            key={repo.id}
            href={repo.github}
            className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary px-4 py-3 transition-colors hover:bg-muted"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-secondary-foreground">{repo.title}</p>
              <p className="truncate text-xs text-muted-foreground">{repo.github}</p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" />
          </SafeExternalLink>
        ))}
      </div>
    </div>
  );
};

export default GithubRepositories;
