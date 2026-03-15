import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Documentation = lazy(() => import('./pages/Documentation'));

function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <>
      {!isLoginPage && !isDashboardPage && <Header />}
      <Suspense fallback={<div className="loading-screen">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<TermsOfService />} />
          <Route path="/documentacao" element={<Documentation />} />
        </Routes>
      </Suspense>
      {!isLoginPage && !isDashboardPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <Layout />
      </Router>
    </HelmetProvider>
  );
}

export default App;
