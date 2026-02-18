import { useI18n } from "@/i18n/I18nContext";
import { Github, Linkedin, Code2, MapPinned, Youtube } from "lucide-react";

const AboutMe = () => {
  const { t } = useI18n();

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
          <Code2 className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">{t("aboutIntro")}</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-foreground">{t("aboutTitle")}</h2>
      </div>

      <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
        {t("aboutDescription")}
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/jpecina/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="https://github.com/jpecinagithub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="https://es.wikiloc.com/wikiloc/user.do?id=602802"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <MapPinned className="h-4 w-4" />
          Wikiloc
        </a>
        <a
          href="https://www.youtube.com/@jonpecina/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Youtube className="h-4 w-4" />
          YouTube
        </a>
      </div>

      {/* Tech stack */}
      <div className="mt-12">
        <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {t("technologies")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "MySQL", "JWT", "Resend API", "Railway", "Tailwind CSS", "Vite", "Python", "Docker", "Git"].map((tech) => (
            <span key={tech} className="rounded-md bg-tag px-3 py-1.5 text-xs font-medium text-tag-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
