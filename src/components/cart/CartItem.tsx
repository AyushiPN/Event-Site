import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { OrderItem } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: OrderItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeItem, updateQuantity } = useCart();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };

  const handleRemove = () => {
    removeItem(product.id);
  };

  return (
    <div className="flex items-center py-6 border-b border-gray-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{product.name}</h3>
            <p className="ml-4">${product.price * quantity}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDecreaseQuantity}
              className="rounded-full p-1 text-gray-600 hover:bg-gray-100"
            >
              <Minus className="h-4 w-4" />
            </button>
            
            <span className="text-gray-700 w-6 text-center">{quantity}</span>
            
            <button
              onClick={handleIncreaseQuantity}
              className="rounded-full p-1 text-gray-600 hover:bg-gray-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="font-medium text-error-500 hover:text-error-600 flex items-center"
          >
            <Trash className="h-4 w-4 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;