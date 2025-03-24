import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import ProductDetailModal from './Components/ProductDetailModal';
import Bag from './Components/Bag';
import { BagProvider } from './Context/BagContext';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isBagOpen, setIsBagOpen] = useState(false);

  return (
    <BagProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar onBagClick={() => setIsBagOpen(true)} />
        <div className="container mx-auto p-4 mt-10">
          <Routes>
            <Route path="/" element={<ProductList onProductClick={setSelectedProduct} />} />
          </Routes>
        </div>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
        <Bag isOpen={isBagOpen} onClose={() => setIsBagOpen(false)} />
      </div>
    </BagProvider>
  );
}

export default App;