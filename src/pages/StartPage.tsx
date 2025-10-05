import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaDiscord, FaLinkedin, FaGlobe, FaRocket } from 'react-icons/fa';
import { SiFarcaster } from 'react-icons/si';
import './StartPage.css';

const StartPage: React.FC = () => (
  <div style={{ background: '#f8f9fa', minHeight: '100vh', color: '#23272f', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
    <nav style={{ width: '100%', background: '#fff', boxShadow: '0 2px 12px #0001', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 64 }}>
      <div style={{ maxWidth: 1100, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <FaRocket style={{ height: 38, width: 38, color: '#a47be2', borderRadius: 8 }} />
          <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#a47be2', letterSpacing: 1 }}>Forge</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <Link to="/start" style={{ color: '#23272f', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }}>Home</Link>
          <a href="#pricing" style={{ color: '#23272f', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }}>Pricing</a>
          <Link to="/docs" style={{ color: '#23272f', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }}>Docs</Link>
          <a href="#contact" style={{ color: '#23272f', fontWeight: 600, textDecoration: 'none', fontSize: '1.1rem' }}>Contact</a>
        </div>
      </div>
    </nav>
    <div className="intro-container">
      <h1 style={{ color: '#a47be2' }}>Welcome to Forge</h1>
      <p style={{ color: '#23272f' }}>Forge is your all-in-one platform for onchain quests, AI agents, NFTs, and more. Explore, participate, and earn rewards in a modern, secure, and community-driven environment.</p>
      <Link to="/" className="btn-main">Enter App</Link>
      <br />
      <Link to="/docs" className="btn-main" style={{ background: '#fff', color: '#2563eb', border: '1.5px solid #2563eb', marginTop: 18 }}>View Docs</Link>
    </div>
    <section id="pricing" style={{ maxWidth: 700, margin: '48px auto 0 auto', padding: '32px 24px 24px 24px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #0001' }}>
      <h2 style={{ color: '#a47be2', fontSize: '2rem', fontWeight: 700, marginBottom: 18, textAlign: 'center' }}>Pricing</h2>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ background: '#f8f9fa', borderRadius: 12, padding: '24px 32px', minWidth: 220, boxShadow: '0 1px 8px #a47be211' }}>
          <h3 style={{ color: '#23272f', fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>Free</h3>
          <p style={{ color: '#444', fontSize: '1rem' }}>Access quests, basic AI agents, and leaderboard.</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb' }}>$0</div>
        </div>
        <div style={{ background: '#f3e6c7', borderRadius: 12, padding: '24px 32px', minWidth: 220, boxShadow: '0 1px 8px #a47be211' }}>
          <h3 style={{ color: '#23272f', fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>Pro</h3>
          <p style={{ color: '#444', fontSize: '1rem' }}>Advanced AI, NFT minting, and premium support.</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#a47be2' }}>$9/mo</div>
        </div>
      </div>
    </section>
    <section id="contact" style={{ maxWidth: 700, margin: '48px auto 0 auto', padding: '32px 24px 24px 24px', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #0001' }}>
      <h2 style={{ color: '#a47be2', fontSize: '2rem', fontWeight: 700, marginBottom: 18, textAlign: 'center' }}>Contact</h2>
      <p style={{ color: '#23272f', textAlign: 'center' }}>Questions? Reach out to us on social or email <a href="mailto:support@forge.com" style={{ color: '#2563eb' }}>support@forge.com</a></p>
    </section>
    <footer className="footer">
      <div className="footer-icons" style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 32 }}>
        <a href="https://forge-website.com" target="_blank" rel="noopener noreferrer" title="Website"><FaGlobe className="footer-icon" size={32} /></a>
        <a href="https://twitter.com/forge" target="_blank" rel="noopener noreferrer" title="Twitter"><FaTwitter className="footer-icon" size={32} /></a>
        <a href="https://discord.gg/forge" target="_blank" rel="noopener noreferrer" title="Discord"><FaDiscord className="footer-icon" size={32} /></a>
        <a href="https://linkedin.com/company/forge" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin className="footer-icon" size={32} /></a>
        <a href="https://warpcast.com/forge" target="_blank" rel="noopener noreferrer" title="Farcaster"><SiFarcaster className="footer-icon" size={32} /></a>
      </div>
      <p style={{ marginTop: 10, color: '#888', fontSize: 14 }}>&copy; 2025 Forge. All rights reserved.</p>
    </footer>
  </div>
);

export default StartPage;
