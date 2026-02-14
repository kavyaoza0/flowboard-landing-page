import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MessageSquare, GitBranch, Video, ArrowUpRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import TextReveal from "@/components/animations/TextReveal";
import BlurFade from "@/components/animations/BlurFade";
import CountUp from "@/components/animations/CountUp";
import RotatingCube from "@/components/animations/RotatingCube";
import MorphBlob from "@/components/animations/MorphBlob";

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

const MiniChart = ({ isVisible }: { isVisible: boolean }) => {
  const bars = [45, 72, 58, 85, 64, 90, 76];
  return (
    <div className="flex items-end gap-1 h-10 sm:h-12">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-1.5 sm:w-2 rounded-t-sm bg-primary/40"
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
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section className="py-16 sm:py-20 md:py-28 section-glow" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div>
            <BlurFade delay={0} direction="left">
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
                Collaboration
              </span>
            </BlurFade>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-foreground leading-tight">
              <TextReveal delay={0.1}>Built for teams,</TextReveal>
              <br />
              <TextReveal className="text-gradient" delay={0.3}>not silos.</TextReveal>
            </h2>
            <BlurFade delay={0.4}>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-4 sm:mt-5 max-w-md">
                Break down barriers between departments with tools that bring everyone onto the same page.
              </p>
            </BlurFade>

            <div className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4 md:space-y-5">
              {benefits.map((b, i) => (
                <BlurFade key={b.title} delay={0.5 + i * 0.12} direction="left">
                  <motion.div
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="flex gap-3 sm:gap-4 group cursor-default p-2.5 sm:p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                  >
                    <motion.div
                      className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-300"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <b.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                        {b.title}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{b.description}</p>
                    </div>
                  </motion.div>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Floating UI mockup */}
          <BlurFade delay={0.3} direction="right" distance={40}>
            <motion.div
              className="relative"
              style={{ perspective: 1000 }}
            >
              <MorphBlob className="-top-10 -right-10 opacity-60" color="accent" size={200} duration={10} />

              {/* 3D Rotating Cube widget */}
              <div className="absolute -top-8 -left-6 z-30 hidden sm:block">
                <RotatingCube size={48}>
                  {[
                    <MessageSquare key="m" className="w-4 h-4" />,
                    <GitBranch key="g" className="w-4 h-4" />,
                    <Video key="v" className="w-4 h-4" />,
                    <ArrowUpRight key="a" className="w-4 h-4" />,
                  ]}
                </RotatingCube>
              </div>
              <TiltCard className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 floating-shadow gradient-border">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-destructive/60" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-accent/60" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary/40" />
                  <div className="ml-auto text-[10px] sm:text-xs text-muted-foreground">FlowBoard Dashboard</div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {[85, 60, 45, 72].map((w, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, width: 0 }}
                      animate={isVisible ? { opacity: 1, width: "100%" } : {}}
                      transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <motion.div
                        className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-primary/10 shrink-0"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      />
                      <div className="flex-1 space-y-1.5 sm:space-y-2">
                        <motion.div
                          className="h-2.5 sm:h-3 rounded-full bg-muted"
                          initial={{ scaleX: 0 }}
                          animate={isVisible ? { scaleX: 1 } : {}}
                          transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
                          style={{ width: `${w}%`, originX: 0 }}
                        />
                        <motion.div
                          className="h-1.5 sm:h-2 rounded-full bg-muted/50"
                          initial={{ scaleX: 0 }}
                          animate={isVisible ? { scaleX: 1 } : {}}
                          transition={{ delay: 0.9 + i * 0.12, duration: 0.5 }}
                          style={{ width: `${w - 20}%`, originX: 0 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-5 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-muted/30">
                  <div className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2">Weekly Performance</div>
                  <MiniChart isVisible={isVisible} />
                </div>

                <div className="mt-4 sm:mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: "Active", value: 24, color: "bg-primary/20 text-primary" },
                    { label: "Done", value: 156, color: "bg-accent/20 text-accent" },
                    { label: "Review", value: 8, color: "bg-muted text-muted-foreground" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.06, y: -3 }}
                      className={`rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 text-center cursor-default transition-shadow duration-300 hover:shadow-lg ${stat.color}`}
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold">
                        <CountUp target={stat.value} />
                      </div>
                      <div className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 opacity-80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </TiltCard>

              {/* Floating notifications */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 1, -1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 glass-card rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg scale-[0.85] sm:scale-100"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center"
                  >
                    <MessageSquare className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-accent" />
                  </motion.div>
                  <span className="font-medium text-foreground">3 new comments</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 sm:-bottom-3 -left-1 sm:-left-3 glass-card rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg scale-[0.85] sm:scale-100"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-medium text-foreground">Task completed</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-2 sm:-right-6 glass-card rounded-lg p-1.5 sm:p-2 shadow-md hidden sm:block"
              >
                <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px]">
                  <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-primary/15 flex items-center justify-center">
                    <GitBranch className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">PR merged</span>
                </div>
              </motion.div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
