
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

  return (
    <>
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
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
              <img 
                src="https://i.postimg.cc/YSkzyWZx/487993310-528029013363503-6384488293855636473-n-1.jpg"
                alt="Gustavo Correia"
                className="w-full h-auto rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 text-left opacity-0 animate-fade-in-up" style={{animationDelay: '1200ms'}}>
              <p className="text-white leading-relaxed">
                Olá, sou Gustavo Correia, especialista em desenvolvimento de blogs e programação.
              </p>
              <p className="text-white/90 leading-relaxed">
                Se você tem ideias valiosas, por que deixá-las escondidas em um feed limitado? O que você precisa é de um espaço próprio onde sua voz seja ouvida de forma clara e impactante. É aí que eu entro.
              </p>
              <p className="text-white/90 leading-relaxed">
                A solução que criei vai além da simples criação de um blog. Ela é pensada para ajudar você a construir autoridade, engajar seu público e, mais importante, transformar visitantes em seguidores leais.
              </p>
              <p className="text-white/90 leading-relaxed">
                Eu entendo o poder de uma presença online sólida. Um blog não é apenas um lugar para publicar conteúdo; é a base da sua estratégia de crescimento. Com um blog feito sob medida, você pode conquistar sua audiência, gerar confiança e fazer sua marca se destacar como nunca.
              </p>
              <p className="text-white leading-relaxed">
                Pronto para parar de ser só mais um no feed e começar a construir algo que vai durar? Vamos transformar suas ideias em uma verdadeira plataforma de sucesso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
