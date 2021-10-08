import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <p style={{ display: "none" }}>
          beaucoup de célébrités ont été hébergées à katsu sushi casablanca. comme dounia batma la célèbre chanteuse. et
          leila hadioui la célèbre actrice marocaine. bouchra ddeau la journaliste TV
        </p>
        <a aria-label="Katsu Logo" rel="noreferrer" href="#hero">
          <figure>
            <Image
              src="/assets/img/logo-white.png"
              layout="intrinsic"
              width={330}
              height={270}
              objectFit="scale-down"
              alt="katsu logo"
              className="img-fluid mb-4"
            />
          </figure>
        </a>
        <p>
          <i className="bx bxs-quote-alt-left quote-icon-left"></i> Katsu, taste the difference
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <div className="social-links">
          <a
            aria-label="facebook"
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/restaurantkatsu"
            className="facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            aria-label="instagram"
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/katsumaroc"
            className="instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span>Katsu</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by
          <a target="_blank" href="https://bootstrapmade.com/">
            BootstrapMade
          </a>{" "}
          - Developed by
          <a target="_blank" href="https://www.sourceup.ma/">
            Source Up
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
