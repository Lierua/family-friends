import Image from "next/image";
import Nav from "@/app/components/Nav";
import Menu from "@/app/components/Menu";
import ShowCase from "@/app/components/detaljeSide/ShowCase";
import InfoDetalje from "@/app/components/detaljeSide/InfoDetalje";
import BigButton from "@/app/components/BigButton";
import { Suspense } from "react";

export default async function detalje({ params }) {
  const { id } = await params;
  console.log("id = " + id);
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <div className="bg-gray-600 grid grid-cols-[1fr_375px_1fr]">
        <div className="[grid-column:2] shadow-[0_0_20px_#000000b0] w-[375px] h-[100vh] bg-white rounded-3xl overflow-hidden flex flex-col">
          <Nav />
          <div className="px-6 py-[0_160px] flex-1 overflow-y-scroll min-h-0 grid gap-4">
            <ShowCase product={product} />
            <InfoDetalje product={product} />
            <BigButton text="Adopteret" />
          </div>
          <Menu />
        </div>
      </div>
    </Suspense>
  );
}
