
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
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop&crop=center",
      link: "https://www.instagram.com/reel/C_iaK_wCrOZ/?igsh=MTlydXVsMmd0cjNzNA==",
      category: "Brand"
    },
    {
      title: "Travel Content",
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop&crop=center",
      link: "https://www.instagram.com/reel/DEnSchPTlXe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      category: "Travel"
    },
    {
      title: "Featured Reel",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop&crop=center",
      link: "https://www.instagram.com/reel/DG8OLH7t0pH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      category: "Creative"
    }
  ];

  const skills = [
    { name: "Video Editing", icon: "🎬" },
    { name: "Reels & Shorts", icon: "📱" },
    { name: "Instagram Strategy", icon: "🎯" },
    { name: "Canva Design", icon: "🎨" },
    { name: "Thumbnail Creation", icon: "🧩" },
    { name: "Social Media Analytics", icon: "📊" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Catchy Call-to-Action Line */}
          <div className="mb-6">
            <p className="font-poppins text-lg md:text-xl text-cyan-400 animate-glow">
              Ready to Transform Your Content? Let's Create Something Amazing Together! 🚀
            </p>
          </div>

          {/* Phone Mockup with Instagram Reel */}
          <div className="relative mx-auto mb-8 w-64 h-96 md:w-80 md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                {/* Phone Screen Content - Instagram Reel Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-blue-900/30">
                  <div className="w-full h-full flex items-center justify-center relative">
                    <img 
                      src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=500&fit=crop&crop=center"
                      alt="Featured Reel"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    {/* Instagram-style overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-cyan-400 rounded-full"></div>
                        <span className="text-white text-sm font-semibold">rithikrawatofficial</span>
                      </div>
                      <p className="text-white text-xs">Creating viral content that drives engagement 🎥✨</p>
                    </div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-cyan-400/10 rounded-[2rem] animate-glow"></div>
              </div>
            </div>
          </div>

          <h1 className="font-bebas text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            RITHIK RAWAT
          </h1>
          <p className="font-poppins text-xl md:text-2xl mb-8 text-slate-300">
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
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            WHO AM I?
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-50 animate-glow"></div>
                <img 
                  src="/lovable-uploads/31464b31-1d31-49d7-afcd-8bf6c731a51b.png"
                  alt="Rithik Rawat"
                  className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400/50"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <p className="font-poppins text-lg md:text-xl leading-relaxed text-slate-300 mb-6">
                I'm Rithik Rawat, an aspiring content creator currently in my 2nd year of EXTC Engineering at TCET, Mumbai. 
                I love editing videos and managing social media accounts. My passion lies in creating engaging reels and content 
                that drives real growth.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="https://www.instagram.com/sunita_creative_world?igsh=MXR0bDl4aG54d3U5Nw==" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                    Sunita's Creative World
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/tcet_capture?igsh=bnRrMXE3Zjk5MGtj" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
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
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="font-poppins font-semibold text-white">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            SERVICES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🎬</div>
                <h3 className="font-bebas text-2xl mb-4 text-cyan-400">REELS PACKAGES</h3>
                <p className="font-poppins text-slate-300">3 to 10 reels per week for brands and influencers</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">📱</div>
                <h3 className="font-bebas text-2xl mb-4 text-blue-400">SOCIAL MEDIA MANAGEMENT</h3>
                <p className="font-poppins text-slate-300">Complete management including post scheduling, captions, and strategy</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">✂️</div>
                <h3 className="font-bebas text-2xl mb-4 text-purple-400">VIDEO EDITING</h3>
                <p className="font-poppins text-slate-300">Transform raw footage into polished, engaging videos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            PORTFOLIO
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </a>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-cyan-500/80 text-white px-2 py-1 rounded text-sm font-poppins">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-poppins font-semibold text-white mb-2">{item.title}</h3>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors font-poppins text-sm">
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
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            CONTACT
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bebas text-3xl mb-6 text-cyan-400">GET IN TOUCH</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <a href="tel:+918591872306" className="font-poppins text-slate-300 hover:text-white transition-colors">
                    +91 8591872306
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <a href="mailto:rwtrithik19@gmail.com" className="font-poppins text-slate-300 hover:text-white transition-colors">
                    rwtrithik19@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Instagram className="h-6 w-6 text-cyan-400" />
                  <a href="https://www.instagram.com/rithikrawatofficial" target="_blank" rel="noopener noreferrer" className="font-poppins text-slate-300 hover:text-white transition-colors">
                    @rithikrawatofficial
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-cyan-400" />
                  <a href="https://linkedin.com/in/rithikrawat19" target="_blank" rel="noopener noreferrer" className="font-poppins text-slate-300 hover:text-white transition-colors">
                    linkedin.com/in/rithikrawat19
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <Input 
                  placeholder="Your Name" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 font-poppins"
                  required
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 font-poppins"
                  required
                />
                <Textarea 
                  placeholder="Project Brief / Message" 
                  rows={4}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 font-poppins"
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
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-poppins text-slate-400">
            © 2024 Rithik Rawat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
