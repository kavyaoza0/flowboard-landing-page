import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/dashboard-hero.png";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50"
  >
    <div className="container mx-auto flex items-center justify-between h-16 px-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg hero-gradient" />
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

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const imageBorderRadius = useTransform(scrollYProgress, [0, 0.5], [24, 12]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-[0.04]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <Play className="w-3 h-3 fill-current" />
          Now in public beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-foreground">Work Flows</span>
          <br />
          <span className="text-gradient">Better Together.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          The all-in-one platform for teams who want to move faster. Automate tasks,
          collaborate in real-time, and ship with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="text-base px-8 py-6 glow-primary animate-pulse-glow">
            Try It Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-6">
            Watch Demo
          </Button>
        </motion.div>

        {/* Dashboard image with scroll animation */}
        <motion.div
          style={{
            scale: imageScale,
            y: imageY,
            opacity: imageOpacity,
            borderRadius: imageBorderRadius,
          }}
          className="mt-20 mx-auto max-w-5xl overflow-hidden floating-shadow border border-border/50"
        >
          <img
            src={dashboardImg}
            alt="FlowBoard Dashboard"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};
