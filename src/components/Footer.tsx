import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="contato" className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="font-display text-3xl font-bold text-gradient">
                CloveR
              </div>
              <div className="text-sm text-muted-foreground">Studio</div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Arte que transcende a pele. Criando memórias eternas através da tatuagem.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#historia" className="text-muted-foreground hover:text-primary transition-colors">
                  História
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#estudios" className="text-muted-foreground hover:text-primary transition-colors">
                  Estúdios
                </a>
              </li>
            </ul>
          </div>

          {/* Brasil Studio */}
          <div>
            <h3 className="font-bold mb-4">Estúdio Brasil</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Rua das Artes, 123<br />
                  Vila Madalena - São Paulo
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">brasil@cloverstudio.com</span>
              </li>
            </ul>
          </div>

          {/* USA Studio */}
          <div>
            <h3 className="font-bold mb-4">Estúdio EUA</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Times Square<br />
                  Manhattan - New York
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (212) 555-0123</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">usa@cloverstudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 CloveR Studio. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Siga @clovertattooart</span>
            </div>
          </div>
        </div>

        {/* Final Quote */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <blockquote className="text-lg font-light text-muted-foreground font-display italic">
            "Não desiste, vai atrás do teu sonho! É infinito o que tu podes fazer, só não podemos desistir."
          </blockquote>
          <cite className="text-sm text-muted-foreground mt-2 block">— Pedro Victor CloveR</cite>
        </div>
      </div>
    </footer>
  );
};

export default Footer;