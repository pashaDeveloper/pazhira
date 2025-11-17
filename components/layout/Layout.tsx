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
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <div dir="rtl" className="flex flex-col min-h-[100vh]">
          <NextNProgress height={7} />
          <Header />
          <main className="flex-grow md:mt-52">{children}</main>
          <Footer />
        </div>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          rtl={true}
          position={"top-left"}
        />
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;