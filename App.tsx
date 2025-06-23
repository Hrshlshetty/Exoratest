import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import WhatWeDoPage from './components/pages/WhatWeDoPage';
import ProductsPage from './components/pages/ProductsPage';
import ProductDetailPage from './components/pages/ProductDetailPage';
// import InteractiveReportPage from './components/pages/InteractiveReportPage'; // Removed import
import SustainabilityPage from './components/pages/SustainabilityPage';
import TeamPage from './components/pages/TeamPage';
// import JoinOurTeamPage from './components/pages/JoinOurTeamPage'; // Removed import
import ContactUsPage from './components/pages/ContactUsPage';
import { APP_NAME } from './constants';

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  React.useEffect(() => {
    document.title = APP_NAME;
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="process" element={<WhatWeDoPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
          {/* <Route path="report" element={<InteractiveReportPage />} /> */} {/* Removed route */}
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="team" element={<TeamPage />} />
          {/* <Route path="careers" element={<JoinOurTeamPage />} /> */} {/* Removed route */}
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="*" element={<HomePage />} /> {/* Fallback to home */}
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
