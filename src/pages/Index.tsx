import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Partnerships from "@/components/Partnerships";
import Environment from "@/components/Environment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Partnerships />
      <Environment />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
