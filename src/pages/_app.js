import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FormProvider } from "../../context/FormContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/fav.png" />
        <title>Olio B2B</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <FormProvider>
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </FormProvider>
      </div>
    </>
  );
}
