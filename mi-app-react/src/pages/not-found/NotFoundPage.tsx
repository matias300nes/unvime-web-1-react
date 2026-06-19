import { useMemo } from "react";
import { Link } from "react-router";
import { useMainAreaHeader } from "../../layouts/MainAreaHeaderContext";

export default function NotFoundPage() {
  const headerConfig = useMemo(() => ({ title: "Pagina no encontrada", eyebrow: "Error 404" }), []);
  useMainAreaHeader(headerConfig);

  return (
    <section className="mx-auto flex min-h-[60svh] w-full max-w-[760px] flex-col items-start justify-center gap-5 text-left">
      <p className="text-lg text-white/70">
        La ruta no existe o todavia no fue implementada en el dashboard.
      </p>
      <Link
        to="/"
        className="inline-flex h-12 items-center rounded-full bg-[#566163] px-7 text-white transition-colors hover:bg-[#667173]"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
