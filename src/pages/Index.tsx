import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Trophy, Brain } from "lucide-react";
import heroImage from "@/assets/hero-amethyst.jpg";

const Index = () => {
  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gradient">AMETHYSTE</h1>
            <Link to="/chapitres">
              <Button variant="default" className="shadow-primary">
                Commencer
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16 md:py-24">
        {/* Hero Image Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl mx-4">
          <img 
            src={heroImage} 
            alt="Améthyste sur livre biblique" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Jeux Bibliques
              <span className="block text-gradient mt-2">Livre de Daniel</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme interactive pour tester et approfondir vos connaissances 
              sur les 12 chapitres du livre de Daniel
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/chapitres" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto shadow-primary text-lg px-8">
                <BookOpen className="mr-2 h-5 w-5" />
                Explorer les Chapitres
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: BookOpen,
              title: "12 Chapitres",
              description: "Questions complètes couvrant l'intégralité du livre de Daniel"
            },
            {
              icon: Brain,
              title: "QCM Interactifs",
              description: "Testez vos connaissances avec des questions à choix multiples"
            },
            {
              icon: Trophy,
              title: "Suivi des Scores",
              description: "Suivez votre progression et améliorez votre niveau biblique"
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className="bg-card shadow-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-primary animate-slide-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
