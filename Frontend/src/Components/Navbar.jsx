import React, { useContext, useState, useEffect } from 'react';
import { BagContext } from '../Context/BagContext';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbar = ({ onBagClick }) => {
    const { bag } = useContext(BagContext);
    const totalItems = bag.reduce((acc, item) => acc + item.quantity, 0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const content = document.getElementById("page-content");
        if (content) {
            content.style.paddingTop = isOpen ? "200px" : "64px"; // Adjust padding when menu opens
        }
    }, [isOpen]);

    return (
        <>
            <nav className="bg-white shadow p-4 inset-x-0 top-0 fixed z-50 flex justify-between items-center w-full">
                <Link className='flex gap-2' to="/">
                    <img className='h-10 w-10 ml-2' src="https://cdn-icons-png.freepik.com/512/3779/3779800.png" alt="" />
                    <h1 className="text-2xl font-bold mt-1">ShopZee</h1>
                </Link>
                
                <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    <FiMenu />
                </button>

                <div className={`md:flex flex-col md:flex-row absolute md:relative bg-white w-full md:w-auto left-0 top-16 md:top-0 shadow-lg md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                    <Link to="/scanner" className='flex gap-2 mr-4'>
                        <img className='h-7 w-7 mt-0.5' src="https://cdn-icons-png.flaticon.com/512/6927/6927609.png" alt="" />
                        <span className='mt-1'>Scanner</span>
                    </Link>
                    
                    <Link to="/WishList" className="relative mr-4 flex gap-1">
                        <img className='h-8 w-8' src="https://cdn3d.iconscout.com/3d/premium/thumb/heart-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--like-logo-love-valentine-romance-pack-illustrations-3345796@0.png?f=webp" alt="Wishlist" />
                        <span className='mt-1 hover:text-gray-500'>Wish List</span>
                    </Link>
                    
                    <Link to="/AboutUs" className='flex items-center'>
                        <img className='h-8 w-10' src="https://static.vecteezy.com/system/resources/previews/039/342/078/non_2x/people-icon-collection-of-symbol-on-white-background-illustration-vector.jpg" alt="" />
                        <span className='mr-6 hover:text-gray-500'>About Us</span>
                    </Link>
                    
                    <div className='flex items-center' onClick={onBagClick}>
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

            {/* Wrap page content in a div */}
            <div id="page-content" className="transition-all duration-300">
                {/* Your page content goes here */}
            </div>
        </>
    );
};

export default Navbar;