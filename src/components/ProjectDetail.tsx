import { useState, useCallback } from "react";
import { useI18n } from "@/i18n/I18nContext";
import type { Project } from "@/data/projects";
import Lightbox from "./Lightbox";
import { Github, ExternalLink, Server } from "lucide-react";

const typeColors: Record<string, string> = {
  frontend: "bg-blue-500/15 text-blue-400",
  backend: "bg-amber-500/15 text-amber-400",
  fullstack: "bg-emerald-500/15 text-emerald-400",
};

const ProjectDetail = ({ project }: { project: Project }) => {
  const { t, lang } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const description = project.description[lang] || project.description.en;
  const highlights = project.highlights?.[lang] || project.highlights?.en;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + project.screenshots.length) % project.screenshots.length : null));
  }, [project.screenshots.length]);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % project.screenshots.length : null));
  }, [project.screenshots.length]);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-display text-3xl font-bold text-foreground">{project.title}</h2>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${typeColors[project.type]}`}>
            {t(project.type)}
          </span>
        </div>
      </div>

      {/* Main screenshot */}
      {project.screenshots.length > 0 && (
        <button onClick={() => openLightbox(0)} className="group mb-8 block w-full overflow-hidden rounded-xl border border-border">
          <img
            src={project.screenshots[0]}
            alt={project.title}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </button>
      )}

      {/* Description */}
      <p className="mb-8 text-base leading-relaxed text-muted-foreground">{description}</p>

      {/* Links */}
      <div className="mb-8 flex flex-wrap gap-3">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground">
            <Github className="h-4 w-4" /> {t("viewOnGithub")}
          </a>
        )}
        {project.vercel && (
          <a href={project.vercel} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground">
            <ExternalLink className="h-4 w-4" /> {t("viewOnVercel")}
          </a>
        )}
        {project.railway && (
          <a href={project.railway} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground">
            <Server className="h-4 w-4" /> {t("viewOnRailway")}
          </a>
        )}
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {t("technologies")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-md bg-tag px-3 py-1.5 text-xs font-medium text-tag-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>

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

      {/* Gallery */}
      {project.screenshots.length > 1 && (
        <div>
          <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t("screenshots")}
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.screenshots.map((src, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="group overflow-hidden rounded-lg border border-border"
              >
                <img src={src} alt="" className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.screenshots}
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
