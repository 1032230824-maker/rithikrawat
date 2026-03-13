import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Rithik's property reels generated 3x more inquiries in the first month alone. He understands buyer psychology and knows exactly how to present a listing so it stops the scroll and starts conversations.",
    name: "Real Estate Client",
    role: "Property Developer, Mumbai",
  },
  {
    quote: "Before Rithik, our Instagram was an afterthought. Now it's our strongest lead channel. His reels consistently outperform everything we've tried before — in reach, saves, and actual conversions.",
    name: "Brand Collaboration",
    role: "D2C Fashion Brand",
  },
  {
    quote: "From the initial concept to the final cut, every piece of content Rithik delivers is strategic. Our follower growth doubled in two months, and more importantly, those followers actually engage and buy.",
    name: "Creator Collaboration",
    role: "Content Creator & Influencer",
  },
  {
    quote: "We compared Rithik's output to agencies charging 5x more — and his work matched or exceeded theirs. The personal attention, quick turnarounds, and creative instinct make him an invaluable partner.",
    name: "Startup Founder",
    role: "Tech Startup, Mumbai",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-satoshi text-5xl md:text-6xl font-black text-center mb-4 tracking-tight">
            <span className="text-slate-300">CLIENT</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">RESULTS</span>
          </h2>
          <p className="font-inter text-center text-slate-400 mb-16 max-w-lg mx-auto">
            The work speaks for itself — but here's what my clients have to say about the impact on their business.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-9 border border-slate-200 hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <Quote className="h-8 w-8 text-cyan-500/30 mb-4 flex-shrink-0" />
                <p className="font-inter text-slate-500 text-sm leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                <div>
                  <p className="font-satoshi text-lg font-bold text-slate-700">{t.name}</p>
                  <p className="font-inter text-xs text-slate-400">{t.role}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
