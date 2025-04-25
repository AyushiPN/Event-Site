import React from 'react';
import { motion } from 'framer-motion';
import { featuredEvents } from '../../data/events';
import { Calendar, Users, MapPin } from 'lucide-react';

const FeaturedEvents: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Our Featured Events
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Browse through our portfolio of exceptional events that showcase our creativity, attention to detail, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-primary-500" />
                    <span>Recent</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-primary-500" />
                    <span>250+ Guests</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-primary-500" />
                    <span>Hyderabad</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;