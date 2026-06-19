import { useMemo } from "react";
import { Link } from "react-router";
import { AppIcon } from "../../layouts/DashboardLayout";
import { useMainAreaHeader } from "../../layouts/MainAreaHeaderContext";
import { currentUser, dashboardSummary } from "../../data/mockDashboard";

function SummaryCard({
  icon,
  count,
  label,
  listTo,
  createTo,
}: {
  icon: "box" | "store";
  count: number;
  label: string;
  listTo: string;
  createTo: string;
}) {
  return (
    <article className="flex min-h-28 items-center gap-5 rounded-[22px] bg-[#2c2c2c] px-8 py-5 shadow-[0_10px_12px_rgba(0,0,0,0.18)] max-[720px]:flex-col max-[720px]:items-start">
      <div className="flex flex-1 items-center gap-5">
        <AppIcon name={icon} className="h-12 w-12 shrink-0 text-white" />
        <h2 className="text-3xl font-normal text-white max-[640px]:text-2xl">
          <span className="font-bold">{count}</span> {label}
        </h2>
      </div>

      <div className="flex items-center gap-3 max-[720px]:w-full max-[520px]:flex-col">
        <Link
          to={listTo}
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#566163] px-7 text-lg text-white transition-colors hover:bg-[#667173] max-[720px]:flex-1"
        >
          Ver Listado
        </Link>
        <Link
          to={createTo}
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#566163] px-7 text-lg text-white transition-colors hover:bg-[#667173] max-[720px]:flex-1"
        >
          Agregar {label.slice(0, -1)}
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  const headerConfig = useMemo(() => ({ title: `Hola ${currentUser.name}!` }), []);
  useMainAreaHeader(headerConfig);

  return (
    <section className="mx-auto flex w-full max-w-[1500px] flex-col">
      <div className="flex flex-col gap-6">
        <SummaryCard
          icon="box"
          count={dashboardSummary.productsCount}
          label="Productos"
          listTo="/products"
          createTo="/products/new"
        />
        <SummaryCard
          icon="store"
          count={dashboardSummary.storesCount}
          label="Tiendas"
          listTo="/stores"
          createTo="/stores/new"
        />
      </div>
    </section>
  );
}
