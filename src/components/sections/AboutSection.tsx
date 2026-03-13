import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-2/5">
              <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-2xl opacity-20 animate-glow"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl opacity-50"></div>
                <img
                  src="/lovable-uploads/31464b31-1d31-49d7-afcd-8bf6c731a51b.png"
                  alt="Rithik Rawat - Content Creator and Video Editor based in Mumbai"
                  className="relative w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />
                <motion.div
                  className="absolute -right-6 top-8 bg-white rounded-xl shadow-lg px-4 py-3 border border-slate-100"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="font-satoshi text-2xl font-bold text-cyan-600">50+</p>
                  <p className="font-inter text-xs text-slate-500">Projects Delivered</p>
                </motion.div>
                <motion.div
                  className="absolute -left-6 bottom-12 bg-white rounded-xl shadow-lg px-4 py-3 border border-slate-100"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <p className="font-satoshi text-2xl font-bold text-blue-600">2+</p>
                  <p className="font-inter text-xs text-slate-500">Years in the Game</p>
                </motion.div>
              </div>
            </div>
            <div className="lg:w-3/5 text-center lg:text-left">
              <h2 className="font-satoshi text-5xl md:text-6xl font-black mb-6 tracking-tight">
                <span className="text-slate-300">THE MIND</span><br />
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">BEHIND THE LENS</span>
              </h2>
              <p className="font-inter text-lg leading-relaxed text-slate-500 mb-8 text-center lg:text-left">
                I'm Rithik Rawat — a Mumbai-based content strategist, videographer, and editor who sits at the intersection of cinematic storytelling and performance marketing. Currently pursuing EXTC Engineering at TCET, I've spent the last two years helping brands, creators, and real estate developers turn their Instagram presence into a lead-generation engine. Every frame I shoot and every reel I edit is engineered with one goal: measurable business growth for my clients.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a href="https://www.instagram.com/sunita_creative_world?igsh=MXR0bDl4aG54d3U5Nw==" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-600 rounded-full px-5 transition-all duration-300 font-inter">
                    Sunita's Creative World
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/tcet_capture?igsh=bnRrMXE3Zjk5MGtj" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 rounded-full px-5 transition-all duration-300 font-inter">
                    TCET Capture
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
