import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border py-8 sm:py-10 md:py-12">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 sm:w-6 h-5 sm:h-6 rounded-md hero-gradient"
          />
          <span className="text-xs sm:text-sm font-semibold text-foreground">FlowBoard</span>
        </motion.div>
        <div className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <motion.a
              key={link}
              href="#"
              className="hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground">© 2026 FlowBoard. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
