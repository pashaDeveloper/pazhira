import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { IProduct } from "../../../lib/types/products";
import ProductList from "../../../components/productList/ProductList";
import { ISubCategoryPathsParams } from "../../../lib/types/pagePathsParams";
import { getAllProducts, getProductsBySubCategory } from "../../../lib/products";

const subCategory: NextPage<{
  products: IProduct[];
}> = ({ products }) => {
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default subCategory;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = getAllProducts().map((product) => ({
    category: product.category?.[0] || "",
    subCategory: product.category?.[1] || "",
  }));
  const paths = products.map((product: ISubCategoryPathsParams) => ({
    params: {
      category: product.category.toString(),
      subCategory: product.subCategory.toString(),
    },
  }));
  return {
    fallback: "blocking",
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const subCategory = String(context.params?.subCategory || "");
  const category = String(context.params?.category || "");
  const products = getProductsBySubCategory(category, subCategory);

  return {
    props: {
      products: products,
    },
  };
};
