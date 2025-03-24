import React, { useContext } from 'react';
import products from '../Data/ProductData';
import { BagContext } from '../Context/BagContext';

const ProductList = ({ onProductClick }) => {
    const { addToBag } = useContext(BagContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
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
                <button
                onClick={() => addToBag(product)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                Add to Bag
                </button>
            </div>
            </div>
        ))}
        </div>
    );
};

export default ProductList;