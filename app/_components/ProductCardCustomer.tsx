import { Product } from "../types";

const ProductCard = ({ title, description, price }: Product) => {
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
