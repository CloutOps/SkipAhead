"use client";

import { use, useState } from "react";
import ProductCard from "../_components/ProductCardVendor";
import { Product } from "../types";
import { useUser } from "@clerk/nextjs";

let idTemp = 1;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [tempProductName, setProductName] = useState<string>();
  const [tempProductDescription, setProductDescription] = useState<string>("");
  const [tempProductPrice, setProductPrice] = useState<string>("0");

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  return (
    <main className="flex flex-col text-center items-center justify-center px-4 py-16 gap-4">
      <h1 className="text-3xl sm:text-6xl font-bold">
        <span className="bg-gradient-to-br from-blue-600 to-green-400 bg-clip-text text-transparent box-decoration-clone">
          Welcome
        </span>
        , {user?.fullName ? user?.fullName : user?.username}
      </h1>

      <div className="divider"></div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <input
          type="text"
          name="title"
          placeholder="Product Name"
          onChange={(productName) => {
            setProductName(productName.target.value);
          }}
        ></input>
        <input
          type="text"
          name="description"
          placeholder="Product Description"
          onChange={(productDescription) => {
            setProductDescription(productDescription.target.value);
          }}
        />
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          onChange={(productPrice) => {
            setProductPrice(productPrice.target.value);
          }}
        ></input>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          addProduct({
            id: idTemp,
            title: idTemp + "). " + tempProductName,
            description: tempProductDescription,
            price: Number(tempProductPrice),
          });
          idTemp += 1;
        }}
      >
        Add Card
      </button>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </main>
  );
}
