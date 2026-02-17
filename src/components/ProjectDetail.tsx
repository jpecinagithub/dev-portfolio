import { useState, useCallback } from "react";
import { useI18n } from "@/i18n/I18nContext";
import type { Project } from "@/data/projects";
import Lightbox from "./Lightbox";
import { Github, ExternalLink } from "lucide-react";

const ProjectDetail = ({ project }: { project: Project }) => {
  const { t, lang } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const localizedTitle = project.titleI18n?.[lang] || project.titleI18n?.es || project.title;
  const description = project.description[lang] || project.description.es || project.description.en;
  const highlights = project.highlights?.[lang] || project.highlights?.es || project.highlights?.en;
  const screenshotDescriptions = project.screenshotDescriptions?.[lang] || project.screenshotDescriptions?.es || project.screenshotDescriptions?.en || [];
  const visibleScreenshots = project.screenshots.slice(0, 3);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + visibleScreenshots.length) % visibleScreenshots.length : null));
  }, [visibleScreenshots.length]);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % visibleScreenshots.length : null));
  }, [visibleScreenshots.length]);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground">{localizedTitle}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-xl bg-secondary px-3 py-1.5 text-xs font-semibold text-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-2">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground">
              <Github className="h-4 w-4" /> {t("viewOnGithub")}
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-border/60 bg-secondary/60 px-4 py-2 text-sm font-semibold text-muted-foreground">
              <Github className="h-4 w-4" /> {t("viewOnGithub")}
            </span>
          )}
          {project.vercel ? (
            <a href={project.vercel} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground">
              <ExternalLink className="h-4 w-4" /> {t("viewOnVercel")}
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-border/60 bg-secondary/60 px-4 py-2 text-sm font-semibold text-muted-foreground">
              <ExternalLink className="h-4 w-4" /> {t("viewOnVercel")}
            </span>
          )}
        </div>
      </div>

      {/* Screenshots */}
      {visibleScreenshots.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t("screenshots")}
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {visibleScreenshots.map((src, i) => (
              <div key={i}>
                <button
                  onClick={() => openLightbox(i)}
                  className="group w-full overflow-hidden rounded-lg border border-border"
                >
                  <img
                    src={src}
                    alt={screenshotDescriptions[i] || `${localizedTitle} screenshot ${i + 1}`}
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
                {screenshotDescriptions[i] && (
                  <p className="mt-1.5 text-xs text-muted-foreground">{screenshotDescriptions[i]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <p className="mb-8 text-base leading-relaxed text-muted-foreground">{description}</p>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t("highlights")}
          </h3>
          <ul className="space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={visibleScreenshots}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
