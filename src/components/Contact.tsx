import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_lpm71l8',  
        'template_n1bg53q',  
        e.currentTarget,
        '7xXJ9Z5S7U7mGQUBR'   
      )
      .then(
        () => {
          toast({
            title: "Mensagem enviada!",
            description: "Obrigado pelo contato. Responderei em breve!",
          });
          e.currentTarget.reset();
        },
        (error) => {
          console.error('Erro:', error);
          toast({
            title: "Erro ao enviar",
            description: "Tente novamente ou use o email direto.",
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/arthurhenriquelopes",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arthur-henrique-lopes/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:arthurhenriquelopesf@gmail.com",
      label: "Email",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          Contato
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Vamos conversar sobre seu próximo projeto? Entre em contato!
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input name="from_name" placeholder="Seu Nome" required />
                </div>
                <div>
                  <Input name="reply_to" type="email" placeholder="Seu Email" required />
                </div>
                <div>
                  <Input name="subject" placeholder="Assunto" required />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua Mensagem"
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Vamos conectar!</h3>
                <p className="text-muted-foreground mb-6">
                  Estou sempre aberto a novas oportunidades e colaborações.
                  Sinta-se à vontade para entrar em contato através das minhas
                  redes sociais.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent className="w-4 h-4 mr-2" />
                          {social.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
