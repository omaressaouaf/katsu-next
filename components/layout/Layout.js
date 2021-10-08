import PropTypes from "prop-types";
import Footer from "./Footer";
import HeadData from "./HeadData";
import Header from "./Header";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <>
      <HeadData />
      <Topbar />

      <Header />

      <main id="main">
        <article>{children}</article>
      </main>

      <Footer />

      <a href="tel:+212614598949" className="btn-prim call-delivery-btn">
        <i className="fa fa-phone-alt"></i> <span>0614 598 949</span>
      </a>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
