import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col text-center items-center justify-center px-4 py-16 gap-4">
      <h1 className="text-3xl sm:text-6xl font-bold">
        <span className="bg-gradient-to-br from-blue-600 to-green-400 bg-clip-text text-transparent box-decoration-clone">
          Skip
        </span>
        Ahead
      </h1>

      <h2 className="text-xl">SOMETHING HERE</h2>

      <div className="divider"></div>

      <p className="text-xl">Enter:</p>

      <div className="flex flex-row flex-wrap gap-4">
        <Link className="btn btn-outline btn-primary" href={"/vendor"}>
          Vendor (Sign In)
        </Link>
        <Link className="btn btn-outline btn-secondary" href={"/customer"}>
          Customer (Public)
        </Link>
      </div>
    </main>
  );
}
