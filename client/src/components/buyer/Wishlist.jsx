import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Wishlist() {
  return (
    <>
      <Navbar />

      <main className="pt-28 min-h-screen bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            ❤️ My Wishlist
          </h1>

          <p className="text-gray-500 mt-3">
            Your saved products will appear here.
          </p>

          <div className="bg-white rounded-3xl shadow mt-10 p-20 text-center">

            <h2 className="text-3xl font-bold">
              Wishlist is Empty
            </h2>

            <p className="text-gray-500 mt-4">
              Save products to your wishlist.
            </p>

          </div>

        </div>

      </main>

    </>
  );
}