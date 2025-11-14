import Image from "next/image";
import Link from "next/link";
import FavoriteStar from "./FavoriteStar";

const Card = () => {
  return (
    <Link href="/detalje">
      <div className="grid grid-cols-1 shadow-[0_4px_10px_#17171710] rounded-2xl w-fit">
        <div className=" h-[150px] rounded-2xl overflow-hidden relative">
          <div className="absolute right-[10px] top-[10px]">
            <FavoriteStar size="20px" />
          </div>
          <Image
            loading="eager"
            src="https://placecats.com/neo/300/200"
            width={300}
            height={200}
            className="h-full object-cover"
          />
        </div>
        <div className="flex justify-between px-[0.6rem] py-[0.5rem_0.6rem] [&>p]:text-gray-400">
          <div className="flex flex-col [&>p]:text-gray-400 [&>p]:text-[12px]">
            <h1>Name</h1>
            <div className="[&>p]:text-gray-400 [&>p]:text-[12px] flex gap-1">
              <p>tag</p>
              <p>tag</p>
            </div>
            <p>tag</p>
          </div>
          <p className="text-[12px]">Age</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
