const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div aria-label="hero slider" className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.664)),
                  url('assets/img/gallery/gallery-13.jpg') no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h1 className="animate__animated animate__fadeInDown">Restaurant Asiatique à casablanca</h1>
                  <p className="animate__animated animate__fadeInUp">
                    Nous vous souhaitons la bienvenue sur le site du Restaurant asiatique Katsu. Situé à casa, nous vous
                    invitons à venir découvrir une cuisine asiatique raffinée et un choix varié de menus (Nems, soupes,
                    salades, tempuras, nigiri, sashimi, sushis, plats, etc...), avec livraison gratuite sur Casa et
                    Bouskoura avec possibilité de payer par carte bancaire.
                  </p>
                  <p style={{ display: "none" }}>
                    katsu sushi offers good sushi casablanca prix. it is a sushi club. it delivers also to casablanca
                    maarif.
                  </p>
                  <div>
                    <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">
                      Notre menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
