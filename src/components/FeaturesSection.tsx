import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Zap, Users, BarChart3, Shield, Workflow, Clock } from "lucide-react";
import TiltCard from "@/components/TiltCard";

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
  hidden: { opacity: 0, y: 40, scale: 0.95, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: 0.08 * i + 0.2,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="features" className="py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-primary/[0.02]" />
      {/* Background animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 -right-20 w-[250px] h-[250px] rounded-full bg-accent/5 blur-[80px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mt-3 text-foreground"
          >
            Everything you need to ship
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto"
          >
            Powerful tools designed for modern teams that move fast.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <TiltCard className="glass-card rounded-xl p-7 h-full group cursor-default gradient-border">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={feature.iconAnim}
                    transition={{ duration: feature.title === "Time Tracking" ? 8 : 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

                {/* Animated bottom border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />

                {/* Hover glow */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-500 pointer-events-none"
                />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
