import { motion } from "framer-motion";

interface RotatingCubeProps {
  size?: number;
  className?: string;
  children?: [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode];
}

const RotatingCube = ({ size = 60, className = "", children }: RotatingCubeProps) => {
  const half = size / 2;

  const faces = [
    { rotateY: 0, translateZ: half },
    { rotateY: 90, translateZ: half },
    { rotateY: 180, translateZ: half },
    { rotateY: 270, translateZ: half },
  ];

  return (
    <div className={`relative ${className}`} style={{ perspective: 600, width: size, height: size }}>
      <motion.div
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        animate={{ rotateY: [0, 360], rotateX: [0, 15, -15, 0] }}
        transition={{ rotateY: { duration: 16, repeat: Infinity, ease: "linear" }, rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm flex items-center justify-center text-primary"
            style={{
              transform: `rotateY(${face.rotateY}deg) translateZ(${face.translateZ}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            {children?.[i] ?? (
              <div className="w-3 h-3 rounded-full bg-primary/30" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RotatingCube;
