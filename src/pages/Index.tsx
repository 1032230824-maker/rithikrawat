
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Phone, Mail, Play, ExternalLink, ArrowDown, Sparkles, Video, Palette, BarChart3, Target, Puzzle, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
  };

  const portfolioItems = [
    {
      title: "Brand Collaboration",
      embedUrl: "https://www.instagram.com/reel/C_iaK_wCrOZ/embed",
      link: "https://www.instagram.com/reel/C_iaK_wCrOZ/?igsh=MTlydXVsMmd0cjNzNA=="
    },
    {
      title: "Travel Content",
      embedUrl: "https://www.instagram.com/reel/DEnSchPTlXe/embed",
      link: "https://www.instagram.com/reel/DEnSchPTlXe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      title: "Featured Reel",
      embedUrl: "https://www.instagram.com/reel/DG8OLH7t0pH/embed",
      link: "https://www.instagram.com/reel/DG8OLH7t0pH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      title: "Latest Reel",
      embedUrl: "https://www.instagram.com/reel/DL-KLLXzee6/embed",
      link: "https://www.instagram.com/reel/DL-KLLXzee6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    }
  ];

  const skills = [
    { 
      name: "Video Editing", 
      icon: <Video className="h-7 w-7" />,
      description: "Transforming raw footage into polished, high-retention videos that keep viewers watching till the end.",
      tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      color: "from-violet-500 to-fuchsia-500"
    },
    { 
      name: "Reels & Shorts", 
      icon: <Play className="h-7 w-7" />,
      description: "Creating scroll-stopping vertical content engineered for maximum reach, engagement, and virality.",
      tools: ["CapCut", "Instagram", "TikTok"],
      color: "from-blue-500 to-cyan-400"
    },
    { 
      name: "Instagram Strategy", 
      icon: <Target className="h-7 w-7" />,
      description: "Building data-backed growth strategies that turn followers into engaged communities and paying clients.",
      tools: ["Meta Business Suite", "Analytics", "Insights"],
      color: "from-emerald-500 to-teal-400"
    },
    { 
      name: "Graphic Design", 
      icon: <Palette className="h-7 w-7" />,
      description: "Designing on-brand visuals — from carousels to stories — that make your feed look cohesive and premium.",
      tools: ["Canva", "Photoshop", "Illustrator"],
      color: "from-orange-500 to-amber-400"
    },
    { 
      name: "Thumbnail Creation", 
      icon: <Puzzle className="h-7 w-7" />,
      description: "Crafting high-CTR thumbnails that grab attention in crowded feeds and drive more clicks to your content.",
      tools: ["Photoshop", "Canva", "Figma"],
      color: "from-rose-500 to-pink-400"
    },
    { 
      name: "Social Media Analytics", 
      icon: <BarChart3 className="h-7 w-7" />,
      description: "Turning performance data into actionable insights so every piece of content works harder for your brand.",
      tools: ["Meta Analytics", "Google Analytics", "Sprout Social"],
      color: "from-sky-500 to-indigo-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/50 text-slate-800 overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute -bottom-20 right-1/3 w-[300px] h-[300px] bg-violet-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bebas text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">RR</span>
          <div className="hidden md:flex gap-8 font-poppins text-sm text-slate-500">
            {[
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Services", id: "services" },
              { label: "Portfolio", id: "portfolio" },
              { label: "Real Estate", id: "real-estate" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-cyan-600 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-poppins text-sm px-5 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200/50 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              <span className="font-poppins text-sm text-cyan-600">Open for new projects</span>
            </div>
            <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[0.9]">
              <span className="text-slate-800">TURNING</span><br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">IDEAS INTO</span><br />
              <span className="text-slate-800">HIGH-PERFORMING</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">CONTENT</span>
            </h1>
            <p className="font-poppins text-lg text-slate-500 mb-8 max-w-md mx-auto lg:mx-0">
              I help brands, creators, and real estate businesses grow on Instagram with cinematic reels, strategic content, and scroll-stopping visuals that convert viewers into clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 rounded-full text-lg font-poppins font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch My Work
              </Button>
              <Button 
                variant="outline"
                className="border-slate-300 text-slate-600 px-8 py-6 rounded-full text-lg font-poppins hover:border-cyan-400 hover:text-cyan-600 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute -inset-10 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-glow"></div>
              <a 
                href="https://www.instagram.com/reel/DG8OLH7t0pH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <div className="w-64 h-[460px] md:w-72 md:h-[520px] bg-gradient-to-b from-slate-200 to-slate-300 rounded-[2.5rem] p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10"></div>
                    <iframe
                      src="https://www.instagram.com/reel/DG8OLH7t0pH/embed"
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-slate-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-2/5">
                <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-2xl opacity-20 animate-glow"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl opacity-50"></div>
                  <img 
                    src="/lovable-uploads/31464b31-1d31-49d7-afcd-8bf6c731a51b.png"
                    alt="Rithik Rawat"
                    className="relative w-full h-full object-cover rounded-3xl"
                  />
                  {/* Stats floating cards */}
                  <motion.div 
                    className="absolute -right-6 top-8 bg-white rounded-xl shadow-lg px-4 py-3 border border-slate-100"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <p className="font-bebas text-2xl text-cyan-600">50+</p>
                    <p className="font-poppins text-xs text-slate-500">Projects</p>
                  </motion.div>
                  <motion.div 
                    className="absolute -left-6 bottom-12 bg-white rounded-xl shadow-lg px-4 py-3 border border-slate-100"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  >
                    <p className="font-bebas text-2xl text-blue-600">2+</p>
                    <p className="font-poppins text-xs text-slate-500">Years Exp.</p>
                  </motion.div>
                </div>
              </div>
              <div className="lg:w-3/5 text-center lg:text-left">
                <h2 className="font-bebas text-5xl md:text-6xl mb-6">
                  <span className="text-slate-300">WHO IS</span><br />
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">RITHIK RAWAT?</span>
                </h2>
                <p className="font-poppins text-lg leading-relaxed text-slate-500 mb-8 text-center lg:text-left">
                  I'm Rithik Rawat — a content creator, videographer, and video editor based in Mumbai, currently pursuing EXTC Engineering at TCET. I combine my passion for cinematic storytelling with a deep understanding of social media to help brands stand out, grow their audience, and turn attention into real business results. From high-energy reels and brand collaborations to premium real estate videos, I craft content that doesn't just look good — it performs.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <a href="https://www.instagram.com/sunita_creative_world?igsh=MXR0bDl4aG54d3U5Nw==" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-600 rounded-full px-5 transition-all duration-300">
                      Sunita's Creative World
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/tcet_capture?igsh=bnRrMXE3Zjk5MGtj" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 rounded-full px-5 transition-all duration-300">
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

      {/* Skills Section - Interactive Bento Grid */}
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
                      ? 'bg-gradient-to-br border-transparent shadow-2xl' 
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={activeSkill === index ? { 
                    background: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))` 
                  } : {}}
                >
                  {/* Active gradient border */}
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
                          <span key={i} className="font-poppins text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                            {tool}
                          </span>
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

      {/* Services Section */}
      <section id="services" className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
              <span className="text-slate-300">WHAT I</span>{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">OFFER</span>
            </h2>
            <p className="font-poppins text-center text-slate-500 mb-4 text-lg">Your Content Partner for Growth, Visibility & Engagement</p>
            <p className="font-poppins text-center text-slate-400 mb-16 text-sm max-w-2xl mx-auto">Whether you're struggling with low engagement, inconsistent content, or need premium reels that convert — I handle everything from shoot to strategy so you can focus on your business.</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: "🎥", title: "VIDEOGRAPHY", color: "from-cyan-500 to-blue-500", items: ["Professional product & brand videography", "On-location event coverage", "Instagram-ready reel shoots", "Behind-the-scenes content that builds trust"] },
              { icon: "🎬", title: "VIDEO EDITING", color: "from-blue-500 to-indigo-500", items: ["Reel & Shorts editing that hooks in 3 seconds", "Long-form YouTube video editing", "Cinematic color grading & smooth transitions", "Subtitles & captions for higher retention"] },
              { icon: "📱", title: "SOCIAL MEDIA", color: "from-indigo-500 to-purple-500", items: ["Full Instagram page management", "Strategic content calendar planning", "Feed aesthetic & grid design", "Caption writing, hashtags & scheduling"] },
              { icon: "📸", title: "CONTENT CREATION", color: "from-purple-500 to-pink-500", items: ["End-to-end brand content production", "Lifestyle & product photography", "Reel concepts, scripting & creative direction", "Content that tells your brand story"] },
              { icon: "🎨", title: "GRAPHIC DESIGN", color: "from-pink-500 to-rose-500", items: ["High-impact post & carousel design", "Story creatives that drive engagement", "Branded visual templates for consistency", "Canva & Photoshop design expertise"] },
              { icon: "🧠", title: "GROWTH STRATEGY", color: "from-rose-500 to-orange-500", items: ["Instagram growth strategy & roadmaps", "Campaign planning & execution", "Engagement optimization techniques", "Analytics-driven content decisions"] },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-transparent transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-bebas text-xl mb-4 text-slate-700">{service.title}</h3>
                  <ul className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <li key={i} className="font-poppins text-sm text-slate-500 flex items-start gap-2.5">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Package CTA */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-slate-50 to-cyan-50/50 border border-slate-200 rounded-2xl p-8">
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="font-bebas text-2xl mb-3 text-slate-700">PERSONAL BRAND CONTENT</h3>
                <p className="font-poppins text-sm text-slate-500 mb-4">Elevate your personal brand with content that positions you as an authority in your space.</p>
                <ul className="space-y-2.5">
                  {["Authority-building personal brand reels", "Professional talking-head content editing", "LinkedIn & Instagram growth content"].map((item, i) => (
                    <li key={i} className="font-poppins text-sm text-slate-500 flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="font-bebas text-3xl mb-4">CONTENT CREATION PACKAGE</h3>
                  <ul className="space-y-3 mb-8">
                    {["4 professional reels — shot & edited", "8 on-brand Instagram posts designed", "Engaging story creatives", "Monthly content planning & strategy"].map((item, i) => (
                      <li key={i} className="font-poppins text-sm flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative z-10">
                  <p className="font-poppins text-sm opacity-80 mb-4">Starting from <span className="text-2xl font-bold">₹15k</span>/month</p>
                  <Button 
                    className="bg-white text-blue-600 hover:bg-white/90 font-poppins font-semibold rounded-full px-8 py-5 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get a Quote →
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-28 px-4 bg-gradient-to-b from-slate-50/80 to-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
              <span className="text-slate-300">MY PERSONAL</span>{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">INSTAGRAM VIDEOS</span>
            </h2>
            <p className="font-poppins text-center text-slate-400 mb-16 max-w-lg mx-auto">A curated selection of my best work — watch the reels, see the editing style, and experience the storytelling firsthand.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="relative w-full" style={{ paddingBottom: '177%' }}>
                    <iframe
                      src={item.embedUrl}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <h3 className="font-poppins font-semibold text-slate-700">{item.title}</h3>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors font-poppins text-sm group/link"
                    >
                      View
                      <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Videos Section */}
      <section id="real-estate" className="py-28 px-4 bg-gradient-to-b from-white to-slate-50/80">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-6">
              <span className="inline-block font-poppins text-xs font-bold tracking-[0.3em] uppercase text-cyan-500 bg-cyan-50 px-4 py-2 rounded-full mb-4">Premium Content</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
              <span className="text-slate-300">MY</span>{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">REAL ESTATE WORK</span>
            </h2>
            <p className="font-poppins text-center text-slate-400 mb-16 max-w-2xl mx-auto">
              Cinematic real estate reels designed to showcase properties at their best — helping agents and developers attract serious buyers and generate more inquiries through powerful visual storytelling.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Prestige Real Estate Reel", embedUrl: "https://www.instagram.com/reel/DVWhJbHjeOn/embed", link: "https://www.instagram.com/reel/DVWhJbHjeOn/" },
              { title: "Property Showcase Reel", embedUrl: "https://www.instagram.com/reel/DVZUpsqjYIj/embed", link: "https://www.instagram.com/reel/DVZUpsqjYIj/" },
              { title: "Luxury Property Tour", embedUrl: "https://www.instagram.com/reel/DVZOx1fDQZ8/embed", link: "https://www.instagram.com/reel/DVZOx1fDQZ8/" },
            ].map((reel, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="relative w-full" style={{ paddingBottom: '177%' }}>
                    <iframe
                      src={reel.embedUrl}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-poppins font-semibold text-slate-700">{reel.title}</h3>
                      <p className="font-poppins text-sm text-slate-400 mt-1">Shot & Edited by Rithik Rawat</p>
                    </div>
                    <a 
                      href={reel.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors font-poppins text-sm"
                    >
                      View
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Real Estate Pricing Packages */}
          <AnimatedSection>
            <h3 className="font-bebas text-3xl md:text-4xl text-center mt-20 mb-10">
              <span className="text-slate-300">REAL ESTATE</span>{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">PACKAGES</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {/* Starter Package */}
              <div className="bg-gradient-to-br from-slate-50 to-cyan-50/50 border border-slate-200 rounded-2xl p-8">
                <div className="text-3xl mb-3">🎬</div>
                <h3 className="font-bebas text-2xl mb-1 text-slate-700">STARTER PACKAGE</h3>
                <p className="font-poppins text-lg font-bold text-cyan-600 mb-3">₹10,000 <span className="text-sm font-normal text-slate-400">/ month</span></p>
                <p className="font-poppins text-sm text-slate-500 mb-4">Perfect for real estate agents who want consistent property content on social media.</p>
                <ul className="space-y-2.5">
                  {["4 Cinematic property reels per month", "iPhone professional property shoot", "High-quality reel editing", "Cinematic color grading", "1 property showcase reel delivered every week"].map((item, i) => (
                    <li key={i} className="font-poppins text-sm text-slate-500 flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Growth Package */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <span className="inline-block font-poppins text-xs font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full mb-3">Most Popular</span>
                  <h3 className="font-bebas text-2xl mb-1">GROWTH PACKAGE</h3>
                  <p className="font-poppins text-lg font-bold mb-3">₹18,000 <span className="text-sm font-normal opacity-80">/ month</span></p>
                  <p className="font-poppins text-sm opacity-90 mb-4">Designed for agents and developers who want stronger visibility and premium presentation.</p>
                  <ul className="space-y-2.5 mb-6">
                    {["4 Professional property reels", "Dedicated camera property shoot", "Advanced cinematic editing", "Professional cinematic color grading", "Property highlight reels optimized for Instagram"].map((item, i) => (
                      <li key={i} className="font-poppins text-sm flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="bg-white text-blue-600 hover:bg-white/90 font-poppins font-semibold rounded-full px-8 py-5 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get a Quote →
                  </Button>
                </div>
              </div>

              {/* Premium Package */}
              <div className="bg-gradient-to-br from-slate-50 to-cyan-50/50 border border-slate-200 rounded-2xl p-8">
                <div className="text-3xl mb-3">👑</div>
                <h3 className="font-bebas text-2xl mb-1 text-slate-700">PREMIUM PACKAGE</h3>
                <p className="font-poppins text-lg font-bold text-cyan-600 mb-3">₹30,000 <span className="text-sm font-normal text-slate-400">/ month</span></p>
                <p className="font-poppins text-sm text-slate-500 mb-4">For developers and luxury property marketing who want high-end cinematic presentation.</p>
                <ul className="space-y-2.5">
                  {["8 Cinematic property reels per month", "Professional camera shoot", "High-end cinematic editing and transitions", "Premium cinematic color grading", "Luxury property showcase storytelling style"].map((item, i) => (
                    <li key={i} className="font-poppins text-sm text-slate-500 flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
              <span className="text-slate-300">LET'S</span>{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">CONNECT</span>
            </h2>
            <p className="font-poppins text-center text-slate-400 mb-16 max-w-lg mx-auto">Have a project in mind? Drop a message and let's create something amazing together.</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-2 space-y-6">
                <h3 className="font-bebas text-2xl text-slate-700">REACH OUT</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Phone className="h-5 w-5" />, label: "+91 8591872306", href: "tel:+918591872306" },
                    { icon: <Mail className="h-5 w-5" />, label: "rwtrithik19@gmail.com", href: "mailto:rwtrithik19@gmail.com" },
                    { icon: <Instagram className="h-5 w-5" />, label: "@rithikrawatofficial", href: "https://www.instagram.com/rithikrawatofficial" },
                    { icon: <Linkedin className="h-5 w-5" />, label: "rithikrawat19", href: "https://linkedin.com/in/rithikrawat19" },
                  ].map((item, i) => (
                    <a 
                      key={i}
                      href={item.href} 
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="font-poppins text-sm text-slate-600 group-hover:text-slate-800 transition-colors">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-3">
                <form onSubmit={handleContactSubmit} className="space-y-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 font-poppins rounded-xl h-12"
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 font-poppins rounded-xl h-12"
                      required
                    />
                  </div>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 font-poppins rounded-xl resize-none"
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-poppins font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]"
                  >
                    Send Message 🚀
                  </Button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-slate-200 bg-white/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bebas text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">RITHIK RAWAT</span>
          <p className="font-poppins text-sm text-slate-400">
            © 2026 Rithik Rawat. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/rithikrawatofficial" },
              { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/in/rithikrawat19" },
              { icon: <Mail className="h-4 w-4" />, href: "mailto:rwtrithik19@gmail.com" },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-100 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
