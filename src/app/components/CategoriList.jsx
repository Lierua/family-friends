import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import CategoryElement from "./CategoryElement";

const CategoriList = async () => {
  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <FetchCategories />
    </Suspense>
  );
};
export default CategoriList;

const FetchCategories = async () => {
  "use server";

  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();

  console.log(categories);
  return (
    <div className="fixed w-[375px] z-20 overflow-x-scroll bg-gradient-to-b from-white to-white/60 backdrop-blur-md px-6 py-[0_1rem]">
      <div className="flex gap-3 w-max">
        {["Alle", ...categories].map((label) => (
          <CategoryElement label={label} key={`${label}`} />
        ))}
      </div>
    </div>
  );
};
