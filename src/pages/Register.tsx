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

  // Extract unique years for the counter
  const uniqueYears = [...new Set(registerData.map(e => e.date?.substring(0, 4)).filter(Boolean))].sort().reverse();

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
            <span>{registerData.length} POSTER</span>
          </div>
          <h1 className="article-title">Fullständig Publiceringslista</h1>
          <p className="article-subtitle" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', lineHeight: 1.7 }}>
            Varje rad nedan representerar ett publicerat arbete med Simon Fredling i byline eller kredit. Registret är spårat till originalkälla, deduplicerat och täcker perioden {uniqueYears[uniqueYears.length - 1]}–{uniqueYears[0]}. Det mesta härrör från SVT Nyheter Jönköping.
          </p>
        </header>

        {/* Search */}
        <div style={{ marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Sök rubrik, källa eller datum..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-mono)',
              borderRadius: '0',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent-copper)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <div style={{ 
            marginTop: '0.5rem', 
            fontSize: '0.75rem', 
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)'
          }}>
            Visar {filteredData.length} av {registerData.length} poster
          </div>
        </div>

        {/* Table Header */}
        <div className="register-table-header">
          <span>Datum</span>
          <span>Rubrik</span>
          <span className="register-col-source">Källa</span>
          <span className="register-col-link"></span>
        </div>

        {/* Table Rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredData.map((entry, idx) => (
            <div 
              key={entry.id} 
              className="register-row"
              style={{ 
                cursor: entry.url && entry.url !== 'original_url_not_found' ? 'pointer' : 'default',
                background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212, 137, 79, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)';
              }}
              onClick={() => {
                if (entry.url && entry.url !== 'original_url_not_found') {
                  window.open(entry.url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Date */}
              <span style={{ 
                fontSize: '0.8rem', 
                fontFamily: 'var(--font-mono)', 
                color: 'var(--text-secondary)',
                whiteSpace: 'nowrap'
              }}>
                {entry.date || '—'}
              </span>

              {/* Title */}
              <span style={{ 
                fontSize: '0.95rem', 
                color: 'var(--text-primary)',
                lineHeight: 1.4
              }}>
                {entry.title}
              </span>

              {/* Source */}
              <span className="register-col-source" style={{ 
                fontSize: '0.8rem', 
                color: 'var(--text-secondary)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {entry.source}
              </span>

              {/* Link icon */}
              <span className="register-col-link" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {entry.url && entry.url !== 'original_url_not_found' && (
                  <ExternalLink size={14} style={{ color: 'var(--accent-copper)', opacity: 0.6 }} />
                )}
              </span>
            </div>
          ))}
          {filteredData.length === 0 && (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              Inga resultat för "{searchTerm}"
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
