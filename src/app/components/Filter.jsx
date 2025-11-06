import Image from "next/image";

const Filter = () => {
  return (
    <div className="px-6">
      <button className="flex h-fit gap-2 px-[10px_20px] py-3 rounded-[100px] bg-[#F2968F]">
        <Image
          loading="eager"
          src="https://placecats.com/neo/300/200"
          width={24}
          height={40}
          className="rounded-[50%]"
        />
        <p className="text-[16px] text-white">Alle</p>
      </button>
    </div>
  );
};

export default Filter;
