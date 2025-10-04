import React from 'react';

interface LeaderboardUser {
  name: string;
  points: number;
  questsParticipating: number;
  questsCompleted: number;
}

const mockLeaderboard: LeaderboardUser[] = [
  { name: 'Alice', points: 1200, questsParticipating: 5, questsCompleted: 4 },
  { name: 'Bob', points: 1100, questsParticipating: 6, questsCompleted: 5 },
  { name: 'Charlie', points: 950, questsParticipating: 4, questsCompleted: 3 },
  { name: 'Diana', points: 900, questsParticipating: 5, questsCompleted: 4 },
  { name: 'Eve', points: 850, questsParticipating: 3, questsCompleted: 2 },
];


const LeaderboardCard: React.FC = () => (
  <div
    style={{
      background: '#fff',
      borderRadius: 28,
      boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
      padding: 28,
      minWidth: 480,
      maxWidth: 700,
      width: '100%',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
      border: '1.5px solid #e0e7ff',
    }}
  >
    <h2 style={{
      color: '#23272f',
      fontWeight: 800,
      marginBottom: 18,
      fontSize: 32,
      letterSpacing: 1,
      textAlign: 'center',
      marginTop: 4,
    }}>Leaderboard</h2>
  <table style={{ width: '100%', fontSize: 18, borderCollapse: 'separate', borderSpacing: 0 }}>
      <thead>
        <tr style={{ color: '#888', fontWeight: 700, fontSize: 16 }}>
          <th style={{ textAlign: 'left', paddingBottom: 8 }}>User</th>
          <th style={{ textAlign: 'right', paddingBottom: 8 }}>Points</th>
          <th style={{ textAlign: 'right', paddingBottom: 8 }}>Participating</th>
          <th style={{ textAlign: 'right', paddingBottom: 8 }}>Completed</th>
        </tr>
      </thead>
      <tbody>
        {mockLeaderboard.map((user, idx) => (
          <tr
            key={user.name}
            style={{
              background: idx % 2 === 0 ? '#f8f9fa' : 'transparent',
              color: '#23272f',
              fontWeight: idx === 0 ? 800 : 600,
              fontSize: idx === 0 ? 20 : 16,
              borderRadius: idx === 0 ? 16 : 0,
              boxShadow: idx === 0 ? '0 2px 12px #a47be233' : 'none',
              transition: 'background 0.2s',
            }}
          >
            <td style={{ padding: '10px 0', fontWeight: 700, borderRadius: idx === 0 ? '12px 0 0 12px' : 0 }}>{user.name}</td>
            <td style={{ textAlign: 'right', padding: '10px 0', fontWeight: 700 }}>{user.points}</td>
            <td style={{ textAlign: 'right', padding: '10px 0', fontWeight: 700 }}>{user.questsParticipating}</td>
            <td style={{ textAlign: 'right', padding: '10px 0', fontWeight: 700, borderRadius: idx === 0 ? '0 12px 12px 0' : 0 }}>{user.questsCompleted}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LeaderboardCard;
