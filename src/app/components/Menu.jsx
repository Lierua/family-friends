import { FiHome } from "react-icons/fi";
import { GoStar } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const Menu = () => {
  return (
    <div className="z-20 bg-white/60 backdrop-blur-md flex px-[4rem] py-[1.5rem_2rem] w-[375px] justify-between [&>*]:scale-[1.5] fixed bottom-0 rounded-b-3xl">
      <FiHome />
      <GoStar />
      <IoChatbubbleOutline />
      <IoPersonOutline />
    </div>
  );
};

export default Menu;
