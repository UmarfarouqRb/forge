
import './FAQ.css';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Forge?',
    a: 'Forge is a platform for onchain quests, AI agents, and NFTs. Explore, participate, and earn rewards!'
  },
  {
    q: 'How do I join quests?',
    a: 'Sign up, log in, and select a quest from the dashboard.'
  },
  {
    q: 'How do I earn rewards?',
    a: 'Complete quests and participate in events to earn points, badges, and NFTs.'
  },
  {
    q: 'Is Forge free?',
    a: 'Yes, basic features are free. Pro features are available for a fee.'
  },
  {
    q: 'Where can I get support?',
    a: 'Join our Discord or email support@forge.com.'
  },
  {
    q: 'Can I use Forge on mobile?',
    a: 'Yes, Forge is fully responsive and works on all modern devices.'
  },
  {
    q: 'How do I connect my wallet?',
    a: 'After logging in, go to your profile and follow the wallet connection instructions.'
  },
  {
    q: 'What are Pro features?',
    a: 'Pro features include advanced AI agents, premium quests, and priority support.'
  },
  {
    q: 'How do I reset my password?',
    a: 'Use the "Forgot password" link on the login page or contact support.'
  },
  {
    q: 'How do I report a bug or suggest a feature?',
    a: 'Open a ticket on Discord or email us at support@forge.com.'
  },
  {
    q: 'Is my data secure?',
    a: 'Yes, we use industry-standard security practices to protect your data and privacy.'
  },
  {
    q: 'Can I invite friends?',
    a: 'Yes, share your referral link from your profile to invite friends and earn rewards.'
  },
];


const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <button
              className={`faq-question${openIdx === idx ? ' open' : ''}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
              aria-controls={`faq-answer-${idx}`}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#23272f',
                padding: '0',
                marginBottom: '6px',
                cursor: 'pointer',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{flex: 1}}>{item.q}</span>
              <span style={{fontSize: 18, color: '#a47be2', transition: 'transform 0.2s', transform: openIdx === idx ? 'rotate(90deg)' : 'rotate(0deg)'}}>▶</span>
            </button>
            {openIdx === idx && (
              <div className="faq-answer" id={`faq-answer-${idx}`} style={{marginTop: 4}}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
