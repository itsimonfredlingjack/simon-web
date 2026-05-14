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
      title: "Signal Before Structure",
      date: "Log 01",
      excerpt: "Innan något kan organiseras behöver någon hitta vad som faktiskt betyder något."
    },
    {
      id: 2,
      title: "Reality Moves",
      date: "Log 02",
      excerpt: "Planen håller aldrig helt. Arbetet behöver tåla nya besked, brutna antaganden och människor som ändrar förutsättningarna."
    },
    {
      id: 3,
      title: "The Work Behind the Output",
      date: "Log 03",
      excerpt: "350+ publicerade leveranser är inte en siffra om innehåll. Det är spår av planering, omdöme, prioritering och genomförande."
    },
    {
      id: 4,
      title: "Systems Have People in Them",
      date: "Log 04",
      excerpt: "Tekniska flöden fungerar bara när människorna runt dem förstår ansvar, information och nästa steg."
    },
    {
      id: 5,
      title: "From Noise to Next Step",
      date: "Log 05",
      excerpt: "Bra arbete handlar ofta om att göra nästa steg tydligt innan allt är perfekt utrett."
    },
    {
      id: 6,
      title: "Built in the Mess",
      date: "Log 06",
      excerpt: "Det mesta värdefulla arbetet sker innan någon har gett det ett snyggt namn."
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
