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
      {!isArticleView && <a href="mailto:hello@example.com" className="copper-btn">Starta Dialog</a>}
    </nav>
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
