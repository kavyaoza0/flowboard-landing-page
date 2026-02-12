import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import TiltCard from "@/components/TiltCard";
import { UserPlus, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Workspace",
    description: "Set up your team workspace in seconds. Invite members and configure permissions.",
    gradient: "from-primary/20 to-primary/5",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Design Your Workflow",
    description: "Build custom workflows with our visual editor. Drag, drop, and automate.",
    gradient: "from-accent/20 to-accent/5",
    icon: Palette,
  },
  {
    number: "03",
    title: "Collaborate & Ship",
    description: "Work together in real-time. Track progress and ship with confidence.",
    gradient: "from-primary/20 to-accent/5",
    icon: Rocket,
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-28 relative section-glow" ref={ref}>
      <div className="absolute inset-0 bg-primary/[0.02] dot-grid" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-foreground"
          >
            Up and running in minutes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 md:gap-8 max-w-4xl mx-auto" style={{ perspective: 1000 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30, scale: 0.95, rotateY: -10 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
            >
              <TiltCard className={`text-center rounded-xl p-6 sm:p-7 md:p-8 bg-gradient-to-b ${step.gradient} border border-border/30 gradient-border`}>
                <motion.div
                  className="w-11 sm:w-12 md:w-14 h-11 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    <step.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="text-4xl sm:text-5xl font-black text-primary/10 mb-2 sm:mb-3"
                  whileHover={{ scale: 1.15, color: "hsl(var(--primary) / 0.25)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </TiltCard>

              {/* Connector - horizontal on sm+, vertical on mobile */}
              {i < steps.length - 1 && (
                <>
                  {/* Horizontal connector - tablet+ */}
                  <div className="hidden sm:block absolute top-1/2 -right-3 md:-right-4 w-6 md:w-8">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isVisible ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                      className="h-px bg-primary/30 origin-left"
                    />
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary/50"
                      animate={isVisible ? { x: [0, 24, 0] } : {}}
                      transition={{ delay: 1.2 + i * 0.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  {/* Vertical connector - mobile */}
                  <div className="sm:hidden flex justify-center py-2">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={isVisible ? { scaleY: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                      className="w-px h-6 bg-primary/30 origin-top"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
