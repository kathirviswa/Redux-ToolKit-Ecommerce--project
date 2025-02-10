import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { RootState } from './store/store';

function App() {
  const [showCart, setShowCart] = useState(false);
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCartClick={() => setShowCart(true)} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showCart ? (
          <div>
            <button 
              onClick={() => setShowCart(false)}
              className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              ← Back to Products
            </button>
            <Cart />
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;