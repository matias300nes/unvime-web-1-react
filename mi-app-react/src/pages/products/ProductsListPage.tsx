import { useMemo, useState } from "react";
import { Link } from "react-router";
import { products } from "../../data/mockDashboard";
import { useMainAreaHeader } from "../../layouts/MainAreaHeaderContext";
import {useProductos} from "../../service/useProductos";

function ProductThumb({ label }: { label?: string }) {
  return (
    <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-lg bg-[#c9c9c9] text-sm font-bold text-[#4b2d14] max-[640px]:h-16 max-[640px]:w-16">
      {label ? (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#f2c94c] via-[#d87938] to-[#5f3028] text-white">
          <span>{label}</span>
        </div>
      ) : null}
    </div>
  );
}

export default function ProductsListPage() {
  const [query, setQuery] = useState("");

  const dataProductos = useProductos();

  const headerConfig = useMemo(
    () => ({
      title: "Productos",
      actions: (
        <div className="flex items-center gap-6 max-[720px]:hidden">
          <label className="relative block w-[420px] max-w-full">
            <span className="sr-only">Buscar productos</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar productos"
              className="h-12 w-full rounded-full border border-white/55 bg-transparent px-6 pr-14 text-lg text-white outline-none placeholder:text-white/45 focus:border-white"
            />
            <span className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white/55 after:absolute after:-bottom-1.5 after:-right-1.5 after:h-3 after:w-0.5 after:-rotate-45 after:bg-white/55" />
          </label>

          <Link
            to="/products/new"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#566163] px-8 text-lg text-white transition-colors hover:bg-[#667173]"
          >
            Agregar Producto
          </Link>
        </div>
      ),
    }),
    [query],
  );
  useMainAreaHeader(headerConfig);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return products;
    }

    return products.filter((product) =>
      [product.name, product.sku, product.category].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [query]);

  return (
    <section className="mx-auto flex w-full max-w-[1500px] flex-col gap-8">
      <div className="hidden flex-col gap-3 max-[720px]:flex">
        <label className="relative block w-full">
          <span className="sr-only">Buscar productos</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar productos"
            className="h-12 w-full rounded-full border border-white/55 bg-transparent px-6 pr-14 text-lg text-white outline-none placeholder:text-white/45 focus:border-white"
          />
          <span className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-white/55 after:absolute after:-bottom-1.5 after:-right-1.5 after:h-3 after:w-0.5 after:-rotate-45 after:bg-white/55" />
        </label>

        <Link
          to="/products/new"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#566163] px-8 text-lg text-white transition-colors hover:bg-[#667173]"
        >
          Agregar Producto
        </Link>
      </div>

      <div>{dataProductos.status}</div>

      <button onClick={dataProductos.refetch} className="bg-neutral-400 rounded-4xl">Recargar</button>

      <div className="flex flex-col gap-4">
        {dataProductos.data.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="flex min-h-32 items-center gap-4 rounded-[22px] bg-[#2c2c2c] p-3 pr-8 text-white shadow-[0_10px_12px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#333] max-[640px]:min-h-24 max-[640px]:pr-4"
          >
            <ProductThumb />

            <div className="min-w-0 flex-1 text-left">
              <h2 className="truncate text-2xl font-normal leading-tight max-[640px]:text-lg">
                {product.name}
              </h2>
              <p className="mt-1 text-lg text-white/90 max-[640px]:text-sm">{product.id}</p>
            </div>

            <span className="text-5xl leading-none text-white max-[640px]:text-3xl" aria-hidden>
              &rsaquo;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
