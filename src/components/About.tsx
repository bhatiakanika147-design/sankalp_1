import { Target, Heart, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Vision",
      description: "To create a thriving ecosystem where innovation meets collaboration, driving India's digital transformation through open-source excellence."
    },
    {
      icon: Heart,
      title: "Collaboration First",
      description: "Breaking down silos by connecting developers, mentors, and organizations in a unified platform for collective growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Leveraging AI and cutting-edge technologies to accelerate development and solve real-world Industry 4.0 challenges."
    },
    {
      icon: Users,
      title: "Community Powered",
      description: "Building a supportive network where knowledge sharing and mentorship fuel continuous learning and advancement."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-gradient">About S.A.N.K.A.L.P.</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A revolutionary platform designed to empower India's open-source community and drive Industry 4.0 innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 glow-neon-hover group"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
