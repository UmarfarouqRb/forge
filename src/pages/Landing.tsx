

import React from "react";
import "./Landing.css";
import { FaTwitter, FaEnvelope, FaDiscord } from "react-icons/fa";

const Landing: React.FC = () => (
  <>
    <div className="landing-bg">
      <nav className="landing-navbar">
        <div className="landing-navbar-content">
          <div className="landing-logo-group">
            <img src="/forge-2.2.png" alt="Forge Logo" className="landing-logo" />
            <span className="landing-title">Forge</span>
          </div>
          <div className="landing-links">
            <a href="/" className="active">Home</a>
            <a href="/faq">FAQ</a>
            <a href="/docs">Docs</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="landing-social">
            <a href="https://twitter.com/forge" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter style={{ verticalAlign: "middle", fontSize: "2rem", color: "#2563eb", filter: "drop-shadow(0 2px 8px #2563eb55)" }} />
            </a>
            <a href="mailto:team@forge.xyz" aria-label="Email">
              <FaEnvelope style={{ verticalAlign: "middle", fontSize: "2rem", color: "#a47be2", filter: "drop-shadow(0 2px 8px #a47be255)" }} />
            </a>
            <a href="https://discord.gg/forge" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <FaDiscord style={{ verticalAlign: "middle", fontSize: "2rem", color: "#5865F2", filter: "drop-shadow(0 2px 8px #5865F255)" }} />
            </a>
          </div>
        </div>
      </nav>
      {/* HERO SECTION */}
  <div className="landing-container" style={{paddingTop: 32, paddingBottom: 32, maxWidth: 600, margin: "64px auto 0 auto"}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap'}}>
          <div style={{flex: 1, minWidth: 320}}>
            <h1 className="landing-hero" style={{fontSize: 56, marginBottom: 18, lineHeight: 1.05, color: '#181A20', textShadow: '0 4px 24px #2563eb33, 0 2px 0 #fff'}}>Unleash Web3 Potential<br/><span style={{color:'#2563eb', textShadow: '0 4px 18px #2563eb88, 0 2px 0 #fff'}}>with AI and AI Agents Platform</span></h1>
            <p className="landing-desc" style={{fontSize: 22, marginBottom: 28, color: '#a47be2', opacity: 1, textShadow: '0 1px 3px #fff'}}>Forge is the all-in-one platform for onchain quests, AI trading agents, NFT rewards, and community-driven growth.<br/>Empowering users, projects, and investors to thrive in the new web3 economy.</p>
            <a href="/dashboard" className="landing-launch-btn" style={{fontSize: 22, padding: '16px 40px', marginBottom: 18, display: 'inline-block'}}>Launch App</a>
            <div style={{marginTop: 18, color: '#888', fontSize: 16}}>Built for <b>users</b>, <b>projects</b>, and <b>investors</b></div>
          </div>
          <div style={{flex: 1, minWidth: 320, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {/* High-res SVG hero illustration */}
            <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:380}}>
              <ellipse cx="170" cy="220" rx="120" ry="28" fill="#23233a" fillOpacity="0.18"/>
              <circle cx="170" cy="120" r="80" fill="url(#g1)"/>
              <circle cx="170" cy="120" r="60" fill="url(#g2)"/>
              <circle cx="170" cy="120" r="38" fill="#fff" fillOpacity="0.13"/>
              <g filter="url(#f1)">
                <rect x="120" y="70" width="100" height="100" rx="24" fill="#a47be2" fillOpacity="0.8"/>
                <rect x="135" y="85" width="70" height="70" rx="18" fill="#2563eb" fillOpacity="0.8"/>
                <rect x="150" y="100" width="40" height="40" rx="10" fill="#fff" fillOpacity="0.9"/>
              </g>
              <defs>
                <radialGradient id="g1" cx="0" cy="0" r="1" gradientTransform="translate(170 120) scale(80)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a47be2"/>
                  <stop offset="1" stopColor="#2563eb"/>
                </radialGradient>
                <radialGradient id="g2" cx="0" cy="0" r="1" gradientTransform="translate(170 120) scale(60)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" stopOpacity="0.7"/>
                  <stop offset="1" stopColor="#a47be2" stopOpacity="0.2"/>
                </radialGradient>
                <filter id="f1" x="110" y="60" width="120" height="120" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#2563eb" floodOpacity="0.18"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        {/* HOW FORGE WORKS SECTION - visually premium */}
        <div className="value-props-section">
          <h2 className="value-props-title">How Forge Works</h2>
          <div className="value-props-cards">
            {/* Discover */}
            <div className="value-prop-card">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="#2563eb"/><rect x="20" y="20" width="24" height="24" rx="8" fill="#fff"/><path d="M44 44L56 56" stroke="#a47be2" strokeWidth="4" strokeLinecap="round"/><circle cx="32" cy="32" r="8" fill="#a47be2"/></svg>
              <div className="card-title">Discover</div>
              <div className="card-desc">Browse onchain quests and opportunities tailored to your interests.</div>
            </div>
            {/* Engage */}
            <div className="value-prop-card">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="32" rx="10" fill="#a47be2"/><rect x="20" y="24" width="24" height="16" rx="6" fill="#fff"/><rect x="28" y="32" width="8" height="8" rx="2" fill="#2563eb"/><rect x="40" y="40" width="8" height="8" rx="2" fill="#16c784"/></svg>
              <div className="card-title">Engage</div>
              <div className="card-desc">Use AI agents to complete tasks, swap, bridge, and more—directly onchain.</div>
            </div>
            {/* Earn */}
            <div className="value-prop-card">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="#16c784"/><rect x="20" y="20" width="24" height="24" rx="8" fill="#fff"/><path d="M32 44L32 28" stroke="#a47be2" strokeWidth="4" strokeLinecap="round"/><circle cx="32" cy="24" r="6" fill="#a47be2"/></svg>
              <div className="card-title">Earn</div>
              <div className="card-desc">Get rewarded for your onchain activity and climb the leaderboard.</div>
            </div>
          </div>
        </div>
        {/* VALUE PROPS SECTION - visually premium with CSS classes */}
        <div className="value-props-section">
          <h2 className="value-props-title">Who is Forge for?</h2>
          <div className="value-props-cards">
            {/* Users */}
            <div className="value-prop-card">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="#2563eb"/><circle cx="32" cy="28" r="14" fill="#fff"/><ellipse cx="32" cy="50" rx="18" ry="10" fill="#a47be2" fillOpacity="0.7"/></svg>
              <div className="card-title">For Users</div>
              <div className="card-desc">Discover quests, earn rewards, and use AI agents to supercharge your onchain journey.</div>
            </div>
            {/* Projects */}
            <div className="value-prop-card">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="32" rx="10" fill="#a47be2"/><rect x="20" y="24" width="24" height="16" rx="6" fill="#fff"/><rect x="28" y="32" width="8" height="8" rx="2" fill="#2563eb"/></svg>
              <div className="card-title">For Projects</div>
              <div className="card-desc">Engage real users, launch quests, and grow your ecosystem with Forge’s tools.</div>
            </div>
            {/* Investors */}
            <div className="value-prop-card">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="#16c784"/><rect x="20" y="20" width="24" height="24" rx="8" fill="#fff"/><rect x="28" y="28" width="8" height="8" rx="2" fill="#a47be2"/></svg>
              <div className="card-title">For Investors</div>
              <div className="card-desc">Access analytics, track growth, and invest in the next wave of onchain innovation.</div>
            </div>
          </div>
        </div>
        {/* BACKED BY INNOVATORS SECTION - visually enhanced, Pond first */}
        <div className="backed-section">
          <h2 className="backed-title">Backed by Innovators</h2>
          <div className="backed-logos">
            {/* Pond as first investor with logo */}
            <div className="backed-logo-card">
              <img src="/pond.jpg" alt="Pond" style={{width: 54, height: 54, borderRadius: 16, marginBottom: 12, boxShadow: '0 2px 12px #16c78488'}} />
              <div className="backed-logo-name" style={{color: '#16c784'}}>Pond</div>
            </div>
            <div className="backed-logo-card">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none"><circle cx="27" cy="27" r="27" fill="#a47be2"/><path d="M27 14L34 40H20L27 14Z" fill="#fff"/></svg>
              <div className="backed-logo-name">Alpha Ventures</div>
            </div>
            <div className="backed-logo-card">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none"><rect width="54" height="54" rx="16" fill="#2563eb"/><circle cx="27" cy="27" r="12" fill="#fff"/><circle cx="27" cy="27" r="6" fill="#a47be2"/></svg>
              <div className="backed-logo-name">Chain Innovate</div>
            </div>
            <div className="backed-logo-card">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none"><ellipse cx="27" cy="27" rx="27" ry="18" fill="#16c784"/><rect x="14" y="20" width="26" height="14" rx="7" fill="#fff"/><rect x="22" y="26" width="10" height="6" rx="3" fill="#a47be2"/></svg>
              <div className="backed-logo-name">Onchain Labs</div>
            </div>
          </div>
        </div>
        {/* CONTACT SECTION */}
        <div id="contact" style={{marginTop: 48, marginBottom: 32, textAlign: 'center'}}>
          <h2 style={{fontSize: 26, marginBottom: 12}}>Ready to build with Forge?</h2>
          <p style={{color: '#555', fontSize: 18, marginBottom: 18}}>Contact us to partner, launch quests, or invest in the future of onchain AI.</p>
          <a href="mailto:team@forge.xyz" className="landing-launch-btn" style={{background:'#23272f', color:'#fff', fontSize:18, padding:'12px 32px'}}>Contact Us</a>
        </div>
      </div>
    </div>
  </>
);

export default Landing;
                <div className="landing-bg">
                  <nav className="landing-navbar">
                    <div className="landing-navbar-content">
                      <div className="landing-logo-group">
                        <img src="/forge-2.2.png" alt="Forge Logo" className="landing-logo" />
                        <span className="landing-title">Forge</span>
                      </div>
                      <div className="landing-links">
                        <a href="/" className="active">Home</a>
                        <a href="/faq">FAQ</a>
                        <a href="/docs.html">Docs</a>
                        <a href="#contact">Contact</a>
                      </div>
                      <div className="landing-social">
                        <a href="https://twitter.com/forge" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
                        <a href="https://discord.gg/forge" target="_blank" rel="noopener noreferrer" aria-label="Discord">💬</a>
                      </div>
                    </div>
                  </nav>
                  {/* HERO SECTION */}
                  <div className="landing-container" style={{paddingTop: 32, paddingBottom: 32}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap'}}>
                      <div style={{flex: 1, minWidth: 320}}>
                        <h1 className="landing-hero" style={{fontSize: 44, marginBottom: 18, lineHeight: 1.1}}>Unleash Onchain Potential<br/><span style={{color:'#2563eb'}}>with AI & Community</span></h1>
                        <p className="landing-desc" style={{fontSize: 20, marginBottom: 28, color: '#444'}}>Forge is the all-in-one platform for onchain quests, AI trading agents, NFT rewards, and community-driven growth.<br/>Empowering users, projects, and investors to thrive in the new web3 economy.</p>
                        <a href="/dashboard" className="landing-launch-btn" style={{fontSize: 22, padding: '16px 40px', marginBottom: 18, display: 'inline-block'}}>Launch App</a>
                        <div style={{marginTop: 18, color: '#888', fontSize: 16}}>Built for <b>users</b>, <b>projects</b>, and <b>investors</b></div>
                      </div>
                      <div style={{flex: 1, minWidth: 320, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {/* High-res SVG hero illustration */}
                        <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:380}}>
                          <ellipse cx="170" cy="220" rx="120" ry="28" fill="#23233a" fillOpacity="0.18"/>
                          <circle cx="170" cy="120" r="80" fill="url(#g1)"/>
                          <circle cx="170" cy="120" r="60" fill="url(#g2)"/>
                          <circle cx="170" cy="120" r="38" fill="#fff" fillOpacity="0.13"/>
                          <g filter="url(#f1)">
                            <rect x="120" y="70" width="100" height="100" rx="24" fill="#a47be2" fillOpacity="0.8"/>
                            <rect x="135" y="85" width="70" height="70" rx="18" fill="#2563eb" fillOpacity="0.8"/>
                            <rect x="150" y="100" width="40" height="40" rx="10" fill="#fff" fillOpacity="0.9"/>
                          </g>
                          <defs>
                            <radialGradient id="g1" cx="0" cy="0" r="1" gradientTransform="translate(170 120) scale(80)" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#a47be2"/>
                              <stop offset="1" stopColor="#2563eb"/>
                            </radialGradient>
                            <radialGradient id="g2" cx="0" cy="0" r="1" gradientTransform="translate(170 120) scale(60)" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#fff" stopOpacity="0.7"/>
                              <stop offset="1" stopColor="#a47be2" stopOpacity="0.2"/>
                            </radialGradient>
                            <filter id="f1" x="110" y="60" width="120" height="120" filterUnits="userSpaceOnUse">
                              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#2563eb" floodOpacity="0.18"/>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* HOW FORGE WORKS SECTION - visually premium */}
                    <div className="value-props-section">
                      <h2 className="value-props-title">How Forge Works</h2>
                      <div className="value-props-cards">
                        {/* Discover */}
                        <div className="value-prop-card">
                          <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="#2563eb"/><rect x="20" y="20" width="24" height="24" rx="8" fill="#fff"/><path d="M44 44L56 56" stroke="#a47be2" strokeWidth="4" strokeLinecap="round"/><circle cx="32" cy="32" r="8" fill="#a47be2"/></svg>
                          <div className="card-title">Discover</div>
                          <div className="card-desc">Browse onchain quests and opportunities tailored to your interests.</div>
                        </div>
                        {/* Engage */}
                        <div className="value-prop-card">
                          <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="32" rx="10" fill="#a47be2"/><rect x="20" y="24" width="24" height="16" rx="6" fill="#fff"/><rect x="28" y="32" width="8" height="8" rx="2" fill="#2563eb"/><rect x="40" y="40" width="8" height="8" rx="2" fill="#16c784"/></svg>
                          <div className="card-title">Engage</div>
                          <div className="card-desc">Use AI agents to complete tasks, swap, bridge, and more—directly onchain.</div>
                        </div>
                        {/* Earn */}
                        <div className="value-prop-card">
                          <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="#16c784"/><rect x="20" y="20" width="24" height="24" rx="8" fill="#fff"/><path d="M32 44L32 28" stroke="#a47be2" strokeWidth="4" strokeLinecap="round"/><circle cx="32" cy="24" r="6" fill="#a47be2"/></svg>
                          <div className="card-title">Earn</div>
                          <div className="card-desc">Get rewarded for your onchain activity and climb the leaderboard.</div>
                        </div>
                      </div>
                    </div>

                    {/* VALUE PROPS SECTION - visually premium with CSS classes */}
                    <div className="value-props-section">
                      <h2 className="value-props-title">Who is Forge for?</h2>
                      <div className="value-props-cards">
                        {/* Users */}
                        <div className="value-prop-card">
                          <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="#2563eb"/><circle cx="32" cy="28" r="14" fill="#fff"/><ellipse cx="32" cy="50" rx="18" ry="10" fill="#a47be2" fillOpacity="0.7"/></svg>
                          <div className="card-title">For Users</div>
                          <div className="card-desc">Discover quests, earn rewards, and use AI agents to supercharge your onchain journey.</div>
                        </div>
                        {/* Projects */}
                        <div className="value-prop-card">
                          <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="32" rx="10" fill="#a47be2"/><rect x="20" y="24" width="24" height="16" rx="6" fill="#fff"/><rect x="28" y="32" width="8" height="8" rx="2" fill="#2563eb"/></svg>
                          <div className="card-title">For Projects</div>
                          <div className="card-desc">Engage real users, launch quests, and grow your ecosystem with Forge’s tools.</div>
                        </div>
                        {/* Investors */}
                        <div className="value-prop-card">
                          <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="#16c784"/><rect x="20" y="20" width="24" height="24" rx="8" fill="#fff"/><rect x="28" y="28" width="8" height="8" rx="2" fill="#a47be2"/></svg>
                          <div className="card-title">For Investors</div>
                          <div className="card-desc">Access analytics, track growth, and invest in the next wave of onchain innovation.</div>
                        </div>
                      </div>
                    </div>

                    {/* BACKED BY INNOVATORS SECTION - visually enhanced, Pond first */}
                    <div className="backed-section">
                      <h2 className="backed-title">Backed by Innovators</h2>
                      <div className="backed-logos">
                        {/* Pond as first investor with logo */}
                        <div className="backed-logo-card">
                          <img src="/pond.jpg" alt="Pond" style={{width: 54, height: 54, borderRadius: 16, marginBottom: 12, boxShadow: '0 2px 12px #16c78488'}} />
                          <div className="backed-logo-name" style={{color: '#16c784'}}>Pond</div>
                        </div>
                        <div className="backed-logo-card">
                          <svg width="54" height="54" viewBox="0 0 54 54" fill="none"><circle cx="27" cy="27" r="27" fill="#a47be2"/><path d="M27 14L34 40H20L27 14Z" fill="#fff"/></svg>
                          <div className="backed-logo-name">Alpha Ventures</div>
                        </div>
                        <div className="backed-logo-card">
                          <svg width="54" height="54" viewBox="0 0 54 54" fill="none"><rect width="54" height="54" rx="16" fill="#2563eb"/><circle cx="27" cy="27" r="12" fill="#fff"/><circle cx="27" cy="27" r="6" fill="#a47be2"/></svg>
                          <div className="backed-logo-name">Chain Innovate</div>
                        </div>
                        <div className="backed-logo-card">
                          <svg width="54" height="54" viewBox="0 0 54 54" fill="none"><ellipse cx="27" cy="27" rx="27" ry="18" fill="#16c784"/><rect x="14" y="20" width="26" height="14" rx="7" fill="#fff"/><rect x="22" y="26" width="10" height="6" rx="3" fill="#a47be2"/></svg>
                          <div className="backed-logo-name">Onchain Labs</div>
                        </div>
                      </div>
                    </div>

                    {/* CONTACT SECTION */}
                    <div id="contact" style={{marginTop: 48, marginBottom: 32, textAlign: 'center'}}>
                      <h2 style={{fontSize: 26, marginBottom: 12}}>Ready to build with Forge?</h2>
                      <p style={{color: '#555', fontSize: 18, marginBottom: 18}}>Contact us to partner, launch quests, or invest in the future of onchain AI.</p>
                      <a href="mailto:team@forge.xyz" className="landing-launch-btn" style={{background:'#23272f', color:'#fff', fontSize:18, padding:'12px 32px'}}>Contact Us</a>
                    </div>
                  </div>
                </div>
