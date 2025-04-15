
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "O que é um blog e como funciona?",
      answer: "Um blog é uma plataforma online onde você pode compartilhar conteúdo regularmente em forma de artigos (posts). Funciona como um diário digital da sua marca, onde você pode publicar informações relevantes para seus clientes, compartilhar conhecimento sobre seu setor e aumentar sua autoridade no mercado. Os blogs são excelentes para melhorar seu SEO e atrair mais visitantes para seu site através de conteúdo de qualidade."
    },
    {
      id: "item-2",
      question: "Quanto tempo leva para desenvolver um blog?",
      answer: "O desenvolvimento de um blog pode levar de 2 a 4 semanas, dependendo da complexidade do projeto e das funcionalidades desejadas. Isso inclui o design personalizado, implementação de recursos especiais, integração com redes sociais e otimização para mecanismos de busca. Trabalhamos com prazos transparentes e mantemos você informado em cada etapa do processo."
    },
    {
      id: "item-3",
      question: "Como eu posso gerenciar meu blog?",
      answer: "Criaremos um login especialmente para gerenciar seu blog com todas as funcionalidades de Administrador. Você terá acesso a um painel intuitivo onde poderá criar e editar posts, moderar comentários, visualizar estatísticas de visitantes e personalizar aspectos do seu blog sem precisar de conhecimentos técnicos."
    },
    {
      id: "item-4",
      question: "Quais benefícios um blog traz para minha empresa?",
      answer: "Um blog traz diversos benefícios: melhora seu posicionamento nos mecanismos de busca, estabelece sua autoridade no mercado, aumenta o engajamento com seus clientes, gera leads qualificados, oferece insights sobre seu público através de métricas e análises, e cria um canal direto de comunicação com seu público-alvo."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '1200ms'}}>
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="opacity-0 animate-fade-in-up" style={{animationDelay: '1300ms'}}>
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-white/20">
              <AccordionTrigger className="text-white font-medium text-left py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
