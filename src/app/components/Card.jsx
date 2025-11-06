import Image from "next/image";
import { CiStar } from "react-icons/ci";

const Card = () => {
  return (
    <div className="grid grid-cols-1">
      <div
        className="w-[160px] h-[114px] rounded-2xl overflow-hidden relative
                  after:content-[''] after:absolute after:rounded-full
                after:bg-white/40 after:z-9 after:scale-150 after:w-4 after:h-4
                after:right-[10px] after:top-[10px]"
      >
        <CiStar className="absolute right-[10px] top-[10px] z-10 scale-[1.5] text-white" />
        <Image
          loading="eager"
          src="https://placecats.com/neo/300/200"
          width={300}
          height={200}
          className="h-full object-cover"
        />
      </div>
      <div className="flex justify-between px-2 py-[0.5rem_1.5rem] [&>p]:text-gray-500">
        <div className="flex flex-col [&>p]:text-gray-500 [&>p]:text-[12px]">
          <h1>Name</h1>
          <div className="[&>p]:text-gray-500 [&>p]:text-[12px] flex gap-1">
            <p>tag</p>
            <p>tag</p>
          </div>
          <p>tag</p>
        </div>
        <p className="text-[12px]">Young</p>
      </div>
    </div>
  );
};

export default Card;
