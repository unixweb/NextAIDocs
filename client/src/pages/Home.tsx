import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import NewsletterStickyBar from "@/components/NewsletterStickyBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
      <NewsletterStickyBar />
    </div>
  );
}