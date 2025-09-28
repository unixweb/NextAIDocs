import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // TODO: remove mock functionality - replace with actual newsletter signup
    setTimeout(() => {
      console.log('Newsletter signup:', email);
      toast({
        title: "Erfolgreich angemeldet!",
        description: "Sie erhalten bald unsere IT-Insights in Ihr Postfach.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 lg:py-24 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center">
          <CardHeader className="pb-6">
            <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-lg w-fit">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl lg:text-3xl font-bold" data-testid="text-newsletter-title">
              IT-Insights direkt in Ihr Postfach
            </CardTitle>
            <p className="text-muted-foreground" data-testid="text-newsletter-subtitle">
              Kostenlos & jederzeit abmeldbar
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  data-testid="button-newsletter-subscribe"
                >
                  {isLoading ? "Wird angemeldet..." : "Abonnieren"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}