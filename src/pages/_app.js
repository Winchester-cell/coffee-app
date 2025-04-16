import Footer from "@/components/Modules/Footer/Footer";
import Navbar from "@/components/Modules/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (

    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}
