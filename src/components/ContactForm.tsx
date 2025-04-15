
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    instagram: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      brand: "",
      instagram: "",
      email: "",
    });
    // Show success message (in a real implementation)
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-secondary/30 rounded-2xl p-6 md:p-10 shadow-xl opacity-0 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Solicite um orçamento
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Nome do Empresário</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="bg-secondary/50 border-white/20 focus:border-white/40 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand" className="text-white">Nome da Marca</Label>
              <Input
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Nome da sua empresa/marca"
                required
                className="bg-secondary/50 border-white/20 focus:border-white/40 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram" className="text-white">@ do Instagram</Label>
              <Input
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="@suamarca"
                required
                className="bg-secondary/50 border-white/20 focus:border-white/40 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                required
                className="bg-secondary/50 border-white/20 focus:border-white/40 text-white"
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 text-lg"
              >
                Fazer um orçamento
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
