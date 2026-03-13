import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import LazyInstagramEmbed from "@/components/LazyInstagramEmbed";

const reels = [
  { title: "Prestige Real Estate Reel", embedUrl: "https://www.instagram.com/reel/DVWhJbHjeOn/embed", link: "https://www.instagram.com/reel/DVWhJbHjeOn/", alt: "Real estate cinematic reel by Rithik Rawat" },
  { title: "Property Showcase Reel", embedUrl: "https://www.instagram.com/reel/DVZUpsqjYIj/embed", link: "https://www.instagram.com/reel/DVZUpsqjYIj/", alt: "Property showcase video by Rithik Rawat" },
  { title: "Luxury Property Tour", embedUrl: "https://www.instagram.com/reel/DVZOx1fDQZ8/embed", link: "https://www.instagram.com/reel/DVZOx1fDQZ8/", alt: "Luxury property showcase video" },
];

const RealEstateSection = () => {
  return (
    <section id="real-estate" className="py-32 px-4 bg-gradient-to-b from-white to-slate-50/80">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="inline-block font-inter text-xs font-bold tracking-[0.3em] uppercase text-cyan-500 bg-cyan-50 px-4 py-2 rounded-full mb-4">Property Marketing Specialist</span>
          </div>
          <h2 className="font-satoshi text-5xl md:text-6xl font-black text-center mb-4 tracking-tight">
            <span className="text-slate-300">REAL ESTATE</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">THAT SELLS ITSELF</span>
          </h2>
          <p className="font-inter text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Today's buyers decide within seconds of seeing a listing. My cinematic property reels are engineered to capture attention, evoke emotion, and drive serious inquiries — giving your developments the digital-first presentation that modern buyers expect.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {reels.map((reel, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative w-full" style={{ paddingBottom: "177%" }}>
                  <LazyInstagramEmbed embedUrl={reel.embedUrl} title={reel.title} altText={reel.alt} />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-satoshi font-bold text-slate-700">{reel.title}</h3>
                    <p className="font-inter text-sm text-slate-400 mt-1">Produced by Rithik Rawat</p>
                  </div>
                  <a href={reel.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors font-inter text-sm">
                    View
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Real Estate Pricing Packages */}
        <AnimatedSection>
          <h3 className="font-satoshi text-3xl md:text-4xl font-black text-center mt-24 mb-12 tracking-tight">
            <span className="text-slate-300">PROPERTY CONTENT</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">PACKAGES</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-cyan-50/50 border border-slate-200 rounded-2xl p-9"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="font-satoshi text-2xl font-bold mb-1 text-slate-700">STARTER</h3>
              <p className="font-satoshi text-lg font-bold text-cyan-600 mb-3">₹10,000 <span className="text-sm font-normal text-slate-400 font-inter">/ month</span></p>
              <p className="font-inter text-sm text-slate-500 mb-4">Perfect for agents building a consistent social presence who want professional property reels without the agency price tag.</p>
              <ul className="space-y-2.5">
                {["4 cinematic property reels delivered monthly", "Professional on-location property shoot", "Polished editing with smooth transitions", "Cinematic color grading for premium feel", "Weekly delivery — one reel every 7 days"].map((item, i) => (
                  <li key={i} className="font-inter text-sm text-slate-500 flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-9 text-white relative overflow-hidden ring-2 ring-cyan-400/50 ring-offset-4 ring-offset-white shadow-2xl shadow-cyan-500/20"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <span className="inline-block font-inter text-xs font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full mb-3">⭐ Most Popular</span>
                <h3 className="font-satoshi text-2xl font-bold mb-1">GROWTH</h3>
                <p className="font-satoshi text-lg font-bold mb-3">₹18,000 <span className="text-sm font-normal opacity-80 font-inter">/ month</span></p>
                <p className="font-inter text-sm opacity-90 mb-4">For developers and top-producing agents who want production value that positions their listings above the competition.</p>
                <ul className="space-y-2.5 mb-6">
                  {["4 premium property reels with dedicated shoots", "Professional camera equipment — no phone footage", "Advanced cinematic editing and motion graphics", "Studio-grade color grading for luxury appeal", "Instagram-optimized property highlights and stories"].map((item, i) => (
                    <li key={i} className="font-inter text-sm flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-white text-blue-600 hover:bg-white/90 font-inter font-semibold rounded-full px-8 py-5 hover:shadow-lg transition-all duration-300 hover:scale-105 w-full"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started Today →
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-slate-50 to-cyan-50/50 border border-slate-200 rounded-2xl p-9"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="text-3xl mb-3">👑</div>
              <h3 className="font-satoshi text-2xl font-bold mb-1 text-slate-700">PREMIUM</h3>
              <p className="font-satoshi text-lg font-bold text-cyan-600 mb-3">₹30,000 <span className="text-sm font-normal text-slate-400 font-inter">/ month</span></p>
              <p className="font-inter text-sm text-slate-500 mb-4">The full white-glove experience for luxury developments and high-end properties that demand cinematic excellence at every touchpoint.</p>
              <ul className="space-y-2.5">
                {["8 cinematic property reels — twice the output", "Professional multi-camera shoot production", "High-end editing with premium transitions and effects", "Bespoke color grading matched to your brand palette", "Luxury storytelling format — walkthrough narratives that sell"].map((item, i) => (
                  <li key={i} className="font-inter text-sm text-slate-500 flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RealEstateSection;
