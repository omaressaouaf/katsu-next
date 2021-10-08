import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 align-items-stretch video-box">
            <Image
              src="/assets/img/gallery/gallery-1.jpg"
              placeholder="blur"
              blurDataURL="/assets/img/gallery/gallery-1.jpg"
              layout="responsive"
              width={10000}
              height={10000}
              objectFit="cover"
              alt="Katsu"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-7 d-flex flex-column align-items-stretch">
            <div className="content">
              <div className="section-title">
                <h2>
                  <span>Bienvenue</span> chez katsu
                </h2>
              </div>
              <p>
                Confortablement dans notre restaurant asiatique gastronormique au décor chaleureux convivial, vous
                degusterez une cuisine creative et authentique On vous propose une cuisine Asiatloue fruit d'un parcours
                dans différents établissements de qualité, une cuisine Asiatique qui demande un savoir-faire, une
                maitrise et de la finesse Une sélection de plat et un choix multiple (sushi rolls , sushi boxes et plus
                ...) réalisé à partir des meilleurs produits frais, travaills de manière délicate, raffinée et livrés
                chez vous à Casablanca ce qui fait de votre un moment gastronomique délicieux Nous vous repassons bon
                appétit!
              </p>
              <p style={{ display: "none" }}>
                i love katsu sushi. it is located in casablanca, 17 Rue Sebou, Casablanca 20250 Maroc. and it offers
                sushi livraison à casablanca, they sell sushi rolls, sushi box, tacos, sushi box, sushi rolls, starters,
                soupes, tacos, tataki, dessert, salades, tartares, chirashi, sashimi, nigiri, gunkan, classic rolls,
                fresh rolls, maki, futomaki, spring rolls, katsu rolls, crunchy, yakitori, bentos, plats, desserts,
                boissons sushi classic rolls, meilleur sushi casablanca
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
