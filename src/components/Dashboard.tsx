import React, { Suspense, lazy, useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { usePrivy } from '@privy-io/react-auth';
import UserProfile from './UserProfile';
import ForgeLogoCard from './ForgeLogoCard';
import sidebarIcons from './SidebarIcons';
import Navbar from './Navbar';
import { FaDiscord, FaStar, FaQuestionCircle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Dashboard.css';
import Login from '../providers/Login';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import FAQ from '../pages/FAQ';


const pageRoutes = [
  { name: 'Project', path: '/dashboard/project', component: lazy(() => import('../pages/Project')) },
  { name: 'Quest', path: '/dashboard/quest', component: lazy(() => import('../pages/Quest')) },
  { name: 'swap', path: '/dashboard/swap', component: lazy(() => import('../pages/Swap')) },
  { name: 'bridge', path: '/dashboard/bridge', component: lazy(() => import('../pages/Bridge')) },
  { name: 'Perp', path: '/dashboard/perp', component: lazy(() => import('../pages/Perp')) },
  { name: 'NFTs', path: '/dashboard/nfts', component: lazy(() => import('../pages/NFTs')) },
  { name: 'Onchain', path: '/dashboard/onchain', component: lazy(() => import('../pages/Onchain')) },
  { name: 'Airdrop', path: '/dashboard/airdrop', component: lazy(() => import('../pages/Airdrop')) },
];


const Dashboard: React.FC = () => {

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { ready, authenticated } = usePrivy();
  const navigate = useNavigate();
  const handleNavIconClick = () => setSidebarOpen((open) => !open);
  const { theme } = useContext(ThemeContext);
  // Choose logo for loading state
  const loadingLogoSrc = theme === 'dark' ? '/forge-1.0.jpg' : '/forge-2.2.png';

  // Find the current page based on the route
  const currentPage = pageRoutes.find(r => location.pathname.startsWith(r.path)) || pageRoutes[0];

  if (!ready) {
    return (
      <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <div style={{  borderRadius: 32, padding: 24, boxShadow: '0 2px 12px #0001', marginTop: 270 }}>
            <img src={loadingLogoSrc} alt="Loading Forge" className="pulse" style={{ width: 160, height: 160, display: 'block', background: 'transparent', borderRadius: 24 }} />
          </div>
        </div>
        <Login />
      </div>
    );
  }

  if (!authenticated) {
    return <Login />;
  }

  return (
    <div className={`dashboard-bg ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Navbar onNavIconClick={handleNavIconClick} />
      <div className="dashboard-main-flex">
        {sidebarOpen && (
          <nav className="dashboard-sidebar d-flex flex-column justify-content-between">
            <div className="d-flex flex-column align-items-center">
              <ForgeLogoCard />
            </div>
            <ul className="nav flex-column" style={{ paddingTop: 0, marginTop: 0 }}>
              {pageRoutes.map((route) => (
                <li className="nav-item" key={route.name}>
                  <button
                    className={`nav-link btn btn-link w-100 text-start d-flex align-items-center${currentPage.name === route.name ? ' active fw-bold' : ''}`}
                    onClick={() => navigate(route.path)}
                    style={{ gap: 10 }}
                  >
                    <span style={{ minWidth: 22, display: 'inline-flex', justifyContent: 'center' }}>{sidebarIcons[route.name]}</span>
                    <span style={{ fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                      {route.name}
                      {route.name === 'Perp' && (
                        <>
                          <FaStar title="New" style={{ color: '#ffb300', fontSize: 16, marginLeft: 2, verticalAlign: 'middle' }} />
                          <span style={{ color: '#ffb300', fontWeight: 700, fontSize: 13, marginLeft: 2, letterSpacing: 1 }}>NEW</span>
                        </>
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="d-flex flex-column align-items-center justify-content-end" style={{ flex: 1, width: '100%' }}>
              <div style={{ width: '100%', marginTop: 12, display: 'flex', justifyContent: 'center' }}>
                <a
                  href="/profile"
                  className="dashboard-profile-link"
                  style={{ width: 'auto', display: 'block', lineHeight: 0, background: 'none', boxShadow: 'none' }}
                  onMouseOver={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <UserProfile />
                </a>
              </div>
              <button
                className="nav-link btn btn-link w-100 text-start d-flex align-items-center mt-2"
                style={{ gap: 10, maxWidth: 220, margin: '0 auto' }}
                onClick={() => navigate('/faq')}
              >
                <span style={{ minWidth: 22, display: 'inline-flex', justifyContent: 'center' }}><FaQuestionCircle size={18} /></span>
                <span style={{ fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 4 }}>FAQ?</span>
              </button>
              <Routes>
                <Route path="/faq" element={<FAQ />} />
              </Routes>
              <div style={{ width: '100%', marginTop: 16, marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 2, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme === 'dark' ? 'var(--text-secondary, #bdbdbd)' : '#1a1a1a',
                      transition: 'color 0.2s',
                    }}
                  >
                    <FaXTwitter size={17} />
                  </a>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme === 'dark' ? '#7289da' : '#5865F2',
                      transition: 'color 0.2s',
                    }}
                  >
                    <FaDiscord size={17} />
                  </a>
                  <a
                    href="/start.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme === 'dark' ? '#a47be2' : '#a47be2',
                      transition: 'color 0.2s',
                      fontSize: 22
                    }}
                    title="Landing Page"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L2 9l10 6 10-6-10-6zm0 2.18L18.09 9 12 12.82 5.91 9 12 5.18zM2 17v-7l10 6 10-6v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2z" fill="currentColor"/></svg>
                  </a>
                  <a
                    href="https://warpcast.com/forge"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme === 'dark' ? '#5c4bff' : '#5c4bff',
                      transition: 'color 0.2s',
                      fontSize: 22
                    }}
                    title="Farcaster"
                  >
                    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#8B5CF6"/><path d="M16.01 7.5c-4.7 0-8.51 3.81-8.51 8.5 0 4.7 3.81 8.5 8.51 8.5 4.69 0 8.5-3.8 8.5-8.5 0-4.69-3.81-8.5-8.5-8.5zm0 15.5c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm2.29-10.29a1 1 0 0 0-1.42 0l-2.29 2.3-2.29-2.3a1 1 0 1 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 1 0 1.42 1.42l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42-1.42l-2.3-2.29 2.3-2.29a1 1 0 0 0 0-1.42z" fill="#fff"/></svg>
                  </a>
                </div>
                <div
                  style={{
                    fontSize: '0.62rem',
                    color: theme === 'dark' ? 'var(--text-secondary, #bdbdbd)' : '#888',
                    marginBottom: 2,
                    lineHeight: 1.1,
                    textAlign: 'center',
                    transition: 'color 0.2s',
                  }}
                >
                  © {new Date().getFullYear()} — right for using our app
                </div>
              </div>
            </div>
          </nav>
        )}
        <main className="flex-grow-1 p-2" style={{ overflowY: 'auto', maxHeight: '100vh', paddingBottom: 4 }}>
          <Routes>
            {pageRoutes.map(route => (
              <Route key={route.path} path={route.path.replace('/dashboard', '')} element={<route.component />} />
            ))}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
