// import React from 'react';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bottom-0 left-0 w-full bg-white text-black py-4">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
//       <div>
//             <h3 className="text-2xl font-bold mb-4">ShopZee</h3>
//             <p className="text-m">Your Ultimate Shopping Destination! 🛍️</p>
//                 </div>
//                 <div>
//                     <h4 className="text-lg font-semibold mb-4">Quick Access</h4>
//                     <ul className="space-y-2">
//                         <li><a href="/" className="hover:text-blue-500">Home</a></li>
//                         <li><a href="/AboutUs" className="hover:text-blue-500">About Us</a></li>
//                         <li><a href="/WishList" className='hover:text-blue-500'>Wish List</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
//                     <div className="flex space-x-4 mb-4 place-content-center">
//                         <a href="https://github.com/PoshikaM" rel="noopener noreferrer" className="hover:text-gray-400">
//                             <FaGithub size={26} />
//                         </a>
//                         <a href="https://www.linkedin.com/in/poshika-mangai-m" rel="noopener noreferrer" className="hover:text-blue-500">
//                             <FaLinkedin size={26} />
//                         </a>
//                     </div>
//                 </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-700 text-center">
//             <p>© 2025 ShopZee. All Rights Reserved.</p>
//         </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-white text-black py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">ShopZee</h3>
          <p className="text-m">Your Ultimate Shopping Destination! 🛍️</p>
        </div>
        
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Access</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/AboutUs" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/WishList" className='hover:text-blue-500'>Wish List</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/PoshikaM" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={26} />
            </a>
            <a href="https://www.linkedin.com/in/poshika-mangai-m" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>© 2025 ShopZee. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;