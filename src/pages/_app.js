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
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          B2B Lead Generation for Manufacturers | Olio Global Adtech
        </title>
        <meta
          name="description"
          content="Drive 3X Sales growth with Olio Global Adtech, your expert B2B industrial marketing agency. Specialized in B2B lead generation through Digital marketing services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/fav.png" />
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
