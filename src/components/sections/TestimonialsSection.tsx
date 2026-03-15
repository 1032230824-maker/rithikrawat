import AnimatedSection from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Rithik's property reels generated 3x more inquiries in the first month. He knows exactly how to present a listing so it stops the scroll.",
    name: "Real Estate Client",
    role: "Property Developer, Mumbai",
  },
  {
    quote: "Our Instagram went from afterthought to strongest lead channel. His reels consistently outperform in reach, saves, and conversions.",
    name: "Brand Collaboration",
    role: "D2C Fashion Brand",
  },
  {
    quote: "Every piece of content is strategic. Follower growth doubled in two months — and those followers actually engage and buy.",
    name: "Creator Collaboration",
    role: "Content Creator & Influencer",
  },
  {
    quote: "We compared his output to agencies charging 5x more — his work matched or exceeded theirs. An invaluable partner.",
    name: "Startup Founder",
    role: "Tech Startup, Mumbai",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 px-4 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
            <span className="text-slate-300">CLIENT</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">RESULTS</span>
          </h2>
          <p className="font-poppins text-center text-slate-400 mb-16 max-w-md mx-auto text-sm">
            The work speaks for itself — here's what clients say about the impact.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                <Quote className="h-8 w-8 text-cyan-500/30 mb-4 flex-shrink-0" />
                <p className="font-poppins text-slate-500 text-sm leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                <div>
                  <p className="font-bebas text-lg text-slate-700">{t.name}</p>
                  <p className="font-poppins text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
