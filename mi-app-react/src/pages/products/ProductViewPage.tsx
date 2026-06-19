import { useMemo } from "react";
import { Link, useParams } from "react-router";
import { products } from "../../data/mockDashboard";
import { useMainAreaHeader } from "../../layouts/MainAreaHeaderContext";

export default function ProductViewPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === id);
  const headerConfig = useMemo(
    () => ({
      title: product?.name ?? "Producto no encontrado",
      eyebrow: product?.sku,
      actions: (
        <Link
          to="/products"
          className="inline-flex h-11 items-center rounded-full bg-[#566163] px-6 text-white hover:bg-[#667173]"
        >
          Volver
        </Link>
      ),
    }),
    [product],
  );
  useMainAreaHeader(headerConfig);

  if (!product) {
    return (
      <section className="mx-auto flex w-full max-w-[900px] flex-col gap-5">
        <p className="text-lg text-white/70">No hay un producto mock con el ID {id}.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto flex w-full max-w-[980px] flex-col gap-8">
      <div className="grid gap-5 min-[760px]:grid-cols-[280px_1fr]">
        <div className="grid aspect-square place-items-center rounded-[22px] bg-[#c9c9c9] text-4xl font-bold text-[#4b2d14]">
          {product.imageLabel ?? product.name.charAt(0)}
        </div>

        <div className="rounded-[22px] bg-[#2c2c2c] p-6 shadow-[0_10px_12px_rgba(0,0,0,0.25)]">
          <dl className="grid gap-5 text-lg min-[620px]:grid-cols-2">
            <div>
              <dt className="text-white/50">Categoria</dt>
              <dd className="mt-1 text-white">{product.category}</dd>
            </div>
            <div>
              <dt className="text-white/50">Precio</dt>
              <dd className="mt-1 text-white">{product.price}</dd>
            </div>
            <div>
              <dt className="text-white/50">Stock</dt>
              <dd className="mt-1 text-white">{product.stock} unidades</dd>
            </div>
            <div>
              <dt className="text-white/50">Estado</dt>
              <dd className="mt-1 text-white">{product.status}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
