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

      <title>Katsu Sushi - Meilleur restaurant asiatique à casablanca</title>
      <meta
        content="Livraison de sushi des Katsu, sushi rolls, sushi box, et plus à casablanca. Commandez maintenant auprès du meilleur restaurant asiatique"
        name="description"
      />
      <link rel="canonical" href="https://www.katsu.ma/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Katsu Sushi - Meilleur restaurant asiatique à casablanca" />
      <meta
        property="og:description"
        content="Livraison de sushi des Katsu, sushi rolls, sushi box, et plus à casablanca. Commandez maintenant auprès du meilleur restaurant asiatique"
      />
      <meta property="og:image" content="/assets/img/logo.png" />
      <meta property="og:url" content="https://www.katsu.ma/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Katsu" />
      <meta name="twitter:image:alt" content="Katsu Logo" />
      <meta
        name="keywords"
        content="katsu, Katsu, katsu sushi, sushi, katsu maroc, katsu casablanca, katsu restaurant, sushi restaurant, sushi restaurants, restaurant asiatique, livraison à casablanca, Restaurant asiatique SushiThai, Sushis à casablanca, sushi casablanca prix, sushi club casablanca, sushi gourmet casablanca, yoka sushi casablanca, sushi casablanca maarif, sushi casablanca menu, cuisine asiatique, sushi menu, best sushi,sushi casablanca,fast food casablanca livraison, sushi gourmet, soy restaurant casablanca menu, sushi kiosque casablanca, sushi livraison casablanca,sushi casablanca, livraison gratuite casablanca, healthy food, nourriture, sushi near me, fast food, fast food casablanca, fast food restaurant, fast food restaurant near me, jumia food, sushi club, sushi box rabat, sushi bar, 	sushi a volonté casablanca, sushi à la maison, sushi casablanca menu, sushi crunchy, sushi express, food morocco, moroccan food, jumia food maroc, menu, sushi box, sushi rolls, starters, soupes, tacos, tataki, dessert, salades, tartares, chirashi, sashimi, nigiri, gunkan, classic rolls, fresh rolls, maki, futomaki, spring rolls, katsu rolls, crunchy, yakitori, bentos, plats, desserts, boissons, bon appétit, meilleur sushi, meilleurs sushis, sourceup, source up, SourceUp, Source Up, service traiteur, dounia batma, leila hadioui, sonia ngadi, bouchra ddeau, nouhaila barbie, Katsu, taste the difference, Rue Sebou, rue sebou, 17 Rue Sebou,
      Casablanca 20250"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </Head>
  );
};

export default HeadData;
