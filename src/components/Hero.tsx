import { Button } from "@/components/ui/button";
import { Github, Users, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Futuristic technology background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial rounded-full blur-3xl opacity-30 animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial rounded-full blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="text-gradient">S.A.N.K.A.L.P.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[hsl(var(--silver))] font-medium tracking-wider">
              Solutions for Atmanirbhar Nation
            </p>
          </div>

          {/* Subtitle */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            National Open Source Innovation Ecosystem
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering India's digital future through collaborative innovation, AI-assisted development, 
            and Industry 4.0 transformation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-neon-hover rounded-xl font-semibold"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Join the Ecosystem
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 glow-neon-hover rounded-xl font-semibold"
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Mentor
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent/10 glow-neon-hover rounded-xl font-semibold"
            >
              <Github className="mr-2 h-5 w-5" />
              Contribute Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
