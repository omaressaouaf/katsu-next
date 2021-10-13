import Head from "next/head";

const HeadData = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Katsu",
    image: "https://www.katsu.ma/assets/img/logo.png",
    "@id": "https://www.katsu.ma/",
    url: "https://www.katsu.ma/",
    telephone: "0614 598 949",
    priceRange: "30-1000",
    menu: "https://www.katsu.ma/",
    servesCuisine: "",
    acceptsReservations: "true",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Rue Sebou, Casablanca 20250",
      addressLocality: "casablanca",
      postalCode: "20250",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.59341632381626,
      longitude: -7.630600816204754,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "23:00",
    },
  };
  return (
    <Head>
      <link rel="icon" type="image/png" href="favicon.ico"></link>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,600,600i,700,700i|Satisfy|Comic+Neue:300,300i,400,400i,700,700i"
        rel="stylesheet"
      />

      <title>Katsu Maroc - Sushi Livraison à domicile sur casablanca</title>
      <meta
        content="Livraison à domicile de sushi sur casablanca. Commander chez katsu maroc le meilleur restaurant asiatique"
        name="description"
      />
      <link rel="canonical" href="https://www.katsu.ma/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Katsu Maroc - Sushi Livraison à domicile sur casablanca" />
      <meta
        property="og:description"
        content="Livraison à domicile de sushi sur casablanca. Commander chez katsu maroc le meilleur restaurant asiatique"
      />
      <meta property="og:image" content="/assets/img/logo.png" />
      <meta property="og:url" content="https://www.katsu.ma/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Katsu" />
      <meta name="twitter:image:alt" content="Katsu Logo" />
      <meta
        name="keywords"
        content="katsu, Katsu, katsu sushi, sushi, katsu maroc, katsu casablanca, katsu restaurant, sushi restaurant, sushi restaurants,sushi casablanca livraison, restaurant asiatique, livraison à casablanca, Restaurant asiatique SushiThai, Sushis à casablanca, sushi casablanca prix, sushi club casablanca, sushi gourmet casablanca, yoka sushi, yoka sushi casablanca, sushi casablanca maarif, sushi casablanca menu, cuisine asiatique, sushi menu, best sushi,sushi casablanca, sushi gourmet, soy restaurant casablanca menu, sushi kiosque casablanca, sushi livraison casablanca, sushi livraison, sushi livraison à domicile, sushi casablanca, livraison gratuite casablanca, sushi near me, jumia food, sushi club, sushi box rabat, sushi bar, 	sushi a volonté casablanca, sushi à la maison, sushi casablanca menu, sushi crunchy, sushi express, sushi box, sushi rolls, tataki, tartares, chirashi, sashimi, nigiri, gunkan, classic rolls, fresh rolls, sushi rolls, maki, futomaki, spring rolls, katsu rolls, crunchy, yakitori, bentos, meilleur sushi, meilleurs sushis, service traiteur sushi, dounia batma, leila hadioui, sonia ngadi, bouchra ddeau, nouhaila barbie, Rue Sebou, rue sebou, 17 Rue Sebou,
        Casablanca 20250"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </Head>
  );
};

export default HeadData;
