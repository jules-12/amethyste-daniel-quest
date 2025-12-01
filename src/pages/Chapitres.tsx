import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowLeft } from "lucide-react";

const chapitres = [
  { numero: 1, titre: "Daniel 1", description: "Les jeunes gens de Juda à Babylone" },
  { numero: 2, titre: "Daniel 2", description: "Le songe de Nebucadnetsar" },
  { numero: 3, titre: "Daniel 3", description: "La fournaise ardente" },
  { numero: 4, titre: "Daniel 4", description: "L'humiliation de Nebucadnetsar" },
  { numero: 5, titre: "Daniel 5", description: "Le festin de Belschatsar" },
  { numero: 6, titre: "Daniel 6", description: "Daniel dans la fosse aux lions" },
  { numero: 7, titre: "Daniel 7", description: "Vision des quatre bêtes" },
  { numero: 8, titre: "Daniel 8", description: "Vision du bélier et du bouc" },
  { numero: 9, titre: "Daniel 9", description: "La prière de Daniel" },
  { numero: 10, titre: "Daniel 10", description: "Vision au bord du fleuve" },
  { numero: 11, titre: "Daniel 11", description: "Les rois du septentrion et du midi" },
  { numero: 12, titre: "Daniel 12", description: "La fin des temps" },
];

const Chapitres = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Accueil
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gradient">C'est AMETHYSTE qui gagne</h1>
            <div className="w-24" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Chapitres du livre de <span className="text-gradient">Daniel</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Sélectionnez un chapitre pour commencer le quiz
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {chapitres.map((chapitre, i) => (
              <Link 
                key={chapitre.numero} 
                to={`/quiz/${chapitre.numero}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <Card className="h-full shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 hover:border-primary/50 cursor-pointer group">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                        {chapitre.numero}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{chapitre.titre}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {chapitre.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chapitres;
