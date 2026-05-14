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
        <h1 className="hero-title">Struktur i komplexitet.</h1>
        <p className="hero-subtitle">
          Jag bygger bryggor mellan teknik, människor och processer. Med erfarenhet från SVT, Trafikverket och akademin hjälper jag IT- och digitaliseringsprojekt att gå från oklarhet till tydligt genomförande.
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
          Jag är varken en renodlad utvecklare eller en traditionell kommunikatör. Jag är projektstöd, LIA-kandidat och organisatör inom IT och digitalisering. 
        </p>
        <p>
          Min styrka är att skapa struktur i komplexa situationer, förstå både människor och system, hantera information och dokumentera tydligt. Jag förstår teknik tillräckligt väl för att vara den kritiska översättaren mellan verksamhetens behov och teknikens möjligheter.
        </p>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginLeft: 'auto', marginRight: '4rem', marginTop: '20vh' }}>
        <h2>Princip 01: Operativ informationshantering</h2>
        <p>
          Att hantera information när det brinner. På Trafikverket arbetade jag i intensiva, operativa informationsflöden där korrekt och blixtsnabb kommunikation behövde samordnas mellan resenärer, tågpersonal, tågklarerare och interna funktioner. Det handlar om rätt detalj, till rätt person, i exakt rätt tid.
        </p>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginTop: '20vh' }}>
        <h2>Princip 02: Från idé till leverans</h2>
        <p>
          Självständigt fältarbete under deadline på SVT. Det bygger på förmågan att snabbt förstå ett helt nytt ämne, hitta rätt människor och leverera ett färdigt resultat – oavsett om förutsättningarna ändras under resans gång och kartan måste ritas om.
        </p>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginLeft: 'auto', marginRight: '4rem', marginTop: '20vh' }}>
        <h2>Princip 03: Översättning mellan domäner</h2>
        <p>
          Att göra det komplexa begripligt. På Göteborgs universitet arbetade jag med att ta tung forskning inom AI, elektrifiering, management och hållbarhet och översätta det till format som skapar värde i digitala kanaler. Det handlar om att förstå mottagaren lika väl som det tekniska ämnet.
        </p>
      </section>
      
      <section className="content-block" ref={addToRefs} style={{ marginTop: '20vh', marginBottom: '30vh' }}>
        <h2>Princip 04: Teknisk förståelse i praktiken</h2>
        <p>
          Jag kodar inte nästa stora SaaS-tjänst från grunden, men jag bygger egna AI-verktyg för att förstå mekaniken. Genom egna automationsprojekt, RAG (Retrieval-Augmented Generation) och skript för dokumentflöden skapar jag den tekniska grundförståelse som krävs för att arbeta hands-on i IT-projekt.
        </p>
      </section>
    </div>
  );
}
