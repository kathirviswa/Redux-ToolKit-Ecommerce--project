import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Plus } from 'lucide-react';
import { addToCart } from '../store/cartSlice';
import type { Product } from '../store/cartSlice';
import type { RootState } from '../store/store';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const quantity = cartItems.find(item => item.id === product.id)?.quantity || 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          {quantity > 0 && (
            <span className="inline-flex items-center justify-center bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
              {quantity} in cart
            </span>
          )}
        </div>
        <p className="text-purple-600 font-bold mt-2">${product.price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-3 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;