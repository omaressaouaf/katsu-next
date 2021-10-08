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
              <h4>Meilleure cuisine asiatique</h4>
              <p>
                meilleurs sushis japonais à casablanca avec des soupes extraordinaires pour l'accompagner, et profitez
                de vos envies de restauration rapide avec nos tacos & tataki spéciaux
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <h4>Reconnu par des célébrités</h4>
              <p>
                vous n'avez pas dégusté nos plats? eh bien jetez un œil à notre instagram et voyez l'une des opinions
                des célébrités marocaines
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <h4>Hygiène et souci du détail</h4>
              <p>
                notre système d'hygiène fonctionne en toute sécurité du chef au serveur. nous prêtons attention aux
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
