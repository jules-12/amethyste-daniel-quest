import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown, Users, BookOpen, Church, Trophy, ArrowLeft } from "lucide-react";
// Importez votre logo si vous voulez l'utiliser dans le header
// import logoAmethyste from "@/assets/logo-amethyste.png";

const Presentation = () => {
  const equipes = [
    {
      id: 1,
      chapitres: "Daniel 1 à Daniel 4",
      membres: [
        { nom: "Gaston SAÏ", role: "Président" },
        { nom: "Cédric ADOÏATON", role: "Membre" },
        { nom: "Fulberte DAGBE", role: "Membre" },
        { nom: "À déterminer", role: "En attente" }
      ],
      couleur: "from-[#8dc641] to-[#03aeef]", // Vert vers Bleu
      icone: Crown
    },
    {
      id: 2,
      chapitres: "Daniel 5 à Daniel 8",
      membres: [
        { nom: "Nestor SAÏ", role: "Responsable" },
        { nom: "Crespin MONTCHO", role: "Membre" },
        { nom: "À déterminer", role: "En attente" }
      ],
      couleur: "from-[#03aeef] to-[#8dc641]", // Bleu vers Vert
      icone: Users
    },
    {
      id: 3,
      chapitres: "Daniel 9 à Daniel 12",
      membres: [
        { nom: "Mémoire Gloire", role: "Trésorière" },
        { nom: "Orline SALANON", role: "Membre" },
        { nom: "Urielle SALANON", role: "Membre" }
      ],
      couleur: "from-[#8dc641] via-[#5daa52] to-[#03aeef]", // Dégradé plus riche
      icone: BookOpen
    }
  ];

  const responsables = [
    {
      nom: "Gaston SAÏ",
      role: "Président du Groupe",
      description: "Coordinateur général et responsable de l'équipe Daniel 1-4"
    },
    {
      nom: "Mémoire Gloire",
      role: "Trésorière",
      description: "Gestion des ressources et responsable de l'équipe Daniel 9-12"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f0f9ff] to-[#f7ffe0]">
      
      {/* Header harmonisé */}
      <header className="border-b border-[#03aeef]/30 backdrop-blur-lg bg-white/95 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo avec les couleurs officielles */}
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#8dc641] to-[#03aeef] flex items-center justify-center shadow-lg">
                <Church className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">
                  AMETHYSTE
                </h1>
                <p className="text-xs text-gray-600">Sous-groupe de la JAD</p>
              </div>
            </div>
            
            <Link to="/">
              <Button variant="outline" className="border-[#8dc641]/40 text-[#03aeef] hover:bg-[#8dc641]/10 hover:border-[#8dc641]/60">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Retour à l'accueil</span>
                <span className="sm:hidden">Accueil</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section harmonisée */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#8dc641]/10 to-[#03aeef]/10 border border-[#8dc641]/20 rounded-full px-4 py-2">
              <Crown className="h-4 w-4 text-[#8dc641]" />
              <span className="text-sm font-medium text-[#03aeef]">Présentation Officielle</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">
                Groupe AMETHYSTE
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Sous-groupe de la Jeunesse Adventiste, dédié à l'étude approfondie 
              du livre de Daniel à travers des jeux bibliques interactifs.
            </p>
          </div>

          {/* Message d'introduction */}
          <div className="bg-gradient-to-r from-[#f7ffe0] to-[#f0f9ff] rounded-2xl p-6 md:p-8 border border-[#8dc641]/20 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 rounded-full bg-[#8dc641]/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 text-[#8dc641]" />
              </div>
              <div className="text-left">
                <p className="text-lg font-medium text-gray-800 italic leading-relaxed">
                  "Bonjour à tous et à toutes dans le Seigneur Jésus-Christ."
                </p>
                <p className="text-gray-600 mt-3">
                  Découvrez notre répartition pour les jeux bibliques sur le livre de Daniel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipes de travail harmonisées */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Répartition des <span className="bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">Équipes</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Chaque équipe est responsable de l'étude et de la préparation des questions 
            pour les chapitres qui lui sont attribués.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {equipes.map((equipe, index) => (
            <div 
              key={equipe.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* En-tête de l'équipe avec gradient */}
              <div className={`bg-gradient-to-r ${equipe.couleur} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold">{equipe.chapitres}</h4>
                    <p className="text-white/90 text-sm mt-1">Équipe {index + 1}</p>
                  </div>
                  <equipe.icone className="h-7 w-7 text-white/90" />
                </div>
              </div>

              {/* Liste des membres */}
              <div className="p-5 space-y-3">
                {equipe.membres.map((membre, membreIndex) => (
                  <div 
                    key={membreIndex}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      membre.role === "En attente" 
                        ? "bg-[#ffedd5] border border-[#fed7aa]" 
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex-1">
                      <p className={`font-medium ${
                        membre.role === "En attente" 
                          ? "text-[#ea580c]" 
                          : "text-gray-800"
                      }`}>
                        {membre.nom}
                      </p>
                      <p className={`text-sm ${
                        membre.role === "En attente" 
                          ? "text-[#ea580c]/80" 
                          : "text-gray-600"
                      }`}>
                        {membre.role}
                      </p>
                    </div>
                    
                    {membre.role.includes("Président") || membre.role.includes("Trésorière") || membre.role.includes("Responsable") ? (
                      <Crown className="h-4 w-4 text-[#8dc641] flex-shrink-0" />
                    ) : membre.role !== "En attente" ? (
                      <Users className="h-4 w-4 text-[#03aeef] flex-shrink-0" />
                    ) : (
                      <div className="h-4 w-4 rounded-full bg-[#ea580c]/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#ea580c]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Pied de carte */}
              <div className="border-t border-gray-100 p-3 bg-gray-50/50">
                <div className="flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#8dc641] to-[#03aeef] mr-2" />
                  <span className="text-xs text-gray-500">
                    {equipe.membres.length} membre{equipe.membres.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Responsables harmonisés */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">
                Responsables
              </span>{" "}
              du Groupe
            </h3>
            <p className="text-gray-600 text-lg">
              Les coordinateurs qui assurent le bon fonctionnement du groupe AMETHYSTE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsables.map((responsable, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#8dc641]/30 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#8dc641] to-[#03aeef] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Crown className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800">{responsable.nom}</h4>
                    <div className="inline-flex items-center mt-1 mb-2">
                      <div className="h-1.5 w-6 bg-gradient-to-r from-[#8dc641] to-[#03aeef] rounded-full mr-2" />
                      <p className="text-[#03aeef] font-medium">{responsable.role}</p>
                    </div>
                    <p className="text-gray-600">{responsable.description}</p>
                    
                    {/* Badge selon le rôle */}
                    <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#8dc641]/10 to-[#03aeef]/10 border border-[#8dc641]/20">
                      <span className="text-xs font-medium text-[#03aeef]">
                        {responsable.role.includes("Président") ? "Coordinateur Principal" : "Gestion des Ressources"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations supplémentaires harmonisées */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#f7ffe0] via-white to-[#f0f9ff] rounded-2xl p-6 md:p-8 border border-[#8dc641]/30 shadow-lg">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-[#8dc641] to-[#03aeef] shadow-lg">
                <Trophy className="h-7 w-7 text-white" />
              </div>
              
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Prochain <span className="bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent">Rendez-vous</span>
                </h4>
                <p className="text-gray-700 text-lg mt-2 max-w-2xl mx-auto">
                  "Pour ceux qui restent, le soir à la rencontre nous allons avoir une certaine 
                  certitude sur l'engagement de chacun et vous insérez aussi."
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#03aeef]/20 shadow-sm inline-block">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-[#8dc641]/20 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-[#8dc641] flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#03aeef]">
                      Rendez-vous ce soir après le culte du soir.
                    </p>
                    <p className="text-sm text-gray-600 mt-1">✅ Confirmation requise</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600">
                Merci beaucoup pour la compréhension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer harmonisé */}
      <footer className="border-t border-[#8dc641]/20 bg-gradient-to-r from-white to-gray-50/50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-5 w-5 rounded-lg bg-gradient-to-r from-[#8dc641] to-[#03aeef]" />
              <p className="text-gray-700 font-medium">
                Groupe AMETHYSTE • Sous-groupe de la JAD
              </p>
            </div>
            
            <p className="text-gray-600">
              <span className="bg-gradient-to-r from-[#8dc641] to-[#03aeef] bg-clip-text text-transparent font-semibold">
                Livre de Daniel
              </span>{" "}
              • Plateforme Interactive
            </p>
            
            <p className="text-gray-500 text-sm mt-4 italic">
              "Que la grâce du Seigneur Jésus-Christ soit avec vous tous."
            </p>
            
            {/* Lien vers l'accueil */}
            <div className="pt-6 border-t border-gray-100">
              <Link to="/">
                <Button variant="ghost" className="text-[#03aeef] hover:text-[#8dc641] hover:bg-[#8dc641]/10">
                  ← Retourner à la plateforme
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;