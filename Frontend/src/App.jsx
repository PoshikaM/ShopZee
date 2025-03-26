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
import BarcodeScanner from './Components/BarcodeScanner';

function BarcodeScannerPage() {
  const [barcode, setBarcode] = useState("");

  return (
      <div className='mt-10'>
          <h2 className='text-2xl font-bold mb-4 mt-8 text-center'>Barcode Scanner</h2>
          <BarcodeScanner onDetected={(code) => setBarcode(code)} />
          {barcode && <h3 className='text-center mt-4 text-xl font-bold'>Scanned Code: {barcode}</h3>}
      </div>
  );
}

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
            <Route path="/scanner" element={<BarcodeScannerPage />} />
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