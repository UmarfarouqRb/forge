import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, style, className }) => (
  <div
    className={`custom-card ${className || ''}`.trim()}
    style={style}
  >
    {children}
  </div>
);

export default Card;
