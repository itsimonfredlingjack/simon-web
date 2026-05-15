import { useEffect, useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fieldNotes } from '../content/evidence';
import './Article.css';

gsap.registerPlugin(ScrollTrigger);

export default function Article() {
  const { id } = useParams();
  const progressRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const note = fieldNotes.find(n => n.id === id);

  useEffect(() => {
    if (!note) return;

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
  }, [note]);

  if (!note) {
    return <Navigate to="/publications" replace />;
  }

  return (
    <div className="article-container">
      <div className="article-progress-container">
        <div className="article-progress-bar" ref={progressRef} />
      </div>

      <header className="article-header" ref={headerRef}>
        <Link to="/publications" className="article-back">
          <ArrowLeft size={16} />
          Tillbaka till arkivet
        </Link>
        <div className="article-meta">{note.logLabel} • {note.publicationDate}</div>
        <h1 className="article-title">{note.title}</h1>
        <p className="article-lead">
          {note.subtitle}
        </p>
      </header>

      <main className="article-content" ref={contentRef}>
        <p>
          {note.whatThisShows}
        </p>
        
        <h2>Evidens & Konkreta Bevis</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
          {note.evidencePoints.map((point, i) => (
            <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
          ))}
        </ul>

        <h2>Avgränsning</h2>
        <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          {note.notClaiming.map((claim, i) => (
            <li key={i} style={{ marginBottom: '0.5rem' }}>{claim}</li>
          ))}
        </ul>

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--copper)' }}>
          <h3 style={{ marginTop: 0, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>
            Källinformation
          </h3>
          <p style={{ margin: '0.5rem 0', fontWeight: 500 }}>{note.sourcePublication}</p>
          {note.exactCredit && (
            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Kreditering: {note.exactCredit}</p>
          )}
          {note.sourceUrl && (
            <a 
              href={note.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--copper)', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'var(--font-sans)' }}
            >
              Verifiera originalkälla <ExternalLink size={14} />
            </a>
          )}
        </div>
      </main>

      <footer className="article-footer">
        <Link to="/publications" className="copper-btn" style={{ padding: '1rem 3rem' }}>
          Tillbaka till arkivet
        </Link>
      </footer>
    </div>
  );
}
