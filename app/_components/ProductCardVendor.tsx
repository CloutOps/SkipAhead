// import { Product } from "../types";

// const ProductCard = ({ title, description, price }: Product) => {
import React from "react";
import { Product } from "../types";

const ProductCard = ({ product, deleteProduct }: { product: Product, deleteProduct: (id: number) => void }) => {
  const { id, title, description, price } = product;

  const handleDeleteClick = () => {
    deleteProduct(id);
  };

  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <button className="btn bg-red-500 text-white p-3 m-3 rounded-full" onClick={handleDeleteClick}>Delete Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
