
const Technologies = () => {
  const techs = [
    {
      id: 1,
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 2,
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  ];

  const handleInstagramRedirect = () => {
    window.open('https://www.instagram.com/direct/inbox/', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '800ms'}}>
          Tecnologias que utilizamos
        </h2>
        
        <div className="grid grid-cols-3 gap-6 md:gap-12">
          {techs.map((tech) => (
            <div 
              key={tech.id} 
              className="flex flex-col items-center opacity-0 animate-fade-in-up" 
              style={{animationDelay: `${800 + (tech.id * 200)}ms`}}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 transition-transform duration-300 hover:scale-110">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-full h-full object-contain" 
                  loading="lazy"
                />
              </div>
              <p className="text-white font-medium">{tech.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={handleInstagramRedirect}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-base md:text-lg font-poppins"
          >
            Fazer um orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
