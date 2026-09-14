export type PageRoute = 'home' | 'about' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  objectPosition?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Stage & Decor' | 'Receptions' | 'Grand Hall' | 'Exterior';
  image: string;
  alt: string;
  description?: string;
  objectPosition?: string;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
}

export interface VenueStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  eventType: string;
  preferredDate: string;
  numberOfGuests: string;
  message: string;
}
