import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import studioBrazil from '@/assets/studio-brazil.jpg';
import studioUSA from '@/assets/studio-usa.jpg';

const Estudios = () => {
  const studios = [
    {
      name: 'CloveR Studio Brasil',
      location: 'São Paulo, Brasil',
      image: studioBrazil,
      address: 'Rua das Artes, 123 - Vila Madalena',
      hours: 'Seg - Sáb: 9h às 18h',
      phone: '+55 (11) 99999-9999',
      email: 'brasil@cloverstudio.com',
      description: 'Nosso estúdio principal no Brasil, onde tudo começou. Um ambiente acolhedor e profissional no coração de São Paulo.',
      features: [
        'Estúdio principal e matriz',
        'Equipamentos de última geração',
        'Ambiente climatizado',
        'Sala de espera confortável',
        'Certificação ANVISA',
      ],
    },
    {
      name: 'CloveR Studio USA',
      location: 'New York, EUA',
      image: studioUSA,
      address: 'Times Square, Manhattan - New York',
      hours: 'Mon - Sat: 10am to 7pm',
      phone: '+1 (212) 555-0123',
      email: 'usa@cloverstudio.com',
      description: 'Nossa expansão internacional no coração de Nova York. Em menos de 24 horas de abertura, a agenda ficou lotada.',
      features: [
        'Localização premium em Manhattan',
        'Estúdio moderno e sofisticado',
        'Atendimento internacional',
        'Clientes do mundo todo',
        'Padrão americano de qualidade',
      ],
    },
  ];

  return (
    <section id="estudios" className="py-20 bg-elegant-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient mb-6">
            Nossos Estúdios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dois estúdios, dois continentes, uma paixão. 
            Do Brasil aos Estados Unidos, levando a arte da tatuagem para o mundo.
          </p>
        </div>

        <div className="space-y-16">
          {studios.map((studio, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <img
                    src={studio.image}
                    alt={`${studio.name} - Ambiente interno`}
                    className="w-full h-96 object-cover rounded-2xl shadow-elegant group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{studio.name}</h3>
                    <p className="flex items-center text-white/80">
                      <MapPin className="h-4 w-4 mr-2" />
                      {studio.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Card className="ink-card p-6 hover-glow">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">{studio.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {studio.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {studio.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-3" />
                      <span>{studio.address}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-3" />
                      <span>{studio.hours}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 mr-3" />
                      <span>{studio.phone}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="h-4 w-4 mr-3" />
                      <span>{studio.email}</span>
                    </div>
                  </div>

                  <Button className="w-full elegant-card hover-glow">
                    Agendar neste estúdio
                  </Button>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach */}
        <div className="mt-20 text-center animate-fade-in">
          <Card className="elegant-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gradient">Alcance Global</h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              "Clientes do mundo vêm tatuar comigo (Inglaterra, Croácia, Estados Unidos, Japão, etc...)"
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                <div className="text-muted-foreground">Países atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">2</div>
                <div className="text-muted-foreground">Continentes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">24h</div>
                <div className="text-muted-foreground">Para agenda lotar (EUA)</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Estudios;