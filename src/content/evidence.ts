export type ProofMetric = {
  value: string;
  label: string;
  qualifier: string;
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
  { value: "350+", label: "Verifierade leveranser", qualifier: "Dokumenterad publiceringsvolym från huvudregister och SVT-sökning" },
  { value: "332", label: "Källbelagda produktioner", qualifier: "Spårbara original-URL:er i huvudregistret" },
  { value: "55", label: "Kompletterande uppdrag", qualifier: "Säkrade SVT-publiceringar utanför primärt arkiv" },
  { value: "2018-2022", label: "Huvudsaklig period", qualifier: "Operativ tyngdpunkt vid SVT Nyheter Jönköping" }
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
    whatThisShows: "Ett källbelagt exempel på att hantera osäker regional hälsodata och omvandla den till publika underlag. Visar förmågan att tydligt redovisa metodbegränsningar, brister i materialet och lokal relevans under nyhetspress.",
    evidencePoints: [
      "Lokal testningsdata för covid-19",
      "Geografiskt mönster och jämförelse",
      "Inramning i allmänhetens intresse snarare än sluten analys"
    ],
    notClaiming: [
      "Inget ägandeskap över den underliggande datan",
      "Ingen epidemiologisk expertis",
      "Inget policy-ansvar"
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
    whatThisShows: "Hantering av brådskande information från offentliga institutioner under tryck. Visar förmågan att förklara kapacitetsbrist i sjukvården, offentlig kommunikation och att göra komplexa operativa situationer begripliga.",
    evidencePoints: [
      "Regional vårdbelastning",
      "Kontext för krislägesavtal och nationell larmyta",
      "Kommunikation från offentlig aktör under press"
    ],
    notClaiming: [
      "Inget operativt ansvar inom regionen",
      "Inget ledarskap inom krishantering",
      "Ingen medicinsk expertis"
    ]
  },
  {
    id: "work-behind-output",
    logLabel: "The Work Behind the Output",
    title: "Verifierat publiceringsregister",
    subtitle: "Informationsarkitektur & Dubblettkontroll",
    publicationDate: "2026-05-14",
    sourcePublication: "Eget källpaket baserat på Muck Rack och SVT-sökning",
    whatThisShows: "Strukturerad datainsamling, forskningsautomation och källdisciplin. Visar förmågan att ta stökiga offentliga spår och omvandla dem till ett verifierbart bevisregister, inklusive dedublikering.",
    evidencePoints: [
      "Huvudregister med 335 rader varav 332 med hittad original-URL",
      "Kompletterande SVT-sökning hittade 55 säkra nya publiceringar/krediter",
      "15 redan kända eller sannolika dubbletter uteslöts och dokumenterades",
      "1 osäker kandidat hanterades med reservation"
    ],
    notClaiming: [
      "Presenteras inte som en extern publicering",
      "Publicerar inte rådataregistret som publikt arkiv",
      "Påstår inte att osäkra kandidater är bekräftade"
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
    whatThisShows: "Att kartlägga en organisations respons efter en allvarlig incident. Belyser skolans riskhantering, interna åtgärder och mänskliga konsekvenser i en komplex struktur.",
    evidencePoints: [
      "Skolkontext efter våldshändelse",
      "Organisatorisk respons och åtgärder",
      "Rapportering i allmänhetens intresse utan personlig dramatisering"
    ],
    notClaiming: [
      "Inget ansvar för skolans respons",
      "Ingen expertis inom skolsäkerhet",
      "Ingen sensationalisering av händelsen"
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
    whatThisShows: "Hantering av källosäkerhet och offentlig riskkommunikation. Visar hur man följer upp myndigheters kommunikation när det faktiska källunderlaget är omtvistat.",
    evidencePoints: [
      "Hantering av explicit källosäkerhet",
      "Polisens kommunikation efter kritik",
      "Kontext för offentlig rättelse och förtydligande"
    ],
    notClaiming: [
      "Gör inga generella anspråk om polisarbete",
      "Påstår ingen absolut sanning om den underliggande händelsen",
      "Presenteras inte som krisledning"
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
    whatThisShows: "Fältarbete i realtid. Exempel på att hantera och strukturera händelseutveckling nära myndighetsingripanden, och göra en konkret sekvens av händelser logisk och begriplig.",
    evidencePoints: [
      "Kontext kring polisoperation",
      "Flera platser och samordnade tillslag",
      "Händelsedriven rapportering med operativ detaljrikedom"
    ],
    notClaiming: [
      "Ingen inblandning i polisens operation",
      "Ingen utredande auktoritet",
      "Överdriver inte tillgången bortom den publicerade rapporteringen"
    ]
  }
];
