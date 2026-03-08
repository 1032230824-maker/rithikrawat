import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: "🎥", title: "VIDEOGRAPHY", color: "from-cyan-500 to-blue-500", items: ["Professional product & brand videography", "On-location event coverage", "Instagram-ready reel shoots", "Behind-the-scenes content that builds trust"] },
  { icon: "🎬", title: "VIDEO EDITING", color: "from-blue-500 to-indigo-500", items: ["Reel & Shorts editing that hooks in 3 seconds", "Long-form YouTube video editing", "Cinematic color grading & smooth transitions", "Subtitles & captions for higher retention"] },
  { icon: "📱", title: "SOCIAL MEDIA", color: "from-indigo-500 to-purple-500", items: ["Full Instagram page management", "Strategic content calendar planning", "Feed aesthetic & grid design", "Caption writing, hashtags & scheduling"] },
  { icon: "📸", title: "CONTENT CREATION", color: "from-purple-500 to-pink-500", items: ["End-to-end brand content production", "Lifestyle & product photography", "Reel concepts, scripting & creative direction", "Content that tells your brand story"] },
  { icon: "🎨", title: "GRAPHIC DESIGN", color: "from-pink-500 to-rose-500", items: ["High-impact post & carousel design", "Story creatives that drive engagement", "Branded visual templates for consistency", "Canva & Photoshop design expertise"] },
  { icon: "🧠", title: "GROWTH STRATEGY", color: "from-rose-500 to-orange-500", items: ["Instagram growth strategy & roadmaps", "Campaign planning & execution", "Engagement optimization techniques", "Analytics-driven content decisions"] },
];

const ServicesSection = () => {
  return (
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
          {services.map((service, index) => (
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
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Request Project Quote →
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
