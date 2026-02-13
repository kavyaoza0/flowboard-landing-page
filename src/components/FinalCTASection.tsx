import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import TextReveal from "@/components/animations/TextReveal";
import BlurFade from "@/components/animations/BlurFade";
import MagneticButton from "@/components/animations/MagneticButton";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden section-glow" ref={ref}>
      <div className="absolute inset-0 hero-gradient opacity-[0.06]" />
      <div className="absolute inset-0 dot-grid opacity-50" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-primary/5 blur-[80px] sm:blur-[100px]"
      />

      {/* Orbiting dots */}
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
        <BlurFade delay={0} blur={12}>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-6 border border-primary/20">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </motion.div>
            Free for teams up to 10
          </div>
        </BlurFade>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
          <TextReveal delay={0.1}>Ready to transform</TextReveal>
          <br />
          <TextReveal className="text-gradient" delay={0.35}>how your team works?</TextReveal>
        </h2>

        <BlurFade delay={0.6}>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-md sm:max-w-lg mx-auto px-2">
            Join thousands of teams already using FlowBoard to ship faster, together.
          </p>
        </BlurFade>

        <BlurFade delay={0.8}>
          <div className="mt-8 sm:mt-10">
            <MagneticButton className="inline-block">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 glow-primary animate-pulse-glow">
                  Start Free Trial
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
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">No credit card required · Free 14-day trial</p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default FinalCTASection;
