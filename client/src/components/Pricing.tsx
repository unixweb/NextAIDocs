import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, CheckCircle, Star, ArrowRight, MessageCircle } from "lucide-react";

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
    popular: false,
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/20 hover:border-blue-500/40"
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
    popular: false,
    icon: CheckCircle,
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/20 hover:border-green-500/40"
  },
  {
    label: "Premium-Paket",
    title: "Umfassende Automatisierung & strategische Begleitung",
    price: "1987",
    priceLabel: "Projektpreis",
    description: "Hierbei geht es um mehr als nur Technik: Wir entwickeln gemeinsam ein durchgängiges Automatisierungssystem, das zu Ihrer Persönlichkeit und Ihrem Unternehmen passt. Stabil, skalierbar und so konzipiert, dass Sie langfristig profitieren – ohne Experimente, sondern mit bewährter Substanz.",
    features: [],
    buttonText: "Jetzt starten",
    popular: true,
    icon: Star,
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/20 hover:border-purple-500/40"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 lg:items-stretch">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div key={index} className="relative">
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1 rounded-full text-sm shadow-lg whitespace-nowrap">
                      Beliebtestes Paket
                    </div>
                  </div>
                )}
                <Card 
                  className={`overflow-hidden hover-elevate transition-all duration-300 flex flex-col h-full ${
                    pkg.popular 
                      ? 'border-primary shadow-xl ring-2 ring-primary/20' 
                      : `${pkg.borderColor} shadow-lg hover:shadow-xl`
                  }`}
                  data-testid={`card-package-${index}`}
                >
                
                {/* Gradient Background */}
                <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-r ${pkg.color} opacity-10`} />
                
                <CardHeader className="text-center pb-6 relative">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${pkg.color} shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
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
                      <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                        € {pkg.price}.-
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pkg.priceLabel}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <div className="space-y-6 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pkg.description}
                    </p>

                    {pkg.features.length > 0 && (
                      <div className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 text-green-500`} />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-6">
                    <Button 
                      className={`w-full group transition-all duration-300 ${
                        pkg.popular 
                          ? `bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white border-none shadow-lg hover:shadow-xl` 
                          : `bg-gradient-to-r ${pkg.color} text-white border-none shadow-lg hover:shadow-xl hover:scale-105`
                      }`}
                      data-testid={`button-package-${index}`}
                      onClick={() => console.log(`Package ${index} selected`)}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {pkg.buttonText}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50">
            <p className="text-lg text-foreground mb-6">
              Unsicher, welches Paket das richtige für Sie ist?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-none shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              data-testid="button-contact-consultation"
              onClick={() => console.log('Contact consultation clicked')}
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Lassen Sie uns sprechen
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}