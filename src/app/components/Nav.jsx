import { IoIosNotificationsOutline } from "react-icons/io";

const Nav = () => {
  return (
    <div className="z-20 flex w-auto px-6 py-4 bg-white/60 backdrop-blur-md justify-between sticky">
      <h1 className="font-[600] text-2xl">FamilyFriends</h1>
      <IoIosNotificationsOutline className="w-10 h-10" />
    </div>
  );
};

export default Nav;
