// import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AuthUserProvider } from "@/firebase/auth";
import "@/styles/globals.css";
import Head from "next/head";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BookSwap</title>
        <meta
          name="description"
          content="Book Swap | Exchange your old Books"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>

      <AuthUserProvider>
        <ToastContainer></ToastContainer>
        <Header></Header>
        <Component {...pageProps} />
        <BottomNav></BottomNav>
        <Footer></Footer>
      </AuthUserProvider>
    </>
  );
}
