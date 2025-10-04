import { projectData } from '../data/projectData';
// Use projectData as the quest source
const sampleQuests = projectData.map((p) => ({
  ...p,
  title: p.name,
  progress: 0,
  completed: false,
  reward: '',
  status: 'active' as 'active', // All projects are active
  users: p.users ?? 0,
  followers: p.followers ?? 0,
  likes: p.likes ?? 0,
  watched: p.watched ?? 0,
}));
// Utility function to arrange quests by status
export type QuestItem = {
  id: number;
  title: string;
  description: string;
  image?: string;
  category?: string;
  icons?: React.ReactElement<any, any>[];
  progress: number;
  completed: boolean;
  reward: string;
  status: 'active' | 'upcoming' | 'ended';
  users: number;
  followers: number;
  likes: number;
  watched: number;
  tasks?: Array<{
    id: number;
    label: string;
    url: string;
    type?: string;
  }>;
};

/**
 * Arrange quests into an object with keys: active, upcoming, ended
 * @param quests QuestItem[]
 * @returns { active: QuestItem[], upcoming: QuestItem[], ended: QuestItem[] }
 */
export function arrangeQuestsByStatus(quests: QuestItem[]) {
  return {
    active: quests.filter(q => q.status === 'active'),
    upcoming: quests.filter(q => q.status === 'upcoming'),
    ended: quests.filter(q => q.status === 'ended'),
  };
}


import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// If using react-router-dom, import Link
// import { Link, useNavigate } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import { FaChevronDown } from 'react-icons/fa';
import { ThemeContext } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Card from '../components/Card';
import QuestList from '../components/QuestList';
import LeaderboardCard from '../components/LeaderboardCard';

// Leaderboard will be fetched from backend


