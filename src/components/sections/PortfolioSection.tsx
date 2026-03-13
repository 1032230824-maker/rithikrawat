import { ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import LazyInstagramEmbed from "@/components/LazyInstagramEmbed";

const portfolioItems = [
  {
    title: "Brand Collaboration",
    embedUrl: "https://www.instagram.com/reel/C_iaK_wCrOZ/embed",
    link: "https://www.instagram.com/reel/C_iaK_wCrOZ/?igsh=MTlydXVsMmd0cjNzNA==",
    alt: "Brand collaboration reel edited by Rithik Rawat",
  },
  {
    title: "Travel Content",
    embedUrl: "https://www.instagram.com/reel/DEnSchPTlXe/embed",
    link: "https://www.instagram.com/reel/DEnSchPTlXe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "Travel content reel by Rithik Rawat",
  },
  {
    title: "Featured Reel",
    embedUrl: "https://www.instagram.com/reel/DG8OLH7t0pH/embed",
    link: "https://www.instagram.com/reel/DG8OLH7t0pH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "Featured Instagram reel editing example",
  },
  {
    title: "Latest Reel",
    embedUrl: "https://www.instagram.com/reel/DL-KLLXzee6/embed",
    link: "https://www.instagram.com/reel/DL-KLLXzee6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "Latest Instagram reel by Rithik Rawat",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 px-4 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-satoshi text-5xl md:text-6xl font-black text-center mb-4 tracking-tight">
            <span className="text-slate-300">SELECTED</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">WORK</span>
          </h2>
          <p className="font-inter text-center text-slate-400 mb-16 max-w-lg mx-auto">Every reel is crafted to do more than look good — it's built to attract attention, spark engagement, and position your brand as the one worth following.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "177%" }}>
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                    <LazyInstagramEmbed embedUrl={item.embedUrl} title={item.title} altText={item.alt} />
                  </div>
                  {/* Hover overlay with play icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Play className="h-6 w-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-satoshi font-bold text-slate-700">{item.title}</h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors font-inter text-sm group/link"
                  >
                    View
                    <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
