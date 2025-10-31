import { Github, Linkedin, MessageCircle } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="S.A.N.K.A.L.P. Logo" className="h-12 w-12" />
              <span className="text-2xl font-black text-gradient">S.A.N.K.A.L.P.</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Solutions for Atmanirbhar Nation - Driving India's digital transformation through open-source innovation
            </p>
          </div>

          {/* Team info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Team Information</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="text-primary font-semibold">Team:</span> Programming Innovators</p>
              <p><span className="text-primary font-semibold">Team Leader:</span> [Your Name]</p>
              <p><span className="text-primary font-semibold">Track:</span> 7 – Industry 4.0 & Digital Infrastructure</p>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center glow-neon-hover transition-all group"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} S.A.N.K.A.L.P. - National Open Source Innovation Ecosystem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
