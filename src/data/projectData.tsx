
import { FaUser, FaHeart, FaEye } from 'react-icons/fa';

export const projectData = [
  {
    id: 1,
    name: 'Monad',
    image: '/mon.png',
    description: 'Monad is a high-performance blockchain platform for DeFi applications.',
    category: 'L1',
    users: '323k',
    followers: '205k',
    likes: '586k',
    watched: '1.2M',
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
    users: '25k',
    followers: '150k',
    likes: '154k',
    watched: '437k',
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
    users: '77k',
    followers: '120k',
    likes: '125k',
    watched: '225k',
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
