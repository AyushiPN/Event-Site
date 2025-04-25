import React, { useEffect } from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';

const GalleryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Gallery | Elite Events';
  }, []);

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Event Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Browse through our showcase of past events to get inspired for your next celebration.
          </p>
        </div>

        <GalleryGrid />
      </div>
    </div>
  );
};

export default GalleryPage;