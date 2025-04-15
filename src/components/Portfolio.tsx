
import { useRef } from "react";
import { Hand } from "lucide-react";

const Portfolio = () => {
  const rowRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      name: "Outliers",
      image: "https://i.postimg.cc/kGNTwbm0/1744304042982.png",
      url: "https://outliers-one.vercel.app"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '600ms'}}>
          Projetos de sucesso
        </h2>
        
        <div className="netflix-row relative">
          <div ref={rowRef} className="netflix-row-items">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="carousel-item flex-none w-full md:w-2/3 lg:w-1/2 p-4 opacity-0 animate-fade-in-up" 
                style={{animationDelay: `${600 + (project.id * 200)}ms`}}
              >
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-0 right-4 z-10 opacity-0 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
            <Hand size={24} className="text-white finger-tap" />
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-fade-in-up" style={{animationDelay: '800ms'}}>
          <h3 className="text-xl md:text-3xl font-bold text-white mb-4">
            Compartilhe, Interaja, Ganhe autoridade.
          </h3>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            Sua marca inovando no mercado
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
