import { Product } from '../types';

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Floral Centerpieces",
    description: "Exquisite floral arrangements featuring seasonal flowers, perfect for table centerpieces at any event.",
    imageUrl: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 150,
    category: "decoration",
    eventType: ["birthday", "wedding", "corporate", "engagement", "anniversary"]
  },
  {
    id: "2",
    name: "Gourmet Catering Package",
    description: "Customizable multi-course meal service with premium ingredients and professional staff.",
    imageUrl: "https://images.pexels.com/photos/5409694/pexels-photo-5409694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 85,
    category: "catering",
    eventType: ["birthday", "wedding", "corporate", "engagement", "anniversary"]
  },
  {
    id: "3",
    name: "Professional Photography Package",
    description: "Complete photography coverage with two photographers, edited digital images, and a custom photo album.",
    imageUrl: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 2500,
    category: "photography",
    eventType: ["birthday", "wedding", "corporate", "engagement", "anniversary"]
  },
  {
    id: "4",
    name: "Live Band Performance",
    description: "Professional live music performers available for customizable sets throughout your event.",
    imageUrl: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1800,
    category: "entertainment",
    eventType: ["birthday", "wedding", "corporate"]
  },
  {
    id: "5",
    name: "Luxury Venue Decoration",
    description: "Complete venue styling with premium linens, drapery, lighting, and custom branded elements.",
    imageUrl: "https://images.pexels.com/photos/6394574/pexels-photo-6394574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 3500,
    category: "decoration",
    eventType: ["wedding", "corporate", "engagement"]
  },
  {
    id: "6",
    name: "Custom Theme Backdrop",
    description: "Personalized photo backdrop with custom graphics, florals, or props based on your event theme.",
    imageUrl: "https://images.pexels.com/photos/5714551/pexels-photo-5714551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 850,
    category: "decoration",
    eventType: ["birthday", "wedding", "engagement"]
  },
  {
    id: "7",
    name: "Premium Bar Service",
    description: "Professional bartenders serving custom cocktails, premium spirits, and signature drinks.",
    imageUrl: "https://images.pexels.com/photos/989802/pexels-photo-989802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1200,
    category: "catering",
    eventType: ["birthday", "wedding", "corporate"]
  },
  {
    id: "8",
    name: "DJ & Sound System",
    description: "Professional DJ service with premium sound equipment, lighting, and customized playlist.",
    imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1500,
    category: "entertainment",
    eventType: ["birthday", "wedding", "corporate"]
  }
];

export const popularProducts = [
  {
    id: "2",
    name: "Gourmet Catering Package",
    description: "Customizable multi-course meal service with premium ingredients and professional staff.",
    imageUrl: "https://images.pexels.com/photos/5409694/pexels-photo-5409694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 85,
    category: "catering",
    eventType: ["birthday", "wedding", "corporate", "engagement", "anniversary"]
  },
  {
    id: "3",
    name: "Professional Photography Package",
    description: "Complete photography coverage with two photographers, edited digital images, and a custom photo album.",
    imageUrl: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 2500,
    category: "photography",
    eventType: ["birthday", "wedding", "corporate", "engagement", "anniversary"]
  },
  {
    id: "8",
    name: "DJ & Sound System",
    description: "Professional DJ service with premium sound equipment, lighting, and customized playlist.",
    imageUrl: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1500,
    category: "entertainment",
    eventType: ["birthday", "wedding", "corporate"]
  }
];