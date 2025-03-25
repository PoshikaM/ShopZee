import React, { useContext } from 'react';
import { BagContext } from '../Context/BagContext';
import { Link } from 'react-router-dom';

const Navbar = ({ onBagClick }) => {
    const { bag } = useContext(BagContext);
    const totalItems = bag.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="bg-white shadow p-4 inset-x-0 top-0 fixed z-50 flex justify-between items-center">
            <Link className='flex gap-2' to="/">
                <img className='h-10 w-10 ml-2' src="https://cdn-icons-png.freepik.com/512/3779/3779800.png" alt="" />
                <h1 className="text-2xl font-bold mt-1">ShopZee</h1>
            </Link>

            <div className='flex'>

                {/* WishList Link */}
                <Link to="/WishList" className="relative mr-4 flex gap-1">
                    <img className='h-8 w-8' src="https://cdn3d.iconscout.com/3d/premium/thumb/heart-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--like-logo-love-valentine-romance-pack-illustrations-3345796@0.png?f=webp" alt="Wishlist" />
                    <span className='mt-1 hover:text-gray-500'>Wish List</span>
                </Link>

                {/* About Us Link */}
                <Link to="/AboutUs">
                    <div className='flex'>
                        <img className='h-8 w-10' src="https://static.vecteezy.com/system/resources/previews/039/342/078/non_2x/people-icon-collection-of-symbol-on-white-background-illustration-vector.jpg" alt="" />
                        <button>
                            <span className='mr-6 hover:text-gray-500'>About Us</span>
                        </button>
                    </div>
                </Link>

                {/* Bag Icon */}
                <div className='flex' onClick={onBagClick}>
                <img className='h-8 w-10' src="https://i.pinimg.com/564x/3d/8f/8c/3d8f8cf12d7fb1c337b489e64815daca.jpg" alt="" />
                <button className="relative">
                    <span className="mr-7 hover:text-gray-500">My Bag</span>
                    {totalItems > 0 && (
                    <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full text-xs px-1 mt-2 mr-2">
                        {totalItems}
                    </span>
                    )}
                </button>
                </div>
            </div>
        </nav>
  );
};

export default Navbar;