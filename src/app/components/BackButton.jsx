import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link href={"/"}>
      <div className="relative" style={{ width: 30, height: 30 }}>
        <div>
          <span
            className="absolute rounded-full bg-white/40"
            style={{
              width: 30,
              height: 30,
              top: 1,
              left: 0,
              zIndex: 0,
            }}
          ></span>
          <IoIosArrowUp
            className="[grid-area:back] rotate-[-90deg]"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default BackButton;
