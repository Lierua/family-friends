import Image from "next/image";
import FavoriteStar from "../FavoriteStar";
import BackButton from "../BackButton";

const ShowCase = ({ product }) => {
  return (
    <div className="bg-[#f2968f]/50 w-auto h-[360px] grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] rounded-4xl overflow-hidden">
      <Image
        loading="eager"
        src={product.images[0]}
        width={300}
        height={200}
        className="object-cover col-span-2 row-span-2 col-start-1 row-start-1 h-full w-full"
        alt={product.title}
      />
      <div
        className=" col-span-2 row-span-2 col-start-1 row-start-1
      grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] [grid-template-areas:'back_favorite''name_empty'] p-[20px]"
      >
        <BackButton />
        <div className="ml-auto">
          <FavoriteStar size="30px" />
        </div>
        <div className="rounded-2xl bg-black/40 backdrop-blur-md flex py-2 px-[8px_16px] w-fit h-fit mt-auto col-span-2">
          <Image
            loading="eager"
            src={product.images[0]}
            width={20} // scale image smaller
            height={20}
            className="w-[32px] h-[32px] object-cover rounded-[7px]"
            alt={product.title}
          />
          <p className="text-white ml-2">{product.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
