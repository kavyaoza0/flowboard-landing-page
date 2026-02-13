import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
}

const CountUp = ({ target, suffix = "", prefix = "", className = "", duration = 2, decimals = 0 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (val) => {
      setDisplay(val.toFixed(decimals));
    });
    return unsubscribe;
  }, [spring, decimals]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {prefix}{display}{suffix}
    </motion.span>
  );
};

export default CountUp;
