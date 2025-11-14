import Nav from "./components/Nav";
import Menu from "./components/Menu";
import ProductList from "./components/Productlist";
import CategoriList from "./components/CategoriList";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <div className="bg-gray-600  grid grid-cols-[1fr_375px_1fr]">
      <div className="[grid-column:2] shadow-[0_0_20px_#000000b0] w-[375px] h-[100vh] bg-white rounded-3xl overflow-hidden">
        <Nav />
        <CategoriList />
        <div className="px-6 py-[70px_160px] grid grid-cols-[1fr_1fr] grid-rows-[auto_1fr_auto] gap-4 h-full overflow-y-scroll">
          <Suspense>
            <ProductListContainer searchParams={searchParams} />
          </Suspense>
        </div>
        <Menu />
      </div>
    </div>
  );
}

async function ProductListContainer({ searchParams }) {
  const { Category } = await searchParams;
  console.log(Category);

  return <ProductList Category={Category} />;
}
