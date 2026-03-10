import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: "🎥", title: "VIDEOGRAPHY", color: "from-cyan-500 to-blue-500", items: ["On-location brand and product shoots tailored to your audience", "Event coverage that captures energy and authenticity", "Instagram-optimized reel shoots designed to perform", "Behind-the-scenes content that builds trust and relatability"] },
  { icon: "🎬", title: "VIDEO EDITING", color: "from-blue-500 to-indigo-500", items: ["Hook-driven reel editing that captures attention in under 3 seconds", "Long-form YouTube edits with pacing that retains viewers", "Cinematic color grading and seamless transitions", "Strategic subtitles and captions that boost watch time"] },
  { icon: "📱", title: "SOCIAL MEDIA MANAGEMENT", color: "from-indigo-500 to-purple-500", items: ["End-to-end Instagram page management and growth", "Data-driven content calendar aligned with your business goals", "Feed aesthetic curation and grid strategy", "Copywriting, hashtag research, and scheduled publishing"] },
  { icon: "📸", title: "CONTENT PRODUCTION", color: "from-purple-500 to-pink-500", items: ["Full-cycle brand content — concept to delivery", "Lifestyle and product photography that sells", "Reel scripting, storyboarding, and creative direction", "Narrative-driven content that communicates your brand story"] },
  { icon: "🎨", title: "GRAPHIC DESIGN", color: "from-pink-500 to-rose-500", items: ["Scroll-stopping post and carousel designs", "Story creatives engineered for taps and replies", "Branded visual templates for feed consistency", "Expert execution in Canva, Photoshop, and Illustrator"] },
  { icon: "🧠", title: "GROWTH STRATEGY", color: "from-rose-500 to-orange-500", items: ["Custom Instagram growth roadmaps with clear milestones", "Campaign planning from ideation to execution", "Engagement optimization and community-building tactics", "Analytics-informed content decisions — no guesswork"] },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
            <span className="text-slate-300">SERVICES THAT</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">DRIVE RESULTS</span>
          </h2>
          <p className="font-poppins text-center text-slate-500 mb-4 text-lg">Your End-to-End Content Partner for Visibility, Engagement & Revenue</p>
          <p className="font-poppins text-center text-slate-400 mb-16 text-sm max-w-2xl mx-auto">Whether you're battling low engagement, struggling with inconsistent posting, or need cinematic reels that actually convert — I handle everything from shoot to strategy, so you can focus on running your business.</p>
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
              <h3 className="font-bebas text-2xl mb-3 text-slate-700">PERSONAL BRAND ACCELERATOR</h3>
              <p className="font-poppins text-sm text-slate-500 mb-4">Position yourself as the undeniable authority in your space with content that builds credibility and attracts opportunities.</p>
              <ul className="space-y-2.5">
                {["Authority-building reels that establish thought leadership", "Professional talking-head content — scripted, shot & edited", "Cross-platform growth content for LinkedIn & Instagram"].map((item, i) => (
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
                <h3 className="font-bebas text-3xl mb-4">FULL-SERVICE CONTENT PARTNERSHIP</h3>
                <ul className="space-y-3 mb-8">
                  {["4 cinematic reels — concept, shoot & post-production", "8 strategically designed Instagram posts", "Engagement-optimized story creatives", "Monthly content strategy & performance review"].map((item, i) => (
                    <li key={i} className="font-poppins text-sm flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10">
                <p className="font-poppins text-sm opacity-80 mb-4">Investment starting at <span className="text-2xl font-bold">₹15k</span>/month</p>
                <Button
                  className="bg-white text-blue-600 hover:bg-white/90 font-poppins font-semibold rounded-full px-8 py-5 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book a Strategy Call →
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
