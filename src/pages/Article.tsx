import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Article.css';

gsap.registerPlugin(ScrollTrigger);

export default function Article() {
  const { id } = useParams();
  const progressRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll To Top on mount
    window.scrollTo(0, 0);

    // Initial fade in
    if (headerRef.current && contentRef.current) {
      gsap.fromTo(
        [headerRef.current.children, contentRef.current.children],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" }
      );
    }

    // Reading Progress Bar
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2
        }
      });
    }
  }, []);

  // In a real app, you'd fetch the article based on `id`
  // Here we use static content for the prototype
  return (
    <div className="article-container">
      <div className="article-progress-container">
        <div className="article-progress-bar" ref={progressRef} />
      </div>

      <header className="article-header" ref={headerRef}>
        <Link to="/publications" className="article-back">
          <ArrowLeft size={16} />
          Back to Archives
        </Link>
        <div className="article-meta">Field Notes • Oct 2023</div>
        <h1 className="article-title">Digitalisering börjar i röran före verktyget</h1>
        <p className="article-lead">
          När gamla arbetssätt möter nya verktyg uppstår glapp som någon behöver kunna se, formulera och ta vidare. Det handlar inte om mjukvaran, det handlar om människorna som använder den.
        </p>
      </header>

      <main className="article-content" ref={contentRef}>
        <p>
          I uppgifter som ändras, dokument som behöver hållas aktuella, information som borde hänga ihop men lever i olika system, och beslut som behöver fattas medan verkligheten fortsätter att röra sig — det är den typen av miljöer jag kommer ifrån.
        </p>
        <p>
          Jag började i journalistiken, med fältproduktion på SVT. Där handlar arbetet om att snabbt förstå en situation, hitta vad som faktiskt är relevant, prata med rätt människor, hantera nya besked och få ihop en leverans som håller. Ibland på en dag. Ibland över längre tid. Ofta med flera parallella delar som måste röra sig samtidigt.
        </p>
        
        <h2>Informationens Fragmentering</h2>
        <p>
          När information är splittrad blir arbetet långsamt. När ansvar är otydligt fastnar frågor mellan människor, dokument och system.
        </p>
        
        <blockquote>
          "Nya verktyg blir användbara först när människor förstår varför de behövs, hur de påverkar arbetet och vad som krävs för att de ska fungera i vardagen."
        </blockquote>

        <p>
          Mitt teknikintresse har dragit mig längre in i de frågorna. Jag utvecklar egna lösningar med automation och AI för att förstå vad som faktiskt går att göra med dagens verktyg: hur återkommande arbete kan avlastas, hur information kan bli lättare att använda och hur kvalitet, säkerhet och personuppgifter behöver hanteras från början.
        </p>

        <h2>Skärningspunkten</h2>
        <p>
          Men ny teknik är inte ensamt lösningen på verksamheters nutida utmaningar. Kommunikation får därför inte bli en plan som hamnar bredvid projektet. Den behöver vara en del av genomförandet.
        </p>
        <p>
          Min riktning finns i skärningen mellan verksamhet, teknik och genomförande: att förstå behoven, strukturera informationen, se vad tekniken faktiskt kan avlasta och bidra till att nya arbetssätt fungerar i praktiken.
        </p>
      </main>

      <footer className="article-footer">
        <Link to="/publications" className="copper-btn" style={{ padding: '1rem 3rem' }}>
          Return to Archives
        </Link>
      </footer>
    </div>
  );
}
