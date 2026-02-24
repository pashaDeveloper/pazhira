import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { IProduct } from "../../../../lib/types/products";
import ProductList from "../../../../components/productList/ProductList";
import { ITitlePathsParams } from "../../../../lib/types/pagePathsParams";
import { getAllProducts, getProductsByTitle } from "../../../../lib/products";

const brandPage: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default brandPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = getAllProducts().map((product) => ({
    category: product.category?.[0] || "",
    subCategory: product.category?.[1] || "",
    title: product.category?.[2] || "",
  }));
  const paths = products.map((product: ITitlePathsParams) => ({
    params: {
      category: product.category,
      subCategory: product.subCategory,
      title: product.title,
    },
  }));
  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const title = String(context.params?.title || "");
  const subCategory = String(context.params?.subCategory || "");
  const products = getProductsByTitle(subCategory, title);

  return {
    props: {
      products: products,
    },
  };
};
