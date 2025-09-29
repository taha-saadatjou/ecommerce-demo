import { placeholderImages } from './placeholder-images';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  specifications: Record<string, string>;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Electronics', slug: 'electronics', description: 'Latest electronic devices and gadgets' },
  { id: '2', name: 'Clothing', slug: 'clothing', description: 'Fashion and apparel for all seasons' },
  { id: '3', name: 'Home & Garden', slug: 'home-garden', description: 'Everything for your home and garden' },
  { id: '4', name: 'Sports', slug: 'sports', description: 'Sports equipment and fitness gear' },
  { id: '5', name: 'Books', slug: 'books', description: 'Books and educational materials' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'The latest iPhone with advanced camera system and A17 Pro chip',
    price: 999,
    originalPrice: 1099,
    images: [
      placeholderImages.iphone,
      placeholderImages.iphone,
      placeholderImages.iphone
    ],
    category: 'Electronics',
    brand: 'Apple',
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    specifications: {
      'Display': '6.1-inch Super Retina XDR',
      'Storage': '128GB',
      'Camera': '48MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 23 hours video playback',
      'Processor': 'A17 Pro chip'
    },
    features: [
      'Titanium design',
      'Action Button',
      'USB-C connector',
      'Advanced camera system',
      '5G capable'
    ]
  },
  {
    id: '2',
    name: 'MacBook Air M3',
    description: 'Ultra-thin laptop with M3 chip for incredible performance',
    price: 1199,
    originalPrice: 1299,
    images: [
      placeholderImages.macbook,
      placeholderImages.macbook
    ],
    category: 'Electronics',
    brand: 'Apple',
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    specifications: {
      'Display': '13.6-inch Liquid Retina',
      'Storage': '256GB SSD',
      'Memory': '8GB unified memory',
      'Processor': 'Apple M3 chip',
      'Battery': 'Up to 18 hours'
    },
    features: [
      'All-day battery life',
      '8-core CPU',
      '8-core GPU',
      '1080p FaceTime HD camera',
      'Magic Keyboard'
    ]
  },
  {
    id: '3',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with maximum cushioning',
    price: 150,
    images: [
      placeholderImages.nike,
      placeholderImages.nike
    ],
    category: 'Sports',
    brand: 'Nike',
    rating: 4.6,
    reviewCount: 2156,
    inStock: true,
    specifications: {
      'Material': 'Mesh and synthetic upper',
      'Sole': 'Rubber outsole',
      'Cushioning': 'Air Max unit',
      'Weight': '320g (size 9)',
      'Colors': 'Multiple available'
    },
    features: [
      'Maximum cushioning',
      'Breathable mesh upper',
      'Durable rubber outsole',
      'Comfortable fit',
      'Stylish design'
    ]
  },
  {
    id: '4',
    name: 'Samsung 4K Smart TV',
    description: '55-inch 4K UHD Smart TV with HDR support',
    price: 699,
    originalPrice: 899,
    images: [
      placeholderImages.tv,
      placeholderImages.tv
    ],
    category: 'Electronics',
    brand: 'Samsung',
    rating: 4.7,
    reviewCount: 1834,
    inStock: true,
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K UHD (3840 x 2160)',
      'HDR': 'HDR10+ support',
      'Smart Features': 'Tizen OS',
      'Connectivity': 'WiFi, Bluetooth, HDMI'
    },
    features: [
      '4K UHD resolution',
      'HDR10+ support',
      'Smart TV platform',
      'Voice control',
      'Multiple HDMI ports'
    ]
  },
  {
    id: '5',
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt in various colors',
    price: 25,
    images: [
      placeholderImages.shirt,
      placeholderImages.shirt
    ],
    category: 'Clothing',
    brand: 'BasicWear',
    rating: 4.3,
    reviewCount: 3421,
    inStock: true,
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular fit',
      'Care': 'Machine washable',
      'Colors': 'Multiple available',
      'Sizes': 'XS-XXL'
    },
    features: [
      '100% cotton',
      'Comfortable fit',
      'Machine washable',
      'Multiple colors',
      'Durable construction'
    ]
  },
  {
    id: '6',
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199,
    originalPrice: 249,
    images: [
      placeholderImages.headphones,
      placeholderImages.headphones
    ],
    category: 'Electronics',
    brand: 'SoundMax',
    rating: 4.5,
    reviewCount: 987,
    inStock: true,
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Noise Cancellation': 'Active noise cancellation',
      'Frequency Response': '20Hz - 20kHz',
      'Weight': '250g'
    },
    features: [
      'Active noise cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Comfortable fit',
      'High-quality sound'
    ]
  },
  {
    id: '7',
    name: 'Garden Tool Set',
    description: 'Complete set of essential gardening tools',
    price: 89,
    images: [
      placeholderImages.garden,
      placeholderImages.garden
    ],
    category: 'Home & Garden',
    brand: 'GardenPro',
    rating: 4.4,
    reviewCount: 456,
    inStock: true,
    specifications: {
      'Tools Included': 'Spade, rake, hoe, trowel, pruners',
      'Material': 'Stainless steel heads',
      'Handle': 'Ergonomic wooden handles',
      'Storage': 'Canvas tool bag included',
      'Warranty': '2 years'
    },
    features: [
      'Stainless steel construction',
      'Ergonomic handles',
      'Complete tool set',
      'Storage bag included',
      'Professional quality'
    ]
  },
  {
    id: '8',
    name: 'JavaScript: The Complete Guide',
    description: 'Comprehensive guide to modern JavaScript development',
    price: 45,
    images: [
      placeholderImages.book,
      placeholderImages.book
    ],
    category: 'Books',
    brand: 'TechBooks',
    rating: 4.8,
    reviewCount: 1234,
    inStock: true,
    specifications: {
      'Pages': '850',
      'Format': 'Paperback',
      'Language': 'English',
      'Publisher': 'TechBooks Publishing',
      'Edition': '3rd Edition'
    },
    features: [
      'Comprehensive coverage',
      'Modern JavaScript features',
      'Practical examples',
      'Exercises included',
      'Updated for ES2023'
    ]
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery)
  );
};
