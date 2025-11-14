const InfoDetalje = ({ product }) => {
  return (
    <div className="flex flex-col [&>:not(h1)]:mb-1">
      <h1 className="text-3xl font-[600] mb-3">{product.title}</h1>
      <div className="flex gap-2 w-max text-white ">
        {product.tags.map((label) => (
          <p
            key={label}
            className="bg-[#f2968f] px-3 py-1 rounded-4xl capitalize"
          >
            {label}
          </p>
        ))}
      </div>
      <p>{product.description}</p>
      <p className="text-gray-400">Opdateret</p>
    </div>
  );
};

export default InfoDetalje;
