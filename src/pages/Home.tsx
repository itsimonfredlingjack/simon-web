import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
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
        <h1 className="hero-title">The Blueprint of Work</h1>
        <p className="hero-subtitle">
          Transforming complexity into efficient, elegant workflows. From journalism to IT management, bridging the gap between human structure and technical automation.
        </p>
        <div>
          <button className="copper-btn" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            Explore the System
          </button>
        </div>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginTop: '20vh' }}>
        <h2>Digitalisering börjar i röran före verktyget</h2>
        <p>
          I uppgifter som ändras, dokument som behöver hållas aktuella, information som borde hänga ihop men lever i olika system, och beslut som behöver fattas medan verkligheten fortsätter att röra sig — det är den typen av miljöer jag kommer ifrån.
        </p>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginLeft: 'auto', marginRight: '4rem', marginTop: '30vh' }}>
        <h2>Journalistiska Rötter</h2>
        <p>
          Jag började i journalistiken, med fältproduktion på SVT. Där handlar arbetet om att snabbt förstå en situation, hitta vad som faktiskt är relevant, prata med rätt människor, hantera nya besked och få ihop en leverans som håller.
        </p>
        <p>När information är splittrad blir arbetet långsamt. När ansvar är otydligt fastnar frågor mellan människor, dokument och system.</p>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginTop: '30vh' }}>
        <h2>Teknik som Möjliggörare</h2>
        <p>
          Mitt teknikintresse har dragit mig längre in i de frågorna. Jag utvecklar egna lösningar med automation och AI för att förstå vad som faktiskt går att göra med dagens verktyg: hur återkommande arbete kan avlastas, hur information kan bli lättare att använda.
        </p>
      </section>

      <section className="content-block" ref={addToRefs} style={{ marginLeft: 'auto', marginRight: '4rem', marginTop: '30vh', marginBottom: '40vh' }}>
        <h2>Skärningen</h2>
        <p>
          Min riktning finns i skärningen mellan verksamhet, teknik och genomförande: att förstå behoven, strukturera informationen, se vad tekniken faktiskt kan avlasta och bidra till att nya arbetssätt fungerar i praktiken.
        </p>
      </section>
    </div>
  );
}
