const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-title">
          <h2>
            Pourquoi choisir
            <span> notre restaurant ?</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="box">
              <h3>Meilleure cuisine asiatique</h3>
              <p>
                meilleurs sushis japonais à casablanca avec des soupes extraordinaires pour l&apos;accompagner, et profitez
                de vos envies de restauration rapide avec nos tacos & tataki spéciaux
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <h3>Reconnu par des célébrités</h3>
              <p>
                vous n&apos;avez pas dégusté nos plats? eh bien jetez un œil à notre instagram et voyez l&apos;une des opinions
                des célébrités marocaines
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <h3>Hygiène et souci du détail</h3>
              <p>
                notre système d&apos;hygiène fonctionne en toute sécurité du chef au serveur. nous prêtons attention aux
                détails afin que notre cher client soit servi comme il le mérite
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
