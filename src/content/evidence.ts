export type ProofMetric = {
  value: string;
  label: string;
  qualifier: string;
  link?: string;
};

export type FieldNote = {
  id: string;
  logLabel: string;
  title: string;
  subtitle: string;
  publicationDate?: string;
  sourcePublication?: string;
  sourceUrl?: string;
  exactCredit?: string;
  whatThisShows: string;
  evidencePoints: string[];
  notClaiming: string[];
};

export const proofMetrics: ProofMetric[] = [
  { value: "350+", label: "Publiceringar", qualifier: "med Simon Fredling i byline" },
  { value: "332", label: "Verifierade originalpubliceringar", qualifier: "spårade till originalkälla, främst SVT" }
];

export const fieldNotes: FieldNote[] = [
  {
    id: "signal-before-structure",
    logLabel: "Signal Before Structure",
    title: "Här testade sig allra flest för covid-19",
    subtitle: "Data, Källkritik & Osäkerhet",
    publicationDate: "2021-02-02",
    sourcePublication: "Sveriges Television / SVT Nyheter Jönköping",
    sourceUrl: "https://www.svt.se/nyheter/lokalt/jonkoping/i-ingatorp-testade-sig-allra-flest-for-covid-19",
    exactCredit: "By Simon Fredling",
    whatThisShows: "Ett källbelagt exempel på att hantera osäker regional hälsodata och omvandla den till publika underlag under nyhetspress.",
    evidencePoints: [
      "Situation: Bristfällig och regionalt spridd hälsodata behövde sammanställas för allmänheten.",
      "Arbete: Begärde ut data, analyserade geografiska mönster och identifierade nyckelavvikelser.",
      "Förmåga: Att snabbt omvandla rådata till tydlig information och redovisa brister i materialet."
    ],
    notClaiming: [
      "Källan styrker förmågan att analysera och publicera data från myndigheter.",
      "Avgränsning: Visar inte på egen epidemiologisk expertis eller ägandeskap av den underliggande datan."
    ]
  },
  {
    id: "reality-moves",
    logLabel: "Reality Moves",
    title: "Regionen larmar: Vi behöver hjälp från andra delar av landet",
    subtitle: "Kris, Risk & Process",
    publicationDate: "2021-02-24",
    sourcePublication: "Sveriges Television / SVT Nyheter Jönköping",
    sourceUrl: "https://www.svt.se/nyheter/lokalt/jonkoping/krislagesavtal-racker-inte-region-jonkoping-anvander-nationell-larmyta",
    exactCredit: "By Simon Fredling",
    whatThisShows: "Hantering av brådskande information från offentliga institutioner. Visar förmågan att göra komplexa operativa krislägen begripliga.",
    evidencePoints: [
      "Situation: Regionen hamnade under extrem vårdbelastning och larmade nationellt.",
      "Arbete: Kartlade kapacitetsbrister, samordningsbehov och krislägesavtalets praktiska innebörd.",
      "Förmåga: Att orientera sig i komplexa beroendekedjor under tidspress och rapportera sakligt kring krisberedskap."
    ],
    notClaiming: [
      "Källan styrker förmågan att förstå och sammanfatta institutionell krishantering.",
      "Avgränsning: Visar inte på operativt ansvar för vårdens styrning eller ledarskap i krisen."
    ]
  },
  {
    id: "work-behind-output",
    logLabel: "The Work Behind the Output",
    title: "Verifierat publiceringsregister",
    subtitle: "Informationsarkitektur & Dubblettkontroll",
    publicationDate: "2026-05-14",
    sourcePublication: "Eget källpaket baserat på Muck Rack och SVT-sökning",
    whatThisShows: "Forskningsautomation och källdisciplin. Visar förmågan att ta stökiga offentliga spår och omvandla dem till ett verifierbart bevisregister.",
    evidencePoints: [
      "Situation: Ett behov av att konsolidera 350+ spridda publiceringar till en spårbar helhet.",
      "Arbete: Strukturerade datautdrag, automatiserade deduplicering och verifierade original-URL:er för varje post.",
      "Förmåga: Informationsarkitektur och förmågan att bygga kvalitetssäkrade underlag från ostrukturerad data."
    ],
    notClaiming: [
      "Källan styrker förmågan att arbeta systematiskt med stora mängder data och referenshantering.",
      "Avgränsning: Materialet presenteras inte som en officiell extern publicering eller en absolut komplett lista."
    ]
  },
  {
    id: "systems-have-people",
    logLabel: "Systems Have People in Them",
    title: "Efter knivdådet i skolan - så arbetar Brinellgymnasiet",
    subtitle: "Incidentuppföljning & Processer",
    publicationDate: "2021-09-23",
    sourcePublication: "Sveriges Television / SVT Nyheter Jönköping",
    sourceUrl: "https://www.svt.se/nyheter/lokalt/jonkoping/sa-arbetar-brinellgymnasiet-efter-knivskarningen",
    exactCredit: "By Simon Fredling",
    whatThisShows: "Kartläggning av en organisations respons efter en allvarlig incident. Belyser riskhantering och interna åtgärder.",
    evidencePoints: [
      "Situation: En skola behövde hantera efterspelet av en allvarlig våldshändelse.",
      "Arbete: Dokumenterade skolans interna åtgärder, rutiner för trygghet och organisatoriska anpassningar.",
      "Förmåga: Att kartlägga processer och lyfta systemperspektivet över personlig dramatik."
    ],
    notClaiming: [
      "Källan styrker förmågan att förklara institutionell incidentuppföljning och rutinhantering.",
      "Avgränsning: Visar inte på operativt ansvar för skolsäkerhet eller krisledning."
    ]
  },
  {
    id: "from-noise-to-next-step",
    logLabel: "From Noise to Next Step",
    title: "Polisen efter kritiken om tafsardagen: \"Vi skulle varit tydligare med att källan inte är solklar\"",
    subtitle: "Riskkommunikation under osäkerhet",
    publicationDate: "2021-04-13",
    sourcePublication: "Sveriges Television / SVT Nyheter Jönköping",
    sourceUrl: "https://www.svt.se/nyheter/lokalt/jonkoping/polisen-efter-kritiken-om-tafsardagen-vi-skulle-gatt-ut-med-detta-pa-ett-annat-satt",
    exactCredit: "By Simon Fredling",
    whatThisShows: "Hantering av källosäkerhet och riskkommunikation. Följer upp myndigheters kommunikation när underlaget är omtvistat.",
    evidencePoints: [
      "Situation: Ett händelseförlopp rapporterades där själva källgrunden i efterhand ifrågasattes.",
      "Arbete: Följde upp hur polisen hanterade osäkerheten och den efterföljande kritiken.",
      "Förmåga: Att granska informationsflöden och beskriva hur institutioner kommunicerar vid otydlighet."
    ],
    notClaiming: [
      "Källan styrker förmågan att hantera offentlig riskkommunikation och brister i informationsöverföring.",
      "Avgränsning: Visar inte på egen expertis i polisarbete och gör inga utredande anspråk om händelsen."
    ]
  },
  {
    id: "built-in-the-mess",
    logLabel: "Built in the Mess",
    title: "Så slog operation Kura till mot flera gym",
    subtitle: "Fältarbete & Agilitet",
    publicationDate: "2021-06-17",
    sourcePublication: "Sveriges Television / SVT Nyheter Jönköping",
    sourceUrl: "https://www.svt.se/nyheter/lokalt/jonkoping/sa-slog-operation-kura-till-mot-flera-gym",
    exactCredit: "By Simon Fredling",
    whatThisShows: "Exempel på att hantera händelseutveckling nära myndighetsingripanden och göra ett förlopp logiskt och begripligt.",
    evidencePoints: [
      "Situation: En polisiär insats genomfördes samtidigt över flera platser.",
      "Arbete: Samordnade information i realtid, verifierade uppgifter från fältet och strukturerade ett snabbt förlopp.",
      "Förmåga: Agilitet, fältorientering och förmågan att logiskt strukturera operativ händelseinformation."
    ],
    notClaiming: [
      "Källan styrker förmågan att följa och dokumentera snabba, operativa förlopp.",
      "Avgränsning: Visar inte på någon utredande myndighetsroll eller inblandning i operationen."
    ]
  }
];
