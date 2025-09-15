import { Card } from '@/components/ui/card';
import tattooWork from '@/assets/tattoo-work.jpg';

const Historia = () => {
  const timeline = [
    {
      year: '2013',
      title: 'O Início',
      description: 'Começou assistindo vídeos no YouTube e tatuando amigos na garagem de casa. O início de tudo.',
    },
    {
      year: '2019',
      title: 'Reconhecimento Internacional',
      description: 'Seu trabalho ultrapassou todas as barreiras e entrou no mundo do futebol, levando sua arte até a Europa.',
    },
    {
      year: '2023',
      title: 'Expansão para os EUA',
      description: 'Abriu uma agência para tatuar nos EUA. Em menos de 24 horas, a agenda ficou lotada.',
    },
  ];

  return (
    <section id="historia" className="py-20 bg-elegant-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient mb-6">
            Minha História
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Me chamo Pedro Victor, mas todos me conhecem como <strong>CloveR</strong>. 
            CloveR foi criado para ser o nome dos estúdios, hoje se tornou uma marca... e meu nome."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src={tattooWork}
                alt="Pedro Victor CloveR trabalhando em uma tatuagem"
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8 animate-fade-in">
            {timeline.map((item, index) => (
              <Card key={item.year} className="ink-card p-6 hover-glow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center animate-scale-in">
          <Card className="elegant-card p-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-4 font-display italic">
              "A tatuagem mudou a minha vida! Com a tatuagem eu crio memórias eternas e é essa experiência que eu passo a cada cliente. Pois cada tatuagem é uma história."
            </blockquote>
            <cite className="text-muted-foreground">— Pedro Victor CloveR</cite>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="ink-card p-6 text-center hover-glow">
            <h3 className="text-2xl font-bold text-gradient mb-2">20k+</h3>
            <p className="text-muted-foreground">Clientes atendidos em nossas unidades</p>
          </Card>
          <Card className="ink-card p-6 text-center hover-glow">
            <h3 className="text-2xl font-bold text-gradient mb-2">Internacional</h3>
            <p className="text-muted-foreground">Clientes do mundo todo (Inglaterra, Croácia, EUA, Japão, etc)</p>
          </Card>
          <Card className="ink-card p-6 text-center hover-glow">
            <h3 className="text-2xl font-bold text-gradient mb-2">Futebol</h3>
            <p className="text-muted-foreground">Times de futebol do Brasil, Portugal, Argentina e mais</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Historia;