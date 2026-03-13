import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import MobileNav from "@/components/MobileNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhoIHelpSection from "@/components/sections/WhoIHelpSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import RealEstateSection from "@/components/sections/RealEstateSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import BusinessDiscoveryAssistant from "@/components/BusinessDiscoveryAssistant";

const navItems = [
  { label: "About", id: "about" },
  { label: "Who I Help", id: "who-i-help" },
  { label: "Skills", id: "skills" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Real Estate", id: "real-estate" },
  { label: "Contact", id: "contact" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/50 text-slate-800 overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute -bottom-20 right-1/3 w-[300px] h-[300px] bg-violet-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "5s" }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bebas text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">RR</span>
          <div className="hidden md:flex gap-8 font-poppins text-sm text-slate-500">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-cyan-600 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-poppins text-sm px-5 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hire Me
            </Button>
            <MobileNav />
          </div>
        </div>
      </motion.nav>

      <HeroSection />
      <AboutSection />
      <WhoIHelpSection />
      <PortfolioSection />
      <SkillsSection />
      <ServicesSection />
      <RealEstateSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
