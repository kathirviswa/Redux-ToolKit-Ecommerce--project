import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { RootState } from '../store/store';

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const { totalQuantity } = useSelector((state: RootState) => state.cart);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">LuxeCart</h1>
          </div>
          <div className="flex items-center">
            <div className="relative cursor-pointer" onClick={onCartClick}>
              <ShoppingCart className="h-6 w-6 hover:text-purple-200 transition-colors" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;