import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';

const CartPage: React.FC = () => {
  const { items, clearCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Your Cart | Elite Events';
  }, []);

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/products" className="flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="font-serif text-3xl font-semibold text-gray-900 ml-auto">Your Cart</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {items.length > 0 ? (
              <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="font-serif text-xl font-semibold text-gray-900">
                      Items ({items.length})
                    </h2>
                    <button
                      onClick={clearCart}
                      className="text-error-500 hover:text-error-600 text-sm font-medium"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-soft p-8 text-center">
                <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
                  Your cart is empty
                </h2>
                <p className="text-gray-600 mb-6">
                  Looks like you haven't added any products to your cart yet.
                </p>
                <Link to="/products">
                  <Button variant="primary">
                    Browse Products
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <div className="lg:w-1/3">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;