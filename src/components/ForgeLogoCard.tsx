
import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const ForgeLogoCard: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const sidebarLogoSrc = theme === 'dark' ? '/forge-1.4.jpeg' : '/forge-2.4.png';
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, width: '100%', padding: '16px 0', borderRadius: 8, overflow: 'hidden' }}>
      <img src={sidebarLogoSrc} alt="Forge Logo" style={{ width: '90%', maxWidth: 180, height: 'auto', borderRadius: 24, margin: '32px 0 24px 0', objectFit: 'contain', boxShadow: '0 2px 12px #0002', background: 'transparent' }} />
    </div>
  );
};

export default ForgeLogoCard;
