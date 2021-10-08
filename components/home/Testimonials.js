import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dounia Batma",
      profession: "Chanteuse",
      quote: "غزال داكشي عندهم الأكل رائع انا تنحماق على الماكلة ديالهم بنينة بزاف",
    },
    {
      name: "Leila hadioui",
      profession: "Actrice",
      quote: "ç'est très bon surtout les tacos j'ai rarement mangé des tacos Bnan bhalhaka",
    },
    {
      name: "Sonia ngadi",
      profession: "Influenceuse",
      quote: "toujours un plaisir de savourer les sushis de katsu vraiment c'est trop bon",
    },
    {
      name: "Bouchra ddeau",
      profession: "Présentateur TV & Radio",
      quote: "مغآربة يتقنون الطبخ الآسيوي بشكل خيالي",
    },
    {
      name: "Nouhaila barbie",
      profession: "Maquilleuse",
      quote: "شكرا سهام الغزآلة على هاد آلعشيوة آلزوينة",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container position-relative">
        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => {
              return (
                <div key={index} className="swiper-slide">
                  <div className="testimonial-item">
                    <Image
                      src={`/assets/img/testimonials/testimonials-${index + 1}.jpg`}
                      layout="fixed"
                      width={105}
                      height={105}
                      className="testimonial-img"
                      alt={testimonial.name}
                    />
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.profession}</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      {testimonial.quote}
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
