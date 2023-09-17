"use client";

import { useState } from "react";
import ProductCard from "../_components/ProductCardVendor";
import { Product } from "../types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Product 1",
      description: "This is a product",
      price: 10,
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is a product",
      price: 10,
    },
  ]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  return (
    <main className="flex flex-col text-center items-center justify-center gap-4">
      <h1 className="text-3xl sm:text-6xl font-bold">
        <span className="bg-gradient-to-br from-blue-600 to-green-400 bg-clip-text text-transparent box-decoration-clone">
          Welcome
        </span>
        , Vendor McVendorface
      </h1>

      <div className="divider"></div>

      <button
        className="btn btn-primary"
        onClick={() => {
          addProduct({
            id: 3,
            title: "Product 3",
            description: "This is a product",
            price: 10,
          });
        }}
      >
        Add Card
      </button>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {products.map((product) => {
          return <ProductCard {...product} />;
        })}
      </div>
    </main>
  );
}
