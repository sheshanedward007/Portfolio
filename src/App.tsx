import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { FcsCaseStudy } from './pages/FcsCaseStudy';
import { NestleConnectCaseStudy } from './pages/NestleConnectCaseStudy';
import { AuraCaseStudy } from './pages/AuraCaseStudy';
import { About } from './pages/About';

// Scroll to top helper on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const basename = import.meta.env.DEV ? '/' : '/Portfolio';

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark text-neutral-900 dark:text-neutral-100 font-sans transition-colors duration-200">
        <Nav />
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/fcs" element={<FcsCaseStudy />} />
            <Route path="/work/nestle-connect" element={<NestleConnectCaseStudy />} />
            <Route path="/work/aura" element={<AuraCaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
