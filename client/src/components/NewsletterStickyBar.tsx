import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterStickyBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent redirect
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Create form data for external service
      const submitData = new FormData();
      submitData.append('email', email);
      if (name) submitData.append('name', name);
      submitData.append('l', 'd764edae-89f9-4276-a71a-0a1bb0473f2a');
      submitData.append('nonce', '');
      
      // Submit to external newsletter service
      const response = await fetch('https://newsletter.unixweb.net/subscription/form', {
        method: 'POST',
        body: submitData,
        mode: 'no-cors' // Allow cross-origin request
      });
      
      // Since it's no-cors, we can't check response status, so assume success
      setIsSubscribed(true);
      toast({
        title: "Newsletter-Anmeldung erfolgreich!",
        description: "Sie erhalten eine E-Mail zur Bestätigung Ihrer Anmeldung.",
      });
      
      // Auto-hide the bar after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Anmeldung fehlgeschlagen",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground shadow-lg z-50 border-t border-primary-border">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {isSubscribed ? (
              <Check className="h-5 w-5 flex-shrink-0 text-green-300" />
            ) : (
              <Mail className="h-5 w-5 flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm">
                {isSubscribed ? "Anmeldung erfolgreich!" : "Next8AI Newsletter"}
              </h3>
              <p className="text-xs text-primary-foreground/80">
                {isSubscribed 
                  ? "Bestätigen Sie Ihre E-Mail-Adresse" 
                  : "KI-Insights direkt in Ihr Postfach"
                }
              </p>
            </div>
          </div>

          {!isSubscribed ? (
            <form 
              onSubmit={handleSubmit}
              className="flex items-center gap-2 flex-1 max-w-md"
              data-testid="form-newsletter-sticky"
            >
              <Input
                type="email"
                name="email"
                required
                placeholder="E-Mail"
                className="bg-background text-foreground border-border text-sm h-8"
                data-testid="input-sticky-email"
                disabled={isSubmitting}
              />
              
              <Input
                type="text"
                name="name"
                placeholder="Name (optional)"
                className="bg-background text-foreground border-border text-sm h-8 hidden md:block"
                data-testid="input-sticky-name"
                disabled={isSubmitting}
              />

              <Button
                type="submit"
                size="sm"
                variant="secondary"
                className="h-8 text-sm whitespace-nowrap"
                data-testid="button-sticky-subscribe"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wird gesendet..." : "Abonnieren"}
              </Button>
            </form>
          ) : (
            <div className="flex-1 max-w-md" /> // Spacer when subscribed
          )}

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