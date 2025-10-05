import React from 'react';

const FAQ: React.FC = () => (
  <div style={{ width: '100%', maxWidth: 340, margin: '0 auto 18px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #0001', padding: 24 }}>
    <h3 style={{ fontWeight: 700, fontSize: 20, color: '#a47be2', marginBottom: 12 }}>FAQ</h3>
    <ul style={{ paddingLeft: 18, color: '#23272f', fontSize: 15, marginBottom: 0 }}>
      <li><b>What is Forge?</b> <br />Forge is a platform for onchain quests, AI agents, and NFTs.</li>
      <li><b>How do I join quests?</b> <br />Sign up, log in, and select a quest from the dashboard.</li>
      <li><b>How do I earn rewards?</b> <br />Complete quests and participate in events to earn points, badges, and NFTs.</li>
      <li><b>Is Forge free?</b> <br />Yes, basic features are free. Pro features are available for a fee.</li>
      <li><b>Where can I get support?</b> <br />Join our Discord or email support@forge.com.</li>
      <li><b>Can I use Forge on mobile?</b> <br />Yes, Forge is fully responsive and works on all modern devices.</li>
      <li><b>How do I connect my wallet?</b> <br />After logging in, go to your profile and follow the wallet connection instructions.</li>
      <li><b>What are Pro features?</b> <br />Pro features include advanced AI agents, premium quests, and priority support.</li>
      <li><b>How do I reset my password?</b> <br />Use the "Forgot password" link on the login page or contact support.</li>
      <li><b>How do I report a bug or suggest a feature?</b> <br />Open a ticket on Discord or email us at support@forge.com.</li>
      <li><b>Is my data secure?</b> <br />Yes, we use industry-standard security practices to protect your data and privacy.</li>
      <li><b>Can I invite friends?</b> <br />Yes, share your referral link from your profile to invite friends and earn rewards.</li>
    </ul>
  </div>
);

export default FAQ;
