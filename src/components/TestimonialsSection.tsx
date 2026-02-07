import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, Quote } from "lucide-react";
import TiltCard from "@/components/TiltCard";

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

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="testimonials" className="py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mt-3 text-foreground"
          >
            Loved by teams everywhere
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.14, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <TiltCard className="glass-card rounded-xl p-7 h-full group">
                <Quote className="w-8 h-8 text-primary/15 mb-3 group-hover:text-primary/30 transition-colors duration-300" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + j * 0.06 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary"
                  >
                    {t.name[0]}
                  </motion.div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
