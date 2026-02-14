import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, CheckCircle2, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/dashboard-hero.png";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import TextReveal from "@/components/animations/TextReveal";
import BlurFade from "@/components/animations/BlurFade";
import MagneticButton from "@/components/animations/MagneticButton";
import CountUp from "@/components/animations/CountUp";
import MorphBlob from "@/components/animations/MorphBlob";
import FloatingOrbs from "@/components/animations/FloatingOrbs";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
        <MagneticButton strength={0.2}>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hero-gradient"
            />
            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">FlowBoard</span>
          </div>
        </MagneticButton>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {["Features", "How It Works", "Testimonials"].map((item, i) => (
            <MagneticButton key={item} strength={0.15}>
              <motion.a
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="hover:text-foreground transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </motion.a>
            </MagneticButton>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 sm:p-2.5 rounded-lg text-muted-foreground hover:text-foreground bg-transparent hover:bg-primary/10 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 90, scale: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </motion.div>
            </motion.button>
          )}
          <Button variant="ghost" size="sm" className="text-muted-foreground text-xs sm:text-sm">Log In</Button>
          <MagneticButton>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="text-xs sm:text-sm">Get Started</Button>
            </motion.div>
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

/* Floating particles */
const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.15, 0.4, 0.15],
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
  mobileX,
  mobileY,
  rotate,
}: {
  children: React.ReactNode;
  delay: number;
  x: string;
  y: string;
  mobileX?: string;
  mobileY?: string;
  rotate: number;
}) => (
  <motion.div
    className="absolute glass-card rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg z-20 scale-[0.7] sm:scale-[0.85] md:scale-100"
    style={{ left: mobileX || x, top: mobileY || y }}
    initial={{ opacity: 0, scale: 0.4, rotateZ: rotate }}
    animate={{
      opacity: [0, 1, 1, 1],
      y: [15, 0, -6, 0],
      rotateZ: [rotate, rotate + 2, rotate - 1, rotate],
      scale: [0.4, 1, 1.02, 1],
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

/* Animated grid lines behind dashboard */
const GridLines = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={`h-${i}`}
        className="absolute left-0 right-0 h-px bg-primary"
        style={{ top: `${(i + 1) * 16.6}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5 + i * 0.1, duration: 0.8, ease: "easeOut" }}
      />
    ))}
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={`v-${i}`}
        className="absolute top-0 bottom-0 w-px bg-primary"
        style={{ left: `${(i + 1) * 12.5}%` }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.8 + i * 0.08, duration: 0.8, ease: "easeOut" }}
      />
    ))}
  </div>
);

/* Stats data */
const stats = [
  { label: "Teams Active", value: 2400, suffix: "+", icon: Users },
  { label: "Tasks Shipped", value: 1.2, suffix: "M", icon: CheckCircle2, decimals: 1 },
  { label: "Efficiency Gain", value: 40, suffix: "%", icon: TrendingUp },
];

/* Cursor trail effect */
const CursorGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-[1] hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, transparent 70%)",
      }}
    />
  );
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1.02]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [40, -10]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.4], [6, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="relative min-h-screen sm:min-h-[120vh] lg:min-h-[130vh] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Cursor glow */}
      <CursorGlow />

      {/* Animated background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 hero-gradient opacity-[0.04]" />
      <MorphBlob className="top-[15%] left-[10%]" color="primary" size={350} duration={14} />
      <MorphBlob className="top-[40%] right-[5%]" color="accent" size={250} duration={18} />
      <FloatingOrbs count={8} />
      <GridLines />

      {/* Orbiting ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] pointer-events-none hidden sm:block">
        <motion.div
          className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary/20 md:bg-primary/30 absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 250px" }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticle delay={0} x="8%" y="22%" size={5} />
      <FloatingParticle delay={1.5} x="85%" y="28%" size={4} />
      <FloatingParticle delay={0.8} x="20%" y="68%" size={4} />
      <FloatingParticle delay={2} x="75%" y="58%" size={3} />
      <FloatingParticle delay={1} x="50%" y="12%" size={6} />
      <FloatingParticle delay={0.5} x="92%" y="48%" size={3} />

      {/* Floating cards */}
      <div className="hidden sm:block">
        <FloatingCard delay={0.5} x="3%" y="35%" mobileX="2%" mobileY="32%" rotate={-5}>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent"
            />
            <span className="text-foreground font-medium">Sprint completed</span>
          </div>
          <div className="mt-1 sm:mt-1.5 flex gap-0.5 sm:gap-1">
            {[70, 90, 60, 85].map((h, i) => (
              <motion.div
                key={i}
                className="w-2 sm:w-3 rounded-sm bg-primary/30"
                initial={{ height: 0 }}
                animate={{ height: h / 7 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
              />
            ))}
          </div>
        </FloatingCard>

        <FloatingCard delay={1.2} x="84%" y="38%" mobileX="80%" mobileY="36%" rotate={4}>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-primary/15 flex items-center justify-center">
              <TrendingUp className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-primary" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-foreground">+27%</div>
              <div className="text-[8px] sm:text-[10px] text-muted-foreground">this week</div>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard delay={2} x="6%" y="62%" mobileX="4%" mobileY="60%" rotate={3}>
          <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] text-muted-foreground">
            <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle2 className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-accent" />
            </div>
            <span className="text-foreground font-medium">12 tasks done</span>
          </div>
        </FloatingCard>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge with blur-in */}
        <BlurFade delay={0.1} blur={10}>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-primary/20">
            <motion.div
              animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </motion.div>
            Now in public beta
          </div>
        </BlurFade>

        {/* Text reveal headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.95] mb-4 sm:mb-6">
          <TextReveal className="text-foreground block" delay={0.2} splitBy="char">
            Work Flows
          </TextReveal>
          <TextReveal className="text-gradient block" delay={0.5} splitBy="char">
            Better Together.
          </TextReveal>
        </h1>

        <BlurFade delay={0.8} distance={30}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            The all-in-one platform for teams who want to move faster. Automate tasks,
            collaborate in real-time, and ship with confidence.
          </p>
        </BlurFade>

        {/* CTA with magnetic hover */}
        <BlurFade delay={1} distance={20}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <MagneticButton strength={0.25}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 glow-primary animate-pulse-glow w-full sm:w-auto">
                  Try It Free
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </motion.div>
            </MagneticButton>
          </div>
        </BlurFade>

        {/* Stats with spring CountUp */}
        <BlurFade delay={1.3} distance={15}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-1.5 sm:gap-2 text-center"
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                </motion.div>
                <span className="text-base sm:text-lg md:text-xl font-bold text-foreground">
                  <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                </span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </BlurFade>

        {/* Dashboard image with 3D scroll perspective */}
        <div className="mt-10 sm:mt-14 md:mt-16 mx-auto max-w-5xl px-1 sm:px-2 md:px-0" style={{ perspective: 1200 }}>
          <motion.div
            style={{
              scale: imageScale,
              y: imageY,
              rotateX: imageRotateX,
              opacity: imageOpacity,
            }}
            className="relative overflow-hidden floating-shadow border border-border/50 rounded-xl sm:rounded-2xl gradient-border group"
          >
            <img
              src={dashboardImg}
              alt="FlowBoard dashboard preview"
              className="w-full h-auto"
            />
            {/* Animated scan line */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              style={{ height: "30%" }}
            />
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, hsl(var(--primary) / 0.06) 45%, hsl(var(--primary) / 0.12) 50%, hsl(var(--primary) / 0.06) 55%, transparent 60%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["-100% 0", "200% 0"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Corner glows */}
            <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-primary/10 blur-xl sm:blur-2xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-accent/10 blur-2xl sm:blur-3xl rounded-full pointer-events-none" />
            {/* Edge light beam */}
            <motion.div
              className="absolute top-0 left-0 w-full h-px pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["-100% 0", "200% 0"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
