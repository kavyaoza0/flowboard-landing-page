import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Community", "Support", "Status"],
};

const Footer = () => (
  <footer className="border-t border-border py-10 sm:py-14 md:py-16">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-1">
          <motion.div
            className="flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-md hero-gradient"
            />
            <span className="text-sm sm:text-base font-bold text-foreground">FlowBoard</span>
          </motion.div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-[200px] leading-relaxed">
            The all-in-one platform for teams who ship fast.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">{category}</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-border/50">
        <p className="text-[10px] sm:text-xs text-muted-foreground">© 2026 FlowBoard. All rights reserved.</p>
        <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-muted-foreground">
          {["Privacy", "Terms", "Cookies"].map((link) => (
            <motion.a
              key={link}
              href="#"
              className="hover:text-foreground transition-colors"
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
