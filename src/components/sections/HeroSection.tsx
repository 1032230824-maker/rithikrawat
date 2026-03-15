import { Button } from "@/components/ui/button";
import { Play, ChevronRight, Sparkles, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const trustStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Clients & Brands" },
  { value: "1M+", label: "Views Generated" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200/50 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-4 w-4 text-cyan-500" />
            <span className="font-poppins text-sm text-cyan-600">Now booking Q2 2026 — Limited spots</span>
          </div>
          <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[0.9]">
            <span className="text-slate-800">YOUR BRAND</span><br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">DESERVES CONTENT</span><br />
            <span className="text-slate-800">THAT</span>{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">ACTUALLY CONVERTS</span>
          </h1>
          <p className="font-poppins text-lg text-slate-500 mb-8 max-w-md mx-auto lg:mx-0">
            Cinematic reels and strategic content that turn social media into a lead-generation engine — for brands, creators, and real estate developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 rounded-full text-lg font-poppins font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="mr-2 h-5 w-5" />
              See My Work
            </Button>
            <Button
              variant="outline"
              className="border-slate-300 text-slate-600 px-8 py-6 rounded-full text-lg font-poppins hover:border-cyan-400 hover:text-cyan-600 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start a Project
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 pt-8 border-t border-slate-200/60">
            {trustStats.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="font-bebas text-2xl bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="font-poppins text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-glow"></div>
            <a
              href="https://www.instagram.com/reel/DL-KLLXzee6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="w-64 h-[460px] md:w-72 md:h-[520px] bg-gradient-to-b from-slate-200 to-slate-300 rounded-[2.5rem] p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10"></div>
                  <iframe
                    src="https://www.instagram.com/reel/DL-KLLXzee6/embed"
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    title="Featured Instagram reel by Rithik Rawat"
                  />
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-slate-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
