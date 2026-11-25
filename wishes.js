// Ønskelisten. Hvert ønske kan have flere butikker (options).
// price i DKK (null = ukendt). image = sti til billede i assets/products/ (eller null).
window.WISHLIST = {
  title: "Min ønskeliste",
  sections: [
    {
      title: "Mad- & drikkeoplevelser",
      icon: "🍷",
      wishes: [
        {
          name: "Madlavningskursus",
          desc: "Gerne fransk mad (fx saucer eller fiskeretter)",
          emoji: "🧑‍🍳",
          image: "assets/products/fransk-madlavningskursus.jpg",
          options: [
            { shop: "Meyers", label: "Fransk madlavningskursus", url: "https://meyers.dk/madkurser/franske-klassikere", price: 1445 },
            { shop: "Timm Vladimirs Køkken", label: "Franske fristelser – bistro classique", url: "https://timmvladimirskoekken.dk/privat/alle-kurser-offentlige-kurser/", price: 1195 },
            { shop: "Timm Vladimirs Køkken", label: "Franske fristelser – le gourmand", url: "https://timmvladimirskoekken.dk/privat/alle-kurser-offentlige-kurser/", price: 1395 }
          ]
        },
        {
          name: "Tør spansk rød-/hvidvin eller tysk Spätburgunder",
          desc: "Spørg i vinhandlen",
          emoji: "🍷",
          image: "assets/products/schmitges-spaetburgunder.jpg",
          options: [
            { shop: "Vinhuset", label: "Schmitges Edition Rot trocken (tysk Spätburgunder)", url: "https://www.vinhuset.dk/products/schmitges-edition-rot-trocken", price: 185 }
          ]
        },
        {
          name: "Irsk whiskey",
          desc: "Redbreast eller Yellow Spot",
          emoji: "🥃",
          image: "assets/products/redbreast-12.jpg",
          options: [
            { shop: "Whisky.dk", label: "Redbreast 12 år, 70 cl", url: "https://www.whisky.dk/shop/redbreast-12-aar-10764p.html", price: 599 }
          ]
        }
      ]
    },
    {
      title: "Diverse",
      icon: "🧦",
      wishes: [
        {
          name: "Kompressionsstrømper",
          desc: "Til løb",
          emoji: "🧦",
          image: "assets/products/kompression-loebestroemper.jpg",
          options: [
            { shop: "Magasin", label: "Kompression Løbestrømpe", url: "https://www.magasin.dk/kompression-loebestroempe/BQAC16-1K6N.html", price: 134.96 },
            { shop: "Magasin", label: "Compression Support Løbestrømper", url: "https://www.magasin.dk/compression-support-loebestroemper/BPYP52-0VSU.html", price: 224.96 }
          ]
        },
        {
          name: "Toilettaske",
          desc: "",
          emoji: "🧴",
          image: "assets/products/patagonia-black-hole-cube.png",
          options: [
            { shop: "Spejdersport", label: "Patagonia Black Hole Cube 3 L", url: "https://www.spejdersport.dk/products/pat-black-hole-cube-3l-cibn?variant=56885812330836", price: 329.95 },
            { shop: "Magasin", label: "Everestmbg Toiletry Bag", url: "https://www.magasin.dk/everestmbg-toiletry-bag/BOPY41-000R.html", price: 599.25 },
            { shop: "Magasin", label: "Barolo Toilettaske", url: "https://www.magasin.dk/barolo-toilettaske/AYOX26-008I.html", price: 749.25 }
          ]
        },
        {
          name: "Weekendtaske",
          desc: "",
          emoji: "🧳",
          image: "assets/products/canvas-weekendtaske.jpg",
          options: [
            { shop: "Magasin", label: "Canvas weekend bag – Organic", url: "https://www.magasin.dk/canvas-weekend-bag---organic/BFKS64-0ZOD.html", price: 374.25 },
            { shop: "Magasin", label: "AtlasMBG Weekend Bag, 30 L", url: "https://www.magasin.dk/atlasmbg-weekend-bag--30l-rub./BOKW13-03CM.html", price: 749.25 }
          ]
        },
        {
          name: "Meyers hverdagsgrøntsager",
          desc: "Bog",
          emoji: "📚",
          image: "assets/products/meyers-hverdagsgroentsager.jpg",
          options: [
            { shop: "Bog & Idé", label: "Meyers Hverdagsgrøntsager (indbundet)", url: "https://www.bog-ide.dk/products/meyers-hverdagsgrontsager-meyers-madhus-indbundet-3479873", price: 319.95 }
          ]
        }
      ]
    }
  ]
};
