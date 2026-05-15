import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { registerData } from '../content/registerData';
import { useEffect, useState } from 'react';
import './Article.css';

export default function Register() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = registerData.filter(entry => 
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.date.includes(searchTerm)
  );

  return (
    <div className="article-page">
      <nav className="article-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          <span>Tillbaka till start</span>
        </Link>
      </nav>

      <main className="article-content">
        <header className="article-header">
          <div className="article-meta">
            <span>PUBLICERAT REGISTER</span>
            <span className="meta-divider">•</span>
            <span>350+ POSTER</span>
          </div>
          <h1 className="article-title">Fullständig Publiceringslista</h1>
          <p className="article-subtitle">
            Ett komplett, deduplicerat register över spårbara publiceringar och produktioner, med tyngdpunkt på perioden 2018–2022.
          </p>
        </header>

        <div style={{ marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Sök rubrik, källa eller datum..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              borderRadius: '4px',
              outline: 'none'
            }}
          />
        </div>

        <div className="register-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredData.map(entry => (
            <div key={entry.id} style={{ 
              padding: '1.5rem', 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.4 }}>
                  {entry.title}
                </h3>
                {entry.url && entry.url !== 'original_url_not_found' && (
                  <a 
                    href={entry.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--copper)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', textDecoration: 'none' }}
                  >
                    <span>Länk</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <span><strong>Datum:</strong> {entry.date || 'Okänt datum'}</span>
                <span><strong>Källa:</strong> {entry.source}</span>
                <span><strong>Byline/Kredit:</strong> {entry.byline}</span>
              </div>
            </div>
          ))}
          {filteredData.length === 0 && (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              Inga resultat för "{searchTerm}"
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
