import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const packages = [
  {
    label: "Einführungsangebot",
    title: "Effiziente Automatisierung",
    price: "298",
    priceLabel: "Angebotspreis",
    description: "Transformieren Sie Ihr Business mit Systemen, die zu Ihrer Persönlichkeit passen – ohne Lautstärke, aber mit Wirkung",
    features: [
      "Ideal für kleine Teams, die erste Prozesse automatisieren möchten",
      "Schneller Einstieg ohne lange Projektlaufzeit", 
      "Direkt einsatzbereit mit klaren Ergebnissen"
    ],
    buttonText: "Jetzt anfragen",
    popular: false
  },
  {
    label: "Business-Paket",
    title: "Individuelle Automatisierung für Ihren Arbeitsalltag",
    price: "597",
    priceLabel: "Festpreis",
    description: "Mit diesem Paket erhalten Sie eine maßgeschneiderte Lösung, die Ihre Prozesse zuverlässig vereinfacht und Zeit spart. Kein lautes Marketing, sondern greifbare Ergebnisse, die im Hintergrund wirken und Ihr Business spürbar entlasten.",
    features: [
      "Integration Ihrer wichtigsten Tools (z. B. CRM, E-Mail, Projektmanagement)",
      "Einfache Erweiterbarkeit, wenn Ihr Business wächst"
    ],
    buttonText: "Jetzt sichern",
    popular: false
  },
  {
    label: "Premium-Paket",
    title: "Umfassende Automatisierung & strategische Begleitung",
    price: "1987",
    priceLabel: "Projektpreis",
    description: "Hierbei geht es um mehr als nur Technik: Wir entwickeln gemeinsam ein durchgängiges Automatisierungssystem, das zu Ihrer Persönlichkeit und Ihrem Unternehmen passt. Stabil, skalierbar und so konzipiert, dass Sie langfristig profitieren – ohne Experimente, sondern mit bewährter Substanz.",
    features: [],
    buttonText: "Jetzt starten",
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="pakete" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
            Unsere Automatisierungspakete
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
            Wählen Sie das Paket, das zu Ihren Anforderungen passt
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover-elevate ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}
              data-testid={`card-package-${index}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Beliebtestes Paket
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {pkg.label}
                  </p>
                  <CardTitle className="text-xl font-bold mb-4">
                    {pkg.title}
                  </CardTitle>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">€ {pkg.price}.-</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {pkg.priceLabel}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>

                {pkg.features.length > 0 && (
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  data-testid={`button-package-${index}`}
                  onClick={() => console.log(`Package ${index} selected`)}
                >
                  {pkg.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground mb-4">
            Unsicher, welches Paket das richtige für Sie ist?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            data-testid="button-contact-consultation"
            onClick={() => console.log('Contact consultation clicked')}
          >
            Lassen Sie uns sprechen
          </Button>
        </div>
      </div>
    </section>
  );
}