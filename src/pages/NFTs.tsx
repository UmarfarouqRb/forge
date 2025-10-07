

import React, { useState, useEffect } from 'react';
import NFTAvatar from '../components/NFTAvatar';




function AnimatedAvatarCard() {
  const avatars = [
    {
      number: 441,
      name: 'Sample NFT',
      leftEyeColor: undefined,
      rightEyeColor: undefined,
      faceColor: undefined,
      hatColor: '#2563eb',
      color: '#2563eb',
    },
    {
      number: 888,
      name: 'Rare NFT',
      leftEyeColor: '#16c784',
      rightEyeColor: '#a47be2',
      faceColor: 'url(#face)',
      hatColor: '#16c784', // different hat color
      color: '#a47be2',
    },
    {
      number: 7,
      name: 'Genesis NFT',
      leftEyeColor: '#23233a',
      rightEyeColor: '#2563eb',
      faceColor: '#fff',
      hatColor: '#a47be2',
      color: '#16c784',
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(i => (i + 1) % avatars.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);
  const avatar = avatars[idx];
  return (
    <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #0001', padding: 24, width: 320, height: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24, fontFamily: 'inherit', transition: 'box-shadow 0.3s, transform 0.3s', animation: 'fadeIn 0.7s' }}>
      <NFTAvatar size={220} leftEyeColor={avatar.leftEyeColor} rightEyeColor={avatar.rightEyeColor} faceColor={avatar.faceColor} hatColor={avatar.hatColor} />
  <div style={{ fontWeight: 800, color: avatar.color, fontSize: 18, marginTop: 12 }}>Avatar {avatar.number} of 1000</div>
  <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 6 }}>{avatar.name}</div>
  <div style={{ fontWeight: 700, color: '#888', fontSize: 15, marginBottom: 10 }}>Creator: Forge</div>
  <div style={{ color: '#444', fontSize: 15, marginBottom: 12 }}>Collection soon!</div>
  <div style={{ fontWeight: 700, color: '#2563eb', fontSize: 17 }}>Price: 10 MON</div>
    </div>
  );
}

const NFTs: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', background: 'var(--bg, #f8f9fa)', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
    <h2 style={{ fontWeight: 700, marginBottom: 12 }}>NFTs</h2>
    <p style={{ maxWidth: 400, marginBottom: 24, color: '#555', fontSize: '1rem' }}>
      Discover our 1000 collection on Monad, For GTD Mint on Mainnet. More features coming soon!
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'inherit' }}>
      <AnimatedAvatarCard />
    </div>
  </div>
);

export default NFTs;
