
import React from 'react';


const exampleNft = {
  name: 'Sample NFT',
  image: 'https://via.placeholder.com/220x220.png?text=NFT+Preview',
  description: 'Collection soon!',
  creator: 'Creator: Forge',
  price: '10 MON',
};

const NFTs: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', background: 'var(--bg, #f8f9fa)', fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif' }}>
    <h2 style={{ fontWeight: 700, marginBottom: 12 }}>NFTs</h2>
    <p style={{ maxWidth: 400, marginBottom: 24, color: '#555', fontSize: '1rem' }}>
      Discover our 1000 collection on Monad, For GTD Mint on Mainnet. More features coming soon!
    </p>
  <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', fontFamily: 'inherit' }}>
      {/* Example NFT Card */}
  <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #0001', padding: 24, width: 320, height: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24, fontFamily: 'inherit' }}>
  <img src={exampleNft.image} alt={exampleNft.name} style={{ width: 300, height: 380, objectFit: 'cover', borderRadius: 14, marginBottom: 16, background: '#eee' }} />
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 6 }}>{exampleNft.name}</div>
        <div style={{ color: '#888', fontSize: 15, marginBottom: 10 }}>{exampleNft.creator}</div>
        <div style={{ color: '#444', fontSize: 15, marginBottom: 12 }}>{exampleNft.description}</div>
        <div style={{ fontWeight: 600, color: '#2563eb', fontSize: 17 }}>{exampleNft.price}</div>
      </div>
    </div>
  </div>
);

export default NFTs;
