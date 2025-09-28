import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="ueber-mich" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            Ihr Partner für Klarheit in der IT-Welt
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <blockquote className="text-3xl font-medium text-primary italic" data-testid="text-quote">
              "Ich helfe, Klarheit zu schaffen, wo Verwirrung herrscht."
            </blockquote>
            
            <p className="text-xl text-foreground" data-testid="text-mission">
              Ich setze Technologie gezielt ein, um durchdachte IT-Lösungen zu schaffen – verlässlich, effizient und mit Blick fürs Wesentliche.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="text-description">
              Joachim Hummel bietet maßgeschneiderte IT-Lösungen für introvertierte Fachkräfte an. Mit jahrelanger Erfahrung in der IT-Beratung verstehe ich die besonderen Herausforderungen stiller Macher und entwickle Lösungen, die zu Ihrer Arbeitsweise passen.
            </p>

            <div className="text-center pt-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-name">
                Joachim Hummel
              </h3>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-title">
                IT-Berater & Coach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card data-testid="card-address">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                      <p className="text-sm text-muted-foreground">
                        Lisbergstrasse 12<br />
                        81249 München
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-hours">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Geschäftszeiten</h3>
                      <p className="text-sm text-muted-foreground">
                        Montag-Freitag: 9:00 – 17:00 Uhr<br />
                        Samstag: 10:00 – 11:00 Uhr
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}