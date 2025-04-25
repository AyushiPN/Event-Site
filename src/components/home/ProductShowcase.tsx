import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { popularProducts } from '../../data/products';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Curated Event Essentials
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Browse our handpicked selection of premium products to enhance your event experience. From elegant decor to entertainment options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-soft group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity group-hover:bg-opacity-0"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
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
                <div className="flex justify-between items-center">
                  <span className="text-sm uppercase tracking-wider text-gray-500">
                    {product.category}
                  </span>
                  <Link to={`/products/${product.id}`} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    <span>View details</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products">
            <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              <span>Explore all products</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;