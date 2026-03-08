import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram, Linkedin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const { toast } = useToast();

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      toast({ title: "Please fill all fields", description: "All fields are required." });
      return;
    }

    const whatsappText = `Hi Rithik! I'm *${contactName.trim()}*.\n\nEmail: ${contactEmail.trim()}\n\nProject Details:\n${contactMessage.trim()}`;
    const whatsappUrl = `https://wa.me/918591872306?text=${encodeURIComponent(whatsappText)}`;

    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow || newWindow.closed) {
      window.location.href = whatsappUrl;
    }

    toast({ title: "Redirecting to WhatsApp! 📱", description: "Your message is ready to send. Just hit send on WhatsApp!" });
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  const handleEmailSubmit = () => {
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      toast({ title: "Please fill all fields", description: "All fields are required." });
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry from ${contactName.trim()}`);
    const body = encodeURIComponent(`Hi Rithik,\n\nI'm ${contactName.trim()} (${contactEmail.trim()}).\n\nProject Details:\n${contactMessage.trim()}`);
    window.open(`mailto:rwtrithik19@gmail.com?subject=${subject}&body=${body}`, "_blank");

    toast({ title: "Opening your email client! ✉️", description: "Your message is ready to send via email." });
  };

  return (
    <section id="contact" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="font-bebas text-5xl md:text-6xl text-center mb-4">
            <span className="text-slate-300">READY TO</span>{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">START?</span>
          </h2>
          <p className="font-poppins text-center text-slate-400 mb-4 max-w-lg mx-auto">Have a project in mind? Tell me about your idea using the form below and I'll get back to you. You can also reach me via email, WhatsApp, or Instagram — whatever works best for you.</p>
          <div className="flex items-center justify-center gap-2 mb-16">
            <Clock className="h-4 w-4 text-cyan-500" />
            <p className="font-poppins text-sm text-cyan-600 font-medium">Limited slots available each month — reach out early to secure your spot.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h3 className="font-bebas text-2xl text-slate-700">LET'S BRING YOUR VISION TO LIFE</h3>
              <div className="space-y-4">
                {[
                  { icon: <Phone className="h-5 w-5" />, label: "+91 8591872306", href: "tel:+918591872306" },
                  { icon: <Mail className="h-5 w-5" />, label: "rwtrithik19@gmail.com", href: "mailto:rwtrithik19@gmail.com" },
                  { icon: <Instagram className="h-5 w-5" />, label: "@rithikrawatofficial", href: "https://www.instagram.com/rithikrawatofficial" },
                  { icon: <Linkedin className="h-5 w-5" />, label: "rithikrawat19", href: "https://linkedin.com/in/rithikrawat19" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="font-poppins text-sm text-slate-600 group-hover:text-slate-800 transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your Name"
                    className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 font-poppins rounded-xl h-12"
                    required
                  />
                  <Input
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    type="email"
                    placeholder="Your Email"
                    className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 font-poppins rounded-xl h-12"
                    required
                  />
                </div>
                <Textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Tell me about your project — what do you need, and when do you need it?"
                  rows={5}
                  className="bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400 font-poppins rounded-xl resize-none"
                  required
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-poppins font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send via WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleEmailSubmit}
                    className="flex-1 border-slate-300 text-slate-600 font-poppins font-semibold py-6 rounded-xl hover:border-cyan-400 hover:text-cyan-600 transition-all duration-300"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send via Email
                  </Button>
                </div>
                <p className="font-poppins text-xs text-slate-400 text-center">
                  Clicking "Send via WhatsApp" will open WhatsApp with your message pre-filled. "Send via Email" will open your email client.
                </p>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
