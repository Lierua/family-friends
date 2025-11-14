"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryElement = ({ label }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`?Category=${label}`)}>
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200 ease ${
          label === "Alle"
            ? "bg-[#F2968F] border-[#F2968F] text-white"
            : "border-[#F2968F] text-[#F2968F] hover:bg-[#F2968F] hover:text-white"
        }`}
      >
        <Image
          loading="eager"
          src="https://placecats.com/neo/300/200"
          width={24}
          height={24}
          className="rounded-full object-cover h-[30px] w-[30px]"
          alt={label}
        />
        <p className="text-[16px] capitalize">{label}</p>
      </button>
    </div>
  );
};

export default CategoryElement;
