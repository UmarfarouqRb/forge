
import React, { useEffect, useState } from 'react';
import type { HistoryItem } from '../components/HistoryModal';

import { useNavigate } from 'react-router-dom';



const History: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/api/history')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch history');
        return res.json();
      })
      .then(data => {
        setHistory(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load history.');
        setLoading(false);
      });
  }, []);

  return (
    <section className="container py-4" style={{ maxWidth: 340, margin: '40px auto', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="card shadow-sm border-0 p-4" style={{ width: '100%', maxWidth: 320, position: 'relative' }}>
        <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: 12, right: 16, borderRadius: 10, background: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }} title="Close">&times;</button>
        <h4 className="mb-3 text-center">Deposit & Withdraw History</h4>
        {loading ? (
          <div style={{ color: '#888', fontSize: 15, textAlign: 'center' }}>Loading...</div>
        ) : error ? (
          <div style={{ color: 'red', fontSize: 15, textAlign: 'center' }}>{error}</div>
        ) : history.length === 0 ? (
          <div style={{ color: '#888', fontSize: 15, textAlign: 'center' }}>No history yet.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {history.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 14, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f5f5f7', borderRadius: 8, padding: '10px 14px' }}>
                <span style={{ fontWeight: 600, color: item.type === 'deposit' ? '#2979c9' : '#e5a443', minWidth: 80 }}>{item.type === 'deposit' ? 'Deposit' : 'Withdraw'}</span>
                <span style={{ marginLeft: 8, flex: 1, fontFamily: 'monospace', fontSize: 14, color: '#23272f' }}>{item.address}</span>
                <span style={{ color: '#888', fontSize: 13, marginLeft: 10 }}>{item.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default History;
