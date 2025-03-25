import React, { useContext } from 'react';
import { BagContext } from '../Context/BagContext';

const ProductDetailModal = ({ product, onClose }) => {
    const { addToBag, addToWishlist } = useContext(BagContext);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded shadow-lg max-w-lg w-full">
            <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                <img className='h-5 w-5' src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="" />
            </button>
            </div>
            <div className="p-4">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded"
            />
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="mt-4 font-bold">₹{product.price.toFixed(2)}</p>
            <div className="mt-4">
                <h3 className="font-semibold">Reviews</h3>
                {product.reviews && product.reviews.length > 0 ? (
                <ul className="mt-2">
                    {product.reviews.map((review, index) => (
                    <li key={index} className="border-b py-2">
                        ⭐ {review}
                    </li>
                    ))}
                </ul>
                ) : (
                <p className="text-gray-500">No reviews available.</p>
                )}
            </div>
            <div className='flex justify-between'>
            <button
                onClick={() => {
                addToBag(product);
                onClose();
                }}
                className="mt-4 ml-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add to Bag
            </button>
            <button 
                onClick={() => addToWishlist(product)}
                className='mr-5'
                >
                🤍
            </button>
            </div>
            </div>
        </div>
        </div>
  );
};

export default ProductDetailModal;