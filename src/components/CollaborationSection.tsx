import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MessageSquare, GitBranch, Video, ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const benefits = [
  {
    icon: MessageSquare,
    title: "Threaded Conversations",
    description: "Keep discussions organized with contextual threads attached to any task or document.",
  },
  {
    icon: GitBranch,
    title: "Branch & Merge Workflows",
    description: "Experiment freely with branching workflows that merge seamlessly when ready.",
  },
  {
    icon: Video,
    title: "Integrated Video Calls",
    description: "Jump into video huddles directly from any task without switching apps.",
  },
];

/* Animated mini bar chart */
const MiniChart = ({ isVisible }: { isVisible: boolean }) => {
  const bars = [45, 72, 58, 85, 64, 90, 76];
  return (
    <div className="flex items-end gap-1 h-12">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-2 rounded-t-sm bg-primary/40"
          initial={{ height: 0 }}
          animate={isVisible ? { height: `${h}%` } : {}}
          transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: "easeOut" }}
          whileHover={{ scaleY: 1.2, backgroundColor: "hsl(var(--primary) / 0.7)" }}
          style={{ originY: 1 }}
        />
      ))}
    </div>
  );
};

const CollaborationSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-primary uppercase tracking-widest"
            >
              Collaboration
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mt-3 text-foreground leading-tight"
            >
              Built for teams,
              <br />
              <span className="text-gradient">not silos.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground text-lg mt-5 max-w-md"
            >
              Break down barriers between departments with tools that bring everyone onto the same page.
            </motion.p>

            <div className="mt-10 space-y-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="flex gap-4 group cursor-default p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <b.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                      {b.title}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{b.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating UI mockup with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <TiltCard className="glass-card rounded-2xl p-6 floating-shadow gradient-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="ml-auto text-xs text-muted-foreground">FlowBoard Dashboard</div>
              </div>
              <div className="space-y-4">
                {[85, 60, 45, 72].map((w, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, width: 0 }}
                    animate={isVisible ? { opacity: 1, width: "100%" } : {}}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      className="w-8 h-8 rounded-full bg-primary/10 shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    />
                    <div className="flex-1 space-y-2">
                      <motion.div
                        className="h-3 rounded-full bg-muted"
                        initial={{ scaleX: 0 }}
                        animate={isVisible ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
                        style={{ width: `${w}%`, originX: 0 }}
                      />
                      <motion.div
                        className="h-2 rounded-full bg-muted/50"
                        initial={{ scaleX: 0 }}
                        animate={isVisible ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.9 + i * 0.12, duration: 0.5 }}
                        style={{ width: `${w - 20}%`, originX: 0 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mini chart */}
              <div className="mt-5 p-3 rounded-xl bg-muted/30">
                <div className="text-xs text-muted-foreground mb-2">Weekly Performance</div>
                <MiniChart isVisible={isVisible} />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Active", value: "24", color: "bg-primary/20 text-primary" },
                  { label: "Done", value: "156", color: "bg-accent/20 text-accent" },
                  { label: "Review", value: "8", color: "bg-muted text-muted-foreground" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.08, y: -4, rotateZ: 1 }}
                    className={`rounded-xl p-4 text-center cursor-default transition-shadow duration-300 hover:shadow-lg ${stat.color}`}
                  >
                    <motion.div
                      className="text-2xl font-bold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs mt-1 opacity-80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </TiltCard>

            {/* Floating notification */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"
                >
                  <MessageSquare className="w-3 h-3 text-accent" />
                </motion.div>
                <span className="font-medium text-foreground">3 new comments</span>
              </div>
            </motion.div>

            {/* Second floating element */}
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-3 -left-3 glass-card rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-medium text-foreground">Task completed</span>
              </div>
            </motion.div>

            {/* Third floating element - new */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, -2, 2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-6 glass-card rounded-lg p-2 shadow-md hidden md:block"
            >
              <div className="flex items-center gap-1.5 text-[10px]">
                <div className="w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center">
                  <GitBranch className="w-2.5 h-2.5 text-primary" />
                </div>
                <span className="text-foreground font-medium">PR merged</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
