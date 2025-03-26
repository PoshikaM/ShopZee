// import React, { useContext } from 'react';
// import products from '../Data/ProductData';
// import { BagContext } from '../Context/BagContext';

// const ProductList = ({ onProductClick }) => {
//     const { addToBag, addToWishlist, wishlist } = useContext(BagContext);

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
//             {products.map(product => {

//                 const isInWishlist = wishlist.some(item => item.id === product.id);

//                 return (
//                 <div key={product.id} className="bg-white shadow rounded overflow-hidden">
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-48 object-cover cursor-pointer"
//                         onClick={() => onProductClick(product)}
//                     />
//                     <div className="p-4">
//                         <h2
//                         className="font-bold text-lg cursor-pointer"
//                         onClick={() => onProductClick(product)}
//                         >
//                         {product.name}
//                         </h2>
//                         <p className="text-gray-600">{product.brand}</p>
//                         <p className="mt-2 font-bold">₹{product.price.toFixed(2)}</p>
//                         <div className='flex justify-between'>
//                             <button
//                             onClick={() => addToBag(product)}
//                             className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-blue-600"
//                             >
//                             Add to Bag
//                             </button>
//                             <button 
//                             onClick={() => addToWishlist(product)}
//                             className='mr-2'
//                             >
//                             {isInWishlist ? '❤️' : '🤍'}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 )
//             })}
//         </div>
//     );
// };

// export default ProductList;

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BagContext } from '../Context/BagContext';

const ProductList = ({ onProductClick }) => {
    const { addToBag, addToWishlist, wishlist } = useContext(BagContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://shopzee-h2ls.onrender.com/products"); // Ensure your backend is running on port 5000
                setProducts(response.data);
            } catch (err) {
                setError("Failed to load products", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {products.map(product => {
                const isInWishlist = wishlist.some(item => item.id === product.id);

                return (
                    <div key={product.id} className="bg-white shadow rounded overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover cursor-pointer"
                            onClick={() => onProductClick(product)}
                        />
                        <div className="p-4">
                            <h2
                                className="font-bold text-lg cursor-pointer"
                                onClick={() => onProductClick(product)}
                            >
                                {product.name}
                            </h2>
                            <p className="text-gray-600">{product.brand}</p>
                            <p className="mt-2 font-bold">₹{product.price.toFixed(2)}</p>
                            <div className='flex justify-between'>
                                <button
                                    onClick={() => addToBag(product)}
                                    className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Add to Bag
                                </button>
                                <button
                                    onClick={() => addToWishlist(product)}
                                    className='mr-2'
                                >
                                    {isInWishlist ? '❤️' : '🤍'}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;