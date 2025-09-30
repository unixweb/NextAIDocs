import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary" data-testid="text-logo">
              NEXT8AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#leistungen" 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-services"
            >
              Leistungen
            </a>
            <a 
              href="#pakete" 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-packages"
            >
              Pakete
            </a>
            <a 
              href="#ueber-mich" 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-about"
            >
              Über mich
            </a>
            <Button 
              variant="default" 
              size="sm"
              data-testid="button-contact"
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Kontakt
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#leistungen"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-services-mobile"
              >
                Leistungen
              </a>
              <a
                href="#pakete"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-packages-mobile"
              >
                Pakete
              </a>
              <a
                href="#ueber-mich"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-about-mobile"
              >
                Über mich
              </a>
              <Button 
                variant="default" 
                size="sm" 
                className="w-full mt-2"
                data-testid="button-contact-mobile"
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
              >
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}