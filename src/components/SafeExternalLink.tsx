import type { ReactNode, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type SafeExternalLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  title?: string;
};

const SafeExternalLink = ({ href, className, children, title }: SafeExternalLinkProps) => {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    try {
      const url = new URL(href);
      const openedWindow = window.open(url.toString(), "_blank", "noopener,noreferrer");

      if (!openedWindow) {
        navigate(`/link-error?target=${encodeURIComponent(url.toString())}&reason=blocked`);
      }
    } catch {
      navigate(`/link-error?target=${encodeURIComponent(href)}&reason=invalid`);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} title={title}>
      {children}
    </a>
  );
};

export default SafeExternalLink;
