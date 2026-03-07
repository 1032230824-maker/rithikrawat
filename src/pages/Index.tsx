
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Phone, Mail, Play, ExternalLink, ArrowDown, Sparkles, Video, Camera, Building2, Clapperboard, Image, BarChart3, MessageCircle, ChevronRight, Menu, X, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you within 24 hours.",
    });
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      title: "Luxury 2BHK Property Tour – Mira Road",
      embedUrl: "https://www.instagram.com/reel/C_iaK_wCrOZ/embed",
      link: "https://www.instagram.com/reel/C_iaK_wCrOZ/?igsh=MTlydXVsMmd0cjNzNA=="
    },
    {
      title: "Premium Apartment Reel – Dahisar",
      embedUrl: "https://www.instagram.com/reel/DEnSchPTlXe/embed",
      link: "https://www.instagram.com/reel/DEnSchPTlXe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      title: "Builder Project Showcase",
      embedUrl: "https://www.instagram.com/reel/DG8OLH7t0pH/embed",
      link: "https://www.instagram.com/reel/DG8OLH7t0pH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    }
  ];

  const skills = [
    { 
      name: "Real Estate Videography", 
      icon: <Video className="h-7 w-7" />,
      description: "Cinematic property walkthroughs and aerial drone shots that showcase every detail of a listing.",
      tools: ["4K Camera", "DJI Drone", "Gimbal Stabilizer"],
      color: "from-amber-500 to-orange-600"
    },
    { 
      name: "Property Reels & Shorts", 
      icon: <Play className="h-7 w-7" />,
      description: "Vertical video content optimized for Instagram and YouTube to generate maximum buyer inquiries.",
      tools: ["Premiere Pro", "CapCut", "After Effects"],
      color: "from-rose-500 to-red-600"
    },
    { 
      name: "Cinematic Editing", 
      icon: <Clapperboard className="h-7 w-7" />,
      description: "Professional color grading, transitions, and sound design that make properties look irresistible.",
      tools: ["DaVinci Resolve", "Premiere Pro", "LUTs"],
      color: "from-violet-500 to-purple-600"
    },
    { 
      name: "Social Media Strategy", 
      icon: <BarChart3 className="h-7 w-7" />,
      description: "Data-driven content strategies that help real estate brands grow their following and generate leads.",
      tools: ["Meta Business Suite", "Analytics", "Ad Manager"],
      color: "from-emerald-500 to-teal-600"
    },
    { 
      name: "Photography", 
      icon: <Camera className="h-7 w-7" />,
      description: "High-resolution property photos with HDR processing for listings, brochures, and ads.",
      tools: ["Lightroom", "Photoshop", "HDR Merge"],
      color: "from-sky-500 to-blue-600"
    },
    { 
      name: "Brand Content", 
      icon: <Image className="h-7 w-7" />,
      description: "Complete visual identity for real estate brands — logos, posts, carousels, and story templates.",
      tools: ["Canva", "Illustrator", "Figma"],
      color: "from-pink-500 to-fuchsia-600"
    }
  ];

  const services = [
    { icon: "🎥", title: "PROPERTY VIDEOS", color: "from-amber-500 to-orange-500", items: ["Full property walkthroughs", "Drone aerial shots", "Day & night shoots", "4K cinematic quality"] },
    { icon: "🎬", title: "CINEMATIC TOURS", color: "from-rose-500 to-red-500", items: ["Luxury villa tours", "Model flat showcases", "Under-construction updates", "Lifestyle storytelling"] },
    { icon: "📱", title: "INSTAGRAM REELS", color: "from-violet-500 to-purple-500", items: ["Vertical property reels", "Trending audio + transitions", "Optimized for engagement", "Broker personal branding"] },
    { icon: "📸", title: "PROPERTY PHOTOGRAPHY", color: "from-sky-500 to-blue-500", items: ["Interior & exterior shots", "HDR photography", "Twilight photography", "Virtual staging support"] },
    { icon: "🎨", title: "SOCIAL MEDIA DESIGN", color: "from-emerald-500 to-teal-500", items: ["Post & carousel design", "Story highlights covers", "Project launch creatives", "Builder brand templates"] },
    { icon: "📊", title: "DIGITAL MARKETING", color: "from-pink-500 to-fuchsia-500", items: ["Instagram growth strategy", "Facebook & Google Ads", "Lead generation campaigns", "Monthly performance reports"] },
  ];

  const navItems = ["About", "Skills", "Services", "Portfolio", "Contact"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-poppins">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-900/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-orange-900/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute -bottom-20 right-1/3 w-[400px] h-[400px] bg-rose-900/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '5s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bebas text-2xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">RITHIK RAWAT</span>
          <div className="hidden md:flex gap-8 text-sm text-slate-400">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-amber-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button 
              size="sm"
              className="hidden sm:inline-flex bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-full text-sm px-5 font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              onClick={() => scrollTo('contact')}
            >
              Book a Shoot
            </Button>
            <button 
              className="md:hidden text-slate-300 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-left text-slate-300 hover:text-amber-400 transition-colors text-lg font-medium"
                  >
                    {item}
                  </button>
                ))}
                <Button 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-full font-semibold mt-2"
                  onClick={() => scrollTo('contact')}
                >
                  Book a Shoot
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm text-amber-400">Real Estate Videographer — Mumbai</span>
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[0.95]">
              <span className="text-slate-100">CINEMATIC</span><br />
              <span className="text-slate-100">REAL ESTATE</span><br />
              <span className="text-slate-100">VIDEOS THAT</span><br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">SELL FASTER</span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              I help real estate developers, brokers, and brands attract buyers using high-quality property videos, reels, and social media content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 px-8 py-6 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                onClick={() => scrollTo('contact')}
              >
                <Camera className="mr-2 h-5 w-5" />
                Book a Shoot
              </Button>
              <Button 
                variant="outline"
                className="border-slate-700 text-slate-300 px-8 py-6 rounded-full text-lg hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 bg-transparent"
                onClick={() => scrollTo('portfolio')}
              >
                <Play className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <a
                href="https://wa.me/918591872306?text=Hi%20Rithik,%20I%20need%20a%20property%20video%20shoot."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Now
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start">
              {[
                { value: "50+", label: "Properties Shot" },
                { value: "2+", label: "Years Experience" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-bebas text-2xl md:text-3xl text-amber-400">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
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
              <div className="absolute -inset-10 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-[80px] animate-glow"></div>
              <a 
                href="https://www.instagram.com/reel/DG8OLH7t0pH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <div className="w-64 h-[460px] md:w-72 md:h-[520px] bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2.5rem] p-2 shadow-2xl group-hover:shadow-amber-500/10 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-full h-full bg-slate-950 rounded-[2rem] overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-b-2xl z-10"></div>
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

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-slate-600" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-2/5">
                <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-2xl opacity-20 animate-glow"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl opacity-50"></div>
                  <img 
                    src="/lovable-uploads/31464b31-1d31-49d7-afcd-8bf6c731a51b.png"
                    alt="Rithik Rawat - Real Estate Videographer"
                    className="relative w-full h-full object-cover rounded-3xl"
                  />
                  <motion.div 
                    className="absolute -right-6 top-8 bg-slate-900 rounded-xl shadow-lg px-4 py-3 border border-slate-800"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <p className="font-bebas text-2xl text-amber-400">50+</p>
                    <p className="text-xs text-slate-500">Properties</p>
                  </motion.div>
                  <motion.div 
                    className="absolute -left-6 bottom-12 bg-slate-900 rounded-xl shadow-lg px-4 py-3 border border-slate-800"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  >
                    <p className="font-bebas text-2xl text-orange-400">2+</p>
                    <p className="text-xs text-slate-500">Years Exp.</p>
                  </motion.div>
                </div>
              </div>
              <div className="lg:w-3/5 text-center lg:text-left">
                <h2 className="font-bebas text-5xl md:text-6xl mb-6">
                  <span className="text-slate-600">WHO IS</span><br />
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">RITHIK RAWAT?</span>
                </h2>
                <p className="text-lg leading-relaxed text-slate-400 mb-6">
                  I'm a <strong className="text-slate-200">real estate videographer and social media content creator</strong> based in Mumbai. I specialize in cinematic property videos, Instagram Reels, and digital marketing for builders, brokers, and property brands.
                </p>
                <p className="text-lg leading-relaxed text-slate-400 mb-8">
                  My work helps properties get noticed online, generate more inquiries, and sell faster. From luxury apartments to builder projects, I turn listings into visual stories that buyers can't scroll past.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2">
                    <MapPin className="h-4 w-4 text-amber-400" />
                    <span className="text-sm text-slate-400">Mumbai, India</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-2">
                    <Building2 className="h-4 w-4 text-amber-400" />
                    <span className="text-sm text-slate-400">Real Estate Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
              <span className="text-slate-600">SKILLS &</span>{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">EXPERTISE</span>
            </h2>
            <p className="text-center text-slate-500 mb-16 max-w-lg mx-auto">Tap any skill to see the tools and techniques I use.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className={`relative cursor-pointer rounded-2xl p-6 border transition-all duration-500 overflow-hidden ${
                    activeSkill === index 
                      ? 'bg-slate-900 border-amber-500/30 shadow-2xl shadow-amber-500/5' 
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeSkill === index && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 rounded-2xl`}></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                      {skill.icon}
                    </div>
                    <h3 className="font-bebas text-xl mb-2 text-slate-200">{skill.name}</h3>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: activeSkill === index ? "auto" : 0, opacity: activeSkill === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-slate-400 mb-4">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool, i) => (
                          <span key={i} className="text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {activeSkill !== index && (
                      <p className="text-sm text-slate-600 mt-1">Tap to explore →</p>
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
              <span className="text-slate-600">WHAT I</span>{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">OFFER</span>
            </h2>
            <p className="text-center text-slate-400 mb-4 text-lg">Real Estate Video & Content Solutions</p>
            <p className="text-center text-slate-500 mb-16 text-sm max-w-2xl mx-auto">Everything you need to make your properties stand out online — from cinematic shoots to full social media management.</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-bebas text-xl mb-4 text-slate-200">{service.title}</h3>
                  <ul className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-2.5">
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
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-bebas text-2xl mb-3 text-slate-200">SINGLE PROPERTY SHOOT</h3>
                <p className="text-sm text-slate-400 mb-4">Perfect for individual listings, model flats, and sample flat shoots.</p>
                <ul className="space-y-2.5">
                  {["Full property walkthrough video", "3-5 Instagram Reels", "10+ edited photos", "Delivered in 48 hours"].map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-slate-950 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="font-bebas text-3xl mb-4">MONTHLY CONTENT PACKAGE</h3>
                  <ul className="space-y-3 mb-8">
                    {["4 property shoots/month", "12+ Instagram Reels", "Social media management", "Content strategy & planning", "Monthly analytics report"].map((item, i) => (
                      <li key={i} className="text-sm flex items-center gap-2.5 font-medium">
                        <span className="w-5 h-5 rounded-full bg-slate-950/20 flex items-center justify-center text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative z-10">
                  <p className="text-sm opacity-80 mb-4">Starting from <span className="text-2xl font-bold">₹25k</span>/month</p>
                  <Button 
                    className="bg-slate-950 text-amber-400 hover:bg-slate-900 font-semibold rounded-full px-8 py-5 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    onClick={() => scrollTo('contact')}
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
      <section id="portfolio" className="py-28 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
              <span className="text-slate-600">MY</span>{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">WORK</span>
            </h2>
            <p className="text-center text-slate-500 mb-16 max-w-lg mx-auto">Watch property video samples — click to view full reels on Instagram.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-500">
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
                    <h3 className="font-semibold text-slate-200 text-sm">{item.title}</h3>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors text-sm group/link"
                    >
                      View
                      <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Instagram CTA */}
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <a href="https://www.instagram.com/rithikrawatofficial" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:border-amber-500/50 hover:text-amber-400 rounded-full px-8 py-5 text-base transition-all duration-300 bg-transparent">
                  <Instagram className="mr-2 h-5 w-5" />
                  See More on Instagram
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
              <span className="text-slate-600">BOOK A</span>{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">SHOOT</span>
            </h2>
            <p className="text-center text-slate-500 mb-16 max-w-lg mx-auto">Have a property to showcase? Get in touch and let's create stunning content that sells.</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-2 space-y-6">
                <h3 className="font-bebas text-2xl text-slate-200">GET IN TOUCH</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Phone className="h-5 w-5" />, label: "+91 8591872306", href: "tel:+918591872306" },
                    { icon: <Mail className="h-5 w-5" />, label: "rwtrithik19@gmail.com", href: "mailto:rwtrithik19@gmail.com" },
                    { icon: <Instagram className="h-5 w-5" />, label: "@rithikrawatofficial", href: "https://www.instagram.com/rithikrawatofficial" },
                    { icon: <MessageCircle className="h-5 w-5" />, label: "WhatsApp Me", href: "https://wa.me/918591872306?text=Hi%20Rithik,%20I%20need%20a%20property%20video." },
                  ].map((item, i) => (
                    <a 
                      key={i}
                      href={item.href} 
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-900 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 group-hover:shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{item.label}</span>
                    </a>
                  ))}
                </div>

                {/* Location */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-amber-400" />
                    <span className="font-bebas text-lg text-slate-200">SERVICE AREA</span>
                  </div>
                  <p className="text-sm text-slate-500">Mumbai, Navi Mumbai, Thane, Mira-Bhayandar & all across Maharashtra. Travel available for premium projects.</p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-3">
                <form onSubmit={handleContactSubmit} className="space-y-4 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 rounded-xl h-12"
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 rounded-xl h-12"
                      required
                    />
                  </div>
                  <Input 
                    placeholder="Property Type (e.g., 2BHK Flat, Villa, Commercial)" 
                    className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 rounded-xl h-12"
                  />
                  <Textarea 
                    placeholder="Tell me about your project — location, timeline, budget..."
                    rows={4}
                    className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 rounded-xl resize-none"
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02]"
                  >
                    Send Inquiry 🚀
                  </Button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bebas text-2xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">RITHIK RAWAT</span>
          <p className="text-sm text-slate-600">
            © 2026 Rithik Rawat. Real Estate Videographer, Mumbai.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/rithikrawatofficial" },
              { icon: <MessageCircle className="h-4 w-4" />, href: "https://wa.me/918591872306" },
              { icon: <Mail className="h-4 w-4" />, href: "mailto:rwtrithik19@gmail.com" },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-500 flex items-center justify-center text-slate-500 hover:text-slate-950 transition-all duration-300 border border-slate-800 hover:border-transparent">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918591872306?text=Hi%20Rithik,%20I%20need%20a%20property%20video%20shoot."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default Index;
