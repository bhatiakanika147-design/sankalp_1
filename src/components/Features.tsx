import { Cpu, Network, Users2, Zap, Shield, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Intelligence",
      description: "Smart task allocation, code analysis, and predictive project insights"
    },
    {
      icon: Network,
      title: "Scalable Architecture",
      description: "Built to grow from small teams to enterprise-level collaborations"
    },
    {
      icon: Users2,
      title: "Real-Time Collaboration",
      description: "Live updates, instant messaging, and synchronized development"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Fast onboarding with pre-configured Industry 4.0 templates"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced encryption and compliance with industry standards"
    },
    {
      icon: GitBranch,
      title: "Version Control Integration",
      description: "Seamless GitHub integration with automated workflows"
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background/0 via-secondary/20 to-background/0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-gradient">Powerful Features</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to build the future of Industry 4.0
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 glow-neon-hover group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
