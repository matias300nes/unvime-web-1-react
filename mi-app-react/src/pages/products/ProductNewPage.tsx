import { useMemo } from "react";
import { useMainAreaHeader } from "../../layouts/MainAreaHeaderContext";

export default function ProductNewPage() {
  const headerConfig = useMemo(() => ({ title: "Agregar Producto" }), []);
  useMainAreaHeader(headerConfig);

  return (
    <section className="mx-auto flex w-full max-w-[920px] flex-col gap-8">
      <form className="grid gap-5 rounded-[22px] bg-[#2c2c2c] p-6 shadow-[0_10px_12px_rgba(0,0,0,0.25)]">
        <label className="grid gap-2 text-left text-white/70">
          Nombre
          <input
            type="text"
            placeholder="Nombre del producto"
            className="h-12 rounded-xl border border-white/10 bg-[#222] px-4 text-white outline-none placeholder:text-white/35 focus:border-white/50"
          />
        </label>

        <div className="grid gap-5 min-[720px]:grid-cols-2">
          <label className="grid gap-2 text-left text-white/70">
            SKU
            <input
              type="text"
              placeholder="#000"
              className="h-12 rounded-xl border border-white/10 bg-[#222] px-4 text-white outline-none placeholder:text-white/35 focus:border-white/50"
            />
          </label>
          <label className="grid gap-2 text-left text-white/70">
            Categoria
            <input
              type="text"
              placeholder="Categoria"
              className="h-12 rounded-xl border border-white/10 bg-[#222] px-4 text-white outline-none placeholder:text-white/35 focus:border-white/50"
            />
          </label>
        </div>

        <div className="grid gap-5 min-[720px]:grid-cols-2">
          <label className="grid gap-2 text-left text-white/70">
            Precio
            <input
              type="text"
              placeholder="$0"
              className="h-12 rounded-xl border border-white/10 bg-[#222] px-4 text-white outline-none placeholder:text-white/35 focus:border-white/50"
            />
          </label>
          <label className="grid gap-2 text-left text-white/70">
            Stock
            <input
              type="number"
              min="0"
              placeholder="0"
              className="h-12 rounded-xl border border-white/10 bg-[#222] px-4 text-white outline-none placeholder:text-white/35 focus:border-white/50"
            />
          </label>
        </div>

        <button
          type="button"
          className="mt-2 h-12 w-fit rounded-full bg-[#566163] px-8 text-white transition-colors hover:bg-[#667173] max-[640px]:w-full"
        >
          Guardar producto
        </button>
      </form>
    </section>
  );
}
