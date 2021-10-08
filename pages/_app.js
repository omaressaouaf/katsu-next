import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("../global/boot");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
