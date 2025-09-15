import { Clock, Palette, Heart, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Servicos = () => {
  const services = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Fechamentos Incríveis',
      description: 'Especializados em fechamentos de tatuagens em apenas 3 horas, transformando ideias em arte.',
      features: ['Planejamento detalhado', 'Execução rápida', 'Resultado profissional'],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Tatuagens Artísticas',
      description: 'Criações autorais únicas, desenvolvidas especialmente para cada cliente e sua história.',
      features: ['Design personalizado', 'Estilo único', 'Arte original'],
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Experiência Completa',
      description: 'Cada sessão é uma experiência única, criando memórias eternas através da arte.',
      features: ['Atendimento personalizado', 'Ambiente acolhedor', 'Cuidado em cada detalhe'],
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Padrão Internacional',
      description: 'Qualidade reconhecida mundialmente, com clientes de diversos países.',
      features: ['Reconhecimento global', 'Técnicas avançadas', 'Materiais premium'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consulta',
      description: 'Conversamos sobre sua ideia e criamos o conceito juntos.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Desenvolvimento do desenho personalizado para você.',
    },
    {
      step: '03',
      title: 'Execução',
      description: 'Realização da tatuagem com toda técnica e cuidado.',
    },
    {
      step: '04',
      title: 'Pós-cuidado',
      description: 'Orientações completas para cicatrização perfeita.',
    },
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Faço fechamentos incríveis em 3 horas! A tatuagem para mim é muito mais que uma arte, 
            ela é um negócio. É de onde eu tiro tudo o que eu tenho."
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-slide-up">
          {services.map((service, index) => (
            <Card key={index} className="ink-card p-6 hover-glow group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient">
            Nosso Processo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-elegant-gradient border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border" />
                  )}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <Card className="elegant-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pronto para sua próxima tatuagem?</h3>
            <p className="text-muted-foreground mb-6">
              Vamos criar juntos uma obra única que conte sua história.
            </p>
            <Button size="lg" className="elegant-card hover-glow text-white">
              Agendar Consulta
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Servicos;