import AnimatedSection from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Rithik's cinematic property reels helped us generate 3x more inquiries on Instagram. His understanding of real estate marketing is exceptional.",
    name: "Real Estate Client",
    role: "Property Developer, Mumbai",
  },
  {
    quote: "Working with Rithik transformed our brand's social media presence. His reels consistently outperform our previous content in reach and engagement.",
    name: "Brand Collaboration",
    role: "D2C Fashion Brand",
  },
  {
    quote: "From concept to final edit, Rithik delivers content that actually converts. Our follower growth doubled within the first two months.",
    name: "Creator Collaboration",
    role: "Content Creator & Influencer",
  },
  {
    quote: "The quality of work Rithik delivers is on par with professional agencies, but with a much more personal and responsive approach. Highly recommended.",
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
            <span className="text-slate-300">WHAT CLIENTS</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">SAY</span>
          </h2>
          <p className="font-poppins text-center text-slate-400 mb-16 max-w-lg mx-auto">
            Don't just take my word for it — here's what my clients have to say about working together.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-500 h-full flex flex-col">
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
