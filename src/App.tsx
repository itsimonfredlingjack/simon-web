import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Article from './pages/Article';
import Register from './pages/Register';
import BlueprintBackground from './components/BlueprintBackground';

function Navigation() {
  const location = useLocation();
  
  // Hide main nav links on article reading view to minimize distraction
  const isArticleView = location.pathname.startsWith('/publications/');

  return (
    <nav className="navbar" style={{ background: isArticleView ? 'transparent' : undefined, padding: isArticleView ? '1.5rem 2rem' : undefined }}>
      <Link to="/" className="logo">Simon_</Link>
      {!isArticleView && (
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>The Blueprint</Link>
          <Link to="/publications" className={`nav-link ${location.pathname === '/publications' ? 'active' : ''}`}>Fältanteckningar</Link>
          <Link to="/register" className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}>Publiceringslista</Link>
        </div>
      )}
      {!isArticleView && <a href="mailto:itsimonfredlingjack@gmail.com" className="copper-btn">Kontakt</a>}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-brand">Simon_</div>
        <p className="footer-tagline">
          Struktur, signal och leverans. Jag arbetar där uppdrag är otydliga och någon behöver göra dem genomförbara.
        </p>
      </div>
      <div className="footer-links">
        <a href="mailto:itsimonfredlingjack@gmail.com" className="footer-link">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          E-post
        </a>
        <a href="https://www.linkedin.com/in/simonfredlingjack/" target="_blank" rel="noopener noreferrer" className="footer-link">
          <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/itsimonfredlingjack" target="_blank" rel="noopener noreferrer" className="footer-link">
          <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          GitHub
        </a>
      </div>
    </footer>
  );
}

function MainLayout() {
  const location = useLocation();
  const isArticleView = location.pathname.startsWith('/publications/');

  return (
    <div className="app-container">
      <Navigation />
      {!isArticleView && (
        <BlueprintBackground />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/:id" element={<Article />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
