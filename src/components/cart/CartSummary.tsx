import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';

const CartSummary: React.FC = () => {
  const { items, getTotalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="bg-white rounded-lg shadow-soft overflow-hidden">
      <div className="p-6">
        <h2 className="font-serif text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between font-semibold text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gray-50 border-t border-gray-200">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 mb-4">Your cart is empty</p>
        ) : (
          isAuthenticated ? (
            <Link to="/checkout">
              <Button variant="primary" fullWidth>
                Proceed to Checkout
              </Button>
            </Link>
          ) : (
            <div className="space-y-4">
              <Link to="/login">
                <Button variant="primary" fullWidth>
                  Login to Checkout
                </Button>
              </Link>
              <p className="text-sm text-gray-500 text-center">
                You need to be logged in to complete your purchase
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CartSummary;