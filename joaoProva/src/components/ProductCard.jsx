const ProductCard = ( product ) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black max-h-80">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
      </div>
      <div className="px-6 py-4 flex items-center justify-between gap-10">
        <span className="text-xl font-bold text-green-500">${product.price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
