import { Button } from "@/components/ui/button";
import { Rocket, Users, Code2, ArrowRight } from "lucide-react";

const Impact = () => {
  const actions = [
    {
      icon: Rocket,
      title: "Join as Developer",
      description: "Start contributing to cutting-edge Industry 4.0 projects",
      cta: "Get Started",
      variant: "default" as const
    },
    {
      icon: Users,
      title: "Become a Mentor",
      description: "Guide the next generation of innovators",
      cta: "Apply Now",
      variant: "outline" as const
    },
    {
      icon: Code2,
      title: "Contribute",
      description: "Share your expertise and build together",
      cta: "Explore Projects",
      variant: "outline" as const
    }
  ];

  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial rounded-full blur-3xl opacity-20 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-black text-gradient">Join the Revolution</h2>
          <p className="text-2xl text-foreground leading-relaxed">
            Be part of India's digital transformation and shape the future of Industry 4.0
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Together, we're building an ecosystem where innovation thrives, knowledge flows freely, 
            and every contribution drives us closer to an Atmanirbhar Bharat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {actions.map((action, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 glow-neon-hover transition-all duration-300 group space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mx-auto">
                <action.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-foreground">{action.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{action.description}</p>
              </div>
              <Button 
                variant={action.variant}
                className="w-full group/btn text-lg py-6 glow-neon-hover rounded-xl font-semibold"
              >
                {action.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-6">
            Have questions? Want to learn more?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6 border-2 border-accent text-accent hover:bg-accent/10 glow-neon-hover rounded-xl font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Impact;
