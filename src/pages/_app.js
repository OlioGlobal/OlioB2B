import "@/styles/globals.css";
import { FormProvider } from "../../context/FormContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <FormProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </FormProvider>
    </>
  );
}
