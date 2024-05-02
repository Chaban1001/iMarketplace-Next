import { Products } from '@/interfaces/products';
import productsData from '@/common/products/products.json';

const products: Products[] = productsData;

export const getProducts = async (): Promise<Products[]> => {
  try {
    return productsData;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
