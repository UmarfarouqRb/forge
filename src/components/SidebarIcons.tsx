import React from 'react';
import { FaProjectDiagram, FaTasks, FaExchangeAlt, FaRoad, FaChartLine, FaLink, FaGift, FaParachuteBox } from 'react-icons/fa';
import { MdImage } from 'react-icons/md';

const nftIcon = <MdImage size={18} style={{ opacity: 0.85, verticalAlign: 'middle' }} />;

export const sidebarIcons: Record<string, React.ReactNode> = {
  Project: <FaProjectDiagram size={18} />,
  Quest: <FaTasks size={18} />,
  swap: <FaExchangeAlt size={18} />,
  bridge: <FaRoad size={18} />,
  Perp: <FaChartLine size={18} />,
  NFTs: nftIcon,
  Onchain: <FaLink size={18} />,
  Reward: <FaGift size={18} />,
  Airdrop: <FaParachuteBox size={18} />,
};

export default sidebarIcons;
