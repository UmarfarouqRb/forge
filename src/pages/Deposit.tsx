import React, { useContext, useState } from 'react';
import { UserContext } from '../providers/Login';
import { FaRegCopy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Deposit: React.FC = () => {
  const user = useContext(UserContext);
  const [copied, setCopied] = useState(false);
  const [network, setNetwork] = useState('Monad');
  const networks = ['Monad', 'Ethereum', 'Binance Smart Chain'];
  const navigate = useNavigate();
  return (
    <section className="container py-4" style={{ maxWidth: 340, margin: '40px auto', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div className="card shadow-sm border-0 p-4" style={{ width: '100%', maxWidth: 320, position: 'relative', borderRadius: 18, boxShadow: '0 4px 24px #0001' }}>
        <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: 12, right: 16, borderRadius: 10, background: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }} title="Close">&times;</button>
        <h4 className="mb-3 text-center">Deposit</h4>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: 600 }}>Wallet Address</label>
          <div style={{ display: 'flex', alignItems: 'center', background: '#f5f5f7', borderRadius: 8, padding: '8px 12px', fontSize: 15, color: '#23272f', wordBreak: 'break-all' }}>
            <span style={{ flex: 1 }}>{user?.wallet || 'No wallet found'}</span>
            {user?.wallet && (
              <FaRegCopy
                style={{ cursor: 'pointer', marginLeft: 8 }}
                title="Copy address"
                onClick={() => {
                  navigator.clipboard.writeText(user.wallet);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1200);
                }}
              />
            )}
            {copied && <span style={{ color: '#4caf50', fontSize: 13, marginLeft: 6 }}>Copied!</span>}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: 600 }}>Select Network</label>
          <select
            className="form-select"
            value={network}
            onChange={e => setNetwork(e.target.value)}
            style={{ fontSize: 15, borderRadius: 8,  }}
          >
            {networks.map(net => (
              <option key={net} value={net}>{net}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default Deposit;