const Quest: React.FC = () => {
  // const [leaderboard, setLeaderboard] = useState<{ name: string; points: number }[]>([]);
  const headerLabels = [
    'Explore',
    'L1/L2',
    'AI',
    'AI Agents',
    'NFTs',
  ];
  // Mock: user activity for each section (true = active, false = inactive)
  // In real app, replace with real user activity logic
  // Map quest status to navigation headers
  // Helper: robust category matching
  function matchesSection(q: { category?: string; title?: string }, section: string): boolean {
    if (section === 'explore') return true;
    if (!q.category) return false;
    const cats = q.category.toLowerCase().split(/,|\//).map((s: string) => s.trim());
    if (section === 'l1/l2') return cats.includes('l1') || cats.includes('l2');
    if (section === 'ai') return cats.includes('ai') || cats.includes('ai project');
    if (section === 'ai agents') return cats.includes('ai agent') || cats.includes('ai agents');
    if (section === 'nfts') return cats.includes('nft') || cats.includes('nfts');
    // Fallback: allow a project to appear in any section if its category contains the section label
    return cats.some(cat => section.includes(cat) || cat.includes(section));
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // Removed unused sectionStatusMap
  const sectionActivity = Array(headerLabels.length).fill(true); // keep all active for now
  const statusOptions = ['active', 'upcoming', 'ended'] as const;
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  // Parse section and status from URL query params
  function getSectionIdxFromQuery(): number {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (!section) return 0;
    const idx = headerLabels.findIndex(l => l.toLowerCase() === section.toLowerCase());
    return idx >= 0 ? idx : 0;
  }
  function getStatusFromQuery(): typeof statusOptions[number] {
    const params = new URLSearchParams(location.search);
    const status = params.get('status');
    if (!status) return 'active';
    return statusOptions.includes(status as any) ? (status as typeof statusOptions[number]) : 'active';
  }
  const [selectedSection, setSelectedSection] = useState<number>(getSectionIdxFromQuery());
  const [selectedStatus, setSelectedStatus] = useState<typeof statusOptions[number]>(getStatusFromQuery());

  // useEffect(() => {
  //   fetch('/api/privyUsers')
  //     .then(res => res.json())
  //     .then(data => setLeaderboard(Array.isArray(data) ? data : []))
  //     .catch(() => setLeaderboard([]));
  // }, []);
  // Helper: filter quests by section and status
  function filterQuests(sectionIdx: number, status: typeof statusOptions[number]) {
    const section = headerLabels[sectionIdx].toLowerCase();
    // Allow a project to appear in multiple categories if its category matches more than one
    return sampleQuests.filter(q => matchesSection(q, section) && q.status === status);
  }
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const bg = isDark ? 'var(--bg)' : '#f8f9fa';
  const cardBg = isDark ? 'var(--bg-card)' : '#fff';
  const text = isDark ? 'var(--text)' : '#23272f';
  const faded = isDark ? '#888' : '#888';
  const border = isDark ? '1px solid var(--border)' : '1px solid #eee';
  const highlight = isDark ? '#2d2e36' : '#f3e6c7';
  const navBg = isDark ? 'var(--bg-card)' : '#fff';
  const navShadow = isDark ? '0 2px 8px #0003' : '0 2px 8px #0001';
  // Updated active colors for better visual distinction
  const navActive = isDark ? '#1e293b' : '#e0e7ff'; // blue-gray for dark, light blue for light
  const navActiveText = isDark ? '#38bdf8' : '#2563eb'; // cyan for dark, blue for light
  const navInactiveText = isDark ? 'var(--text)' : '#23272f';
  return (
    <div style={{ background: bg, minHeight: '100vh', padding: '32px 0', color: text }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 32, alignItems: 'flex-start' }}>
        {/* Left: User Profile and Quest Lists */}
        <div style={{ flex: 2 }}>
          {/* User Profile (customized) */}
          <div style={{ marginBottom: 24, background: cardBg, borderRadius: 12, padding: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 340, width: '100%', boxShadow: navShadow, border, position: 'relative' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
              <Link
                to="#leaderboard"
                style={{ color: text, fontWeight: 500, fontSize: 18, textDecoration: 'none', padding: '4px 16px', borderRadius: 8, background: cardBg, transition: 'background 0.2s', boxShadow: navShadow, border }}
                onMouseOver={e => (e.currentTarget.style.background = highlight)}
                onMouseOut={e => (e.currentTarget.style.background = cardBg)}
              >
                Leaderboard
              </Link>
            </div>
            <UserProfile imageSize={110} />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              <div style={{ display: 'flex', gap: 18 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 70, fontSize: 20, color: text }}>3k</div>
                  <div style={{ color: faded, fontSize: 20 }}>Following</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 70, fontSize: 20, color: text }}>108</div>
                  <div style={{ color: faded, fontSize: 20 }}>Completed</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 70, fontSize: 20, color: text }}>80%</div>
                  <div style={{ color: faded, fontSize: 20 }}>Quest Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Header with dropdowns (moved below user profile) */}
          <div style={{ marginBottom: 32 }}>
            <nav style={{ display: 'flex', gap: 32, alignItems: 'center', background: navBg, borderRadius: 12, padding: '18px 32px', boxShadow: navShadow, fontWeight: 600, fontSize: 18, border }}>
              {headerLabels.map((label, idx) => {
                const isOpen = openDropdown === idx;
                const isActive = sectionActivity[idx];
                const sectionParam = label.toLowerCase();
                return (
                  <div key={label} style={{ position: 'relative', minWidth: 120, opacity: isActive ? 1 : 0.5 }}>
                    <Link
                      to={`?section=${encodeURIComponent(sectionParam)}&status=${selectedStatus}`}
                      style={{
                        cursor: isActive ? 'pointer' : 'not-allowed',
                        color: selectedSection === idx ? navActiveText : navInactiveText,
                        padding: '8px 18px',
                        borderRadius: 8,
                        background: selectedSection === idx ? navActive : 'transparent',
                        transition: 'background 0.2s',
                        fontWeight: selectedSection === idx ? 700 : 600,
                        border: 'none',
                        outline: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        boxShadow: isOpen ? '0 4px 16px 0 rgba(31,38,135,0.10)' : 'none',
                        position: 'relative',
                        zIndex: isOpen ? 11 : 1,
                        pointerEvents: isActive ? 'auto' : 'none',
                        textDecoration: 'none',
                      }}
                      onClick={e => {
                        if (!isActive) {
                          e.preventDefault();
                          return;
                        }
                        setSelectedSection(idx);
                        setOpenDropdown(isOpen ? null : idx);
                      }}
                      onBlur={() => navigate('/dashboard', { replace: true })}
                      tabIndex={isActive ? 0 : -1}
                    >
                      {label}
                      <FaChevronDown
                        style={{
                          marginLeft: 2,
                          fontSize: 16,
                          color: faded,
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                        }}
                      />
                    </Link>
                    {isOpen && isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '110%',
                          left: 0,
                          background: cardBg,
                          border,
                          borderRadius: 12,
                          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
                          minWidth: 160,
                          zIndex: 20,
                          animation: 'fadeInDropdown 0.18s',
                          overflow: 'hidden',
                        }}
                        tabIndex={-1}
                        onMouseLeave={() => navigate('/dashboard', { replace: true })}
                      >
                        {statusOptions.map((status) => {
                          const section = headerLabels[idx].toLowerCase();
                          const isActive = selectedSection === idx && selectedStatus === status;
                          return (
                            <Link
                              key={status}
                              to={`?section=${encodeURIComponent(section)}&status=${status}`}
                              style={{
                                display: 'block',
                                padding: '12px 22px',
                                cursor: 'pointer',
                                color: isActive ? '#1e90ff' : '#888',
                                fontWeight: isActive ? 700 : 500,
                                fontSize: 16,
                                borderBottom: status !== 'ended' ? `1px solid ${highlight}` : 'none',
                                background: isActive ? highlight : 'transparent',
                                transition: 'background 0.18s',
                                textDecoration: 'none',
                              }}
                              onClick={() => {
                                setSelectedSection(idx);
                                setSelectedStatus(status);
                                setOpenDropdown(null);
                              }}
                            >
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <style>{`
                @keyframes fadeInDropdown {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}</style>
            </nav>
          </div>

          {/* Quest List filtered by selected section and status */}
          <div style={{ marginTop: 0 }}>
            <h3 style={{ fontWeight: 700, fontSize: 22, color: navActiveText, marginBottom: 8 }}>
              {headerLabels[selectedSection]} — {selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)} Quests
            </h3>
            <QuestList quests={filterQuests(selectedSection, selectedStatus)} status={selectedStatus} />
          </div>
        </div>
        {/* Right: Leaderboard Card */}
        <div style={{ flex: 1, minWidth: 260, display: 'flex', justifyContent: 'flex-end' }}>
          <LeaderboardCard />
        </div>
      </div>
    </div>
  );
};

export default Quest;
