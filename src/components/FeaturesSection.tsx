import { motion, useMotionValue, useSpring } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Zap, Users, BarChart3, Shield, Workflow, Clock } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const features = [
  {
    icon: Workflow,
    title: "Smart Automation",
    description: "Automate repetitive tasks and workflows with visual drag-and-drop tools.",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "Work together seamlessly with live cursors, comments, and instant updates.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track performance with interactive dashboards and custom reporting.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second load times with edge-deployed infrastructure worldwide.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and role-based access.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Built-in time tracking with automatic project allocation and reports.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <TiltCard className="glass-card rounded-xl p-7 h-full group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <feature.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

                {/* Animated bottom border on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
