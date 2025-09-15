import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroStudio from '@/assets/hero-studio.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStudio}
          alt="CloveR Studio - Ambiente profissional de tatuagem"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto mt-6 md:mt-0 px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Tagline */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium text-muted-foreground">
              + de 30 mil clientes atendidos
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-text mb-6 animate-slide-up">
            Arte que
            <br />
            <span className="font-display italic">transcende</span>
            <br />
            a pele
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Fechamentos incríveis em 3 horas. Criando memórias eternas através da arte da tatuagem.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              size="lg" 
              className="elegant-card hover-glow text-lg px-8 py-4 group text-white"
            >
              Agendar Sessão
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 bg-transparent border-foreground/20 hover:bg-foreground/10 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Ver Portfólio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">20k+</div>
              <div className="text-sm text-muted-foreground">Clientes atendidos</div>
            </div>
            {/* <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2</div>
              <div className="text-sm text-muted-foreground">Estúdios internacionais</div>
            </div> */}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">3h</div>
              <div className="text-sm text-muted-foreground">Fechamentos incríveis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;