import React from 'react';

export interface HistoryItem {
  type: 'deposit' | 'withdraw';
  address: string;
  date: string;
}

interface HistoryModalProps {
  show: boolean;
  onClose: () => void;
  history: HistoryItem[];
}

const HistoryModal: React.FC<HistoryModalProps> = ({ show, onClose, history }) => {
  if (!show) return null;
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
        <h5 style={{ marginBottom: 16 }}>Deposit & Withdraw History</h5>
        {history.length === 0 ? (
          <div style={{ color: '#888', fontSize: 15 }}>No history yet.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {history.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 10, fontSize: 15 }}>
                <span style={{ fontWeight: 600, color: item.type === 'deposit' ? '#2979c9' : '#e5a443' }}>{item.type === 'deposit' ? 'Deposit' : 'Withdraw'}:</span>
                <span style={{ marginLeft: 8 }}>{item.address.length > 10 ? `${item.address.slice(0, 5)}...${item.address.slice(-5)}` : item.address}</span>
                <span style={{ float: 'right', color: '#888', fontSize: 13 }}>{item.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HistoryModal;
