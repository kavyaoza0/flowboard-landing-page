import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const companies = [
  "Stripe", "Vercel", "Linear", "Notion", "Figma",
  "Slack", "Dropbox", "Webflow", "Loom", "Airtable",
];

const TrustedBySection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-10 sm:py-14 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-widest mb-6 sm:mb-8"
        >
          Trusted by forward-thinking teams
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex marquee-container">
          <div className="flex shrink-0 items-center gap-8 sm:gap-12 md:gap-16 animate-marquee">
            {[...companies, ...companies].map((name, i) => (
              <motion.div
                key={`${name}-${i}`}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-2 sm:gap-2.5 group cursor-default select-none"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-muted/60 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300">
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {name[0]}
                  </span>
                </div>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground/60 group-hover:text-foreground/80 transition-colors duration-300 whitespace-nowrap">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-8 sm:gap-12 md:gap-16 animate-marquee" aria-hidden>
            {[...companies, ...companies].map((name, i) => (
              <motion.div
                key={`dup-${name}-${i}`}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-2 sm:gap-2.5 group cursor-default select-none"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg bg-muted/60 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300">
                  <span className="text-xs sm:text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {name[0]}
                  </span>
                </div>
                <span className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground/60 group-hover:text-foreground/80 transition-colors duration-300 whitespace-nowrap">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedBySection;
