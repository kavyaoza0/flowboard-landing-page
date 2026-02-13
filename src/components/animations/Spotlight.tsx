import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
}

const Spotlight = ({ children, className = "" }: SpotlightProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, hsl(var(--primary) / 0.08), transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
};

export default Spotlight;
