import { Building2, User, Store, Megaphone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const clients = [
  { icon: <Building2 className="h-6 w-6" />, title: "Real Estate Agents & Developers", desc: "Cinematic walkthroughs that generate qualified buyer inquiries and close deals faster" },
  { icon: <User className="h-6 w-6" />, title: "Personal Brands & Creators", desc: "Authority-driven content that positions you as the go-to expert in your niche" },
  { icon: <Store className="h-6 w-6" />, title: "Local Businesses & Startups", desc: "Scroll-stopping social content that builds local visibility and drives footfall" },
  { icon: <Megaphone className="h-6 w-6" />, title: "Brands & Agencies", desc: "Performance-focused reels and campaigns that move the needle on engagement and sales" },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "2+", label: "Years of Execution" },
  { value: "1000s", label: "Organic Views Generated" },
  { value: "10+", label: "Clients & Brands Partnered" },
];

const WhoIHelpSection = () => {
  return (
    <section id="who-i-help" className="py-32 px-4 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-satoshi text-5xl md:text-6xl font-black text-center mb-4 tracking-tight">
            <span className="text-slate-300">BUILT FOR</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">AMBITIOUS BRANDS</span>
          </h2>
          <p className="font-inter text-center text-slate-400 mb-14 max-w-lg mx-auto">I partner with professionals and businesses who are serious about turning their social media into a revenue channel — not just a content feed.</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-500 text-center h-full cursor-default"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-satoshi text-lg font-bold mb-2 text-slate-700">{item.title}</h3>
                <p className="font-inter text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Authority Metrics Strip */}
        <AnimatedSection>
          <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-1">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700/50">
              {stats.map((stat, i) => (
                <div key={i} className="text-center py-8 px-4">
                  <p className="font-satoshi text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="font-inter text-xs text-slate-400 mt-2 tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhoIHelpSection;
