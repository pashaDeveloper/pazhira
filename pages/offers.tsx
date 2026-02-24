import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { IProduct } from "../lib/types/products";
import ProductList from "../components/productList/ProductList";
import { getOfferProducts } from "../lib/products";

const offers: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default offers;

export const getStaticProps: GetStaticProps = async () => {
  const products = getOfferProducts();
  return {
    props: {
      products: products,
    },
  };
};
