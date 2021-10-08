import Image from "next/image";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container-fluid">
        <div className="section-title">
          <h3>
            Quelques photos
            <span> de nous</span>
          </h3>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="gallery-flters">
              <li data-paragraph="traiteur-paragraph" data-filter=".filter-traiteur" className="filter-active">
                Service traiteur
              </li>
              <li data-paragraph="restaurant-paragraph" data-filter=".filter-restaurant">
                Restaurant
              </li>
            </ul>
          </div>
        </div>

        <div className="row no-gutters gallery-container">
          {Array(15)
            .fill(0)
            .map((el, index) => {
              return (
                <div
                  key={index}
                  className={`col-lg-3 col-md-4 gallery-single ${index < 7 ? "filter-traiteur" : "filter-restaurant"}`}
                >
                  <div className="gallery-item">
                    <a
                      href={`/assets/img/gallery/gallery-${index + 1}.jpg`}
                      className="gallery-lightbox"
                      aria-label="Gallery"
                      rel="noopener"
                    >
                      <Image
                        src={`/assets/img/gallery/gallery-${index + 1}.jpg`}
                        // placeholder="blur"
                        // blurDataURL={`/assets/img/gallery/gallery-${index + 1}.jpg`}
                        layout="responsive"
                        width={10000}
                        height={10000}
                        objectFit="cover"
                        alt="Gallery"
                        className="img-fluid gallery-img"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
