import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../../data/gallery';

const GalleryGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.eventType === filter);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${filter === 'all' 
              ? 'bg-primary-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('wedding')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${filter === 'wedding' 
              ? 'bg-primary-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
        >
          Weddings
        </button>
        <button
          onClick={() => setFilter('birthday')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${filter === 'birthday' 
              ? 'bg-primary-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
        >
          Birthdays
        </button>
        <button
          onClick={() => setFilter('corporate')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${filter === 'corporate' 
              ? 'bg-primary-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
        >
          Corporate
        </button>
        <button
          onClick={() => setFilter('engagement')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${filter === 'engagement' 
              ? 'bg-primary-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
        >
          Engagements
        </button>
        <button
          onClick={() => setFilter('anniversary')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${filter === 'anniversary' 
              ? 'bg-primary-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'}`}
        >
          Anniversaries
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={image.imageUrl}
                alt={image.title || 'Gallery image'}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
              <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {image.title && (
                  <h3 className="text-white font-medium">{image.title}</h3>
                )}
                <span className="text-white/80 text-sm capitalize">{image.eventType}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No images found matching your filter.</p>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;