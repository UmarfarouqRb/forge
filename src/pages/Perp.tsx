import React from 'react';
import { FaStar } from 'react-icons/fa';

const Perp: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <h2 style={{ fontWeight: 700, margin: 0 }}>Perpetuals (Perps)</h2>
      <FaStar title="New" style={{ color: '#ffb300', fontSize: 26, verticalAlign: 'middle' }} />
      <span style={{ color: '#ffb300', fontWeight: 700, fontSize: 16, letterSpacing: 1 }}>NEW</span>
    </div>
    <p style={{ maxWidth: 400, marginBottom: 24, color: '#555', fontSize: '1rem' }}>
      Trade crypto perps with ease. Our AI agents guide you pick markets set leverage and manage risk <br/>making perp trading simple for everyone.
    </p>
    <img src="/perp-light.png" alt="Perp" style={{ maxWidth: '100%', maxHeight: '60vh' }} />
  </div>
);

export default Perp;
