import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "../header";
import store from "../../store/index";
import Footer from "../footer";
import { ToastContainer } from "react-toastify";
import { useLanguage } from "../../hooks/useLanguage";
import NextNProgress from "nextjs-progressbar";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { locale } = useLanguage();
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Head>
          <title>Pazhira | فروشگاه موبایل پاژیرا</title>
          <meta name="description" content="فروشگاه موبایل پاژیرا - خرید موبایل از ارومیه | Pazhira Mobile Store - Buy Mobile Phones in Urmia" />
          <meta name="keywords" content="پاژیرا, موبایل پاژیرا, خرید موبایل از ارومیه, فروش موبایل ارومیه, فروشگاه موبایل پاژیرا, خرید موبایل, موبایل, ارومیه, Pazhira, mobile phone, Urmia, mobile store" />
          <meta name="author" content="Pazhira" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pazhira.com/" />
          <meta property="og:title" content="Pazhira | فروشگاه موبایل پاژیرا" />
          <meta property="og:description" content="فروشگاه موبایل پاژیرا - خرید موبایل از ارومیه | Pazhira Mobile Store - Buy Mobile Phones in Urmia" />
          <meta property="og:image" content="https://pazhira.com/images/og-image.jpg" />
          <meta property="og:locale" content="fa_IR" />
          <meta property="og:site_name" content="Pazhira | فروشگاه موبایل پاژیرا" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://pazhira.com/" />
          <meta property="twitter:title" content="Pazhira | فروشگاه موبایل پاژیرا" />
          <meta property="twitter:description" content="فروشگاه موبایل پاژیرا - خرید موبایل از ارومیه | Pazhira Mobile Store - Buy Mobile Phones in Urmia" />
          <meta property="twitter:image" content="https://pazhira.com/images/og-image.jpg" />
          
          {/* Canonical */}
          <link rel="canonical" href="https://pazhira.com/" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div dir="rtl" className="flex flex-col min-h-[100vh]">
          <NextNProgress height={7} />
          <Header />
          <main className="flex-grow md:mt-[118px] mt-[90px]">{children}</main>
          <Footer />
        </div>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          rtl={locale === "en" ? false : true}
          position={locale === "en" ? "top-right" : "top-left"}
        />
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;