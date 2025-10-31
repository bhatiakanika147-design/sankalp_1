import { AlertCircle, TrendingDown, Users2, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  const challenges = [
    {
      icon: Code2,
      title: "Fragmented Development",
      description: "Open-source contributors work in isolation without structured collaboration frameworks or mentorship support."
    },
    {
      icon: Users2,
      title: "Limited Mentorship",
      description: "Lack of accessible expert guidance creates barriers for developers wanting to contribute to complex Industry 4.0 projects."
    },
    {
      icon: TrendingDown,
      title: "Inefficient Workflows",
      description: "Manual task allocation and project management slow down innovation and reduce productivity in collaborative environments."
    },
    {
      icon: AlertCircle,
      title: "Industry 4.0 Gap",
      description: "Traditional development approaches struggle to meet the demands of modern digital infrastructure and smart manufacturing."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-secondary/20 to-background/0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-gradient">The Challenge</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Critical obstacles facing open-source innovation and Industry 4.0 adoption in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-destructive/30 hover:border-destructive/60 transition-all duration-300 group"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <challenge.icon className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{challenge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
