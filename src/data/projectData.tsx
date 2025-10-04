
import { FaUser, FaHeart, FaEye } from 'react-icons/fa';

export const projectData = [
  {
    id: 1,
    name: 'Monad',
    image: '/mon.png',
    description: 'Monad is a high-performance blockchain platform for DeFi applications.',
    category: 'L1',
    users: 323,
    followers: 200,
    likes: 20,
    watched: 10,
    status: 'active',
    icons: [
      <FaUser key="user" style={{ color: '#23272f', fontSize: 13 }} />, 
      <FaHeart key="like" style={{ color: '#e74c3c', fontSize: 13 }} />, 
      <FaEye key="watched" style={{ color: '#007bff', fontSize: 13 }} />
    ],
    tasks: [
      {
        id: 1,
        label: 'Visit Monad Website',
        url: 'https://monad.xyz',
        type: 'external',
      },
      {
        id: 2,
        label: 'Visit Monad Twitter',
        url: 'https://twitter.com/monad_xyz',
        type: 'external',
      },
      {
        id: 3,
        label: 'Join Monad Discord',
        url: 'https://discord.gg/monad',
        type: 'external',
      },
    ],
  },
  {
    id: 2,
    name: 'Pond',
    image: 'pond.jpg',
    description: 'Pond connects liquidity providers and traders in a seamless DeFi ecosystem.',
    category: 'AI Project',
    users: 250,
    followers: 150,
    likes: 15,
    watched: 7,
    status: 'upcoming',
    icons: [
      <FaUser key="user" style={{ color: '#23272f', fontSize: 13 }} />, 
      <FaHeart key="like" style={{ color: '#e74c3c', fontSize: 13 }} />, 
      <FaEye key="watched" style={{ color: '#007bff', fontSize: 13 }} />
    ],

    tasks: [
      {
        id: 1,
        label: 'Visit Pond Website',
        url: 'https://cryptopond.xyz/',
        type: 'external',
      },
      {
        id: 2,
        label: 'Visit JoinPond Twitter',
        url: 'https://x.com/JoinPond',
        type: 'external',
      },
      {
        id: 3,
        label: 'Join Pond Discord',
        url: 'https://discord.com/invite/T4PZHA9T94',
        type: 'external',
      },
    ],
  },

  {
    id: 3,
    name: 'Forge',
    image: '/forge-2.1.png',
    description: 'Forge powers next-generation NFT and gaming experiences on-chain.',
    category: 'AI Agent, NFTs',
    users: 77,
    followers: 120,
    likes: 12,
    watched: 5,
    status: 'ended',
    icons: [
      <FaUser key="user" style={{ color: '#23272f', fontSize: 13 }} />, 
      <FaHeart key="like" style={{ color: '#e74c3c', fontSize: 13 }} />, 
      <FaEye key="watched" style={{ color: '#007bff', fontSize: 13 }} />
    ],

    tasks: [
      {
        id: 1,
        label: 'Visit Forge Website',
        url: 'https://demo-forge.app.netlify.com',
        type: 'external',
      },
      {
        id: 2,
        label: 'Visit Forge Twitter',
        url: 'https://twitter.com/',
        type: 'external',
      },
      {
        id: 3,
        label: 'Join Forge Discord',
        url: 'https://discord.gg/',
        type: 'external',
      },
    ],
  },
];
