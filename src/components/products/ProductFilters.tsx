import React from 'react';

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedEventType: string;
  setSelectedEventType: (eventType: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedEventType,
  setSelectedEventType,
}) => {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'decoration', label: 'Decoration' },
    { value: 'catering', label: 'Catering' },
    { value: 'photography', label: 'Photography' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'venue', label: 'Venue' },
  ];

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'anniversary', label: 'Anniversary' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-soft p-6 mb-6">
      <h2 className="font-serif text-xl font-semibold text-gray-900 mb-4">Filters</h2>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.value} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.value}
                checked={selectedCategory === category.value}
                onChange={() => setSelectedCategory(category.value)}
                className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
              />
              <span className="ml-2 text-gray-600">{category.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Event Type</h3>
        <div className="space-y-2">
          {eventTypes.map((eventType) => (
            <label key={eventType.value} className="flex items-center">
              <input
                type="radio"
                name="eventType"
                value={eventType.value}
                checked={selectedEventType === eventType.value}
                onChange={() => setSelectedEventType(eventType.value)}
                className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
              />
              <span className="ml-2 text-gray-600">{eventType.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;