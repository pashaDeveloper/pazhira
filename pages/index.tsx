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
import { NextSeo } from 'next-seo';

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
  <NextSeo
        title="فروشگاه لوازم دیجیتال | پاژیرا"
        description="فروشگاه لوازم دیجیتال پاژیرا؛ خرید موبایل، آیفون، لپ‌تاپ و گجت‌های دیجیتال در ارومیه با بهترین قیمت و ضمانت."
        canonical="https://pazhira.com/"
        openGraph={{
          url: 'https://pazhira.com/',
          title: 'فروشگاه لوازم دیجیتال | پاژیرا',
          description: 'فروشگاه لوازم دیجیتال پاژیرا؛ خرید موبایل، آیفون، لپ‌تاپ و گجت‌های دیجیتال در ارومیه با بهترین قیمت و ضمانت.',
          images: [
            {
              url: 'https://pazhira.com/images/og-image.jpg',
              width: 800,
              height: 600,
              alt: 'Pazhira Mobile Store',
            },
          ],
        }}
      />


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