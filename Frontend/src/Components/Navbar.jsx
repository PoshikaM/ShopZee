import React, { useContext } from 'react';
import { BagContext } from '../Context/BagContext';

const Navbar = ({ onBagClick }) => {
    const { bag } = useContext(BagContext);
    const totalItems = bag.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ShopZee</h1>
        <button onClick={onBagClick} className="relative">
            <span className="text-blue-500 mr-5">My Bag</span>
            {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1 mt-1">
                {totalItems}
            </span>
            )}
        </button>
        </nav>
  );
};

export default Navbar;