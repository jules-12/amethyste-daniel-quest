import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Trophy, Brain, Sparkles, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero-amethyst.jpg";
// Importez votre logo ici
import logoAmethyste from "@/assets/logo-amethyste.png";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "12 Chapitres Complets",
      description: "Parcourez l'intégralité du livre de Daniel avec des questions approfondies sur chaque chapitre",
      color: "from-[#03aeef] to-[#8dc641]" // Couleurs du logo inversées pour variété
    },
    {
      icon: Brain,
      title: "QCM Intelligents",
      description: "Testez votre compréhension avec des questions interactives et progressives",
      color: "from-[#8dc641] to-[#03aeef]" // Couleurs du logo
    },
    {
      icon: Trophy,
      title: "Progression Détaillée",
      description: "Suivez vos scores, améliorez vos connaissances et devenez expert du livre de Daniel",
      color: "from-[#03aeef] to-[#8dc641]" // Alternance des couleurs
    },
    {
      icon: Users,
      title: "Équipe AMETHYSTE",
      description: "Développé par le groupe AMETHYSTE de la JAD pour votre croissance spirituelle",
      color: "from-[#8dc641] to-[#03aeef]"
    },
    {
      icon: Sparkles,
      title: "Expérience Immersive",
      description: "Interface moderne et intuitive pour une étude biblique enrichissante",
      color: "from-[#03aeef] to-[#8dc641]"
    },
    {
      icon: Star,
      title: "Apprentissage Progressif",
      description: "Commencez par les bases et progressez vers les prophéties complexes",
      color: "from-[#8dc641] to-[#03aeef]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f0f9ff] to-[#f7ffe0]">

      {/* HEADER avec Logo */}
      <header className="border-b border-[#03aeef]/20 backdrop-blur-lg bg-white/95 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap gap-3">

            {/* LOGO AMETHYSTE - Version avec image */}
            <div className="flex items-center space-x-3">
              {/* Option 1 : Votre logo d'équipe */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="h-12 w-auto max-w-[180px]">
                  <img 
                    src={logoAmethyste} 
                    alt="Logo AMETHYSTE JAD" 
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      // Fallback si l'image n'existe pas
                      console.log("Logo non trouvé, utilisation du fallback");
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Fallback textuel si l'image n'existe pas */}
                <div className="fallback-logo" style={{ display: 'none' }}>
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#8dc641] to-[#03aeef] flex items-center justify-center shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">
                      AMETHYSTE
                    </h1>
                    <p className="text-xs text-gray-600">JAD • Livre de Daniel</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* BOUTONS */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link to="/presentation">
                <Button variant="outline" className="text-sm sm:text-base border-[#8dc641]/40 text-[#03aeef] hover:bg-[#8dc641]/10 hover:border-[#8dc641]/60">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Notre Équipe</span>
                  <span className="sm:hidden">Équipe</span>
                </Button>
              </Link>

              <Link to="/chapitres">
                <Button className="text-sm sm:text-base bg-gradient-to-r from-[#8dc641] to-[#03aeef] hover:from-[#7db536] hover:to-[#0298d8] text-white shadow-lg hover:shadow-xl transition-all">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Commencer
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative container mx-auto px-4 py-16 sm:py-20 md:py-28">
        
        {/* Background avec couleurs du logo */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#8dc641]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#03aeef]/10 rounded-full blur-3xl" />
          
          <img 
            src={heroImage} 
            alt="Améthyste" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
        </div>

        <div className="text-center space-y-8 max-w-4xl mx-auto">

          {/* Titre principal avec couleurs du logo */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="text-slate-800">
              Jeux
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">
              Bibliques édition 2026
            </span>
          </h1>

          {/* Sous-titre */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700">
              Livre de <span className="bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">Daniel</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Une plateforme interactive développée par{" "}
              <span className="font-semibold bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">
                Mr SOGADJI Jules
              </span>
              {" "}pour explorer les mystères du livre de Daniel.
            </p>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/chapitres" className="w-full sm:w-auto group">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-[#8dc641] to-[#03aeef] hover:from-[#7db536] hover:to-[#0298d8] text-white shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <BookOpen className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Démarrer l'Aventure
              </Button>
            </Link>

            <Link to="/presentation" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-2 border-[#8dc641]/30 text-[#03aeef] hover:bg-[#8dc641]/10 hover:border-[#8dc641]/50">
                <Users className="mr-3 h-5 w-5" />
                Découvrir l'Équipe
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
            {[
              { number: "12", label: "Chapitres", desc: "Complets" },
              { number: "50+", label: "Questions", desc: "Interactives" },
              { number: "100%", label: "Gratuit", desc: "Pour tous" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/50 border border-[#03aeef]/10">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="font-semibold text-slate-700">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Pourquoi choisir{" "}
            <span className="bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">
              AMETHYSTE
            </span>
            ?
          </h3>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Une expérience unique pour maîtriser le livre de Daniel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="group relative bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#8dc641]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-14 w-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-md`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
              
              {/* Effet de bordure au survol */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#03aeef]/20 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-gradient-to-r from-[#8dc641] to-[#03aeef] py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à explorer les prophéties de Daniel ?
          </h3>
          <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
            Rejoignez-nous dans cette aventure spirituelle et approfondissez votre foi
          </p>

          <Link to="/chapitres">
            <Button size="lg" className="bg-white text-[#03aeef] hover:bg-slate-100 text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <Sparkles className="mr-3 h-5 w-5" />
              Commencer Maintenant
            </Button>
          </Link>
          
          {/* Logo miniature en bas */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="h-6 w-6 rounded bg-gradient-to-r from-white to-white/80" />
              <span className="text-white/90 text-sm font-medium">
                AMETHYSTE • JAD • Livre de Daniel
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// Ajoutez ce CSS global dans votre index.css
// OU ajoutez ces classes dans votre fichier CSS existant
const globalStyles = `
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
  
  .fallback-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  @media (max-width: 640px) {
    .fallback-logo h1 {
      font-size: 1.25rem;
    }
  }
`;

// Note: Les styles ci-dessus doivent être ajoutés dans votre fichier index.css

export default Index;