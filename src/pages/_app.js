import "@/styles/globals.css";
import { FormProvider } from "../../context/FormContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
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
