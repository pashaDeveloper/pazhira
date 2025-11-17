import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import Layout from "../components/layout/Layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-toastify/dist/ReactToastify.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Pazhira | فروشگاه لوازم دیجیتال پاژیرا"
        titleTemplate="%s | Pazhira"
        defaultTitle="Pazhira | فروشگاه لوازم دیجیتال پاژیرا"
        description="فروشگاه موبایل پاژیرا - خرید موبایل از ارومیه | Pazhira Mobile Store - Buy Mobile Phones in Urmia"
        canonical="https://pazhira.com/"
        openGraph={{
          type: "website",
          locale: "fa_IR",
          url: "https://pazhira.com/",
          site_name: "Pazhira | فروشگاه لوازم دیجیتال پاژیرا",
          title: "Pazhira | فروشگاه لوازم دیجیتال پاژیرا",
          description: "فروشگاه موبایل پاژیرا - خرید لوازم دیجیتال از ارومیه | Pazhira Mobile Store - Buy Mobile Phones in Urmia",
          images: [
            {
              url: "https://pazhira.com/images/og-image.jpg",
              width: 800,
              height: 600,
              alt: "Pazhira Mobile Store",
            },
          ],
        }}
        twitter={{
          handle: "@pazhira",
          site: "@pazhira",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "پاژیرا, موبایل پاژیرا, خرید موبایل از ارومیه, فروش موبایل ارومیه, فروشگاه موبایل پاژیرا, خرید موبایل, موبایل, ارومیه, Pazhira, mobile phone, Urmia, mobile store",
          },
          {
            name: "author",
            content: "Pazhira",
          },
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;