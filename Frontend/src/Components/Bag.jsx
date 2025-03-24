import React, { useContext } from 'react';
import { BagContext } from '../Context/BagContext';

const Bag = ({ isOpen, onClose }) => {
    const { bag, removeFromBag, updateQuantity } = useContext(BagContext);
    const totalPrice = bag.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        >
        <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-bold text-xl">My Bag</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            X
            </button>
        </div>
        <div className="p-4 overflow-y-auto h-full">
            {bag.length === 0 ? (
            <p>Your bag is empty.</p>
            ) : (
                bag.map(item => (
                    <div key={item.id} className="flex items-center justify-between my-4">
                    <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p>
                        ${item.price.toFixed(2)} x {item.quantity} ={' '}
                        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                        </p>
                        <div className="flex items-center mt-2">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 bg-gray-200 rounded"
                        >
                            -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 bg-gray-200 rounded"
                        >
                            +
                        </button>
                        </div>
                    </div>
                    <button onClick={() => removeFromBag(item.id)} className="text-red-500">
                        Remove
                    </button>
                    </div>
                ))
            )}
            <div className="p-4 border-t">
            <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
        </div>
        </div>
        </div>
  );
};

export default Bag;