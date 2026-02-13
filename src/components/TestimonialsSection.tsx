import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, Quote } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import TextReveal from "@/components/animations/TextReveal";
import BlurFade from "@/components/animations/BlurFade";
import Spotlight from "@/components/animations/Spotlight";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering, Nextera",
    quote: "FlowBoard cut our sprint planning time in half. The automation features are genuinely game-changing.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Product Lead, Arcline",
    quote: "We tried every tool out there. FlowBoard is the only one our entire team actually uses daily.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "COO, Brightpath",
    quote: "The real-time collaboration makes remote work feel effortless. Best investment we've made this year.",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.15 + i * 0.15,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-28 section-glow" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <BlurFade delay={0}>
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
              Testimonials
            </span>
          </BlurFade>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            <TextReveal delay={0.1}>Loved by teams everywhere</TextReveal>
          </h2>
        </div>

        <Spotlight className="rounded-2xl p-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto" style={{ perspective: 1200 }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <TiltCard className="glass-card rounded-xl p-5 sm:p-6 md:p-7 h-full group gradient-border">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                  >
                    <Quote className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary/15 mb-2 sm:mb-3 group-hover:text-primary/30 transition-colors duration-300" />
                  </motion.div>
                  <div className="flex gap-0.5 mb-3 sm:mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0, rotate: -30 }}
                        animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.4 + j * 0.05 + i * 0.08, type: "spring", stiffness: 300 }}
                      >
                        <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs sm:text-sm font-bold text-primary"
                    >
                      {t.name[0]}
                    </motion.div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-foreground">{t.name}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </Spotlight>
      </div>
    </section>
  );
};

export default TestimonialsSection;
