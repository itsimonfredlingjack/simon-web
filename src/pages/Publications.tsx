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
      title: "Log 01: Operativ Informationshantering",
      date: "Trafikverket",
      excerpt: "Lärdomar från minutoperativa informationsflöden. Att styra information mellan resenärer och personal när sekunder räknas."
    },
    {
      id: 2,
      title: "Log 02: 350+ Publiceringar",
      date: "SVT & GU",
      excerpt: "Från lös idé till färdig produktion. En arkitektur för innehåll, research och deadlinestyrd leverans."
    },
    {
      id: 3,
      title: "Log 03: Att Förstå AI och Verksamhet",
      date: "Göteborgs universitet",
      excerpt: "Hur man gör komplex forskning om AI i utbildning begriplig för rätt målgrupp utan att tappa djupet."
    },
    {
      id: 4,
      title: "Log 04: RAG & Dokumentflöden",
      date: "Automationsprojekt",
      excerpt: "Mina egna tekniska projekt. Att bygga system för att förstå mekaniken bakom AI-drivna dokumentflöden."
    },
    {
      id: 5,
      title: "Log 05: Fältarbete & Agilitet",
      date: "SVT Fältproduktion",
      excerpt: "Förmågan att snabbt ställa om planen, hitta nya vinklar och säkra leverans när verkligheten inte matchar kartan."
    },
    {
      id: 6,
      title: "Log 06: Informationsarkitektur",
      date: "Struktur",
      excerpt: "Att ta ostrukturerad data, isolerade dokument och spridda beslut och skapa en röd tråd för genomförande."
    }
  ];

  return (
    <div className="page-content" style={{ minHeight: '100vh' }}>
      <div style={{ padding: '0 4rem', marginBottom: '4rem', maxWidth: '1000px' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Fältanteckningar</h1>
        <p className="hero-subtitle" style={{ color: 'var(--text-secondary)' }}>
          Under min tid på SVT och Göteborgs universitet har jag producerat över 350 publiceringar – från tunga forskningsartiklar till snabba nyhetsformat. Det är inte bara texter, det är 350 kvitton på förmågan att starta, driva och avsluta projekt. Att gräva fram fakta, verifiera, paketera och publicera. Här samlar jag principer och lärdomar från skärningen mellan informationsflöden och teknik.
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
