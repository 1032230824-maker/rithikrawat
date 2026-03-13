import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", id: "about" },
  { label: "Who I Help", id: "who-i-help" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Skills", id: "skills" },
  { label: "Services", id: "services" },
  { label: "Real Estate", id: "real-estate" },
  { label: "Contact", id: "contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-600 hover:text-cyan-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl z-50"
          >
            <div className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-inter text-sm text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 py-3 px-4 rounded-xl text-left transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-poppins text-sm mt-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                onClick={() => scrollTo("contact")}
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
