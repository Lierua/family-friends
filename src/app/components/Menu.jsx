import { FiHome } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

const Menu = () => {
  return (
    <div className="bg-white/30 backdrop-blur-md flex px-[4rem] py-[2rem_3rem] w-[375px] justify-between [&>*]:scale-[1.5] fixed bottom-0 rounded-b-3xl">
      <FiHome />
      <CiStar />
      <IoChatbubbleOutline />
      <IoPersonOutline />
    </div>
  );
};

export default Menu;
