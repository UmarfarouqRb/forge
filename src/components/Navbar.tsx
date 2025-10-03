import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { FaBars, FaBell } from 'react-icons/fa';
import { UserContext } from '../providers/Login';

interface NavbarProps {
  onNavIconClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavIconClick }) => {
  const user = useContext(UserContext) as {
    twitterHandle?: string;
    profileImage?: string;
    email?: string;
    wallet?: string;
    googleName?: string;
    googleEmail?: string;
  } | null;

  // Unify display logic for all login types
  let displayName = 'User Name';
  let displayImage = 'https://ui-avatars.com/api/?name=User&background=random';
  if (user) {
    if (user.twitterHandle) {
      displayName = user.twitterHandle;
      displayImage = user.profileImage || displayImage;
    } else if (user.email) {
      displayName = user.email.split('@')[0];
      displayImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random`;
    } else if (user.googleName || user.googleEmail) {
      displayName = user.googleName || user.googleEmail || displayName;
      displayImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random`;
    }
  }

  const { theme } = useContext(ThemeContext);
  const logoSrc = theme === 'dark' ? '/forge-1.4.jpeg' : '/forge-2.4.png';
  return (
    <nav style={{
      width: '100%',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--bg-card)',
      color: 'var(--text)',
      borderBottom: '1px solid var(--border)',
      padding: '0 1rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: 'var(--text)' }}>
        <FaBars size={22} style={{ cursor: 'pointer', color: 'var(--text)' }} onClick={onNavIconClick} />
        <img src={logoSrc} alt="Forge Logo" style={{ height: 48, width: 'auto', marginLeft: 8, borderRadius: 12 }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <FaBell size={22} style={{ color: 'var(--text)', cursor: 'pointer' }} title="Notifications" />
        <a href="/profile" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src={displayImage}
            alt={displayName}
            style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover', background: 'var(--bg-card)' }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
