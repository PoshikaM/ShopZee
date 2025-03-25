import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductDetailModal from './Components/ProductDetailModal';
import Bag from './Components/Bag';
import { BagProvider } from './Context/BagContext';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import Wishlist from './Components/WishList';
import Footer from './Components/Footer';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isBagOpen, setIsBagOpen] = useState(false);

  return (
    <BagProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar onBagClick={() => setIsBagOpen(true)} />
        <div className="container mx-auto p-4 mt-10">
          <Routes>
            <Route path="/" element={<Home onProductClick={setSelectedProduct} />} />
            <Route path="/AboutUs" element={<AboutUs/>}></Route>
            <Route path="WishList" element={<Wishlist/>}></Route>
          </Routes>
        </div>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
        <Bag isOpen={isBagOpen} onClose={() => setIsBagOpen(false)} />
          <Footer/>
      </div>
    </BagProvider>
  );
}

export default App;