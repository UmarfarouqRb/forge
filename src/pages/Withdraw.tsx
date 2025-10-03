import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Withdraw: React.FC = () => {
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="container py-4" style={{ maxWidth: 340, margin: '40px auto', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="card shadow-sm border-0 p-4" style={{ width: '100%', maxWidth: 320, position: 'relative' }}>
        <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: 12, right: 16, borderRadius: 10, background: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }} title="Close">&times;</button>
        <h4 className="mb-3 text-center">Withdraw</h4>
        <div className="mb-3">
          <label className="form-label" style={{ fontWeight: 600 }}>Withdrawal Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter withdrawal address"
            value={withdrawAddress}
            onChange={e => setWithdrawAddress(e.target.value)}
            style={{ fontSize: 15 }}
          />
        </div>
        <button
          className="btn btn-primary btn-sm w-100"
          style={{ fontSize: 15 }}
          onClick={() => {
            setWithdrawSuccess(true);
            setTimeout(() => setWithdrawSuccess(false), 2000);
            setWithdrawAddress('');
          }}
          disabled={!withdrawAddress}
        >
          Confirm Withdraw
        </button>
        {withdrawSuccess && (
          <div style={{ color: '#4caf50', fontSize: 14, marginTop: 10, textAlign: 'center' }}>Withdraw successful!</div>
        )}
      </div>
    </section>
  );
};

export default Withdraw;
