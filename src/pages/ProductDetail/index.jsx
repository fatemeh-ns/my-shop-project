import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) return <p className="text-center mt-10">No product data!</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-[400px] h-[400px] object-contain mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
      <p className="text-gray-700 mb-4">${item.price}</p>
      <p className="text-gray-600 mb-8">{item.description}</p>
    </div>
  );
};

export default ProductDetail;
