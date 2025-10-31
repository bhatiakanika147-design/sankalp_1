import { CheckCircle2, Workflow, GraduationCap, Bot } from "lucide-react";

const Solution = () => {
  const solutions = [
    {
      icon: Workflow,
      title: "Structured Workflow",
      description: "Organized project modules with clear task allocation, progress tracking, and milestone management for seamless collaboration."
    },
    {
      icon: GraduationCap,
      title: "Expert Mentorship",
      description: "Direct access to industry professionals and R&D associates for technical guidance, code reviews, and career development."
    },
    {
      icon: Bot,
      title: "AI-Assisted Tasks",
      description: "Intelligent task recommendations, automated code analysis, and smart project matching to accelerate development cycles."
    }
  ];

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-gradient">Our Solution</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive platform that transforms how developers collaborate and innovate
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 glow-neon-hover transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <solution.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
                    {solution.title}
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
