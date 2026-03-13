import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const steps = [
  {
    type: "welcome",
    title: "Welcome! 👋",
    description: "Before you explore, can I ask you a few quick questions to personalize your experience?",
    options: ["Sure", "Skip"],
  },
  {
    type: "question",
    title: "What best describes you?",
    options: ["Brand Owner", "Business Looking for Content", "Real Estate Developer", "Startup Founder", "Just Exploring"],
  },
  {
    type: "question",
    title: "What are you mainly interested in today?",
    options: ["Social Media Growth", "Content Creation", "Brand Building", "Marketing Strategy", "Hiring for a Project"],
  },
  {
    type: "question",
    title: "What is your main goal right now?",
    options: ["Get more customers", "Build a stronger brand", "Improve social media presence", "Launch a new project"],
  },
  {
    type: "question",
    title: "How did you hear about this website?",
    options: ["Instagram", "Google", "Referral", "LinkedIn", "Other"],
  },
  {
    type: "final",
    title: "Perfect! 🎯",
    description: "Based on what you shared, this website will help you discover the best ways to grow your brand with powerful content and strategy.",
    options: ["Explore the Website"],
  },
];

const WelcomeInteraction = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (localStorage.getItem("welcome_done")) return;
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    localStorage.setItem("welcome_done", "1");
  };

  const handleOption = (option: string) => {
    if (step === 0 && option === "Skip") return close();
    if (step === steps.length - 1) return close();
    setDirection(1);
    setStep((s) => s + 1);
  };

  const current = steps[step];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} />
          <motion.div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Progress bar */}
            <div className="h-1 bg-slate-100">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <button
              onClick={close}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-bebas text-2xl text-slate-800 mb-2">{current.title}</h3>
                  {current.description && (
                    <p className="font-poppins text-sm text-slate-500 mb-6">{current.description}</p>
                  )}
                  <div className={`flex flex-wrap gap-2 ${current.type === "welcome" || current.type === "final" ? "" : "mt-6"}`}>
                    {current.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOption(opt)}
                        className={`font-poppins text-sm px-5 py-2.5 rounded-full border transition-all duration-200 ${
                          current.type === "final" || (current.type === "welcome" && opt === "Sure")
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent hover:shadow-lg hover:shadow-cyan-500/25"
                            : "border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeInteraction;
