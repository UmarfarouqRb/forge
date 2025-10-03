import React from 'react';

interface SuccessModalProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

import { useEffect } from 'react';
import { MdCheckCircle } from 'react-icons/md';
const SuccessModal: React.FC<SuccessModalProps> = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);
  if (!show) return null;
  return (
    <div style={{
      position: 'fixed',
      left: '50%',
      bottom: '48px',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      minWidth: 260,
      maxWidth: 340,
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px #0003',
      padding: '20px 32px 20px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontSize: 16,
      fontWeight: 500,
      color: '#23272f',
      animation: 'slideUpFadeIn 0.4s',
    }}>
  <MdCheckCircle style={{ fontSize: 32, color: '#4caf50', flexShrink: 0, display: 'flex', alignItems: 'center' }} />
      <span style={{ flex: 1 }}>{message}</span>
      <button onClick={onClose} style={{ border: 'none', background: 'none', fontSize: 22, cursor: 'pointer', color: '#888', marginLeft: 8 }} title="Close">&times;</button>
      <style>{`
        @keyframes slideUpFadeIn {
          from { opacity: 0; transform: translateY(40px) translateX(-50%); }
          to { opacity: 1; transform: translateY(0) translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default SuccessModal;
