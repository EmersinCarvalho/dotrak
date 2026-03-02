import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/global.css';

function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout />
      </Router>
    </HelmetProvider>
  );
}

export default App;
