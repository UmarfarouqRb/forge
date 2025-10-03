import React, { Suspense, lazy, useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { usePrivy } from '@privy-io/react-auth';
import UserProfile from './UserProfile';
import ForgeLogoCard from './ForgeLogoCard';
import sidebarIcons from './SidebarIcons';
import Navbar from './Navbar';
import { FaDiscord, FaStar } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Dashboard.css';
import Login from '../providers/Login';

const pageNames = ['Project', 'Quest', 'swap', 'bridge', 'Perp', 'NFTs', 'Onchain', 'Airdrop'] as const;
type PageName = typeof pageNames[number];

const lazyComponents: Record<PageName, React.LazyExoticComponent<React.FC>> = {
  Project: lazy(() => import('../pages/Project')),
  Quest: lazy(() => import('../pages/Quest')),
  swap: lazy(() => import('../pages/Swap')),
  bridge: lazy(() => import('../pages/Bridge')),
  Perp: lazy(() => import('../pages/Perp')),
  NFTs: lazy(() => import('../pages/NFTs')),
  Onchain: lazy(() => import('../pages/Onchain')),
  Airdrop: lazy(() => import('../pages/Airdrop')),
};


const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState<PageName>('Project');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const SelectedComponent = lazyComponents[selected];
  const { ready, authenticated } = usePrivy();

  const handleNavIconClick = () => setSidebarOpen((open) => !open);

  const { theme } = useContext(ThemeContext);
  // Choose logo for loading state
  const loadingLogoSrc = theme === 'dark' ? '/forge-1.0.jpg' : '/forge-2.2.png';

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
          {pageNames.map((name) => (
            <li className="nav-item" key={name}>
              <button
                className={`nav-link btn btn-link w-100 text-start d-flex align-items-center${selected === name ? ' active fw-bold' : ''}`}
                onClick={() => setSelected(name)}
                style={{ gap: 10 }}
              >
                <span style={{ minWidth: 22, display: 'inline-flex', justifyContent: 'center' }}>{sidebarIcons[name]}</span>
                <span style={{ fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {name}
                  {name === 'Perp' && (
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
              <div style={{ width: '100%', marginTop: 32, display: 'flex', justifyContent: 'center' }}>
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
          <Suspense fallback={null}>
            <SelectedComponent />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
