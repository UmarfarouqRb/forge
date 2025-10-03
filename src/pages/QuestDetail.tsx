

import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectData } from '../data/projectData';
import { ThemeContext } from '../App';
import { FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuestDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const quest = projectData.find(
    p => p.name.toLowerCase().replace(/\s+/g, '-') === (slug || '').toLowerCase()
  );
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const bg = isDark ? 'var(--bg)' : '#f8f9fa';
  const cardBg = isDark ? 'var(--bg-card)' : '#fff';
  const text = isDark ? 'var(--text)' : '#23272f';
  const faded = isDark ? '#888' : '#888';
  const border = isDark ? '1px solid var(--border)' : '1px solid #eee';
  const navShadow = isDark ? '0 2px 8px #0003' : '0 2px 8px #0001';

  // Track visited tasks in localStorage
  const [visited, setVisited] = useState<{ [id: number]: boolean }>(() => {
    if (!quest || !quest.tasks) return {};
    const stored = localStorage.getItem(`visited-tasks-${quest.name}`);
    return stored ? JSON.parse(stored) : {};
  });

  const handleVisit = (taskId: number, url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setVisited(prev => {
      const updated = { ...prev, [taskId]: true };
      if (quest) localStorage.setItem(`visited-tasks-${quest.name}`, JSON.stringify(updated));
      return updated;
    });
  };

  if (!quest) return <div style={{ padding: 32 }}>Quest not found.</div>;

  return (
    <div style={{ background: bg, minHeight: '100vh', padding: '32px 0', color: text }}>
      <div style={{ maxWidth: 700, margin: '40px auto', background: cardBg, borderRadius: 16, boxShadow: navShadow, padding: 32, border }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 12 }}>{quest.name}</h2>
        <img src={quest.image} alt={quest.name} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 16, marginBottom: 24 }} />
        <p style={{ fontSize: 18, color: text, marginBottom: 24 }}>{quest.description}</p>
        <h3 style={{ fontWeight: 600, fontSize: 22, marginBottom: 12 }}>Tasks</h3>
        {quest.tasks && quest.tasks.length > 0 ? (
          <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
            {quest.tasks.map(task => (
              <li key={task.id} style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
                <button
                  onClick={() => handleVisit(task.id, task.url)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: visited[task.id] ? '#e0ffe0' : '#f3f6fa',
                    color: visited[task.id] ? '#22c55e' : '#2563eb',
                    border: visited[task.id] ? '1.5px solid #22c55e' : '1.5px solid #2563eb',
                    borderRadius: 8,
                    padding: '10px 18px',
                    fontSize: 17,
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: visited[task.id] ? '0 2px 8px #22c55e22' : '0 2px 8px #2563eb22',
                    transition: 'all 0.18s',
                    outline: 'none',
                  }}
                >
                  {visited[task.id] && <FaCheckCircle style={{ color: '#22c55e', fontSize: 20 }} />}
                  {task.label}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ color: faded, fontSize: 16 }}>No tasks for this quest yet.</div>
        )}
        <div style={{ marginTop: 32 }}>
          <button
            onClick={() => navigate('/quest')}
            style={{
              color: '#2563eb',
              background: 'none',
              border: 'none',
              textDecoration: 'underline',
              fontSize: 16,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            &larr; Back to Quests
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestDetail;
