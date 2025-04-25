// User types
export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  profileImage?: string;
}

// Authentication types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Event types
export interface EventCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface EventRequest {
  id: string;
  userId: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  venue?: string;
  budget?: number;
  additionalDetails?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

// Product types
export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: 'decoration' | 'catering' | 'photography' | 'entertainment' | 'venue';
  eventType: string[];
}

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  eventDate?: string;
  createdAt: string;
}

// Gallery types
export interface GalleryImage {
  id: string;
  imageUrl: string;
  title?: string;
  eventType: string;
  uploadedBy?: string;
  featured: boolean;
  createdAt: string;
}