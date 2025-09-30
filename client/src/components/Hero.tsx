import { Button } from "@/components/ui/button";
import { Handshake, Target, Sprout } from "lucide-react";
import heroImage from "@assets/joachimhummel6_1759076852974.png";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a1929] to-[#1a2942] py-16 lg:py-24 overflow-hidden">
      {/* Diagonales Design-Element */}
      <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-br from-gray-200 to-gray-300 transform origin-top-right skew-x-[-15deg] translate-x-[30%] z-0" />
      
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="space-y-6 lg:col-span-3">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight" data-testid="text-hero-title">
                Business für IT-Menschen<br />
                ohne <span className="text-blue-400">Lautstärke</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300" data-testid="text-hero-subtitle">
                Klarheit, Struktur und Freiheit – für IT-Profis,<br />
                die nicht schreien müssen, um gehört zu werden
              </p>
              <p className="text-base sm:text-lg text-gray-400" data-testid="text-hero-description">
                Weil nachhaltiger IT-Erfolg nicht von Marketing-Lautstärke<br />
                abhängt, sondern von klugen Systemen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                size="lg" 
                className="text-base px-8 bg-blue-600 hover:bg-blue-700 text-white border-0"
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
                className="text-base px-8 text-white border-white/30 hover:bg-white/10"
                data-testid="button-learn-more"
                onClick={() => {
                  const aboutSection = document.getElementById('ueber-mich');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                So funktioniert's
              </Button>
            </div>

            <p className="text-sm text-gray-400" data-testid="text-hero-footer">
              Kostenlos & unverbindlich testen
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-start gap-3" data-testid="card-partnership">
                <Handshake className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Partnerschaftlich</h3>
                  <p className="text-sm text-gray-400">Wir bauen gemeinsam Ihre Systeme</p>
                </div>
              </div>
              <div className="flex items-start gap-3" data-testid="card-individual">
                <Target className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Individuell</h3>
                  <p className="text-sm text-gray-400">Lösungen, die zu Ihnen passen</p>
                </div>
              </div>
              <div className="flex items-start gap-3" data-testid="card-scalable">
                <Sprout className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Nachhaltig skalierbar</h3>
                  <p className="text-sm text-gray-400">Wächst mit Ihrem Business</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:col-span-2 relative z-20">
            <div className="relative">
              <img
                src={heroImage}
                alt="Joachim Hummel - IT-Berater & Coach"
                className="rounded-lg shadow-2xl max-w-sm w-full"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
