import { IoIosNotificationsOutline } from "react-icons/io";

const Nav = () => {
  return (
    <div className="flex w-auto px-6 py-4 bg-white justify-between sticky">
      <h1 className="font-[600]">FamilyFriends</h1>
      <IoIosNotificationsOutline className="w-6 h-6" />
    </div>
  );
};

export default Nav;
