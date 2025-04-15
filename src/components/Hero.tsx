
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleInstagramRedirect = () => {
    window.open('https://www.instagram.com/direct/inbox/', '_blank');
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className={`max-w-4xl text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 
          className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight uppercase opacity-0 animate-fade-in-up font-typewriter" 
          style={{animationDelay: '300ms'}}
        >
          TENHA UM ESPAÇO ONLINE E COMPARTILHE O QUE REALMENTE IMPORTA COM SEUS CLIENTES.
        </h1>
        <div className="mt-8">
          <button 
            onClick={handleInstagramRedirect}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-base md:text-lg"
          >
            Fazer um orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
