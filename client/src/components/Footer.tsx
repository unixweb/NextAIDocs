import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-1" data-testid="text-footer-logo">
              Next8AI
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Business für IT-Menschen ohne Lautstärke
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span data-testid="text-footer-copyright">
              © 2024 Next8AI. Alle Rechte vorbehalten.
            </span>
            <div className="flex gap-4">
              <Link 
                href="/datenschutz"
                className="hover:text-foreground transition-colors"
                data-testid="link-privacy"
              >
                Datenschutz
              </Link>
              <Link 
                href="/impressum"
                className="hover:text-foreground transition-colors"
                data-testid="link-imprint"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}