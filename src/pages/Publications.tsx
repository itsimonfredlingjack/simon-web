import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Publications() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, []);

  const articles = [
    {
      id: 1,
      title: "Log 01: Data, Källkritik & Osäkerhet",
      date: "Data-analys",
      excerpt: "Att begära ut och omvandla osäker regional hälsodata till publika underlag. Tydlig redovisning av metodbegränsningar och brister i materialet."
    },
    {
      id: 2,
      title: "Log 02: Kris, Risk & Samordning",
      date: "Riskhantering",
      excerpt: "Beroendelogik i praktiken. Från nationell intensivvårdssamordning till uppföljning av trygghetsrutiner och incidentprocesser i skolan."
    },
    {
      id: 3,
      title: "Log 03: Offentlig Styrning",
      date: "Processförståelse",
      excerpt: "Arbete nära politisk beslutskedja. Revisionskritik, ansvarsfrihet och tillitsbaserad välfärdsstyrning – en strukturell kartläggning av hur beslut fattas."
    },
    {
      id: 4,
      title: "Log 04: Intressenter & Simulering",
      date: "Scenarioplanering",
      excerpt: "Att samordna motstridiga intressen. Utbildningssimuleringar där ekonomiska, miljömässiga och samhälleliga konsekvenser vägs mot varandra."
    },
    {
      id: 5,
      title: "Log 05: Flerformatsleverans under Press",
      date: "Produktion",
      excerpt: "350+ publiceringar. Evidens för att självständigt hantera hela kedjan: från otydligt uppdrag och informationsinhämtning till färdig paketering."
    },
    {
      id: 6,
      title: "Log 06: Teknisk Översättning",
      date: "Digitalisering",
      excerpt: "Att göra AI begripligt för rätt målgrupp. Ett spår som kombinerar teoretisk kommunikation med praktiska interna experiment inom RAG och automationsflöden."
    }
  ];

  return (
    <div className="page-content" style={{ minHeight: '100vh' }}>
      <div style={{ padding: '0 4rem', marginBottom: '4rem', maxWidth: '1000px' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Fältanteckningar</h1>
        <p className="hero-subtitle" style={{ color: 'var(--text-secondary)' }}>
          Det här arkivet bygger på över 350 publiceringar och operativa produktioner. De ska inte läsas som en ren journalistisk portfolio, utan som en bevisbank för förmågan att samla in information, förstå systemiska samband, värdera risker och genomföra leveranser i miljöer där flera intressenters krav möts.
        </p>
      </div>

      <div className="pub-grid" ref={containerRef}>
        {articles.map((article) => (
          <article key={article.id} className="pub-card">
            <div className="pub-date">{article.date}</div>
            <h2 className="pub-title">{article.title}</h2>
            <p className="pub-excerpt">{article.excerpt}</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to={`/publications/${article.id}`} className="copper-btn" style={{ padding: '0.25rem 1rem', fontSize: '0.75rem', display: 'inline-block' }}>Läs logg</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
