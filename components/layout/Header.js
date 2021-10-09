import Image from "next/image";

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="#hero">
            <figure>
              <Image
                src="/assets/img/logo-white.png"
                width={115}
                height={70}
                layout="fixed"
                priority
                alt="katsu logo"
                className="img-fluid"
              />
            </figure>
          </a>
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Propos
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                Galerie
              </a>
            </li>
          </ul>
          <i className="fas fa-bars mobile-nav-toggle"></i>
        </nav>

        <a href="tel:+212614598949" className="btn-prim d-none d-lg-block">
          Appelez-nous
        </a>
      </div>
    </header>
  );
};

export default Header;
