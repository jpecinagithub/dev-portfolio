import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const getReasonMessage = (reason: string | null) => {
  if (reason === "blocked") {
    return "Tu navegador ha bloqueado la apertura de la nueva pestaña.";
  }

  if (reason === "invalid") {
    return "El enlace no tiene un formato valido.";
  }

  return "El enlace externo no ha podido abrirse correctamente.";
};

const LinkError = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const target = params.get("target");
  const reason = params.get("reason");

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-10 text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(13,147,242,0.25),transparent_42%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.22),transparent_36%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.15),transparent_40%)]" />
      <div className="w-full max-w-2xl rounded-3xl border border-border/80 bg-card/90 p-8 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-4 py-1.5 text-sm font-semibold text-destructive">
          <AlertTriangle className="h-4 w-4" />
          Enlace no disponible
        </div>

        <h1 className="font-display text-3xl font-bold sm:text-4xl">Ups, no hemos podido abrir ese enlace</h1>
        <p className="mt-4 text-base text-muted-foreground">{getReasonMessage(reason)}</p>

        {target && (
          <div className="mt-5 rounded-xl border border-border bg-secondary/70 p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">URL</p>
            <p className="mt-1 break-all text-sm text-secondary-foreground">{target}</p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portfolio
          </Link>
          {target && (
            <a
              href={target}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <RefreshCw className="h-4 w-4" />
              Reintentar enlace
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkError;
