import { motion } from "framer-motion";

interface MorphBlobProps {
  className?: string;
  color?: string;
  size?: number;
  duration?: number;
}

const MorphBlob = ({ className = "", color = "primary", size = 300, duration = 12 }: MorphBlobProps) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "50% 50% 30% 70% / 60% 40% 60% 40%",
          "70% 30% 50% 50% / 40% 60% 40% 60%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
        ],
        rotate: [0, 90, 180, 360],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-full h-full rounded-[inherit]"
        style={{
          background: `radial-gradient(circle at 30% 30%, hsl(var(--${color}) / 0.15), hsl(var(--${color}) / 0.05) 60%, transparent)`,
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  );
};

export default MorphBlob;
