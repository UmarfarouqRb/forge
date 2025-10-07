
import React, { useState } from 'react';
import './Docs.css';

const docs = [
  {
    title: 'What is Forge?',
    content: 'Forge is a platform for onchain quests, AI agents, NFTs, and more. It enables users to explore, participate, and earn rewards in a secure, community-driven environment.'
  },
  {
    title: 'Key Features',
    content: (
      <ul>
        <li><b>Onchain Quests:</b> Complete blockchain-based tasks, earn rewards, and level up your profile.</li>
        <li><b>AI Agents:</b> Interact with and deploy AI agents for automation, analytics, and more.</li>
        <li><b>NFTs:</b> Mint, collect, and trade unique digital assets with full onchain provenance.</li>
        <li><b>Leaderboard:</b> Compete with others, track your quest progress, and climb the ranks.</li>
        <li><b>Secure Authentication:</b> Login with Privy, Google, or email for a seamless experience.</li>
        <li><b>Modern UI:</b> Enjoy a fast, responsive, and beautiful interface across all devices.</li>
        <li><b>Community:</b> Join our Discord, follow us on Twitter, and connect with builders worldwide.</li>
      </ul>
    )
  },
  {
    title: 'How It Works',
    content: (
      <ol>
        <li><b>Sign Up:</b> Create your account using Privy, Google, or email.</li>
        <li><b>Explore Quests:</b> Browse available quests and choose your favorites.</li>
        <li><b>Complete Tasks:</b> Follow quest instructions, submit proofs, and earn rewards.</li>
        <li><b>Earn & Collect:</b> Receive points, badges, and NFTs for your achievements.</li>
        <li><b>Track Progress:</b> View your profile, completed quests, and leaderboard rank.</li>
        <li><b>Engage:</b> Join the community, share feedback, and help shape the future of Forge.</li>
      </ol>
    )
  },
  {
    title: 'FAQ',
    content: (
      <ul>
        <li><b>Is Forge free?</b> Yes, you can use the basic features for free. Pro features are available for a monthly fee.</li>
        <li><b>How do I earn rewards?</b> Complete quests and participate in events to earn points, badges, and NFTs.</li>
        <li><b>How do I contact support?</b> Email support@forge.com or join our Discord.</li>
        <li><b>Where can I find updates?</b> Follow us on Twitter and Discord.</li>
      </ul>
    )
  },
  {
    title: 'Contact & Community',
    content: 'For support or to join the community, use the links in the footer below.'
  }
];

const Docs: React.FC = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="docs-gitbook-layout">
      <aside className="docs-sidebar">
        <div className="docs-sidebar-title">Docs</div>
        <ul className="docs-sidebar-list">
          {docs.map((item, idx) => (
            <li
              key={idx}
              className={`docs-sidebar-item${selected === idx ? ' active' : ''}`}
              onClick={() => setSelected(idx)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </aside>
      <main className="docs-main">
        <h2 className="docs-main-title">{docs[selected].title}</h2>
        <div className="docs-main-content">{docs[selected].content}</div>
      </main>
    </div>
  );
};

export default Docs;
