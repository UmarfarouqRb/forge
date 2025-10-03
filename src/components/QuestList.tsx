
// import { projectData } from '../data/projectData';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiUsers, FiEye } from 'react-icons/fi';
import type { QuestItem } from '../pages/Quest';

interface QuestListProps {
  quests: QuestItem[];
  status: 'active' | 'upcoming' | 'ended';
}

const statusColors: Record<string, string> = {
  active: '#27ae60', // green for active
  upcoming: '#4e8cff',
  ended: '#888',
};

const QuestList: React.FC<QuestListProps> = ({ quests, status }) => {
  if (!quests.length) {
    return <div style={{ color: '#888', fontStyle: 'italic', padding: 16 }}>No quests in this section.</div>;
  }
  return (
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {quests.map(q => (
          <li key={q.id} style={{
            margin: '12px 0',
            padding: 0,
            background: '#fff',
            border: `2px solid ${statusColors[status]}`,
            borderRadius: 8,
            boxShadow: '0 2px 8px #0001',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '240px',
            minHeight: '260px',
            maxWidth: '100%',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'box-shadow 0.2s',
            position: 'relative',
          }}
          onMouseOver={e => (e.currentTarget.style.boxShadow = '0 4px 16px #0002')}
          onMouseOut={e => (e.currentTarget.style.boxShadow = '0 2px 8px #0001')}
          >
            <Link
              to={`/quest/${encodeURIComponent(q.title.toLowerCase().replace(/\s+/g, '-'))}`}
              style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%', padding: '18px 12px 12px 12px' }}>
                {/* Project image */}
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: 14,
                  marginBottom: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  {q.image && (
                    <img src={q.image} alt={q.title} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 12, boxShadow: '0 2px 8px #0001' }} />
                  )}
                </div>
                <div style={{
                  fontWeight: 700,
                  fontSize: 17,
                  color: statusColors[status],
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '100%',
                  marginBottom: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}>
                  {q.title}
                </div>
                {q.category && (
                  <div style={{
                    fontSize: 12,
                    color: '#7c4dff',
                    fontWeight: 600,
                    textAlign: 'center',
                    width: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginBottom: 2,
                  }}>{q.category}</div>
                )}
                <div style={{
                  color: '#888',
                  fontSize: 12,
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '100%',
                  marginBottom: 8,
                }}>{q.description}</div>
                <span style={{
                  background: statusColors[status],
                  color: '#fff',
                  borderRadius: 6,
                  padding: '2px 10px',
                  fontSize: 11,
                  fontWeight: 600,
                  marginTop: 4,
                  textTransform: 'capitalize',
                  display: 'inline-block',
                  width: '70px',
                  textAlign: 'center',
                  minWidth: 0,
                  maxWidth: 70,
                  lineHeight: 1.2,
                }}>{status}</span>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', marginTop: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', width: '100%' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FiUser size={18} color="#23272f" /><span style={{ color: '#23272f', fontWeight: 600 }}>{q.users ?? 0}</span></span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FiUsers size={18} color="#23272f" /><span style={{ color: '#23272f', fontWeight: 600 }}>{q.followers ?? 0}</span></span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FiEye size={18} color="#23272f" /><span style={{ color: '#23272f', fontWeight: 600 }}>{q.watched ?? 0}</span></span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </ul>
  );
};

export default QuestList;
