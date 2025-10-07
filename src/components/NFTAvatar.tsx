import React, { useEffect, useRef } from "react";


// Customizable NFT avatar for Forge collection
interface NFTAvatarProps {
  size?: number;
  bgColor?: string;
  faceColor?: string;
  leftEyeColor?: string;
  rightEyeColor?: string;
  mouthColor?: string;
  hatColor?: string;
  animateEyes?: boolean;
}


const NFTAvatar: React.FC<NFTAvatarProps> = ({
  size = 180,
  bgColor = 'url(#bg)',
  faceColor = 'url(#face)',
  leftEyeColor = '#2563eb',
  rightEyeColor = '#2563eb',
  mouthColor = '#fff',
  hatColor = '#2563eb',
  animateEyes = true,
}) => {
  const leftEyeRef = useRef<SVGCircleElement>(null);
  const rightEyeRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!animateEyes) return;
  let blinkTimeout: number;
  let blinkInterval: number;
    const blink = () => {
      if (leftEyeRef.current && rightEyeRef.current) {
        leftEyeRef.current.setAttribute('r', '2');
        rightEyeRef.current.setAttribute('r', '2');
        blinkTimeout = setTimeout(() => {
          leftEyeRef.current!.setAttribute('r', '6');
          rightEyeRef.current!.setAttribute('r', '6');
        }, 180);
      }
    };
    blinkInterval = setInterval(blink, 2200 + Math.random() * 1200);
    return () => {
      clearInterval(blinkInterval);
      clearTimeout(blinkTimeout);
    };
  }, [animateEyes]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "24px", boxShadow: "0 4px 24px #a47be244", background: "radial-gradient(circle at 60% 40%, #a47be2cc 0%, #fff0 80%)" }}
    >
      {/* Animated glowing background */}
      <circle cx="90" cy="90" r="88" stroke="url(#border)" strokeWidth="4" fill="none" />
      <rect width="180" height="180" rx="24" fill={bgColor} />
      <circle cx="90" cy="90" r="80" fill="url(#glow)" fillOpacity="0.18" />
      {/* Extra accent shapes */}
      <circle cx="40" cy="40" r="12" fill="#16c784" fillOpacity="0.7" />
      <rect x="130" y="130" width="18" height="18" rx="6" fill="#2563eb" fillOpacity="0.7" />
      <circle cx="150" cy="50" r="8" fill="#a47be2" fillOpacity="0.7" />
      {/* Main avatar face with 3D gradient */}
      <circle cx="90" cy="90" r="54" fill="#fff" fillOpacity="0.13" />
      <ellipse cx="90" cy="120" rx="38" ry="18" fill="#23233a" fillOpacity="0.18" />
      <circle cx="90" cy="80" r="38" fill={faceColor} />
      {/* 3D highlight on face */}
      <ellipse cx="90" cy="70" rx="18" ry="8" fill="#fff" fillOpacity="0.18" />
      {/* Eyebrows */}
      <rect x="65" y="65" width="16" height="3" rx="1.5" fill="#23233a" fillOpacity="0.7" />
      <rect x="99" y="65" width="16" height="3" rx="1.5" fill="#23233a" fillOpacity="0.7" />
      {/* Eyes (animated blink) */}
      <circle ref={leftEyeRef} cx="75" cy="80" r="6" fill={leftEyeColor} />
      <circle ref={rightEyeRef} cx="105" cy="80" r="6" fill={rightEyeColor} />
      {/* Nose (3D effect) */}
      <ellipse cx="90" cy="90" rx="4" ry="7" fill="#a47be2" fillOpacity="0.7" />
      <ellipse cx="90" cy="92" rx="2.5" ry="3.5" fill="#fff" fillOpacity="0.18" />
      {/* Mouth (smile, 3D shadow) */}
      <path d="M80 104 Q90 112 100 104" stroke="#23233a" strokeWidth="3" fill="none" />
      <ellipse cx="90" cy="108" rx="10" ry="4" fill={mouthColor} fillOpacity="0.5" />
      {/* Hat (customizable color) */}
      <rect x="60" y="38" width="60" height="18" rx="7" fill="#23233a" />
      <rect x="70" y="28" width="40" height="16" rx="8" fill={hatColor} />
      {/* Glasses */}
      <ellipse cx="75" cy="80" rx="10" ry="7" fill="#fff" fillOpacity="0.7" stroke="#23233a" strokeWidth="2" />
      <ellipse cx="105" cy="80" rx="10" ry="7" fill="#fff" fillOpacity="0.7" stroke="#23233a" strokeWidth="2" />
      <rect x="85" y="80" width="10" height="2" rx="1" fill="#23233a" />
      <rect x="65" y="80" width="5" height="2" rx="1" fill="#23233a" />
      <rect x="110" y="80" width="5" height="2" rx="1" fill="#23233a" />
      <defs>
        <radialGradient id="bg" cx="0" cy="0" r="1" gradientTransform="translate(90 90) scale(90)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a47be2" />
          <stop offset="1" stopColor="#2563eb" />
        </radialGradient>
        <radialGradient id="face" cx="0" cy="0" r="1" gradientTransform="translate(90 80) scale(38)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.8" />
          <stop offset="1" stopColor="#a47be2" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id="border" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a47be2" />
          <stop offset="1" stopColor="#16c784" />
        </linearGradient>
        <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(90 90) scale(80)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a47be2" stopOpacity="0.18" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.01" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default NFTAvatar;
