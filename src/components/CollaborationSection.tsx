import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MessageSquare, GitBranch, Video } from "lucide-react";

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

const CollaborationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              className="text-sm font-semibold text-primary uppercase tracking-widest"
            >
              Collaboration
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-3 text-foreground leading-tight"
            >
              Built for teams,
              <br />
              <span className="text-gradient">not silos.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mt-5 max-w-md"
            >
              Break down barriers between departments with tools that bring everyone onto the same page.
            </motion.p>

            <div className="mt-10 space-y-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{b.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{b.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating UI mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 floating-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
              </div>
              <div className="space-y-4">
                {[85, 60, 45, 72].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 rounded-full bg-muted" style={{ width: `${w}%` }} />
                      <div className="h-2 rounded-full bg-muted/50" style={{ width: `${w - 20}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Active", value: "24", color: "bg-primary/20 text-primary" },
                  { label: "Done", value: "156", color: "bg-accent/20 text-accent" },
                  { label: "Review", value: "8", color: "bg-muted text-muted-foreground" },
                ].map((stat) => (
                  <div key={stat.label} className={`rounded-xl p-4 text-center ${stat.color}`}>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs mt-1 opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating notification */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <MessageSquare className="w-3 h-3 text-accent" />
                </div>
                <span className="font-medium text-foreground">3 new comments</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
