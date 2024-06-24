import { FaStar, FaShoppingBag } from "react-icons/fa";
const productSm = ({ name, brand, image, rating, price }) => {
  return (
    <div className="w-full md:min-w-[300px] md:w-[23%] py-3 px-4 border rounded-lg my-4 text-start relative hover:shadow-lg">
      <img src={image} className="rounded-lg" />
      <div className="py-3">
        <span className="text-[#606063] text-base">{brand}</span>
        <h5 className="pt-2 text-black">{name}</h5>
        <div className="flex gap-1">
          {[...Array(rating)].map((index) => (
            <FaStar className="text-yellow-400" key={index} />
          ))}
        </div>
        <h4 className="pt-2 text-primary text-base font-bold">${price}</h4>
      </div>
      <FaShoppingBag className="size-6 font-bold absolute bottom-8 right-5 cursor-pointer text-primary hover:shadow-md" />
    </div>
  );
};

export default productSm;
