import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Datenschutz() {
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
          <h1 className="text-3xl font-bold text-foreground" data-testid="text-privacy-title">
            Datenschutzerklärung
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6" data-testid="content-privacy">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Allgemeine Hinweise</h3>
              <p className="text-foreground leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Datenerfassung auf dieser Website</h3>
              <h4 className="text-lg font-medium text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p className="text-foreground leading-relaxed">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <h4 className="text-lg font-medium text-foreground">Wie erfassen wir Ihre Daten?</h4>
              <p className="text-foreground leading-relaxed">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
                Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-foreground leading-relaxed">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
                Uhrzeit des Seitenaufrufs).
              </p>

              <h4 className="text-lg font-medium text-foreground">Wofür nutzen wir Ihre Daten?</h4>
              <p className="text-foreground leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Hosting</h2>
            <p className="text-foreground leading-relaxed">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Externes Hosting</h3>
              <p className="text-foreground leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
                und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Datenschutz</h3>
              <p className="text-foreground leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie 
                dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-foreground">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-foreground leading-relaxed">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-muted/30 rounded-lg p-4 my-4">
                <p className="text-foreground font-medium">
                  Joachim Hummel<br />
                  Lisbergstrasse 12<br />
                  81249 München<br />
                  Deutschland
                </p>
              </div>
              <p className="text-foreground leading-relaxed">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) 
                entscheidet.
              </p>

              <h3 className="text-xl font-semibold text-foreground">Speicherdauer</h3>
              <p className="text-foreground leading-relaxed">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Kontaktformular</h3>
              <p className="text-foreground leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert.
              </p>

              <h3 className="text-xl font-semibold text-foreground">Newsletter</h3>
              <p className="text-foreground leading-relaxed">
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine 
                E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der 
                angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Ihre Rechte</h2>
            <p className="text-foreground leading-relaxed">Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
              <li>Recht auf Einschränkung der Datenverarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
              <li>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Kontakt</h2>
            <p className="text-foreground leading-relaxed">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden. Die Kontaktdaten finden Sie 
              im Impressum dieser Website.
            </p>
          </section>

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