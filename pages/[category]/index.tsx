import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { IProduct } from "../../lib/types/products";
import ProductList from "../../components/productList/ProductList";
import { ICategoryPathsParams } from "../../lib/types/pagePathsParams";
import { getAllProducts, getProductsByCategory } from "../../lib/products";

const categoryPage: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default categoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = getAllProducts().map((product) => ({
    category: product.category?.[0] || "",
  }));
  const paths = products.map((product: ICategoryPathsParams) => ({
    params: {
      category: product.category,
    },
  }));
  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const category = String(context.params?.category || "");
  const products = getProductsByCategory(category);

  return {
    props: {
      products: products,
    },
  };
};
