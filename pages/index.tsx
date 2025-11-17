import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";

import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "../store/specialOfferProducts-slice";
import { newestProductsActions } from "../store/newestProduct-slice";

import { client } from "../lib/client";

import Benefits from "../components/Benefits";
import Carousel from "../components/carousel";
import Story from "../components/Story";
const Offers = dynamic(() => import("../components/Offers/Offers"));
const Category = dynamic(() => import("../components/category/Category"));
const Newest = dynamic(() => import("../components/newest/Newest"));
const Brands = dynamic(() => import("../components/brands"));
const Banners = dynamic(() => import("../components/banners"), { ssr: false });

import { IProduct } from "../lib/types/products";
import { newestProductsFn } from "../utilities/sortByTimeStamp";
import BannerOne from "../components/banners/BannerOne";
import FeatureOne from "../components/features";

const Home: NextPage<{ products: IProduct[] }> = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //add products to offers list
    const offersProducts = products.filter((item) => item.discount);
    dispatch(specialOfferProductsActions.addProducts(offersProducts));

    //add products to newest list
    const sortedProductsByTimeStamp = newestProductsFn(products);
    dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
  }, [dispatch, products]);

  return (
    <>
<Head>
<title>فروشگاه لوازم دیجیتال  | پاژیرا</title>

  <meta
    name="description"
    content="فروشگاه موبایل پاژیرا یکی از بزرگ‌ترین فروشگاه‌های اینترنتی موبایل در ارومیه؛ خرید آیفون، سامسونگ و گوشی‌های روز با قیمت مناسب. اگر می‌پرسید آیفون را در ارومیه از کجا بخریم؟ پاژیرا انتخاب مطمئن شماست."
  />

  <meta
    name="keywords"
    content="پاژیرا, فروشگاه موبایل ارومیه, خرید موبایل ارومیه, خرید آیفون ارومیه, آیفون از کجا بخریم ارومیه, بزرگ‌ترین فروشگاه موبایل ارومیه, موبایل جلالی ارومیه, موبایل امید ارومیه, خرید سامسونگ ارومیه, فروش موبایل اورمیه"
  />

  {/* OG TAGS */}
  <meta property="og:title" content="فروشگاه موبایل پاژیرا | خرید موبایل از ارومیه" />
  <meta
    property="og:description"
    content="خرید آیفون، سامسونگ و گوشی‌های روز از بزرگ‌ترین فروشگاه موبایل ارومیه. ضمانت، قیمت مناسب و ارسال سریع در پاژیرا."
  />
  <meta property="og:image" content="https://pazhira.com/og-image.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://pazhira.com" />

  {/* TWITTER TAGS */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://pazhira.com/og-image.jpg" />
</Head>

      <div>
        <Story />
        <BannerOne />
        <FeatureOne />
        <Offers />
        <Category />
        <Newest />
        <Banners />
        <Brands />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const productQuery = `*[_type=='product']`;
  const products = await client.fetch(productQuery);

  return {
    props: {
      products,
    },
  };
};