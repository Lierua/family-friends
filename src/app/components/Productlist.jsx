import Image from "next/image";
import Link from "next/link";
import FavoriteStar from "./FavoriteStar";
import { Suspense } from "react";

const ProductList = async ({ Category }) => {
  return (
    <Suspense>
      <FetchProduct Category={Category} />
    </Suspense>
  );
};

const FetchProduct = async ({ Category }) => {
  "use server";

  let url = "https://dummyjson.com/products";

  if (Category && Category !== "Alle") {
    url = `https://dummyjson.com/products/category/${Category}`;
  }

  const response = await fetch(url);
  const { products } = await response.json();
  console.log({ Category });
  return products.map((product) => (
    <div key={product.id} className="relative">
      <div className="absolute right-[10px] top-[10px]">
        <FavoriteStar size="20px" id={product.id} />
      </div>
      <Link href={`/detalje/${product.id}`}>
        <div className="grid grid-cols-1 grid-rows-subgrid shadow-[0_4px_10px_#17171710] rounded-2xl w-fit">
          <div className=" h-[150px] rounded-2xl overflow-hidden relative">
            <Image
              loading="eager"
              src={product.thumbnail}
              width={300}
              height={200}
              className="h-full object-cover bg-[#f2968f]/50"
              alt={product.title}
            />
          </div>
          <div className="flex justify-between px-[0.6rem] py-[0.5rem_0.6rem] [&>p]:text-gray-400 h-[110px]">
            <div className="grid [&>p]:text-gray-400 [&>p]:text-[12px]">
              <h1>
                {product.title.length > 20
                  ? product.title.slice(0, 20) + "..."
                  : product.title}
              </h1>
              <div className="[&>p]:text-gray-400 [&>p]:text-[12px] flex gap-1 mt-auto">
                <p>tag</p>
                <p>tag</p>
              </div>
              <p className="mt-auto">{product.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));
};

export default ProductList;
