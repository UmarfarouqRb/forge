import React from 'react';

interface WalletPopupProps {
  address: string;
  onClose: () => void;
}

const WalletPopup: React.FC<WalletPopupProps> = ({ address, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.25)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, minWidth: 320, maxWidth: 400, boxShadow: '0 2px 16px #0002', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 8, right: 12, border: 'none', background: 'none', fontSize: 22, cursor: 'pointer' }}>&times;</button>
        <h5 style={{ marginBottom: 16 }}>Wallet Address</h5>
        <div style={{ fontSize: 16, wordBreak: 'break-all', color: '#23272f', marginBottom: 12 }}>{address}</div>
      </div>
    </div>
  );
};

export default WalletPopup;
