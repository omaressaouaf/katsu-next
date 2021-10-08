const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>
            <span> Contactez</span>-nous
          </h2>
          <p>n&apos;hésitez pas à nous contacter en utilisant les informations ci-dessous</p>
        </div>
      </div>

      <div className="container map">
        <iframe
          title="Map"
          style={{ border: 0, width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37601.28406720606!2d-7.640239058550534!3d33.59193019192543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d39b391da619%3A0x49d2f703488d9ef9!2sKATSU!5e0!3m2!1sen!2sus!4v1632857712215!5m2!1sen!2sus"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container mt-5">
        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-6 info">
              <i className="fa fa-map-marker-alt"></i>
              <h5>Localisation:</h5>
              <p>
                Quartier Gauthier, 17 Rue Sebou, <br />
                Casablanca 20250
              </p>
            </div>

            <div className="col-lg-4 col-md-6 info mt-4 mt-lg-0">
              <i className="fa fa-clock"></i>
              <h5>Heures d&apos;ouverture:</h5>
              <p>
                Lundi-Dimanche:
                <br />
                12:00 AM - 11:00 PM
              </p>
            </div>

            <div className="col-lg-4 col-md-6 info mt-4 mt-lg-0">
              <i className="fa fa-phone"></i>
              <h5>Appelez-nous:</h5>
              <p>
                0520 106 140 <br />
                0614 598 949
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
