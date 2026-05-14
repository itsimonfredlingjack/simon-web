import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(el, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0,
            duration: 1,
            scrollTrigger: {
               trigger: el,
               start: "top 80%",
               toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <div className="page-content">
      <section className="hero-section">
        <h1 className="hero-title">The Blueprint of Work Nobody Sees</h1>
        <p className="hero-subtitle">
          Människor, information och teknik faller sällan på plats av sig själva. Jag arbetar där uppdrag är otydliga, förutsättningar rör sig och någon behöver skapa struktur nog för att arbetet ska gå framåt.
        </p>
        <div>
          <button className="copper-btn" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Utforska systemet
          </button>
        </div>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginTop: '10vh' }}>
        <h2>Mellan verksamhet och teknik</h2>
        <p>
          Jag är varken en renodlad utvecklare eller en traditionell kommunikatör. Jag är en analytisk, genomförandeorienterad LIA-kandidat inom IT-projektledning. 
        </p>
        <p>
          Min styrka är att snabbt sätta mig in i komplexa verksamheter, prata med flera aktörer, värdera information och leverera ett tydligt underlag. Jag förstår teknik tillräckligt väl för att vara den kritiska översättaren mellan verksamhetens behov och IT-sidans leverans.
        </p>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginLeft: 'auto', marginRight: '4rem', marginTop: '20vh' }}>
        <h2>Princip 01: Informationsvärdering & Syntes</h2>
        <p>
          Att begära ut, värdera och strukturera osäker data under press. Min bakgrund har tränat mig i att hantera metodbegränsningar och datakritik – och att sedan kunna koka ner det till kärnan. Oavsett om det handlar om covid-siffror, otydliga källor eller systemkrav, säkerställer jag att vi agerar på rätt underlag.
        </p>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginTop: '20vh' }}>
        <h2>Princip 02: Kris, Risk & Samordning</h2>
        <p>
          Att hantera beroendelogik och resursfördelning när det är skarpt läge. Från att bevaka regionens larm om vårdbelastning till att granska skolors trygghetsåtgärder efter incidenter. Jag rör mig vant i miljöer där risker ska identifieras, processer ska kartläggas och felaktiga antaganden får konsekvenser.
        </p>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginLeft: 'auto', marginRight: '4rem', marginTop: '20vh' }}>
        <h2>Princip 03: Intressentkontakt i Ekosystem</h2>
        <p>
          Att bygga broar mellan olika världar. I mitt arbete med bland annat klimat-simuleringar (En-ROADS) och partnernätverk har jag sett vikten av att förstå många olika intressenters behov. Jag driver inte bara min egen linje, utan samordnar perspektiv – oavsett om det är studenter, företag, chefer eller tekniker.
        </p>
      </section>
      
      <section className="content-block" ref={addToRefs} style={{ marginTop: '20vh', marginBottom: '30vh' }}>
        <h2>Princip 04: Den Teknisk Bryggan</h2>
        <p>
          Jag kodar inte nästa stora SaaS-tjänst, men jag testar och bygger egna AI-verktyg för att förstå mekaniken. Genom egna projekt med RAG-modeller och automatiserade dokumentflöden skapar jag den tekniska grundförståelse som gör att jag kan diskutera systemimplementationer utan att tappa bort verksamhetsnyttan.
        </p>
      </section>
    </div>
  );
}
