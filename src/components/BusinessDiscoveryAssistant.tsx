import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ChevronRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "rr-discovery-completed";

const steps = [
  {
    type: "welcome" as const,
    title: "Welcome. Let's understand your business.",
    description:
      "This quick 30-second discovery helps us guide you to the most valuable solutions on this platform.",
  },
  {
    type: "question" as const,
    title: "What best describes you?",
    options: [
      "Real Estate Developer",
      "Business Owner",
      "Startup Founder",
      "Marketing Agency",
      "Entrepreneur / Personal Brand",
    ],
  },
  {
    type: "question" as const,
    title: "What is your main growth focus right now?",
    options: [
      "Generate more qualified leads",
      "Build a stronger brand presence",
      "Grow social media influence",
      "Launch a new project",
      "Scale marketing performance",
    ],
  },
  {
    type: "question" as const,
    title: "What type of support would create the biggest impact for you?",
    options: [
      "Content creation",
      "Social media growth strategy",
      "Brand positioning",
      "Marketing consultation",
      "Complete business growth solution",
    ],
  },
  {
    type: "final" as const,
    title: "You're in the right place.",
    description:
      "Based on your goals, this platform provides powerful strategies, content, and digital growth solutions designed to help businesses scale and stand out.",
  },
];

const BusinessDiscoveryAssistant = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  }, []);

  const next = useCallback(() => {
    if (step >= steps.length - 1) {
      close();
      return;
    }
    setStep((s) => s + 1);
  }, [step, close]);

  const scrollTo = useCallback(
    (id: string) => {
      close();
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    },
    [close]
  );

  const current = steps[step];
  const totalSteps = steps.length;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
        >
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Progress bar */}
            <div className="h-1 bg-slate-100">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-poppins tracking-wider text-slate-400 uppercase">
                  Step {step + 1} of {totalSteps}
                </span>
                <button
                  onClick={close}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title */}
              <h3 className="font-bebas text-2xl sm:text-3xl text-slate-800 mt-3 leading-tight">
                {current.title}
              </h3>

              {/* Welcome */}
              {current.type === "welcome" && (
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-slate-500 font-poppins leading-relaxed">
                    {current.description}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={next}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-poppins text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Start <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={close}
                      className="px-5 py-3 rounded-xl border border-slate-200 text-slate-500 font-poppins text-sm hover:bg-slate-50 transition-colors"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              )}

              {/* Question */}
              {current.type === "question" && (
                <div className="mt-5 space-y-2.5">
                  {current.options!.map((option) => (
                    <button
                      key={option}
                      onClick={next}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl border border-slate-200 text-left text-sm font-poppins text-slate-700 hover:border-cyan-400 hover:bg-cyan-50/50 hover:text-cyan-700 transition-all duration-200 group"
                    >
                      {option}
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-500 transition-colors" />
                    </button>
                  ))}
                </div>
              )}

              {/* Final */}
              {current.type === "final" && (
                <div className="mt-4 space-y-6">
                  <div className="flex items-center gap-2 text-cyan-500">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-xs font-poppins font-medium uppercase tracking-wider">
                      Perfect Match
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-poppins leading-relaxed">
                    {current.description}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={close}
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-poppins text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Explore Website
                    </button>
                    <button
                      onClick={() => scrollTo("contact")}
                      className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-700 font-poppins text-sm font-medium hover:bg-slate-50 transition-colors"
                    >
                      Start a Conversation
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessDiscoveryAssistant;
