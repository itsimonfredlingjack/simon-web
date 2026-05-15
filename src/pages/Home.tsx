import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { proofMetrics } from '../content/evidence';

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
        <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <p style={{ 
            color: 'var(--copper)', 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em',
            marginBottom: '1rem',
            fontWeight: 500
          }}>
            Ett urval av professionella uppdrag och publiceringar, spårade till originalkälla.
          </p>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '1.5rem 0'
          }}>
            {proofMetrics.map((metric, i) => (
              <div key={i} style={{ flex: '1 1 200px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {metric.link ? (
                    <Link to={metric.link} style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--copper)' }}>
                      {metric.value}
                    </Link>
                  ) : (
                    metric.value
                  )}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--copper)', marginBottom: '0.25rem' }}>
                  {metric.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {metric.qualifier}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button className="copper-btn" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Utforska systemet
          </button>
        </div>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginTop: '10vh', maxWidth: '1000px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h2>Mellan verksamhet och teknik</h2>
            <p>
              Jag är varken en renodlad utvecklare eller en traditionell kommunikatör. Jag är en analytisk, genomförandeorienterad LIA-kandidat inom IT-projektledning. 
            </p>
            <p>
              Min styrka är att snabbt sätta mig in i komplexa verksamheter, prata med flera aktörer, värdera information och leverera ett tydligt underlag. Jag förstår teknik tillräckligt väl för att vara den kritiska översättaren mellan verksamhetens behov och IT-sidans leverans.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Dekorativ ram i blueprint-stil */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              width: '40px',
              height: '40px',
              borderTop: '1px solid var(--copper)',
              borderLeft: '1px solid var(--copper)',
              zIndex: 1
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              right: '-10px',
              width: '40px',
              height: '40px',
              borderBottom: '1px solid var(--copper)',
              borderRight: '1px solid var(--copper)',
              zIndex: 1
            }}></div>
            <img 
              src="/simon.jpg" 
              alt="Simon Fredling Jack" 
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '1/1',
                objectFit: 'cover',
                filter: 'grayscale(100%) contrast(1.1)', // Gör bilden svartvit för att passa blueprint-temat (kan tas bort)
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'block',
                position: 'relative',
                zIndex: 2
              }} 
            />
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '-2rem',
              transform: 'rotate(-90deg)',
              transformOrigin: 'bottom left',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              zIndex: 3
            }}>
              ID: SF-2026
            </div>
          </div>
        </div>
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
