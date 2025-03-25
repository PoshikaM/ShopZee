import { useContext, useState } from "react";
import { BagContext } from "../Context/BagContext";
import ProductDetailModal from "./ProductDetailModal";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(BagContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 mt-8 text-center">Wish List</h2>
      {wishlist.length === 0 ? (
        <div>
            <p className="text-center">Your Wish List is empty.</p>
            <Link to="/" className="flex justify-center">
                <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all shadow-md text-lg">
                Start Shopping 🛒
                </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white shadow rounded overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              />
              <div className="p-4">
                <h2
                  className="font-bold text-lg cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {product.name}
                </h2>
                <p className="text-gray-600">{product.brand}</p>
                <p className="mt-2 font-bold">₹{product.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  <Heart className="w-6 h-6 text-gray-100 hover:text-red-700" fill="red" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default Wishlist;