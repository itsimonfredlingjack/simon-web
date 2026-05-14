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
      title: "Digitalisering börjar i röran före verktyget",
      date: "Oct 2023",
      excerpt: "När gamla arbetssätt möter nya verktyg uppstår glapp som någon behöver kunna se, formulera och ta vidare."
    },
    {
      id: 2,
      title: "Från Fältproduktion till IT-ledning",
      date: "Jun 2023",
      excerpt: "Att snabbt förstå en situation, hitta vad som faktiskt är relevant och hantera nya besked under press."
    },
    {
      id: 3,
      title: "Teknik som Möjliggörare, Inte Lösning",
      date: "Jan 2023",
      excerpt: "Nya verktyg blir användbara först när människor förstår varför de behövs och hur de påverkar arbetet."
    },
    {
      id: 4,
      title: "Kommunikation i Genomförandet",
      date: "Nov 2022",
      excerpt: "Kommunikation får inte bli en plan som hamnar bredvid projektet. Den behöver vara en del av det."
    }
  ];

  return (
    <div className="page-content" style={{ minHeight: '100vh' }}>
      <div style={{ padding: '0 4rem', marginBottom: '2rem' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Archives</h1>
        <p className="hero-subtitle">Articles, thoughts, and field notes from the intersection of technology and human systems.</p>
      </div>

      <div className="pub-grid" ref={containerRef}>
        {articles.map((article) => (
          <article key={article.id} className="pub-card">
            <div className="pub-date">{article.date}</div>
            <h2 className="pub-title">{article.title}</h2>
            <p className="pub-excerpt">{article.excerpt}</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to={`/publications/${article.id}`} className="copper-btn" style={{ padding: '0.25rem 1rem', fontSize: '0.75rem', display: 'inline-block' }}>Read</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
