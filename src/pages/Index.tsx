import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import ExampleProject from "@/components/ExampleProject";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Features />
      <ExampleProject />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;
