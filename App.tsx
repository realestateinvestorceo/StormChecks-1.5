import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import WhatWeFund from './pages/WhatWeFund';
import StormMonitoring from './pages/StormMonitoring';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

declare global {
  interface Window {
    Intercom: any;
  }
}

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    if (window.Intercom) {
      window.Intercom('boot', {
        api_base: 'https://api-iam.intercom.io',
        app_id: 'onchtmjc',
      });
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/what-we-fund" element={<WhatWeFund />} />
          <Route path="/storm-monitoring" element={<StormMonitoring />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
