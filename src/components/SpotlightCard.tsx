import { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard = ({ children, className = '' }: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
      style={
        {
          '--mouse-x': `${position.x}px`,
          '--mouse-y': `${position.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Spotlight effect */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(239 84% 67% / 0.15), transparent 40%)`,
        }}
      />
      
      {/* Glow border */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, hsl(239 84% 67% / 0.4), transparent 40%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      
      {children}
    </div>
  );
};

export default SpotlightCard;
