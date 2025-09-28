import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  TrendingUp, 
  MessageSquare, 
  Code, 
  Heart, 
  UserCheck 
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Effiziente Automatisierungslösungen",
    description: "Optimieren Sie Ihre Geschäftsprozesse",
    features: [
      "Workflow-Automatisierung",
      "Prozessoptimierung",
      "Tool-Integration",
      "Effizienzsteigerung"
    ]
  },
  {
    icon: TrendingUp,
    title: "Individuelle Entwicklungspläne",
    description: "Gestalten Sie Ihre Karriere aktiv",
    features: [
      "Karriereplanung",
      "Skill-Entwicklung",
      "Zielsetzung",
      "Persönliche Roadmap"
    ]
  },
  {
    icon: MessageSquare,
    title: "Umfassende IT-Beratung",
    description: "Expertise in der IT-Beratung",
    features: [
      "Strategische Beratung",
      "Technologie-Auswahl",
      "Architektur-Design",
      "Best Practices"
    ]
  },
  {
    icon: Code,
    title: "Entwicklung individueller Systeme",
    description: "Passgenaue Systeme für Unternehmen",
    features: [
      "Custom Software",
      "System-Integration",
      "Skalierbare Lösungen",
      "Wartung & Support"
    ]
  },
  {
    icon: Heart,
    title: "Strategien für innere Klarheit",
    description: "Finden Sie Ihre innere Balance",
    features: [
      "Selbstreflexion",
      "Work-Life-Balance",
      "Stressmanagement",
      "Persönliche Entwicklung"
    ]
  },
  {
    icon: UserCheck,
    title: "Individuelles Coaching",
    description: "Persönliche Unterstützung durch Coaching",
    features: [
      "1:1 Coaching Sessions",
      "Persönliche Betreuung",
      "Maßgeschneiderte Ansätze",
      "Langfristige Begleitung"
    ]
  }
];

export default function Services() {
  return (
    <section id="leistungen" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Leistungen, auf die Sie bauen können
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Maßgeschneiderte IT-Lösungen für introvertierte Fachkräfte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-foreground mb-4">
            Bereit für den nächsten Schritt?
          </p>
          <a 
            href="#pakete" 
            className="text-primary hover:underline font-medium"
            data-testid="link-discover-packages"
          >
            Entdecken Sie unsere Automatisierungspakete
          </a>
        </div>
      </div>
    </section>
  );
}