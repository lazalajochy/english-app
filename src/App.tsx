import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import './App.css';

function App() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <GoogleOAuthProvider clientId="881936334520-pv1s2id845gef178essfns651m2r2mp0.apps.googleusercontent.com">
      <HashRouter>
        <Routes>
          <Route path="/" element={!user ? <Home /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </GoogleOAuthProvider>
  );
}

export default App;