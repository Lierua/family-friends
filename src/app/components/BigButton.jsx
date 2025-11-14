const BigButton = ({ text }) => {
  return (
    <div
      className="border-[#f2968f] border-[3px] bg-white transition-all duration-300 ease text-[#f2968f]
    w-full hover:bg-[#f2968f] rounded-[100px] p-5 text-center font-[600] hover:text-white mt-2"
    >
      {text}
    </div>
  );
};

export default BigButton;
