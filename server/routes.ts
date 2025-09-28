import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form route using Brevo API (no database)
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validation = contactFormSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({
          error: "Validation failed",
          details: validation.error.errors
        });
      }

      const { firstName, lastName, email, phone, message, consent } = validation.data;

      // Check consent
      if (!consent) {
        return res.status(400).json({
          error: "Zustimmung zur Datenverarbeitung ist erforderlich"
        });
      }

      // Send email via Brevo API
      const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY!
        },
        body: JSON.stringify({
          sender: {
            name: "Next8AI Kontaktformular",
            email: "noreply@next8ai.de"
          },
          to: [
            {
              email: "joachim@next8ai.de", // Change to your actual email
              name: "Joachim Hummel"
            }
          ],
          replyTo: {
            email: email,
            name: `${firstName} ${lastName}`
          },
          subject: `Neue Kontaktanfrage von ${firstName} ${lastName}`,
          htmlContent: `
            <h2>Neue Kontaktanfrage</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            <p><strong>Nachricht:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Gesendet über das Kontaktformular von next8ai.de</small></p>
          `,
          textContent: `
            Neue Kontaktanfrage
            
            Name: ${firstName} ${lastName}
            E-Mail: ${email}
            ${phone ? `Telefon: ${phone}` : ''}
            
            Nachricht:
            ${message}
            
            ---
            Gesendet über das Kontaktformular von next8ai.de
          `
        })
      });

      if (!brevoResponse.ok) {
        const errorData = await brevoResponse.json();
        console.error('Brevo API Error:', errorData);
        throw new Error(`Brevo API Error: ${brevoResponse.status}`);
      }

      // Send confirmation email to sender
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY!
        },
        body: JSON.stringify({
          sender: {
            name: "Joachim Hummel - Next8AI",
            email: "joachim@next8ai.de"
          },
          to: [
            {
              email: email,
              name: `${firstName} ${lastName}`
            }
          ],
          subject: "Vielen Dank für Ihre Nachricht - Next8AI",
          htmlContent: `
            <h2>Vielen Dank für Ihre Nachricht!</h2>
            <p>Hallo ${firstName},</p>
            <p>vielen Dank für Ihre Nachricht über unser Kontaktformular. Ich habe Ihre Anfrage erhalten und werde mich zeitnah bei Ihnen melden.</p>
            <p>Ihre Nachricht:</p>
            <blockquote style="border-left: 4px solid #007cba; padding-left: 16px; margin: 16px 0; color: #666;">
              ${message.replace(/\n/g, '<br>')}
            </blockquote>
            <p>Mit freundlichen Grüßen,<br>
            Joachim Hummel<br>
            Next8AI - IT-Beratung & Coaching</p>
          `,
          textContent: `
            Vielen Dank für Ihre Nachricht!
            
            Hallo ${firstName},
            
            vielen Dank für Ihre Nachricht über unser Kontaktformular. Ich habe Ihre Anfrage erhalten und werde mich zeitnah bei Ihnen melden.
            
            Ihre Nachricht:
            ${message}
            
            Mit freundlichen Grüßen,
            Joachim Hummel
            Next8AI - IT-Beratung & Coaching
          `
        })
      });

      res.json({
        success: true,
        message: "Ihre Nachricht wurde erfolgreich gesendet!"
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        error: "Es ist ein Fehler beim Senden der Nachricht aufgetreten. Bitte versuchen Sie es später erneut."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
