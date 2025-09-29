# ShopDemo - E-Commerce Demo Website

A fully functional e-commerce demonstration website built with Next.js, TypeScript, and Tailwind CSS. This site includes a complete shopping experience with product catalog, shopping cart, checkout flow, and user authentication - all designed for testing and demonstration purposes.

## ⚠️ Important Notice

**This is a demonstration website only. No actual payments will be processed and no real orders will be placed.**

## Features

### 🛍️ Core E-Commerce Functionality
- **Product Catalog**: Browse products by category with search and filtering
- **Product Details**: Detailed product pages with image galleries and specifications
- **Shopping Cart**: Add/remove items with quantity management
- **Checkout Process**: Complete multi-step checkout with payment forms
- **Order Confirmation**: Order success page with tracking information

### 👤 User Experience
- **User Authentication**: Login and registration pages (demo mode)
- **Account Dashboard**: User profile, order history, and settings
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Modern UI**: Clean, professional design with smooth animations

### 🔧 Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Context API**: State management for shopping cart
- **Mock Data**: Pre-populated with sample products and categories

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd ecommerce-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── account/            # User account pages
│   ├── category/           # Product category pages
│   ├── checkout/           # Checkout process
│   ├── login/              # Authentication pages
│   ├── order-confirmation/ # Order success page
│   ├── product/            # Product detail pages
│   ├── search/             # Search results page
│   └── page.tsx            # Home page
├── components/             # Reusable React components
│   ├── CartSidebar.tsx     # Shopping cart sidebar
│   ├── Footer.tsx           # Site footer
│   ├── Header.tsx          # Site header with navigation
│   └── ProductCard.tsx     # Product display card
├── contexts/               # React Context providers
│   └── CartContext.tsx     # Shopping cart state management
└── lib/                    # Utility functions and data
    ├── data.ts             # Mock product data
    └── types.ts            # TypeScript type definitions
```

## Key Pages and Features

### 🏠 Home Page (`/`)
- Hero section with call-to-action
- Featured products showcase
- Category navigation
- Site features overview

### 🛍️ Product Catalog
- **Category Pages** (`/category/[slug]`): Filtered product listings
- **Search Results** (`/search?q=query`): Search functionality
- **Product Details** (`/product/[id]`): Detailed product information

### 🛒 Shopping Experience
- **Shopping Cart**: Sidebar with add/remove functionality
- **Checkout Process** (`/checkout`): Multi-step checkout with payment forms
- **Order Confirmation** (`/order-confirmation`): Success page with order details

### 👤 User Account
- **Login** (`/login`): User authentication (demo mode)
- **Registration** (`/register`): Account creation (demo mode)
- **Account Dashboard** (`/account`): Profile, orders, and settings

## Demo Features

### 🧪 Test Mode Indicators
- **Yellow Banner**: Prominent test site warnings throughout the site
- **Payment Disclaimers**: Clear messaging that no payments are processed
- **Demo Authentication**: Any email/password combination works for login

### 📱 Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive grid layouts
- **Desktop Experience**: Full-featured desktop interface

### 🎨 Modern UI/UX
- **Clean Design**: Professional, modern aesthetic
- **Smooth Animations**: Hover effects and transitions
- **Intuitive Navigation**: Clear user flow and navigation
- **Accessibility**: Semantic HTML and keyboard navigation

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npm run type-check   # Run TypeScript compiler
```

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Image Optimization**: Next.js Image component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a demonstration project. If you'd like to extend or modify the functionality:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for demonstration purposes only. Feel free to use it as a starting point for your own e-commerce projects.

## Support

For questions or issues with this demo site, please check the documentation or create an issue in the repository.

---

**Remember**: This is a demonstration website. No real transactions, payments, or data storage occurs.