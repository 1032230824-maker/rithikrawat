import { ExternalLink } from "lucide-react";
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
    <section id="portfolio" className="py-28 px-4 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
            <span className="text-slate-300">SELECTED</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">WORK</span>
          </h2>
          <p className="font-poppins text-center text-slate-400 mb-16 max-w-md mx-auto text-sm">Every reel is built to attract attention, spark engagement, and position your brand as the one worth following.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="relative w-full" style={{ paddingBottom: "177%" }}>
                  <LazyInstagramEmbed embedUrl={item.embedUrl} title={item.title} altText={item.alt} />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-poppins font-semibold text-slate-700 text-sm">{item.title}</h3>
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
  );
};

export default PortfolioSection;
