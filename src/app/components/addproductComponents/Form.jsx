const Form = ({ state, postProduct }) => {
  return (
    <div className="p-8">
      {state.succes && (
        <p className="text-green-400 font-semibold mb-2">Succes</p>
      )}
      <form
        action={postProduct}
        className="flex flex-col gap-1 [&>input]:mb-4 "
      >
        {state.error?.productname && (
          <p className="text-red-400 font-semibold">
            {state.error.productname}
          </p>
        )}
        <input
          className="border-2 p-2 rounded-[10px] bg-gray-200/30 shadow-[0_4px_5px_#e7e7e7]"
          type="text"
          name="productname"
          placeholder="Product Name"
          defaultValue={state.productName}
        />
        {state.error?.productprice && (
          <p className="text-red-400 font-semibold">
            {state.error.productprice}
          </p>
        )}
        <input
          className="border-2 p-2 rounded-[10px] bg-gray-200/30 shadow-[0_4px_5px_#e7e7e7]"
          type="text"
          name="productprice"
          placeholder="Product Price"
          defaultValue={state.productPrice}
        />
        <button
          className="border-2 p-2 rounded-[10px] w-fit px-5 mx-auto hover:bg-black hover:text-white
        transition-all duration-200 ease"
          type="submit"
        >
          Add product
        </button>
      </form>
    </div>
  );
};

export default Form;
