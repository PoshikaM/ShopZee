import React, { useContext } from 'react';
import { BagContext } from '../Context/BagContext';
import { Link } from "react-router-dom";

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
            <div className='flex'>
                <img className='h-8 w-10' src="https://i.pinimg.com/564x/3d/8f/8c/3d8f8cf12d7fb1c337b489e64815daca.jpg" alt="" />
                <h2 className="font-bold text-xl">My Bag</h2>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                <img className='h-5 w-5' src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="" />
            </button>
        </div>
        <div className="p-4 overflow-y-auto h-full">
            {bag.length === 0 ? (
                <div>
                    <p className='text-center'>Your bag is empty.</p>
                    <Link to="/" className="flex justify-center">
                        <button className="mt-4 bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all shadow-md text-lg mb-4">
                        Start Shopping 🛒
                        </button>
                    </Link>
                </div>
            ) : (
                bag.map(item => (
                    <div key={item.id} className="flex items-center justify-between my-4 bg-gray-100 rounded">
                        <img src={item.image} alt={item.name} className="w-18 h-18 object-cover rounded ml-3" />
                    <div className='mt-4 mb-2'>
                        <h1 className="font-bold text-lg mb-2">{item.name}</h1>
                        <p>
                        ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                        <p className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 bg-red-500 rounded"
                        >
                            -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 bg-green-400 rounded"
                        >
                            +
                        </button>
                        </div>
                    </div>
                    <button onClick={() => removeFromBag(item.id)} className="text-red-500">
                        <img className='h-5 w-4 mr-3' src="https://images.icon-icons.com/1808/PNG/512/trash-can_115312.png" alt="" />
                    </button>
                    </div>
                ))
            )}
            <div className="p-4 border-t">
            <p className="font-bold">Total: ₹{totalPrice.toFixed(2)}</p>
        </div>
        </div>
        </div>
  );
};

export default Bag;