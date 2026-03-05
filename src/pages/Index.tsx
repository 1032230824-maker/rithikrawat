
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Phone, Mail, Play, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
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
    }
  ];

  const skills = [
    { 
      name: "Video Editing", 
      icon: "🎬", 
      description: "Professional video editing with smooth transitions",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "Reels & Shorts", 
      icon: "📱", 
      description: "Viral content creation for social platforms",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Instagram Strategy", 
      icon: "🎯", 
      description: "Growth-focused content planning",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Canva Design", 
      icon: "🎨", 
      description: "Eye-catching graphics and thumbnails",
      gradient: "from-orange-500 to-red-500"
    },
    { 
      name: "Thumbnail Creation", 
      icon: "🧩", 
      description: "Click-worthy video thumbnails",
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Social Media Analytics", 
      icon: "📊", 
      description: "Data-driven content optimization",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 text-slate-800 overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-purple-200/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Catchy Call-to-Action */}
          <div className="mb-6">
            <p className="font-poppins text-lg md:text-xl text-cyan-600 mb-2">
              Ready to elevate your brand?
            </p>
            <h3 className="font-bebas text-2xl md:text-3xl text-slate-700">
              LET'S CREATE VIRAL CONTENT TOGETHER
            </h3>
          </div>

          {/* Phone Mockup with Instagram Reel - Now Clickable */}
          <div className="relative mx-auto mb-8 w-64 h-96 md:w-80 md:h-[500px] cursor-pointer group">
            <a 
              href="https://www.instagram.com/reel/DG8OLH7t0pH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-slate-300 to-slate-400 rounded-[2.5rem] p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/50 to-blue-500/50">
                    <iframe
                      src="https://www.instagram.com/reel/DG8OLH7t0pH/embed"
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                    />
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300">
                    <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-slate-800" />
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-cyan-200/20 rounded-[2rem] animate-glow"></div>
                </div>
              </div>
            </a>
          </div>

          <h1 className="font-bebas text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            RITHIK RAWAT
          </h1>
          <p className="font-poppins text-xl md:text-2xl mb-8 text-slate-600">
            Video Editor & Social Media Manager
          </p>
          <Button 
            className="font-poppins bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transform transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch My Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            WHO AM I?
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-30 animate-glow"></div>
                <img 
                  src="/lovable-uploads/31464b31-1d31-49d7-afcd-8bf6c731a51b.png"
                  alt="Rithik Rawat"
                  className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400/50"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <p className="font-poppins text-lg md:text-xl leading-relaxed text-slate-600 mb-6">
                Rithik Rawat is a passionate content creator, videographer, and video editor based in Mumbai. Currently pursuing EXTC Engineering at TCET, he combines creativity with technical skills to produce engaging reels and digital content. With a strong interest in social media strategy, he enjoys helping brands and communities grow through visually compelling storytelling.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="https://www.instagram.com/sunita_creative_world?igsh=MXR0bDl4aG54d3U5Nw==" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white">
                    Sunita's Creative World
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/tcet_capture?igsh=bnRrMXE3Zjk5MGtj" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white">
                    TCET Capture
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-50/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            SKILLS & EXPERTISE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon with Glow Effect */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 w-16 h-16`}></div>
                  <div className="relative text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bebas text-xl mb-2 text-slate-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-700 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                  {skill.name}
                </h3>
                <p className="font-poppins text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.gradient} p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="w-full h-full bg-white/90 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            SERVICES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-white to-slate-100 border-slate-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🎬</div>
                <h3 className="font-bebas text-2xl mb-4 text-cyan-600">REELS PACKAGES</h3>
                <p className="font-poppins text-slate-600">3 to 10 reels per week for brands and influencers</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-white to-slate-100 border-slate-300 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">📱</div>
                <h3 className="font-bebas text-2xl mb-4 text-blue-600">SOCIAL MEDIA MANAGEMENT</h3>
                <p className="font-poppins text-slate-600">Complete management including post scheduling, captions, and strategy</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-white to-slate-100 border-slate-300 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">✂️</div>
                <h3 className="font-bebas text-2xl mb-4 text-purple-600">VIDEO EDITING</h3>
                <p className="font-poppins text-slate-600">Transform raw footage into polished, engaging videos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-slate-50/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            PORTFOLIO
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="bg-white/80 border-slate-200 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
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
                <CardContent className="p-4">
                  <h3 className="font-poppins font-semibold text-slate-700 mb-2">{item.title}</h3>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 transition-colors font-poppins text-sm">
                    View on Instagram →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            CONTACT
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bebas text-3xl mb-6 text-cyan-600">GET IN TOUCH</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-cyan-600" />
                  <a href="tel:+918591872306" className="font-poppins text-slate-600 hover:text-slate-800 transition-colors">
                    +91 8591872306
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-cyan-600" />
                  <a href="mailto:rwtrithik19@gmail.com" className="font-poppins text-slate-600 hover:text-slate-800 transition-colors">
                    rwtrithik19@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Instagram className="h-6 w-6 text-cyan-600" />
                  <a href="https://www.instagram.com/rithikrawatofficial" target="_blank" rel="noopener noreferrer" className="font-poppins text-slate-600 hover:text-slate-800 transition-colors">
                    @rithikrawatofficial
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-cyan-600" />
                  <a href="https://linkedin.com/in/rithikrawat19" target="_blank" rel="noopener noreferrer" className="font-poppins text-slate-600 hover:text-slate-800 transition-colors">
                    linkedin.com/in/rithikrawat19
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white/80 border-slate-300 text-slate-800 placeholder:text-slate-500 font-poppins"
                  required
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/80 border-slate-300 text-slate-800 placeholder:text-slate-500 font-poppins"
                  required
                />
                <Textarea 
                  placeholder="Project Brief / Message" 
                  rows={4}
                  className="bg-white/80 border-slate-300 text-slate-800 placeholder:text-slate-500 font-poppins"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-poppins font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-poppins text-slate-500">
            © 2024 Rithik Rawat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
