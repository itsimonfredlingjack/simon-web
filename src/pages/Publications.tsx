import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { fieldNotes } from '../content/evidence';

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

  return (
    <div className="page-content" style={{ minHeight: '100vh' }}>
      <div style={{ padding: '0 4rem', marginBottom: '4rem', maxWidth: '1000px' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Fältanteckningar</h1>
        <p className="hero-subtitle" style={{ color: 'var(--text-secondary)' }}>
          Fältanteckningarna nedan är ett urval. De är inte ett komplett arkiv, utan sex konkreta exempel som visar olika typer av informationsarbete: data, kris, källkritik, fältarbete, organisation och researchdisciplin.
        </p>
      </div>

      <div className="pub-grid" ref={containerRef}>
        {fieldNotes.map((note) => (
          <article key={note.id} className="pub-card">
            <div className="pub-date">{note.logLabel}</div>
            <h2 className="pub-title">{note.title}</h2>
            <p className="pub-excerpt">{note.whatThisShows}</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to={`/publications/${note.id}`} className="copper-btn" style={{ padding: '0.25rem 1rem', fontSize: '0.75rem', display: 'inline-block' }}>Läs logg</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
