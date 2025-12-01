import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { TopicPage } from './pages/TopicPage';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fundamentals" element={<TopicPage pageId="fundamentals" />} />
          <Route path="/stats" element={<TopicPage pageId="stats" />} />
          <Route path="/cars" element={<TopicPage pageId="cars" />} />
          <Route path="/competitive" element={<TopicPage pageId="competitive" />} />
          <Route path="/modes" element={<TopicPage pageId="modes" />} />
          <Route path="/mechanics" element={<TopicPage pageId="mechanics" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;