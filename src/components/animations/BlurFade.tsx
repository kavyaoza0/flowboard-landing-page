import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
  blur?: number;
}

const BlurFade = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
  once = true,
  blur = 6,
}: BlurFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });

  const dirMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        ...dirMap[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 }
          : {}
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
