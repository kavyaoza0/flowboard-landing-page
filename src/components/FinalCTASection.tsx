import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 hero-gradient opacity-[0.06]" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-primary/5 blur-[80px] sm:blur-[100px]"
      />
      {/* Orbiting dots - visible on sm+ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] pointer-events-none hidden sm:block">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary/20"
            style={{ top: "50%", left: "50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear", delay: i * 2 }}
          >
            <div
              className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary/30"
              style={{ transform: `translateX(${100 + i * 30}px)` }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
          animate={isVisible ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-6 border border-primary/20"
          style={{ perspective: 600 }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
          </motion.div>
          Free for teams up to 10
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground"
        >
          Ready to transform
          <br />
          <span className="text-gradient">how your team works?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-muted-foreground text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-md sm:max-w-lg mx-auto px-2"
        >
          Join thousands of teams already using FlowBoard to ship faster, together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 sm:mt-10"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Button size="lg" className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 glow-primary animate-pulse-glow">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">No credit card required · Free 14-day trial</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
