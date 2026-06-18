import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage';
import AvatarTestPage from './pages/AvatarTestPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/chat') || location.pathname.startsWith('/avatar');

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-50 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chat/:companionId" element={<ChatPage />} />
          <Route path="/avatar" element={<AvatarTestPage />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
