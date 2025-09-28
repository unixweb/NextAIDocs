import { Button } from "@/components/ui/button";
import heroImage from "@assets/joachimhummel6_1759076852974.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
                Business für IT-Menschen<br />
                <span className="text-primary">ohne Lautstärke</span>
              </h1>
              <p className="text-xl text-muted-foreground" data-testid="text-hero-subtitle">
                Positionierung, Prozesse & persönliche Freiheit für stille Macher
              </p>
              <p className="text-lg text-foreground" data-testid="text-hero-description">
                IT-Konzepte, die tragen – heute und morgen
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base px-8"
                data-testid="button-get-started"
                onClick={() => {
                  const pricingSection = document.getElementById('pakete');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Jetzt starten
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8"
                data-testid="button-learn-more"
                onClick={() => {
                  const aboutSection = document.getElementById('ueber-mich');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Mehr erfahren
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center md:text-left" data-testid="card-partnership">
                <h3 className="font-semibold text-foreground mb-2">Partnerschaftlich</h3>
                <p className="text-sm text-muted-foreground">Wir bauen gemeinsam Ihre Systeme</p>
              </div>
              <div className="text-center md:text-left" data-testid="card-individual">
                <h3 className="font-semibold text-foreground mb-2">Individuell</h3>
                <p className="text-sm text-muted-foreground">Lösungen, die zu Ihnen passen</p>
              </div>
              <div className="text-center md:text-left" data-testid="card-scalable">
                <h3 className="font-semibold text-foreground mb-2">Nachhaltig skalierbar</h3>
                <p className="text-sm text-muted-foreground">Wächst mit Ihrem Business</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroImage}
                alt="Joachim Hummel - IT-Berater & Coach"
                className="rounded-lg shadow-lg max-w-sm w-full"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}