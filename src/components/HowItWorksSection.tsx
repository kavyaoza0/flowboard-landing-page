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
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="how-it-works" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-primary/[0.02]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mt-3 text-foreground"
          >
            Up and running in minutes
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ perspective: 1000 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40, scale: 0.95, rotateY: -15 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.18, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
            >
              <TiltCard className={`text-center rounded-xl p-8 bg-gradient-to-b ${step.gradient} border border-border/30 gradient-border`}>
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    <step.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="text-5xl font-black text-primary/10 mb-3"
                  whileHover={{ scale: 1.15, color: "hsl(var(--primary) / 0.25)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </TiltCard>

              {/* Animated connector line with flowing dot */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isVisible ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                    className="h-px bg-primary/30 origin-left"
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/50"
                    animate={isVisible ? { x: [0, 32, 0] } : {}}
                    transition={{ delay: 1.2 + i * 0.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
