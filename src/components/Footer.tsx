import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-6 rounded-md hero-gradient"
          />
          <span className="text-sm font-semibold text-foreground">FlowBoard</span>
        </motion.div>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
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
        <p className="text-xs text-muted-foreground">© 2026 FlowBoard. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
