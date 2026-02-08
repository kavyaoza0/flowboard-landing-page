import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 hero-gradient opacity-[0.06]" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
      />
      {/* Orbiting dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none hidden md:block">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{ top: "50%", left: "50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear", delay: i * 2 }}
          >
            <div
              className="w-2 h-2 rounded-full bg-primary/30"
              style={{ transform: `translateX(${150 + i * 40}px)` }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={isVisible ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          style={{ perspective: 600 }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="w-3.5 h-3.5" />
          </motion.div>
          Free for teams up to 10
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground"
        >
          Ready to transform
          <br />
          <span className="text-gradient">how your team works?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-muted-foreground text-lg mt-6 max-w-lg mx-auto"
        >
          Join thousands of teams already using FlowBoard to ship faster, together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Button size="lg" className="text-base px-10 py-6 glow-primary animate-pulse-glow">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          <p className="text-xs text-muted-foreground mt-4">No credit card required · Free 14-day trial</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
