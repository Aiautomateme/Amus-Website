import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Costs from './pages/Costs';
import News from './pages/News';
import References from './pages/References';
import RoutePage from './pages/Route';
import Legal from './pages/Legal';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wie-zijn-wij" element={<WhoWeAre />} />
            <Route path="/kosten" element={<Costs />} />
            <Route path="/in-het-nieuws" element={<News />} />
            <Route path="/verwijzingen" element={<References />} />
            <Route path="/route" element={<RoutePage />} />
            <Route path="/klachtenregeling" element={<Legal />} />
            <Route path="/privacyverklaring" element={<Legal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

