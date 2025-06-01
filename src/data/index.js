

// Export category-specific product data
import { originalProducts } from './originalProducts';
import { premiumProducts } from './premiumProducts';
import { specialtyProducts } from './specialtyProducts';
import { seasonalProducts } from './seasonalProducts';
import { wellnessProducts } from './wellnessProducts';
import { limitedProducts } from './limitedProducts';

// Re-export individual product arrays
export {
  originalProducts,
  premiumProducts,
  specialtyProducts,
  seasonalProducts,
  wellnessProducts,
  limitedProducts
};

// Combine all products for the global allProducts
export const allProducts = [
  ...originalProducts, 
  ...premiumProducts,
  ...specialtyProducts,
  ...seasonalProducts,
  ...wellnessProducts,
  ...limitedProducts
];
