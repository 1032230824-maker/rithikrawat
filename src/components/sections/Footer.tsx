import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-slate-200 bg-white/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-bebas text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">RITHIK RAWAT</span>
        <p className="font-poppins text-sm text-slate-400">
          © {new Date().getFullYear()} Rithik Rawat. Crafted with intent.
        </p>
        <div className="flex gap-3">
          {[
            { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/rithikrawatofficial" },
            { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/in/rithikrawat19" },
            { icon: <Mail className="h-4 w-4" />, href: "mailto:rwtrithik19@gmail.com" },
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-100 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
