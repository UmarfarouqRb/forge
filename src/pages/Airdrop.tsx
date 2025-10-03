import React from 'react';
import { FaParachuteBox } from 'react-icons/fa';

const Airdrop: React.FC = () => (
  <section className="container py-4" style={{ minHeight: 320 }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
      <FaParachuteBox size={64} color="#eddec8" style={{ marginBottom: 8 }} />
      <h2 style={{ color: '#eddec8', fontWeight: 700, fontSize: 32, marginBottom: 8 }}>Airdrop</h2>
      <p style={{ color: '#23272f', fontSize: 22, textAlign: 'center', maxWidth: 420 }}>
        Claim your airdrop rewards! Eligible users can receive exclusive tokens for participating in our ecosystem.
      </p>
      <button style={{ background: 'linear-gradient(90deg, #b39ddb 0%, #ede7f6 100%)', color: '#23272f', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 12, padding: '12px 36px', marginTop: 12, boxShadow: '0 2px 8px #b39ddb33', cursor: 'pointer' }}>
        Claim Airdrop
      </button>
    </div>
  </section>
);

export default Airdrop;
