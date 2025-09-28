import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="button-back-home">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground" data-testid="text-imprint-title">
            Impressum
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-slate dark:prose-invert max-w-none" data-testid="content-imprint">
          
          <h2>Angaben gemäß § 5 TMG</h2>
          
          <div className="bg-muted/30 rounded-lg p-6 my-6">
            <h3 className="mt-0 mb-4">Verantwortlich für den Inhalt</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Joachim Hummel</p>
                  <p className="text-sm text-muted-foreground">
                    Lisbergstrasse 12<br />
                    81249 München<br />
                    Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">E-Mail</p>
                <p className="text-sm text-muted-foreground">kontakt@next8ai.de</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Telefon</p>
                <p className="text-sm text-muted-foreground">+49 (0) 89 123 456 789</p>
              </div>
            </div>
          </div>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            <strong>Berufsbezeichnung:</strong> IT-Berater & Coach<br />
            <strong>Verliehen in:</strong> Deutschland
          </p>

          <h2>Redaktionell verantwortlich</h2>
          <p>
            Joachim Hummel<br />
            Lisbergstrasse 12<br />
            81249 München
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary">
              https://ec.europa.eu/consumers/odr/
            </a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}