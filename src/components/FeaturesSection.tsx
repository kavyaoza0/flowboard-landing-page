import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Zap, Users, BarChart3, Shield, Workflow, Clock } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import TextReveal from "@/components/animations/TextReveal";
import BlurFade from "@/components/animations/BlurFade";
import Spotlight from "@/components/animations/Spotlight";
import ParallaxSection from "@/components/animations/ParallaxSection";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import FlipCard from "@/components/animations/FlipCard";

const features = [
  {
    icon: Workflow,
    title: "Smart Automation",
    description: "Automate repetitive tasks and workflows with visual drag-and-drop tools.",
    iconAnim: { rotate: [0, 10, -10, 0] },
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "Work together seamlessly with live cursors, comments, and instant updates.",
    iconAnim: { scale: [1, 1.15, 1] },
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track performance with interactive dashboards and custom reporting.",
    iconAnim: { y: [0, -4, 0] },
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second load times with edge-deployed infrastructure worldwide.",
    iconAnim: { rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] },
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and role-based access.",
    iconAnim: { scale: [1, 1.08, 1], y: [0, -2, 0] },
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Built-in time tracking with automatic project allocation and reports.",
    iconAnim: { rotate: [0, 360] },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92, rotateX: 10, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.06 * i + 0.15,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="features" className="py-16 sm:py-20 md:py-28 relative section-glow" ref={ref}>
      <div className="absolute inset-0 bg-primary/[0.02] dot-grid" />
      <FloatingOrbs count={4} />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 -left-20 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-primary/5 blur-[80px] sm:blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 -right-20 w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] rounded-full bg-accent/5 blur-[60px] sm:blur-[80px]"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ParallaxSection speed={0.15}>
          <div className="text-center mb-10 sm:mb-16">
            <BlurFade delay={0}>
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
                Features
              </span>
            </BlurFade>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
              <TextReveal delay={0.1}>Everything you need to ship</TextReveal>
            </h2>
            <BlurFade delay={0.3}>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-xl mx-auto px-2">
                Powerful tools designed for modern teams that move fast.
              </p>
            </BlurFade>
          </div>
        </ParallaxSection>

        <Spotlight className="rounded-2xl p-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6" style={{ perspective: 1200 }}>
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <FlipCard
                  className="h-full min-h-[200px] sm:min-h-[220px]"
                  front={
                    <div className="glass-card rounded-xl p-5 sm:p-6 md:p-7 h-full group cursor-default gradient-border">
                      <motion.div
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div
                          animate={feature.iconAnim}
                          transition={{ duration: feature.title === "Time Tracking" ? 8 : 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                    </div>
                  }
                  back={
                    <div className="glass-card rounded-xl p-5 sm:p-6 md:p-7 h-full flex flex-col items-center justify-center text-center gradient-border bg-primary/5">
                      <feature.icon className="w-8 sm:w-10 h-8 sm:h-10 text-primary mb-3" />
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">Tap to flip back</p>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </Spotlight>
      </div>
    </section>
  );
};

export default FeaturesSection;
