import { Product } from "../types";
import {useState} from "react";

const ProductCard = ({ title, description, price }: Product) => {
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const subtractQuantity = () => {
    if (quantity >0) {
      setQuantity(quantity - 1);
    }
  };

  const deleteQuantity = () => {
    setQuantity(0);
  }

  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="flex justify-end p-2 items-center">
        <button className="btn bg-green-500 text-white p-3 m-3 rounded-full" onClick={addQuantity}>+</button>
        <span className="text-2xl">{quantity}</span>
        <button className="btn bg-red-500 text-white p-3 m-3 rounded-full" onClick={subtractQuantity}>-</button>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button className="btn text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center" 
          onClick={deleteQuantity}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
