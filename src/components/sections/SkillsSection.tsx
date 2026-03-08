import { useState } from "react";
import { Video, Play, Target, Palette, Puzzle, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const skills = [
  { name: "Video Editing", icon: <Video className="h-7 w-7" />, description: "Transforming raw footage into polished, high-retention videos that keep viewers watching till the end.", tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"], color: "from-violet-500 to-fuchsia-500" },
  { name: "Reels & Shorts", icon: <Play className="h-7 w-7" />, description: "Creating scroll-stopping vertical content engineered for maximum reach, engagement, and virality.", tools: ["CapCut", "Instagram", "TikTok"], color: "from-blue-500 to-cyan-400" },
  { name: "Instagram Strategy", icon: <Target className="h-7 w-7" />, description: "Building data-backed growth strategies that turn followers into engaged communities and paying clients.", tools: ["Meta Business Suite", "Analytics", "Insights"], color: "from-emerald-500 to-teal-400" },
  { name: "Graphic Design", icon: <Palette className="h-7 w-7" />, description: "Designing on-brand visuals — from carousels to stories — that make your feed look cohesive and premium.", tools: ["Canva", "Photoshop", "Illustrator"], color: "from-orange-500 to-amber-400" },
  { name: "Thumbnail Creation", icon: <Puzzle className="h-7 w-7" />, description: "Crafting high-CTR thumbnails that grab attention in crowded feeds and drive more clicks to your content.", tools: ["Photoshop", "Canva", "Figma"], color: "from-rose-500 to-pink-400" },
  { name: "Social Media Analytics", icon: <BarChart3 className="h-7 w-7" />, description: "Turning performance data into actionable insights so every piece of content works harder for your brand.", tools: ["Meta Analytics", "Google Analytics", "Sprout Social"], color: "from-sky-500 to-indigo-400" },
];

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
            <span className="text-slate-300">MY</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">SKILLS</span>
          </h2>
          <p className="font-poppins text-center text-slate-400 mb-16 max-w-lg mx-auto">Every skill is sharpened to deliver measurable results for your brand. Tap any skill to see the tools I use.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className={`relative cursor-pointer rounded-2xl p-6 border transition-all duration-500 overflow-hidden ${
                  activeSkill === index
                    ? "bg-gradient-to-br border-transparent shadow-2xl"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-lg"
                }`}
                onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={activeSkill === index ? { background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))" } : {}}
              >
                {activeSkill === index && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 rounded-2xl`}></div>
                )}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-bebas text-xl mb-2 text-slate-700">{skill.name}</h3>
                  <motion.div
                    initial={false}
                    animate={{ height: activeSkill === index ? "auto" : 0, opacity: activeSkill === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-poppins text-sm text-slate-500 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool, i) => (
                        <span key={i} className="font-poppins text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full">{tool}</span>
                      ))}
                    </div>
                  </motion.div>
                  {activeSkill !== index && (
                    <p className="font-poppins text-sm text-slate-400 mt-1">Tap to explore →</p>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
