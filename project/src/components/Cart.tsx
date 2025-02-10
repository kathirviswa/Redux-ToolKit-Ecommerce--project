import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { RootState } from '../store/store';
import { addToCart, removeFromCart, deleteFromCart } from '../store/cartSlice';

const Cart: React.FC = () => {
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-purple-600">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Minus className="h-4 w-4 text-gray-600" />
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <button
                onClick={() => dispatch(deleteFromCart(item.id))}
                className="p-1 hover:bg-red-100 rounded text-red-500 transition-colors"
                title="Remove from cart"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total:</span>
          <span className="text-purple-600">${totalAmount.toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;