import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestDetail from './pages/QuestDetail';
import Quest from './pages/Quest';
import { PrivyProvider } from '@privy-io/react-auth';
import Login, { UserProvider } from './providers/Login';
import Dashboard from './components/Dashboard';
import Profile from './pages/Profile';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import History from './pages/History';
import SwapBot from './pages/SwapBot';

import { createContext, useState, useEffect } from 'react';
import './App.css';
import './providers/Login.css';

export const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({ theme: 'dark', toggleTheme: () => {} });

function MainApp() {
  return <Dashboard />;
}

function App() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : 'dark';
  };
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <PrivyProvider appId="cmfxwno3e00cfju0d96v0z9vm">
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/app" element={<MainApp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/history" element={<History />} />
              <Route path="/quest" element={<Quest />} />
              <Route path="/quest/:slug" element={<QuestDetail />} />
              <Route path="/swap-bot" element={<SwapBot />} />
            </Routes>
          </Router>
        </UserProvider>
      </PrivyProvider>
    </ThemeContext.Provider>
  );
}

export default App;
