import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Calendar, Users, CheckCircle } from "lucide-react";

const ExampleProject = () => {
  return (
    <section id="example" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-gradient">Example Project</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real-world implementation of Industry 4.0 innovation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-2 border-primary/30 glow-neon overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-foreground">Smart Factory Dashboard</CardTitle>
                  <p className="text-muted-foreground mt-1">Developer AI - NLP Query Handler Module</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/20 text-primary border-primary/50">.NET 8</Badge>
                <Badge className="bg-primary/20 text-primary border-primary/50">C#</Badge>
                <Badge className="bg-primary/20 text-primary border-primary/50">MongoDB</Badge>
                <Badge className="bg-primary/20 text-primary border-primary/50">Azure Function</Badge>
                <Badge className="bg-primary/20 text-primary border-primary/50">Docker</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  Project Overview
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Design and implement a secure REST API endpoint that performs natural language query translation 
                  into structured command syntax for the Developer AI module. Ensure compliance with internal 
                  security guidelines and maintain a maximum average response time under 300ms.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Timeline
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="text-foreground font-medium">Assigned:</span> 06 Oct 2025</p>
                    <p><span className="text-foreground font-medium">Deadline:</span> 30 Oct 2025</p>
                    <p><span className="text-accent font-medium">Status:</span> In Progress (60%)</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Team
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="text-foreground font-medium">Project Master:</span> Jasspreet</p>
                    <p><span className="text-foreground font-medium">R&D Associate:</span> Tushar Yadav</p>
                    <p><span className="text-foreground font-medium">Module ID:</span> FR-CM-04-A</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Expected Deliverables</h4>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Secure REST API endpoint with NLP query translation</li>
                  <li>Compliance with NFR-SEC-02 security guidelines</li>
                  <li>Response time optimization (&lt;300ms average)</li>
                  <li>Comprehensive API documentation and test cases</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExampleProject;
