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
    try {
      new URL(href);
    } catch {
      event.preventDefault();
      navigate(`/link-error?target=${encodeURIComponent(href)}&reason=invalid`);
    }
  };

  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noopener noreferrer" className={className} title={title}>
      {children}
    </a>
  );
};

export default SafeExternalLink;
