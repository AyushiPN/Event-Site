import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { eventCategories } from '../../data/events';

const EventCategories: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Curated Events for Every Occasion
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We specialize in crafting personalized experiences across a spectrum of celebrations, each uniquely tailored to reflect your style and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventCategories.slice(0, 3).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/events/${category.id}`} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-soft transition-transform group-hover:shadow-elegant group-hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 transition-opacity group-hover:bg-opacity-0"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description.substring(0, 120)}...
                    </p>
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                      <span>Discover more</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/events">
            <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              <span>View all event categories</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventCategories;