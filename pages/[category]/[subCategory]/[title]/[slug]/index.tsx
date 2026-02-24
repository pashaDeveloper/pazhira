import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import ProductDetails from "../../../../../components/productDetails";
import { ISlugPathsParams } from "../../../../../lib/types/pagePathsParams";
import { IProduct } from "../../../../../lib/types/products";
import { getAllProducts, getProductBySlug, getProductsBySubCategory } from "../../../../../lib/products";

const productDetailsPage: NextPage<{
  product: IProduct;
  products: IProduct[];
}> = ({ product, products }) => {
  return (
    <div>
      <ProductDetails product={product} products={products} />
    </div>
  );
};

export default productDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = getAllProducts().map((product) => ({
    slug: product.slug,
    category: product.category?.[0] || "",
    subCategory: product.category?.[1] || "",
    title: product.category?.[2] || "",
  }));
  const paths = products.map((product: ISlugPathsParams) => ({
    params: {
      slug: product.slug.current,
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
  const slug = String(context.params?.slug || "");
  const category = String(context.params?.category || "");
  const subCategory = String(context.params?.subCategory || "");
  const product = getProductBySlug(slug);
  const products = getProductsBySubCategory(category, subCategory);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      products,
    },
  };
};
