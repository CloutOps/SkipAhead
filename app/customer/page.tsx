import ProductCard from "../_components/ProductCardCustomer";
import { Product } from "../types";


export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default function Home() {
  const products: Product[] = [
    {
      id: 1,
      title: "API product from Vendor1",
      description: "API product from Vendor1",
      price: 4.2,
    },
    {
      id: 2,
      title: "API product from Vendor1",
      description: "API product from Vendor1",
      price: 9.1,
    },
    {
      id: 3,
      title: "API product from Vendor1",
      description: "API product from Vendor1",
      price: 5.5,
    }
  ];

    return (
      <main className="flex flex-col text-center items-center justify-center px-4 py-16 gap-4">
        <h1 className="text-3xl sm:text-6xl font-bold">
          <span className="bg-gradient-to-br from-blue-600 to-green-400 bg-clip-text text-transparent box-decoration-clone">
            WELCOME, 
          </span>
          <br/>Happy Shopping!
        </h1>
  
        <div className="divider"></div>
  
        <p className="text-xl">VENDOR 1:</p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </main>
    );
  }
  
