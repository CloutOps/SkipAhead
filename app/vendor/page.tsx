"use client";

import { useEffect, useState } from "react";
import ProductCard from "../_components/ProductCardVendor";
import { Product } from "../types";
import { useUser } from "@clerk/nextjs";
import { set } from "zod";

// Disables caching for this page... we could get into this but we don't have time :)
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default function Home() {
  // let idTemp = 0;
  const [idTemp, setIdTemp] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [tempProductName, setProductName] = useState<string>("");
  const [tempProductDescription, setProductDescription] = useState<string>("");
  const [tempProductPrice, setProductPrice] = useState<string>("0");
  const { user } = useUser();

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
    setProductName("");
    setProductDescription("");
    setProductPrice("0");
    (document.querySelector("#productNameInput") as HTMLInputElement).value =
      "";
    (
      document.querySelector("#productDescriptionInput") as HTMLInputElement
    ).value = "";
    (document.querySelector("#productPriceInput") as HTMLInputElement).value =
      "";
    (document.querySelector("#new-product-modal") as HTMLInputElement).checked =
      false;
  };

  // Function to delete a specific product by its id
  const deleteProduct = (productId: number) => {
    // Use filter to create a new array without the product to be deleted
    setProducts([]); // Update the state with the modified array
    setIdTemp(0);
  };

  const fetchProducts = async () => {
    // Replace this with
    // const res = await fetch("/api/products");
    // const products = await res.json();
    const mockApiReturn = [
      {
        id: 1,
        title: "Product from API",
        description: "Product from API",
        price: 4.2,
      },
    ];

    setProducts(mockApiReturn);
  };

  // Initial fetch from DB
  useEffect(() => {
    // This runs only once on initial load
    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col text-center items-center justify-center px-4 py-16 gap-4">
      <input type="checkbox" id="new-product-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex-col flex text-center justify-center items-center">
          <label
            htmlFor="new-product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">Create a new Product!</h3>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              id="productNameInput"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(event) => {
                setProductName(event.target.value);
              }}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <input
              id="productDescriptionInput"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(event) => {
                setProductDescription(event.target.value);
              }}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              id="productPriceInput"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(event) => {
                setProductPrice(event.target.value);
              }}
            />
          </div>

          <div className="modal-action">
            <label
              htmlFor="new-room-modal"
              className="btn btn-primary"
              onClick={() =>
                void addProduct({
                  id: idTemp,
                  description: tempProductDescription,
                  price: Number(tempProductPrice),
                  title: tempProductName,
                })
              }
            >
              Submit
            </label>
          </div>
        </div>
      </div>

      <h1 className="text-3xl sm:text-6xl font-bold">
        <span className="bg-gradient-to-br from-blue-600 to-green-400 bg-clip-text text-transparent box-decoration-clone">
          Welcome
        </span>
        , {user?.fullName ? user?.fullName : user?.username}... if that is your
        real name... 🤔
      </h1>

      <div className="divider"></div>

      <label htmlFor="new-product-modal" className="btn btn-primary">
        New Room
      </label>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <button className="btn btn-primary" onClick={() => {}}>
          Summit All Products
        </button>
      </div>
    </main>
  );
}
