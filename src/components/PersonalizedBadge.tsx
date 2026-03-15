import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PersonalizedBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/60 rounded-full px-3 py-1 mb-4"
  >
    <Sparkles className="w-3 h-3 text-cyan-500" />
    <span className="text-xs font-poppins font-medium text-cyan-600">Recommended for you</span>
  </motion.div>
);

export default PersonalizedBadge;
