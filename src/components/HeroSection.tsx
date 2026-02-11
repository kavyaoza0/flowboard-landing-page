import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/dashboard-hero.png";
import { useRef, useState, useEffect } from "react";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50"
  >
    <div className="container mx-auto flex items-center justify-between h-16 px-6">
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-lg hero-gradient"
        />
        <span className="text-lg font-bold tracking-tight text-foreground">FlowBoard</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
        <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="text-muted-foreground">Log In</Button>
        <Button size="sm">Get Started</Button>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;

/* Animated counter hook */
const useCounter = (end: number, duration: number = 2, delay: number = 0) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const step = end / (duration * 60);
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [end, duration, delay]);
  return count;
};

/* Floating particles */
const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

/* 3D floating mini-card */
const FloatingCard = ({
  children,
  delay,
  x,
  y,
  rotate,
}: {
  children: React.ReactNode;
  delay: number;
  x: string;
  y: string;
  rotate: number;
}) => (
  <motion.div
    className="absolute glass-card rounded-xl p-3 shadow-lg hidden md:block z-20"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0.6, rotateZ: rotate }}
    animate={{
      opacity: [0, 1, 1, 1],
      y: [20, 0, -8, 0],
      rotateZ: [rotate, rotate + 2, rotate - 1, rotate],
      scale: [0.6, 1, 1.02, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay + 1,
      times: [0, 0.15, 0.5, 1],
    }}
  >
    {children}
  </motion.div>
);

/* Stats bar */
const stats = [
  { label: "Teams Active", value: 2400, suffix: "+", icon: Users },
  { label: "Tasks Shipped", value: 1200000, suffix: "", display: "1.2M", icon: CheckCircle2 },
  { label: "Efficiency Gain", value: 40, suffix: "%", icon: TrendingUp },
];

const StatCounter = ({ stat, delay }: { stat: typeof stats[0]; delay: number }) => {
  const count = useCounter(stat.display ? 0 : stat.value, 2, delay);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.8, duration: 0.5 }}
      className="flex items-center gap-2 text-center"
    >
      <stat.icon className="w-4 h-4 text-primary" />
      <span className="text-lg md:text-xl font-bold text-foreground">
        {stat.display || count}{stat.suffix}
      </span>
      <span className="text-xs text-muted-foreground">{stat.label}</span>
    </motion.div>
  );
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [60, -20]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.4], [8, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="relative min-h-[130vh] pt-32 pb-20 overflow-hidden">
      {/* Animated background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 hero-gradient opacity-[0.04]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
      />
      {/* Orbiting ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none hidden md:block">
        <motion.div
          className="w-3 h-3 rounded-full bg-primary/30 absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 400px" }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-accent/40 absolute"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "400px 400px", top: 10, left: 10 }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={6} />
      <FloatingParticle delay={1.5} x="80%" y="30%" size={4} />
      <FloatingParticle delay={0.8} x="25%" y="70%" size={5} />
      <FloatingParticle delay={2} x="70%" y="60%" size={3} />
      <FloatingParticle delay={1} x="50%" y="15%" size={7} />
      <FloatingParticle delay={0.5} x="90%" y="50%" size={4} />

      {/* 3D Floating mini dashboard cards */}
      <FloatingCard delay={0.5} x="5%" y="35%" rotate={-5}>
        <div className="flex items-center gap-2 text-xs">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-accent"
          />
          <span className="text-foreground font-medium">Sprint completed</span>
        </div>
        <div className="mt-1.5 flex gap-1">
          {[70, 90, 60, 85].map((h, i) => (
            <motion.div
              key={i}
              className="w-3 rounded-sm bg-primary/30"
              initial={{ height: 0 }}
              animate={{ height: h / 6 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
            />
          ))}
        </div>
      </FloatingCard>

      <FloatingCard delay={1.2} x="82%" y="40%" rotate={4}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-primary" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">+27%</div>
            <div className="text-[10px] text-muted-foreground">this week</div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard delay={2} x="8%" y="65%" rotate={3}>
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center">
            <CheckCircle2 className="w-2.5 h-2.5 text-accent" />
          </div>
          <span className="text-foreground font-medium">12 tasks done today</span>
        </div>
      </FloatingCard>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Now in public beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
        >
          <motion.span
            className="text-foreground inline-block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Work Flows
          </motion.span>
          <br />
          <motion.span
            className="text-gradient inline-block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            Better Together.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          The all-in-one platform for teams who want to move faster. Automate tasks,
          collaborate in real-time, and ship with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button size="lg" className="text-base px-8 py-6 glow-primary animate-pulse-glow">
              Try It Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button variant="outline" size="lg" className="text-base px-8 py-6">
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10"
        >
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} delay={i * 0.15} />
          ))}
        </motion.div>

        {/* Dashboard video with 3D scroll perspective */}
        {/* Dashboard image with 3D scroll perspective */}
        <div className="mt-12 sm:mt-16 mx-auto max-w-5xl px-2 sm:px-0" style={{ perspective: 1200 }}>
          <motion.div
            style={{
              scale: imageScale,
              y: imageY,
              rotateX: imageRotateX,
              opacity: imageOpacity,
            }}
            className="relative overflow-hidden floating-shadow border border-border/50 rounded-2xl gradient-border group"
          >
            <img
              src={dashboardImg}
              alt="FlowBoard dashboard preview"
              className="w-full h-auto"
            />
            {/* Animated scan line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              style={{ height: "30%" }}
            />
            {/* Shimmer overlay on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, hsl(var(--primary) / 0.06) 45%, hsl(var(--primary) / 0.12) 50%, hsl(var(--primary) / 0.06) 55%, transparent 60%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["-100% 0", "200% 0"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Corner glow accents */}
            <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
