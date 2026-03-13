import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-white/90 backdrop-blur-xl border-t border-slate-200/50">
      <Button
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-poppins font-semibold py-5 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Let's Work Together
        <ChevronRight className="ml-1 h-5 w-5" />
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
