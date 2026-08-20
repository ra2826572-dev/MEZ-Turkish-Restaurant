export interface MenuItem {
  id: string;
  name: string;
  turkishName?: string;
  description: string;
  price: number;
  category: 'soups' | 'salads' | 'appetizers' | 'pide' | 'main-course' | 'bbq' | 'doner-kebab' | 'sides' | 'desserts' | 'beverages';
  image: string;
  isSignature?: boolean;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  portion?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: string;
  excerpt: string;
  fullText: string;
  dishRecommended?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'dishes' | 'restaurant' | 'ambience' | 'cuisine';
  image: string;
  description?: string;
}

export interface ReservationDetails {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'indoor-main' | 'lounge' | 'outdoor-patio' | 'family-private';
  occasion?: string;
  specialRequest?: string;
}
