import { motion } from "framer-motion";

interface FloatingOrbsProps {
  count?: number;
  className?: string;
}

const FloatingOrbs = ({ count = 5, className = "" }: FloatingOrbsProps) => {
  const orbs = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 8,
    x: `${10 + Math.random() * 80}%`,
    y: `${10 + Math.random() * 80}%`,
    duration: 6 + Math.random() * 8,
    delay: Math.random() * 4,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.1))`,
            boxShadow: `0 0 ${orb.size * 2}px hsl(var(--primary) / 0.15)`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.3, 0.8, 1.1, 1],
            opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
