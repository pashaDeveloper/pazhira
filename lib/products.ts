import productsJson from "./data/products.json";
import { IProduct } from "./types/products";

const products = productsJson as unknown as IProduct[];

export const getAllProducts = () => products;

export const getOfferProducts = () => products.filter((product) => Boolean(product.isOffer));

export const getProductsByCategory = (category: string) =>
  products.filter((product) => product.category?.[0] === category);

export const getProductsBySubCategory = (category: string, subCategory: string) =>
  products.filter(
    (product) => product.category?.[0] === category && product.category?.[1] === subCategory
  );

export const getProductsByTitle = (subCategory: string, title: string) =>
  products.filter(
    (product) => product.category?.[1] === subCategory && product.category?.[2] === title
  );

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug?.current === slug);
