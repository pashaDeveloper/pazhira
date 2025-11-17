import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useLanguage } from "../hooks/useLanguage";
import Container from "../components/shared/container";

const Custom404 = () => {
  const { t, locale } = useLanguage();

  return (
    <>
      <Head>
        <title>صفحه پیدا نشد | Pazhira</title>
        <meta name="description" content="صفحه مورد نظر پیدا نشد. به فروشگاه موبایل پاژیرا بازگردید." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Container className="flex flex-col items-center justify-center min-h-[70vh] py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-palette-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-palette-mute mb-6">
            {t.pageNotFound}
          </h2>
          <p className="text-palette-mute mb-8 max-w-md mx-auto">
            {t.pageNotFoundDescription}
          </p>
          <Link href="/" locale={locale}>
            <a className="bg-palette-primary text-palette-side py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all">
              {t.backToHome}
            </a>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Custom404;