import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Mail } from "lucide-react";

export default function NewsletterStickyBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground shadow-lg z-50 border-t border-primary-border">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm">Next8AI Newsletter</h3>
              <p className="text-xs text-primary-foreground/80">
                KI-Insights direkt in Ihr Postfach
              </p>
            </div>
          </div>

          <form 
            method="post" 
            action="https://newsletter.unixweb.net/subscription/form"
            className="flex items-center gap-2 flex-1 max-w-md"
            data-testid="form-newsletter-sticky"
          >
            <input type="hidden" name="nonce" />
            
            <Input
              type="email"
              name="email"
              required
              placeholder="E-Mail"
              className="bg-background text-foreground border-border text-sm h-8"
              data-testid="input-sticky-email"
            />
            
            <Input
              type="text"
              name="name"
              placeholder="Name (optional)"
              className="bg-background text-foreground border-border text-sm h-8 hidden md:block"
              data-testid="input-sticky-name"
            />

            {/* Hidden checkbox for newsletter list - always checked */}
            <input 
              type="checkbox" 
              name="l" 
              value="d764edae-89f9-4276-a71a-0a1bb0473f2a" 
              checked 
              style={{ display: 'none' }}
              readOnly
            />

            <Button
              type="submit"
              size="sm"
              variant="secondary"
              className="h-8 text-sm whitespace-nowrap"
              data-testid="button-sticky-subscribe"
            >
              Abonnieren
            </Button>
          </form>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setIsVisible(false)}
            data-testid="button-close-sticky"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}