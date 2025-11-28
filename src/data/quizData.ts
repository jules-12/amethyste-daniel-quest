export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface QuizData {
  [key: number]: Question[];
}

// Questions extraites du PDF pour Daniel Chapitre 1 et 2
export const quizData: QuizData = {
  1: [
    {
      question: "Qui était le roi de Babylone à la troisième année du roi Jojakim, roi de Juda ?",
      options: [
        "Roi Nebucadnetsar",
        "Roi Darius",
        "Roi Cyrus",
        "Roi Belschatsar"
      ],
      correctAnswer: "Roi Nebucadnetsar",
      explanation: "Daniel 1:1"
    },
    {
      question: "Selon Daniel, au temps de quel roi de Juda, Nebucadnetsar marcha-t-il contre Jérusalem ?",
      options: [
        "Roi Josias",
        "Roi Jojakim",
        "Roi Sédécias",
        "Roi Ézéchias"
      ],
      correctAnswer: "Roi Jojakim",
      explanation: "Daniel 1:1"
    },
    {
      question: "Qui livra Jojakim entre les mains de Nebucadnetsar ?",
      options: [
        "Le prophète Jérémie",
        "Le Seigneur",
        "Les princes de Juda",
        "Le roi de Babylone lui-même"
      ],
      correctAnswer: "Le Seigneur",
      explanation: "Daniel 1:2"
    },
    {
      question: "Qui était le chef des eunuques du roi ?",
      options: [
        "Aschpenaz",
        "Arjoc",
        "Daniel",
        "Hanania"
      ],
      correctAnswer: "Aschpenaz",
      explanation: "Daniel 1:3"
    },
    {
      question: "Qu'enseignerait-on aux jeunes garçons sans défauts amenés de familles nobles d'Israël ?",
      options: [
        "La loi de Moïse",
        "Les lettres et la langue des Chaldéens",
        "L'art de la guerre",
        "La médecine babylonienne"
      ],
      correctAnswer: "Les lettres et la langue des Chaldéens",
      explanation: "Daniel 1:4"
    },
    {
      question: "Pour combien de temps devra-t-on élever les jeunes gens amenés de familles nobles d'Israël ?",
      options: [
        "Un an",
        "Deux années",
        "Trois années",
        "Cinq années"
      ],
      correctAnswer: "Trois années",
      explanation: "Daniel 1:5"
    },
    {
      question: "Quels étaient les noms Hébreux des quatre jeunes gens mentionnés parmi ceux d'Israël ?",
      options: [
        "Daniel, Hanania, Mischaël et Azaria",
        "Beltschatsar, Schadrac, Méschac et Abed-Nego",
        "Moïse, Aaron, Josué et Caleb",
        "Pierre, Jacques, Jean et André"
      ],
      correctAnswer: "Daniel, Hanania, Mischaël et Azaria",
      explanation: "Daniel 1:6"
    },
    {
      question: "Quel nom babylonien fut donné à Daniel ?",
      options: [
        "Schadrac",
        "Méschac",
        "Abed-Nego",
        "Beltschatsar"
      ],
      correctAnswer: "Beltschatsar",
      explanation: "Daniel 1:7"
    },
    {
      question: "Que résolut Daniel ?",
      options: [
        "De retourner à Jérusalem",
        "De ne pas se souiller par les mets du roi et par le vin dont le roi buvait",
        "D'apprendre rapidement la langue des Chaldéens",
        "De devenir le conseiller principal du roi"
      ],
      correctAnswer: "De ne pas se souiller par les mets du roi et par le vin dont le roi buvait",
      explanation: "Daniel 1:8"
    },
    {
      question: "Pendant combien de temps devra-t-on éprouver les jeunes gens Israélites ?",
      options: [
        "Sept jours",
        "Dix jours",
        "Quarante jours",
        "Trois mois"
      ],
      correctAnswer: "Dix jours",
      explanation: "Daniel 1:12"
    },
    {
      question: "Par quoi devra-t-on éprouver les jeunes gens Israélites ?",
      options: [
        "Par le jeûne et la prière",
        "Par des légumes à manger et de l'eau à boire",
        "Par les mets du roi",
        "Par l'étude intensive"
      ],
      correctAnswer: "Par des légumes à manger et de l'eau à boire",
      explanation: "Daniel 1:12"
    },
    {
      question: "Au bout de combien de temps les jeunes gens Israélites avaient-ils meilleur visage et plus d'embonpoint ?",
      options: [
        "Au bout de sept jours",
        "Au bout de dix jours",
        "Au bout d'un mois",
        "Au bout de trois mois"
      ],
      correctAnswer: "Au bout de dix jours",
      explanation: "Daniel 1:15"
    },
    {
      question: "Qu'est-ce que Dieu accorda aux jeunes gens Israélites suite à leur consécration à lui ?",
      options: [
        "Des richesses et de l'honneur",
        "De la force et du courage",
        "De la science, de l'intelligence dans toutes les lettres, et de la sagesse",
        "Une longue vie"
      ],
      correctAnswer: "De la science, de l'intelligence dans toutes les lettres, et de la sagesse",
      explanation: "Daniel 1:17"
    },
    {
      question: "Comment trouvait-il les jeunes gens Israélites ?",
      options: [
        "Cinq fois supérieurs",
        "Dix fois supérieurs à tous les magiciens et astrologues",
        "Égaux aux sages de Babylone",
        "Légèrement meilleurs que les autres"
      ],
      correctAnswer: "Dix fois supérieurs à tous les magiciens et astrologues",
      explanation: "Daniel 1:20"
    },
    {
      question: "Jusqu'à quand Daniel était-il au service du roi ?",
      options: [
        "Jusqu'à la mort de Nebucadnetsar",
        "Jusqu'à la première année du roi Cyrus",
        "Jusqu'à sa vieillesse",
        "Pendant dix ans"
      ],
      correctAnswer: "Jusqu'à la première année du roi Cyrus",
      explanation: "Daniel 1:21"
    }
  ],
  2: [
    {
      question: "Qu'est-ce que le roi Nebucadnetsar eut à la seconde année de son règne ?",
      options: [
        "Une grande victoire militaire",
        "Des songes qui agitaient son esprit",
        "Une grave maladie",
        "Une révolte dans son royaume"
      ],
      correctAnswer: "Des songes qui agitaient son esprit",
      explanation: "Daniel 2:1"
    },
    {
      question: "A qui le roi Nebucadnetsar fit appel pour qu'ils lui disent ses songes ?",
      options: [
        "Les prophètes d'Israël",
        "Les magiciens, les astrologues, les enchanteurs et les Chaldéens",
        "Ses conseillers militaires",
        "Daniel et ses compagnons"
      ],
      correctAnswer: "Les magiciens, les astrologues, les enchanteurs et les Chaldéens",
      explanation: "Daniel 2:2"
    },
    {
      question: "Dans quelle langue répondirent les Chaldéens au roi Nebucadnetsar ?",
      options: [
        "En hébreu",
        "En grec",
        "En langue araméenne",
        "En babylonien"
      ],
      correctAnswer: "En langue araméenne",
      explanation: "Daniel 2:4"
    },
    {
      question: "Quelle sentence prononça le roi si les Chaldéens ne donnent pas son songe et son explication ?",
      options: [
        "Ils seront emprisonnés",
        "Ils seront exilés",
        "Ils seront mis en pièces, et leurs maisons réduites en un tas d'immondices",
        "Ils perdront tous leurs biens"
      ],
      correctAnswer: "Ils seront mis en pièces, et leurs maisons réduites en un tas d'immondices",
      explanation: "Daniel 2:5"
    },
    {
      question: "Que donnera Nebucadnetsar aux Chaldéens s'ils lui donnent le songe et son explication ?",
      options: [
        "De l'or et de l'argent",
        "Des terres et des serviteurs",
        "Des dons et des présents, et de grands honneurs",
        "La liberté et la paix"
      ],
      correctAnswer: "Des dons et des présents, et de grands honneurs",
      explanation: "Daniel 2:6"
    },
    {
      question: "Qui est le chef des gardes de Nebucadnetsar ?",
      options: [
        "Aschpenaz",
        "Arjoc",
        "Daniel",
        "Beltschatsar"
      ],
      correctAnswer: "Arjoc",
      explanation: "Daniel 2:14"
    },
    {
      question: "Que demanda Daniel au roi Nebucadnetsar au sujet du songe ?",
      options: [
        "De l'argent et des richesses",
        "De lui accorder du temps pour donner l'explication",
        "De libérer son peuple",
        "De l'épargner de la sentence"
      ],
      correctAnswer: "De lui accorder du temps pour donner l'explication",
      explanation: "Daniel 2:16"
    },
    {
      question: "Qui Daniel instruisit de l'affaire de sentence du roi ?",
      options: [
        "Le chef des eunuques",
        "Hanania, Mischaël et Azaria, ses compagnons",
        "Tous les sages de Babylone",
        "Le roi lui-même"
      ],
      correctAnswer: "Hanania, Mischaël et Azaria, ses compagnons",
      explanation: "Daniel 2:17"
    },
    {
      question: "Qu'implora Daniel et ses compagnons ?",
      options: [
        "La protection du roi",
        "La miséricorde du Dieu des cieux",
        "L'aide des autres sages",
        "Le temps de fuir Babylone"
      ],
      correctAnswer: "La miséricorde du Dieu des cieux",
      explanation: "Daniel 2:18"
    },
    {
      question: "Comment et quand le secret du songe fut-il révélé à Daniel ?",
      options: [
        "Dans un rêve pendant le jour",
        "Par un ange le matin",
        "Dans une vision pendant la nuit",
        "Par le roi lui-même"
      ],
      correctAnswer: "Dans une vision pendant la nuit",
      explanation: "Daniel 2:19"
    },
    {
      question: "Qui Daniel bénit lorsque le secret du songe lui fut révélé ?",
      options: [
        "Le roi Nebucadnetsar",
        "Le Dieu des cieux",
        "Ses compagnons",
        "Le chef des gardes"
      ],
      correctAnswer: "Le Dieu des cieux",
      explanation: "Daniel 2:19"
    },
    {
      question: "Que dit Daniel à Arjoc après que le secret lui fut révélé ?",
      options: [
        "Fais périr tous les sages",
        "Ne fais pas périr les sages de Babylone ! Conduis-moi devant le roi",
        "Cache-moi du roi",
        "Donne-moi plus de temps"
      ],
      correctAnswer: "Ne fais pas périr les sages de Babylone ! Conduis-moi devant le roi",
      explanation: "Daniel 2:24"
    },
    {
      question: "Selon Daniel, qui est capable de découvrir le secret du songe de Nebucadnetsar ?",
      options: [
        "Les sages et les magiciens",
        "Les astrologues et les devins",
        "Le Dieu des Cieux qui révèle les secrets",
        "Daniel lui-même par sa sagesse"
      ],
      correctAnswer: "Le Dieu des Cieux qui révèle les secrets",
      explanation: "Daniel 2:28"
    },
    {
      question: "Selon le songe, que vit le roi ?",
      options: [
        "Quatre bêtes terribles",
        "Une grande statue",
        "Un arbre immense",
        "Des anges descendant du ciel"
      ],
      correctAnswer: "Une grande statue",
      explanation: "Daniel 2:31"
    },
    {
      question: "De quoi était la tête de la grande statue ?",
      options: [
        "D'argent pur",
        "D'or pur",
        "D'airain",
        "De fer"
      ],
      correctAnswer: "D'or pur",
      explanation: "Daniel 2:32"
    }
  ]
};
