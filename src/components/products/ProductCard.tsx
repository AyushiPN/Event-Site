import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-soft group transition-all hover:shadow-elegant">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <span className="bg-secondary-50 text-secondary-700 px-2 py-1 rounded text-sm font-medium">
            ${product.price}
          </span>
        </div>
        <p className="text-gray-600 mb-4">
          {product.description.substring(0, 100)}...
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm uppercase tracking-wider text-gray-500">
            {product.category}
          </span>
          <div className="flex gap-2">
            <Link to={`/products/${product.id}`}>
              <Button variant="outline" size="sm">
                Details
              </Button>
            </Link>
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleAddToCart}
              className="flex items-center"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;