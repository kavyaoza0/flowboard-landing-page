import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "word" | "char";
}

const TextReveal = ({
  children,
  className = "",
  delay = 0,
  once = true,
  as: Tag = "span",
  splitBy = "word",
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const units = splitBy === "char" ? children.split("") : children.split(" ");

  return (
    <Tag className={className}>
      <span ref={ref} className="inline">
        {units.map((unit, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", rotateX: -80, opacity: 0, filter: "blur(4px)" }}
              animate={
                isInView
                  ? { y: "0%", rotateX: 0, opacity: 1, filter: "blur(0px)" }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: delay + i * (splitBy === "char" ? 0.025 : 0.06),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {unit}
              {splitBy === "word" && "\u00A0"}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
};

export default TextReveal;
