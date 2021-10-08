import Image from "next/image";

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div>
        <div className="section-title">
          <h2>
            Notre <span>Menu</span>
          </h2>
        </div>
        <div
          id="menuCarousel"
          data-bs-interval="false"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators" id="menu-carousel-indicators"></ol>

          <div aria-label="menu slider" className="carousel-inner" role="listbox">
            {Array(20)
              .fill(0)
              .map((el, index) => {
                if (index > 0 && index % 2 != 0)
                  return (
                    <div key={index} className={`carousel-item ${index == 1 && "active"}`}>
                      <div className="d-flex flex-column flex-xl-row carousel-item-container">
                        <div className="" style={{ position: "relative", width: "100%", height: "100%" }}>
                          <Image
                            className="d-block w-100"
                            src={`/assets/img/menu/menu-${index}.jpg`}
                            placeholder="blur"
                            blurDataURL={`/assets/img/menu/menu-${index}.jpg`}
                            layout="fill"
                            priority={index < 7 ? true : false}
                            alt="menu"
                          />
                        </div>
                        <div className="" style={{ position: "relative", width: "100%", height: "100%" }}>
                          <Image
                            className="d-block w-100"
                            src={`/assets/img/menu/menu-${index + 1}.jpg`}
                            placeholder="blur"
                            blurDataURL={`/assets/img/menu/menu-${index + 1}.jpg`}
                            layout="fill"
                            priority={index < 7 ? true : false}
                            alt="menu"
                          />
                        </div>
                      </div>
                    </div>
                  );
              })}
          </div>

          <a
            aria-label="Slider Controls"
            rel="noopener"
            className="carousel-control-prev"
            href="#menuCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon fa fa-chevron-left" aria-hidden="true"></span>
          </a>

          <a
            aria-label="Slider Controls"
            rel="noopener"
            className="carousel-control-next"
            href="#menuCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon fa fa-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
