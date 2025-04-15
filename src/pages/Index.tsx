
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Technologies from "@/components/Technologies";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-ocean-blue">
      <main>
        <Hero />
        <Portfolio />
        <Technologies />
        <FAQ />
      </main>
      
      <footer className="py-8 text-center text-white/60 text-sm">
        <p>© {new Date().getFullYear()} | Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Index;
