export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface QuizData {
  [key: number]: Question[];
}

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
      explanation: "Daniel 1v1"
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
      explanation: "Daniel 1v1"
    },
    {
      question: "Quand Nebucadnetsar, roi de Babylone, marcha-t-il contre Jérusalem, et l'assiégea ?",
      options: [
        "La première année du règne de Jojakim",
        "La troisième année du règne de Jojakim",
        "La dixième année du règne de Jojakim",
        "La dernière année du règne de Jojakim"
      ],
      correctAnswer: "La troisième année du règne de Jojakim",
      explanation: "Daniel 1v1"
    },
    {
      question: "Qu'arriva-t-il à Jérusalem la troisième année du règne de Jojakim, roi de Juda ?",
      options: [
        "Elle fut détruite complètement",
        "Nebucadnetsar, roi de Babylone, marcha contre Jérusalem, et l'assiégea",
        "Elle fut épargnée par Babylone",
        "Elle devint indépendante"
      ],
      correctAnswer: "Nebucadnetsar, roi de Babylone, marcha contre Jérusalem, et l'assiégea",
      explanation: "Daniel 1v1"
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
      explanation: "Daniel 1v2"
    },
    {
      question: "Qui livra une partie des ustensiles de la maison de Dieu entre les mains de Nebucadnetsar ?",
      options: [
        "Les prêtres de Jérusalem",
        "Le Seigneur",
        "Le roi Jojakim",
        "Le peuple de Juda"
      ],
      correctAnswer: "Le Seigneur",
      explanation: "Daniel 1v2"
    },
    {
      question: "Que livra le Seigneur entre les mains du roi Nebucadnetsar, roi de Babylone ?",
      options: [
        "Seulement Jojakim",
        "Seulement les ustensiles de la maison de Dieu",
        "Jojakim, roi de Juda, et une partie des ustensiles de la maison de Dieu",
        "Tout le peuple de Juda"
      ],
      correctAnswer: "Jojakim, roi de Juda, et une partie des ustensiles de la maison de Dieu",
      explanation: "Daniel 1v2"
    },
    {
      question: "Où Nebucadnetsar emporta-t-il les ustensiles de la maison de l'Eternel et où les mit-il ?",
      options: [
        "A Babylone, dans son palais",
        "Au pays de Schinear, dans la maison de son dieu, il les mit dans la maison du trésor de son dieu",
        "A Jérusalem, dans le temple",
        "En Perse, dans le temple des Mèdes"
      ],
      correctAnswer: "Au pays de Schinear, dans la maison de son dieu, il les mit dans la maison du trésor de son dieu",
      explanation: "Daniel 1v2"
    },
    {
      question: "Qui était le chef des eunuques du roi Nebucadnetsar ?",
      options: [
        "Aschpenaz",
        "Arjoc",
        "Daniel",
        "Hanania"
      ],
      correctAnswer: "Aschpenaz",
      explanation: "Daniel 1v3"
    },
    {
      question: "Quel ordre Nebucadnetsar donna-t-il à Aschpenaz, chef de ses eunuques ?",
      options: [
        "De détruire Jérusalem",
        "D'amener quelques-uns des enfants d'Israël de race royale ou de famille noble",
        "De tuer tous les sages de Juda",
        "De construire une nouvelle ville"
      ],
      correctAnswer: "D'amener quelques-uns des enfants d'Israël de race royale ou de famille noble",
      explanation: "Daniel 1v3-4"
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
      explanation: "Daniel 1v4"
    },
    {
      question: "Qu'assigna le roi Nebucadnetsar pour chaque jour aux jeunes garçons sans défauts amenés de familles nobles d'Israël ?",
      options: [
        "Du pain et de l'eau seulement",
        "Une portion des mets de sa table et du vin dont il buvait",
        "Des fruits et des légumes",
        "Ce qu'ils voulaient"
      ],
      correctAnswer: "Une portion des mets de sa table et du vin dont il buvait",
      explanation: "Daniel 1v5"
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
      explanation: "Daniel 1v5"
    },
    {
      question: "Que feraient les jeunes gens amenés de familles nobles d'Israël au bout de leur formation ?",
      options: [
        "Ils retourneraient à Jérusalem",
        "Ils seraient au service du roi",
        "Ils deviendraient prêtres",
        "Ils seraient libérés"
      ],
      correctAnswer: "Ils seraient au service du roi",
      explanation: "Daniel 1v5"
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
      explanation: "Daniel 1v6"
    },
    {
      question: "Quels étaient les noms Babyloniens donnés aux quatre jeunes gens mentionnés parmi ceux d'Israël ?",
      options: [
        "Daniel, Hanania, Mischaël et Azaria",
        "Beltschatsar, Schadrac, Méschac et Abed-Nego",
        "Nebucadnetsar, Arjoc, Aschpenaz et Darius",
        "Cyrus, Darius, Xerxès et Artaxerxès"
      ],
      correctAnswer: "Beltschatsar, Schadrac, Méschac et Abed-Nego",
      explanation: "Daniel 1v7"
    },
    {
      question: "Qui donna les noms Babyloniens aux quatre jeunes gens mentionnés parmi ceux d'Israël ?",
      options: [
        "Le roi Nebucadnetsar",
        "Le chef des eunuques",
        "Daniel lui-même",
        "Les prêtres babyloniens"
      ],
      correctAnswer: "Le chef des eunuques",
      explanation: "Daniel 1v7"
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
      explanation: "Daniel 1v8"
    },
    {
      question: "Par quoi Daniel résolut-il de ne pas se souiller ?",
      options: [
        "Par les idoles babyloniennes",
        "Par les vêtements des Babyloniens",
        "Par les mets du roi et par le vin dont le roi buvait",
        "Par la langue des Chaldéens"
      ],
      correctAnswer: "Par les mets du roi et par le vin dont le roi buvait",
      explanation: "Daniel 1v8"
    },
    {
      question: "Quelle faveur Daniel demanda-t-il au chef des eunuques ?",
      options: [
        "De les renvoyer à Jérusalem",
        "De leur donner plus de temps pour étudier",
        "De ne pas les obliger à se souiller",
        "De leur permettre de pratiquer leur religion"
      ],
      correctAnswer: "De ne pas les obliger à se souiller",
      explanation: "Daniel 1v8"
    },
    {
      question: "Qui fit trouver grâce à Daniel devant le chef des eunuques ?",
      options: [
        "Le roi Nebucadnetsar",
        "Dieu",
        "Ses compagnons",
        "Sa sagesse"
      ],
      correctAnswer: "Dieu",
      explanation: "Daniel 1v9"
    },
    {
      question: "Qui a fixé ce que les jeunes gens Israélites devraient manger et boire ?",
      options: [
        "Le chef des eunuques",
        "Le roi Nebucadnetsar",
        "Daniel",
        "Les médecins babyloniens"
      ],
      correctAnswer: "Le roi Nebucadnetsar",
      explanation: "Daniel 1v10"
    },
    {
      question: "Qu'exposeraient les jeunes gens Israélites si le roi voit leur visage plus abattu ?",
      options: [
        "Leur propre vie",
        "La tête du chef des eunuques auprès du roi",
        "La colère de Dieu",
        "La disgrâce de leur famille"
      ],
      correctAnswer: "La tête du chef des eunuques auprès du roi",
      explanation: "Daniel 1v10"
    },
    {
      question: "Qui devra éprouver les jeunes gens Israélites ?",
      options: [
        "Le roi lui-même",
        "Le chef des eunuques",
        "L'intendant à qui le chef des eunuques avait remis leur surveillance",
        "Les autres sages de Babylone"
      ],
      correctAnswer: "L'intendant à qui le chef des eunuques avait remis leur surveillance",
      explanation: "Daniel 1v11"
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
      explanation: "Daniel 1v12"
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
      explanation: "Daniel 1v12"
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
      explanation: "Daniel 1v15"
    },
    {
      question: "Au bout de dix jours, nourris par des légumes à manger et de l'eau à boire, comment les jeunes gens Israélites étaient-ils trouvés ?",
      options: [
        "Plus faibles et plus pâles",
        "Égaux aux autres jeunes gens",
        "Avec un visage plus abattu",
        "Avec meilleur visage et plus d'embonpoint que tous les jeunes gens qui mangeaient les mets du roi"
      ],
      correctAnswer: "Avec meilleur visage et plus d'embonpoint que tous les jeunes gens qui mangeaient les mets du roi",
      explanation: "Daniel 1v15"
    },
    {
      question: "Que faisait l'intendant des mets et du vin qui étaient destinés aux jeunes gens Israélites ?",
      options: [
        "Il les donnait à d'autres",
        "Il les mangeait lui-même",
        "Il les jetait",
        "Il emportait les mets et le vin qui leur étaient destinés, et il leur donnait des légumes"
      ],
      correctAnswer: "Il emportait les mets et le vin qui leur étaient destinés, et il leur donnait des légumes",
      explanation: "Daniel 1v16"
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
      explanation: "Daniel 1v17"
    },
    {
      question: "A quel moment le chef des eunuques présenta les jeunes gens Israélites à Nebucadnetsar ?",
      options: [
        "Immédiatement après leur arrivée",
        "Après un an de formation",
        "Au terme fixé par le roi pour qu'on les lui amenât",
        "Quand le roi le demanda"
      ],
      correctAnswer: "Au terme fixé par le roi pour qu'on les lui amenât",
      explanation: "Daniel 1v18"
    },
    {
      question: "Où étaient admis les jeunes gens Israélites au bout de leurs formations ?",
      options: [
        "Ils retournèrent à Jérusalem",
        "Ils furent donc admis au service du roi",
        "Ils devinrent prêtres",
        "Ils furent libérés"
      ],
      correctAnswer: "Ils furent donc admis au service du roi",
      explanation: "Daniel 1v19"
    },
    {
      question: "Sur tous les objets qui réclamaient de la sagesse et de l'intelligence, comment trouvait-il les jeunes gens Israélites ?",
      options: [
        "Cinq fois supérieurs",
        "Dix fois supérieurs à tous les magiciens et astrologues",
        "Égaux aux sages de Babylone",
        "Légèrement meilleurs que les autres"
      ],
      correctAnswer: "Dix fois supérieurs à tous les magiciens et astrologues",
      explanation: "Daniel 1v20"
    },
    {
      question: "Sur quoi le roi interrogeait les jeunes gens Israélites ?",
      options: [
        "Sur l'histoire d'Israël",
        "Sur la loi de Moïse",
        "Sur tous les objets qui réclamaient de la sagesse et de l'intelligence",
        "Sur les prophéties"
      ],
      correctAnswer: "Sur tous les objets qui réclamaient de la sagesse et de l'intelligence",
      explanation: "Daniel 1v20"
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
      explanation: "Daniel 1v21"
    }
  ],
  2: [
    {
      question: "Qu'est-ce que le roi Nebucadnetsar eut à la seconde année de son règne ?",
      options: [
        "Une grande victoire militaire",
        "Des songes. Il avait l'esprit agité, et ne pouvait dormir",
        "Une grave maladie",
        "Une révolte dans son royaume"
      ],
      correctAnswer: "Des songes. Il avait l'esprit agité, et ne pouvait dormir",
      explanation: "Daniel 2v1"
    },
    {
      question: "A qui le roi Nebucadnetsar fit appel pour qu'ils lui disent ses songes, la seconde année de son règne ?",
      options: [
        "Les prophètes d'Israël",
        "Les magiciens, les astrologues, les enchanteurs et les Chaldéens",
        "Ses conseillers militaires",
        "Daniel et ses compagnons"
      ],
      correctAnswer: "Les magiciens, les astrologues, les enchanteurs et les Chaldéens",
      explanation: "Daniel 2v2"
    },
    {
      question: "Comment était l'esprit de Nebucadnetsar lorsqu'il eut son premier songe ?",
      options: [
        "Calme et paisible",
        "Nebucadnetsar avait esprit agité",
        "Joyful et content",
        "Indifférent"
      ],
      correctAnswer: "Nebucadnetsar avait esprit agité",
      explanation: "Daniel 2v3"
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
      explanation: "Daniel 2v4"
    },
    {
      question: "Que répondirent les Chaldéens au roi Nebucadnetsar en langue araméenne ?",
      options: [
        "Nous ne connaissons pas ton songe",
        "O roi, vis éternellement ! dis le songe à tes serviteurs, et nous en donnerons l'explication",
        "Donne-nous du temps",
        "Nous ne pouvons pas t'aider"
      ],
      correctAnswer: "O roi, vis éternellement ! dis le songe à tes serviteurs, et nous en donnerons l'explication",
      explanation: "Daniel 2v4"
    },
    {
      question: "Quelle sentence prononça le roi Nebucadnetsar contre les Chaldéens s'ils ne donnent pas son songe et son explication ?",
      options: [
        "Ils seront emprisonnés",
        "Ils seront exilés",
        "Ils seront mis en pièces, et leurs maisons seront réduites en un tas d'immondices",
        "Ils perdront tous leurs biens"
      ],
      correctAnswer: "Ils seront mis en pièces, et leurs maisons seront réduites en un tas d'immondices",
      explanation: "Daniel 2v5"
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
      explanation: "Daniel 2v6"
    },
    {
      question: "Selon Nebucadnetsar, pourquoi les Chaldéens cherchent à gagner du temps ?",
      options: [
        "Parce qu'ils ont peur",
        "Parce qu'ils ont vu que la chose a échappé au roi Nebucadnetsar",
        "Parce qu'ils veulent fuir",
        "Parce qu'ils préparent un complot"
      ],
      correctAnswer: "Parce qu'ils ont vu que la chose a échappé au roi Nebucadnetsar",
      explanation: "Daniel 2v8"
    },
    {
      question: "Selon Nebucadnetsar, qu'est-ce que les Chaldéens se préparent à lui dire ?",
      options: [
        "La vérité",
        "Des mensonges et des faussetés",
        "Ce qu'ils savent",
        "Rien du tout"
      ],
      correctAnswer: "Des mensonges et des faussetés",
      explanation: "Daniel 2v9"
    },
    {
      question: "Selon Nebucadnetsar, pourquoi les Chaldéens cherchent à lui dire mensonges et des faussetés ?",
      options: [
        "Pour le tromper",
        "En attendant que les temps soient changés",
        "Pour gagner sa confiance",
        "Parce qu'ils ne savent pas"
      ],
      correctAnswer: "En attendant que les temps soient changés",
      explanation: "Daniel 2v9"
    },
    {
      question: "A quelle condition Nebucadnetsar saura que les Chaldéens seront capables d'expliquer le songe ?",
      options: [
        "Quand ils prieront leurs dieux",
        "Quand ils donneront le songe",
        "Quand ils montreront leur sagesse",
        "Quand ils feront des miracles"
      ],
      correctAnswer: "Quand ils donneront le songe",
      explanation: "Daniel 2v9"
    },
    {
      question: "Selon les Chaldéens, à qui ne pouvait-on jamais demander ce qu'exige le roi Nebucadnetsar ?",
      options: [
        "Aux prophètes d'Israël",
        "Aucun magicien, astrologue ou Chaldéen",
        "Aux sages de l'Égypte",
        "Aux devins de Perse"
      ],
      correctAnswer: "Aucun magicien, astrologue ou Chaldéen",
      explanation: "Daniel 2v10"
    },
    {
      question: "Selon les Chaldéens, qui pouvait dire ce que demande le roi Nebucadnetsar ?",
      options: [
        "Les sages de Babylone",
        "Daniel et ses compagnons",
        "Il n'y a personne qui puisse le dire au roi, excepté les dieux, dont la demeure n'est pas parmi les hommes",
        "Les prophètes d'Israël"
      ],
      correctAnswer: "Il n'y a personne qui puisse le dire au roi, excepté les dieux, dont la demeure n'est pas parmi les hommes",
      explanation: "Daniel 2v11"
    },
    {
      question: "Quel était le sentiment de Nebucadnetsar face à l'incapacité totale des Chaldéens à donner le songe et son explication ?",
      options: [
        "Il fut triste",
        "Il fut indifférent",
        "Le roi se mit en colère, et s'irrita violemment",
        "Il fut compréhensif"
      ],
      correctAnswer: "Le roi se mit en colère, et s'irrita violemment",
      explanation: "Daniel 2v12"
    },
    {
      question: "Qu'ordonna Nebucadnetsar face à l'incapacité totale des Chaldéens à donner le songe et son explication ?",
      options: [
        "De les emprisonner",
        "De les exiler",
        "Nebucadnetsar ordonna qu'on fasse périr tous les sages de Babylone",
        "De les libérer"
      ],
      correctAnswer: "Nebucadnetsar ordonna qu'on fasse périr tous les sages de Babylone",
      explanation: "Daniel 2v12"
    },
    {
      question: "Que se passa lorsque la sentence de mort fut publiée ?",
      options: [
        "Les sages s'enfuirent",
        "La sentence fut publiée, les sages étaient mis à mort, et l'on cherchait Daniel et ses compagnons pour les faire périr",
        "Le roi changea d'avis",
        "Les sages se cachèrent"
      ],
      correctAnswer: "La sentence fut publiée, les sages étaient mis à mort, et l'on cherchait Daniel et ses compagnons pour les faire périr",
      explanation: "Daniel 2v13"
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
      explanation: "Daniel 2v14"
    },
    {
      question: "De quelle manière s'adressa-t-il à Arjoc ?",
      options: [
        "Avec colère",
        "D'une manière prudente et sensée",
        "Avec peur",
        "Avec arrogance"
      ],
      correctAnswer: "D'une manière prudente et sensée",
      explanation: "Daniel 2v14"
    },
    {
      question: "Qui était sorti pour mettre à mort les sages de Babylone ?",
      options: [
        "Le roi lui-même",
        "Arjoc",
        "Les soldats du roi",
        "Le chef des eunuques"
      ],
      correctAnswer: "Arjoc",
      explanation: "Daniel 2v14"
    },
    {
      question: "Quelle question posa Daniel à Arjoc ?",
      options: [
        "Où est le roi ?",
        "Pourquoi la sentence du roi est-elle si sévère ?",
        "Que devons-nous faire ?",
        "Quand allons-nous mourir ?"
      ],
      correctAnswer: "Pourquoi la sentence du roi est-elle si sévère ?",
      explanation: "Daniel 2v15"
    },
    {
      question: "Que demanda Daniel au roi Nebucadnetsar au sujet du songe ?",
      options: [
        "De l'argent et des richesses",
        "De lui accorder du temps pour donner au roi l'explication",
        "De libérer son peuple",
        "De l'épargner de la sentence"
      ],
      correctAnswer: "De lui accorder du temps pour donner au roi l'explication",
      explanation: "Daniel 2v16"
    },
    {
      question: "Qui Daniel instruisit de l'affaire de sentence du roi Nebucadnetsar sur les sages de Babylone ?",
      options: [
        "Le chef des eunuques",
        "Hanania, Mischaël et Azaria, ses compagnons",
        "Tous les sages de Babylone",
        "Le roi lui-même"
      ],
      correctAnswer: "Hanania, Mischaël et Azaria, ses compagnons",
      explanation: "Daniel 2v17"
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
      explanation: "Daniel 2v18"
    },
    {
      question: "Pourquoi Daniel et ses compagnons implorèrent la miséricorde du Dieu des cieux ?",
      options: [
        "Pour être riches",
        "Pour être honorés",
        "Afin qu'on ne fît pas périr Daniel et ses compagnons avec le reste des sages de Babylone",
        "Pour retourner à Jérusalem"
      ],
      correctAnswer: "Afin qu'on ne fît pas périr Daniel et ses compagnons avec le reste des sages de Babylone",
      explanation: "Daniel 2v18"
    },
    {
      question: "Comment et quand le secret du songe de Nebucadnetsar fut-il révélé à Daniel ?",
      options: [
        "Dans un rêve pendant le jour",
        "Par un ange le matin",
        "Alors le secret fut révélé à Daniel dans une vision pendant la nuit",
        "Par le roi lui-même"
      ],
      correctAnswer: "Alors le secret fut révélé à Daniel dans une vision pendant la nuit",
      explanation: "Daniel 2v19"
    },
    {
      question: "Qui Daniel bénit lorsque le secret du songe de Nebucadnetsar lui fut révélé à Daniel ?",
      options: [
        "Le roi Nebucadnetsar",
        "Le Dieu des cieux",
        "Ses compagnons",
        "Le chef des gardes"
      ],
      correctAnswer: "Le Dieu des cieux",
      explanation: "Daniel 2v19"
    },
    {
      question: "A qui appartiennent la sagesse et la force ?",
      options: [
        "Au roi Nebucadnetsar",
        "Aux sages de Babylone",
        "Le Dieu des cieux",
        "A Daniel"
      ],
      correctAnswer: "Le Dieu des cieux",
      explanation: "Daniel 2v19 et 20"
    },
    {
      question: "Qui change les temps et les circonstances ?",
      options: [
        "Le roi",
        "Les astrologues",
        "Le Dieu des cieux",
        "Les devins"
      ],
      correctAnswer: "Le Dieu des cieux",
      explanation: "Daniel 2v19 et 21"
    },
    {
      question: "Que dit Daniel à Arjoc lorsque le Dieu des Cieux lui a révélé le songe de Nebucadnetsar ?",
      options: [
        "Fais périr tous les sages",
        "Ne fais pas périr les sages de Babylone ! Conduis-moi devant le roi, et je donnerai au roi l'explication",
        "Cache-moi du roi",
        "Donne-moi plus de temps"
      ],
      correctAnswer: "Ne fais pas périr les sages de Babylone ! Conduis-moi devant le roi, et je donnerai au roi l'explication",
      explanation: "Daniel 2v24"
    },
    {
      question: "Comment Arjoc conduisit-il Daniel au roi Nebucadnetsar ?",
      options: [
        "Lentement et avec prudence",
        "Arjoc conduisit promptement Daniel devant le roi",
        "Secrètement",
        "Avec hésitation"
      ],
      correctAnswer: "Arjoc conduisit promptement Daniel devant le roi",
      explanation: "Daniel 2v25"
    },
    {
      question: "Selon Daniel, qui ne sont pas capables de découvrir le songe de Nebucadnetsar ?",
      options: [
        "Les prophètes d'Israël",
        "Les sages, les astrologues, les magiciens et les devins",
        "Les prêtres de Babylone",
        "Les conseillers du roi"
      ],
      correctAnswer: "Les sages, les astrologues, les magiciens et les devins",
      explanation: "Daniel 2v27"
    },
    {
      question: "Selon Daniel, qui est capables de découvrir le secret du songe de Nebucadnetsar ?",
      options: [
        "Les sages et les magiciens",
        "Les astrologues et les devins",
        "Le Dieu des Cieux qui révèle les secrets, et qui a fait connaître au roi Nebucadnetsar ce qui arrivera dans la suite des temps",
        "Daniel lui-même par sa sagesse"
      ],
      correctAnswer: "Le Dieu des Cieux qui révèle les secrets, et qui a fait connaître au roi Nebucadnetsar ce qui arrivera dans la suite des temps",
      explanation: "Daniel 2v28"
    },
    {
      question: "Selon le songe révélé à Daniel, que vit le roi Nebucadnetsar sur sa couche ?",
      options: [
        "Quatre bêtes terribles",
        "Une grande statue",
        "Un arbre immense",
        "Des anges descendant du ciel"
      ],
      correctAnswer: "Une grande statue",
      explanation: "Daniel 2v31"
    },
    {
      question: "Selon le songe révélé à Daniel, comment était la grande statue vue par Nebucadnetsar ?",
      options: [
        "Petite et insignifiante",
        "Cette statue était immense, et d'une splendeur extraordinaire ; elle était debout devant Nebucadnetsar, et son aspect était terrible",
        "Belle et gracieuse",
        "Simple et ordinaire"
      ],
      correctAnswer: "Cette statue était immense, et d'une splendeur extraordinaire ; elle était debout devant Nebucadnetsar, et son aspect était terrible",
      explanation: "Daniel 2v31"
    },
    {
      question: "Selon le songe révélé à Daniel, de quoi était la tête de la grande statue vue par Nebucadnetsar ?",
      options: [
        "D'argent pur",
        "D'or pur",
        "D'airain",
        "De fer"
      ],
      correctAnswer: "D'or pur",
      explanation: "Daniel 2v32"
    },
    {
      question: "De quoi étaient la poitrine et les bras de la grande statue vue par Nebucadnetsar ?",
      options: [
        "D'or pur",
        "D'argent",
        "D'airain",
        "De fer"
      ],
      correctAnswer: "D'argent",
      explanation: "Daniel 2v32"
    },
    {
      question: "De quoi étaient le ventre et les cuisses de la grande statue vue par Nebucadnetsar ?",
      options: [
        "D'or pur",
        "D'argent",
        "D'airain",
        "De fer"
      ],
      correctAnswer: "D'airain",
      explanation: "Daniel 2v32"
    },
    {
      question: "De quoi étaient les jambes de la grande statue vue par Nebucadnetsar ?",
      options: [
        "D'or pur",
        "D'argent",
        "D'airain",
        "De fer"
      ],
      correctAnswer: "De fer",
      explanation: "Daniel 2v33"
    },
    {
      question: "De quoi étaient les pieds de la grande statue vue par Nebucadnetsar ?",
      options: [
        "De fer seulement",
        "D'argile seulement",
        "En partie de fer et en partie d'argile",
        "D'airain et d'argent"
      ],
      correctAnswer: "En partie de fer et en partie d'argile",
      explanation: "Daniel 2v33"
    },
    {
      question: "Qu'est-ce qui frappa les pieds de fer et d'argile de la statue, et les mit en pièces ?",
      options: [
        "Un marteau",
        "Une épée",
        "Une pierre",
        "La foudre"
      ],
      correctAnswer: "Une pierre",
      explanation: "Daniel 2v34"
    },
    {
      question: "Par le secours de quoi se détacha la pierre qui frappa les pieds de la statue et les mit en pièces ?",
      options: [
        "Par la main d'un homme",
        "Par le vent",
        "La pierre se détacha sans le secours d'aucune main",
        "Par un ange"
      ],
      correctAnswer: "La pierre se détacha sans le secours d'aucune main",
      explanation: "Daniel 2v34"
    },
    {
      question: "Comme quoi devint la statue lorsque ses pieds furent frappés par la pierre ?",
      options: [
        "Comme de la poussière",
        "Comme la balle qui s'échappe d'une aire en été",
        "Comme de l'eau",
        "Comme de la fumée"
      ],
      correctAnswer: "Comme la balle qui s'échappe d'une aire en été",
      explanation: "Daniel 2v35"
    },
    {
      question: "Que devint la pierre qui frappa les pieds de la statue ?",
      options: [
        "Elle disparut",
        "Elle retourna à sa place",
        "Mais la pierre qui avait frappé la statue devint une grande montagne, et remplit toute la terre",
        "Elle se brisa en morceaux"
      ],
      correctAnswer: "Mais la pierre qui avait frappé la statue devint une grande montagne, et remplit toute la terre",
      explanation: "Daniel 2v35"
    },
    {
      question: "Selon l'explication révélée à Daniel, qui était la tête de la grande statue vue par Nebucadnetsar ?",
      options: [
        "Le roi de Perse",
        "Roi Nebucadnetsar",
        "Le roi de Grèce",
        "Le roi de Rome"
      ],
      correctAnswer: "Roi Nebucadnetsar",
      explanation: "Daniel 2v37"
    },
    {
      question: "Qu'est-ce que le Dieu des Cieux donna à Nebucadnetsar ?",
      options: [
        "La sagesse seulement",
        "L'empire, la puissance, la force et la gloire",
        "La richesse seulement",
        "La victoire seulement"
      ],
      correctAnswer: "L'empire, la puissance, la force et la gloire",
      explanation: "Daniel 2v37"
    },
    {
      question: "Qu'est-ce que le Dieu des Cieux a remis entre les mains de Nebucadnetsar ?",
      options: [
        "Seulement les enfants des hommes",
        "Les enfants des hommes, les bêtes des champs et les oiseaux du ciel, et il t'a fait dominer sur eux tous",
        "Seulement les bêtes des champs",
        "Seulement les oiseaux du ciel"
      ],
      correctAnswer: "Les enfants des hommes, les bêtes des champs et les oiseaux du ciel, et il t'a fait dominer sur eux tous",
      explanation: "Daniel 2v38"
    },
    {
      question: "Selon l'explication révélée à Daniel, que signifie l'argent de la grande statue de Nebucadnetsar ?",
      options: [
        "Un royaume plus grand",
        "Un autre royaume, moindre que celui de Nebucadnetsar",
        "Le même royaume",
        "Un royaume éternel"
      ],
      correctAnswer: "Un autre royaume, moindre que celui de Nebucadnetsar",
      explanation: "Daniel 2v39"
    },
    {
      question: "Selon l'explication révélée à Daniel, que signifie l'airain de la grande statue de Nebucadnetsar ?",
      options: [
        "Un deuxième royaume",
        "Un troisième royaume, qui sera d'airain, et qui dominera sur toute la terre",
        "Un quatrième royaume",
        "Un royaume éternel"
      ],
      correctAnswer: "Un troisième royaume, qui sera d'airain, et qui dominera sur toute la terre",
      explanation: "Daniel 2v39"
    },
    {
      question: "Selon l'explication révélée à Daniel, que signifie le fer de la grande statue de Nebucadnetsar ?",
      options: [
        "Un royaume faible",
        "Un royaume éternel",
        "Il y aura un quatrième royaume, fort comme du fer",
        "Un royaume pacifique"
      ],
      correctAnswer: "Il y aura un quatrième royaume, fort comme du fer",
      explanation: "Daniel 2v40"
    },
    {
      question: "Selon l'explication révélée à Daniel, que signifie le fer mêlé d'argile de la statue de Nebucadnetsar ?",
      options: [
        "Un royaume uni",
        "Ce royaume sera divisé",
        "Un royaume éternel",
        "Un royaume pacifique"
      ],
      correctAnswer: "Ce royaume sera divisé",
      explanation: "Daniel 2v41"
    },
    {
      question: "Comment sera le royaume symbolisé par le fer mêlé d'argile de la statue de Nebucadnetsar ?",
      options: [
        "Entièrement fort",
        "Entièrement fragile",
        "Ce royaume sera en partie fort et en partie fragile",
        "Un royaume éternel"
      ],
      correctAnswer: "Ce royaume sera en partie fort et en partie fragile",
      explanation: "Daniel 2v42"
    },
    {
      question: "Par quoi les royaumes symbolisés par le fer mêlé d'argile se mêleront-ils ?",
      options: [
        "Par la force",
        "Par des alliances humaines",
        "Par la guerre",
        "Par la religion"
      ],
      correctAnswer: "Par des alliances humaines",
      explanation: "Daniel 2v43"
    },
    {
      question: "A quel moment le Dieu des cieux suscitera un royaume qui ne sera jamais détruit ?",
      options: [
        "Pendant le règne de Nebucadnetsar",
        "Dans le temps des rois symbolisés par les dix orteils",
        "Après mille ans",
        "Jamais"
      ],
      correctAnswer: "Dans le temps des rois symbolisés par les dix orteils",
      explanation: "Daniel 2v44"
    },
    {
      question: "Que fit Nebucadnetsar suite au songe et son explication donnés par Daniel ?",
      options: [
        "Il se mit en colère",
        "Il ordonna de tuer Daniel",
        "Nebucadnetsar tomba sur sa face et se prosterna devant Daniel, et il ordonna qu'on lui offrit des sacrifices et des parfums",
        "Il ignora Daniel"
      ],
      correctAnswer: "Nebucadnetsar tomba sur sa face et se prosterna devant Daniel, et il ordonna qu'on lui offrit des sacrifices et des parfums",
      explanation: "Daniel 2v46"
    },
    {
      question: "Que fit Nebucadnetsar à Daniel ?",
      options: [
        "Il le fit emprisonner",
        "Le roi éleva Daniel, et lui fit de nombreux et riches présents ; il lui donna le commandement de toute la province de Babylone, et l'établit chef suprême de tous les sages de Babylone",
        "Il le renvoya à Jérusalem",
        "Il l'ignora"
      ],
      correctAnswer: "Le roi éleva Daniel, et lui fit de nombreux et riches présents ; il lui donna le commandement de toute la province de Babylone, et l'établit chef suprême de tous les sages de Babylone",
      explanation: "Daniel 2v48"
    },
    {
      question: "Que remit Nebucadnetsar aux compagnons de Daniel ?",
      options: [
        "Rien",
        "Le roi Nebucadnetsar remit l'intendance de la province de Babylone à Schadrac, Méschac et Abed-Nego",
        "De l'or et de l'argent",
        "Des terres"
      ],
      correctAnswer: "Le roi Nebucadnetsar remit l'intendance de la province de Babylone à Schadrac, Méschac et Abed-Nego",
      explanation: "Daniel 2v49"
    }
  ],
    3: [
    {
      question: "Quelle était la hauteur de la statue faite par le roi Nebucadnetsar ?",
      options: [
        "Trente coudées",
        "Soixante coudées",
        "Cent coudées",
        "Vingt coudées"
      ],
      correctAnswer: "Soixante coudées",
      explanation: "Daniel 3v1"
    },
    {
      question: "Quelle était la largeur de la statue faite par le roi Nebucadnetsar ?",
      options: [
        "Six coudées",
        "Dix coudées",
        "Trois coudées",
        "Douze coudées"
      ],
      correctAnswer: "Six coudées",
      explanation: "Daniel 3v1"
    },
    {
      question: "Quelle étaient les dimensions de la statue faite par le roi Nebucadnetsar ?",
      options: [
        "Haute de trente coudées et large de trois coudées",
        "Haute de soixante coudées et large de six coudées",
        "Haute de cent coudées et large de dix coudées",
        "Haute de vingt coudées et large de deux coudées"
      ],
      correctAnswer: "Haute de soixante coudées et large de six coudées",
      explanation: "Daniel 3v1"
    },
    {
      question: "Où était dressée la statue faite par le roi Nebucadnetsar ?",
      options: [
        "Dans le palais royal",
        "Dans la vallée de Dura, dans la province de Babylone",
        "Sur une montagne",
        "Au bord du fleuve"
      ],
      correctAnswer: "Dans la vallée de Dura, dans la province de Babylone",
      explanation: "Daniel 3v1"
    },
    {
      question: "Dans quelle vallée était dressée la statue faite par le roi Nebucadnetsar ?",
      options: [
        "Vallée de Hinnom",
        "Vallée de Dura",
        "Vallée de Josaphat",
        "Vallée du Roi"
      ],
      correctAnswer: "Vallée de Dura",
      explanation: "Daniel 3v1"
    },
    {
      question: "Qui sont ceux qui étaient convoqués par Nebucadnetsar à la dédicace de la statue faite ?",
      options: [
        "Seulement les princes",
        "Les satrapes, les intendants et les gouverneurs, les grands juges, les trésoriers, les jurisconsultes, les juges, et tous les magistrats des provinces",
        "Seulement le peuple",
        "Seulement les prêtres"
      ],
      correctAnswer: "Les satrapes, les intendants et les gouverneurs, les grands juges, les trésoriers, les jurisconsultes, les juges, et tous les magistrats des provinces",
      explanation: "Daniel 3v2"
    },
    {
      question: "Qui sont ceux qui s'assemblèrent pour la dédicace de la statue élevée par Nebucadnetsar ?",
      options: [
        "Seulement les soldats",
        "Les satrapes, les intendants et les gouverneurs, les grands juges, les trésoriers, les jurisconsultes, les juges, et tous les magistrats des provinces",
        "Seulement les prêtres",
        "Tout le peuple de Babylone"
      ],
      correctAnswer: "Les satrapes, les intendants et les gouverneurs, les grands juges, les trésoriers, les jurisconsultes, les juges, et tous les magistrats des provinces",
      explanation: "Daniel 3v3"
    },
    {
      question: "Où se placèrent ceux qui s'assemblèrent pour la dédicace de la statue élevée par Nebucadnetsar ?",
      options: [
        "Derrière la statue",
        "Loin de la statue",
        "Ils se placèrent devant la statue qu'avait élevée Nebucadnetsar",
        "Autour du roi"
      ],
      correctAnswer: "Ils se placèrent devant la statue qu'avait élevée Nebucadnetsar",
      explanation: "Daniel 3v3"
    },
    {
      question: "Qui cria à haute voix lors de la dédicace de la statue élevée par Nebucadnetsar ?",
      options: [
        "Le roi lui-même",
        "Un héraut",
        "Le chef des prêtres",
        "Daniel"
      ],
      correctAnswer: "Un héraut",
      explanation: "Daniel 3v4"
    },
    {
      question: "A qui ordonne-t-on de se prosterner et d'adorer la statue élevée par Nebucadnetsar ?",
      options: [
        "Aux Juifs seulement",
        "Aux peuples, nations, hommes de toutes langues !",
        "Aux princes seulement",
        "Aux prêtres seulement"
      ],
      correctAnswer: "Aux peuples, nations, hommes de toutes langues !",
      explanation: "Daniel 3v4"
    },
    {
      question: "Au son de quels instruments de musique devra-t-on se prosterner et adorer la statue élevée par Nebucadnetsar ?",
      options: [
        "Seulement de la trompette",
        "De la trompette, du chalumeau, de la guitare, de la sambuque, du psaltérion, de la cornemuse, et de toutes sortes d'instruments de musique",
        "Seulement du tambour",
        "Aucun instrument"
      ],
      correctAnswer: "De la trompette, du chalumeau, de la guitare, de la sambuque, du psaltérion, de la cornemuse, et de toutes sortes d'instruments de musique",
      explanation: "Daniel 3v5"
    },
    {
      question: "Que fera-t-on à quiconque ne se prosternera pas et n'adorera pas la statue élevée par Nebucadnetsar ?",
      options: [
        "Il sera emprisonné",
        "Il sera exilé",
        "Il sera jeté à l'instant même au milieu d'une fournaise ardente",
        "Il sera battu"
      ],
      correctAnswer: "Il sera jeté à l'instant même au milieu d'une fournaise ardente",
      explanation: "Daniel 3v6"
    },
    {
      question: "Donner dans l'ordre les instruments de musique cités dans Daniel 3v5.",
      options: [
        "Trompette, chalumeau, guitare, sambuque, psaltérion, cornemuse",
        "Chalumeau, trompette, guitare, sambuque, psaltérion",
        "Trompette, guitare, chalumeau, sambuque, cornemuse",
        "Psaltérion, trompette, chalumeau, guitare, sambuque"
      ],
      correctAnswer: "Trompette, chalumeau, guitare, sambuque, psaltérion, cornemuse",
      explanation: "Daniel 3v5"
    },
    {
      question: "Parmi les instruments de musique cités dans Daniel 3v5, lequel n'était plus cité dans Daniel 3v7 ?",
      options: [
        "La trompette",
        "Le chalumeau",
        "La cornemuse",
        "La guitare"
      ],
      correctAnswer: "La cornemuse",
      explanation: "Daniel 3v5 et 3v7"
    },
    {
      question: "Qui accusèrent les Juifs lors de la dédicace de la statue qu'avait élevée Nebucadnetsar ?",
      options: [
        "Les Égyptiens",
        "Quelques Chaldéens",
        "Les Mèdes",
        "Les Perses"
      ],
      correctAnswer: "Quelques Chaldéens",
      explanation: "Daniel 3v8"
    },
    {
      question: "Qui étaient accusés par certains Chaldéens lors de la dédicace de la statue qu'avait élevée Nebucadnetsar ?",
      options: [
        "Daniel seulement",
        "Les Juifs",
        "Tous les étrangers",
        "Les prêtres"
      ],
      correctAnswer: "Les Juifs",
      explanation: "Daniel 3v8"
    },
    {
      question: "Qui sont les juifs accusés par certains Chaldéens de ne pas se soumettre au décret du roi ?",
      options: [
        "Daniel seulement",
        "Schadrac, Méschac et Abed-Nego",
        "Tous les Juifs",
        "Les prophètes"
      ],
      correctAnswer: "Schadrac, Méschac et Abed-Nego",
      explanation: "Daniel 3v12"
    },
    {
      question: "Que remis Nebucadnetsar aux juifs Schadrac, Méschac et Abed-Nego ?",
      options: [
        "Rien",
        "L'intendance de la province de Babylone",
        "De l'or et de l'argent",
        "Des terres"
      ],
      correctAnswer: "L'intendance de la province de Babylone",
      explanation: "Daniel 3v12"
    },
    {
      question: "Quelle accusation certains Chaldéens ont-ils porté contre Schadrac, Méschac et Abed-Nego ?",
      options: [
        "Ils volent le trésor du roi",
        "Schadrac, Méschac et Abed-Nego ne tiennent aucun compte de toi, ô roi ; ils ne servent pas tes dieux, et ils n'adorent point la statue d'or que tu as élevée",
        "Ils complotent contre le roi",
        "Ils refusent de travailler"
      ],
      correctAnswer: "Schadrac, Méschac et Abed-Nego ne tiennent aucun compte de toi, ô roi ; ils ne servent pas tes dieux, et ils n'adorent point la statue d'or que tu as élevée",
      explanation: "Daniel 3v12"
    },
    {
      question: "Quel était le sentiment de Nebucadnetsar suite à l'accusation portée contre Schadrac, Méschac et Abed-Nego ?",
      options: [
        "Heureux",
        "Triste",
        "Irrité et furieux",
        "Indifférent"
      ],
      correctAnswer: "Irrité et furieux",
      explanation: "Daniel 3v13"
    },
    {
      question: "Face à l'accusation, quelle était la première question de Nebucadnetsar à Schadrac, Méschac et Abed-Nego ?",
      options: [
        "Où est Daniel ?",
        "Est-ce de propos délibéré, Schadrac, Méschac et Abed-Nego, que vous ne servez pas mes dieux, et que vous n'adorez pas la statue d'or que j'ai élevée ?",
        "Pourquoi êtes-vous ici ?",
        "Que voulez-vous ?"
      ],
      correctAnswer: "Est-ce de propos délibéré, Schadrac, Méschac et Abed-Nego, que vous ne servez pas mes dieux, et que vous n'adorez pas la statue d'or que j'ai élevée ?",
      explanation: "Daniel 3v14"
    },
    {
      question: "Face à l'accusation, quelle était la deuxième question de Nebucadnetsar à Schadrac, Méschac et Abed-Nego ?",
      options: [
        "Où est votre Dieu ?",
        "Et quel est le dieu qui vous délivrera de ma main ?",
        "Que pouvez-vous faire ?",
        "Pourquoi me désobéissez-vous ?"
      ],
      correctAnswer: "Et quel est le dieu qui vous délivrera de ma main ?",
      explanation: "Daniel 3v15"
    },
    {
      question: "Quel était le sentiment de Nebucadnetsar suite à la réplique de Schadrac, Méschac et Abed-Nego ?",
      options: [
        "Il fut impressionné",
        "Nebucadnetsar fut rempli de fureur, et il changea de visage",
        "Il fut triste",
        "Il devint craintif"
      ],
      correctAnswer: "Nebucadnetsar fut rempli de fureur, et il changea de visage",
      explanation: "Daniel 3v19"
    },
    {
      question: "Qu'ordonna Nebucadnetsar suite à la réplique de Schadrac, Méschac et Abed-Nego ?",
      options: [
        "De les libérer",
        "Il reprit la parole et ordonna de chauffer la fournaise sept fois plus qu'il ne convenait de la chauffer",
        "De les emprisonner",
        "De les exiler"
      ],
      correctAnswer: "Il reprit la parole et ordonna de chauffer la fournaise sept fois plus qu'il ne convenait de la chauffer",
      explanation: "Daniel 3v19"
    },
    {
      question: "Combien fois devra-t-on chauffer la fournaise ?",
      options: [
        "Une fois",
        "Trois fois",
        "sept fois plus qu'il ne convenait de la chauffer",
        "Dix fois"
      ],
      correctAnswer: "sept fois plus qu'il ne convenait de la chauffer",
      explanation: "Daniel 3v19"
    },
    {
      question: "Avec quoi Schadrac, Méschac et Abed-Nego étaient-ils liés et jetés dans la fournaise ardente ?",
      options: [
        "Avec des chaînes de fer",
        "Avec des cordes",
        "Avec leurs caleçons, leurs tuniques, leurs manteaux et leurs autres vêtements",
        "Ils n'étaient pas liés"
      ],
      correctAnswer: "Avec leurs caleçons, leurs tuniques, leurs manteaux et leurs autres vêtements",
      explanation: "Daniel 3v21"
    },
    {
      question: "Qu'arriva-t-il à ceux qui avaient jeté Schadrac, Méschac et Abed-Nego dans la fournaise ardente ?",
      options: [
        "Ils furent récompensés",
        "La flamme les tua",
        "Ils s'enfuirent",
        "Ils furent promus"
      ],
      correctAnswer: "La flamme les tua",
      explanation: "Daniel 3v22"
    },
    {
      question: "Quelle était l'attitude du roi Nebucadnetsar après que ces trois hommes tombèrent dans la fournaise ?",
      options: [
        "Il partit festoyer",
        "Alors le roi Nebucadnetsar fut effrayé, et se leva précipitamment",
        "Il se mit à rire",
        "Il devint triste"
      ],
      correctAnswer: "Alors le roi Nebucadnetsar fut effrayé, et se leva précipitamment",
      explanation: "Daniel 3v24"
    },
    {
      question: "Que vit le roi Nebucadnetsar lorsqu'il regarda dans la fournaise ardente ?",
      options: [
        "Trois hommes brûlants",
        "Quatre hommes sans liens, qui marchent au milieu du feu, et qui n'ont point de mal ; et la figure du quatrième ressemble à celle d'un fils des dieux",
        "Personne",
        "Des anges"
      ],
      correctAnswer: "Quatre hommes sans liens, qui marchent au milieu du feu, et qui n'ont point de mal ; et la figure du quatrième ressemble à celle d'un fils des dieux",
      explanation: "Daniel 3v25"
    },
    {
      question: "Comment le roi Nebucadnetsar appela-t-il Schadrac, Méschac et Abed-Nego voyant que le feu n'avait pas de pouvoir sur eux ?",
      options: [
        "Traîtres",
        "Serviteurs du Dieu suprême",
        "Amis",
        "Sages"
      ],
      correctAnswer: "Serviteurs du Dieu suprême",
      explanation: "Daniel 3v26"
    }
  ],
  4: [
    {
      question: "Quel mot de salutation le roi Nebucadnetsar adressa à tous les peuples, aux nations, aux hommes de toutes langues, qui habitent sur toute la terre ?",
      options: [
        "Salut à tous",
        "Que la paix vous soit donnée avec abondance !",
        "Bonjour à tous",
        "Soyez les bienvenus"
      ],
      correctAnswer: "Que la paix vous soit donnée avec abondance !",
      explanation: "Daniel 4v1"
    },
    {
      question: "A qui le roi Nebucadnetsar a fait connaître les signes et les prodiges que le Dieu suprême a opérés à mon égard ?",
      options: [
        "Aux Juifs seulement",
        "A tous les peuples, aux nations, aux hommes de toutes langues, qui habitent sur toute la terre",
        "Aux sages de Babylone",
        "A Daniel seulement"
      ],
      correctAnswer: "A tous les peuples, aux nations, aux hommes de toutes langues, qui habitent sur toute la terre",
      explanation: "Daniel 4v1-2"
    },
    {
      question: "Qui a opéré les signes et les prodiges à l'égard du roi Nebucadnetsar ?",
      options: [
        "Les magiciens",
        "Le Dieu suprême",
        "Les astrologues",
        "Daniel"
      ],
      correctAnswer: "Le Dieu suprême",
      explanation: "Daniel 4v2"
    },
    {
      question: "Combien de songes eut le roi Nebucadnetsar ?",
      options: [
        "Un seul",
        "Deux songes",
        "Trois songes",
        "Plusieurs songes"
      ],
      correctAnswer: "Deux songes",
      explanation: "Daniel 2 et Daniel 4"
    },
    {
      question: "Où le roi Nebucadnetsar eut-il son second songe ?",
      options: [
        "Dans le champ de bataille",
        "Dans sa maison",
        "Au temple",
        "Dans le jardin"
      ],
      correctAnswer: "Dans sa maison",
      explanation: "Daniel 4v4"
    },
    {
      question: "Comment était le roi Nebucadnetsar dans sa maison lorsqu'il eut son second songe ?",
      options: [
        "Nebucadnetsar vivait tranquille dans sa maison, et heureux dans son palais",
        "Il était malade",
        "Il était triste",
        "Il était en colère"
      ],
      correctAnswer: "Nebucadnetsar vivait tranquille dans sa maison, et heureux dans son palais",
      explanation: "Daniel 4v4"
    },
    {
      question: "Comment était le second songe de Nebucadnetsar ?",
      options: [
        "Le songe était joyeux",
        "Le songe était effrayant",
        "Le songe était confus",
        "Le songe était ordinaire"
      ],
      correctAnswer: "Le songe était effrayant",
      explanation: "Daniel 4v5"
    },
    {
      question: "Qu'est-ce qui a rempli d'épouvante le roi Nebucadnetsar lors de son second songe ?",
      options: [
        "Les bruits extérieurs",
        "Les pensées dont il était poursuivi sur sa couche et les visions de son esprit",
        "La peur des ennemis",
        "La maladie"
      ],
      correctAnswer: "Les pensées dont il était poursuivi sur sa couche et les visions de son esprit",
      explanation: "Daniel 4v5"
    },
    {
      question: "Qui Nebucadnetsar ordonnai qu'on fît venir devant lui pour lui donner l'explication du songe ?",
      options: [
        "Daniel seulement",
        "Tous les sages de Babylone",
        "Les Chaldéens seulement",
        "Les devins seulement"
      ],
      correctAnswer: "Tous les sages de Babylone",
      explanation: "Daniel 4v6"
    },
    {
      question: "Qui vinrent devant le roi Nebucadnetsar et ne lui donnèrent point l'explication du songe ?",
      options: [
        "Les astrologues, les Chaldéens et les devins",
        "Daniel et ses compagnons",
        "Les princes du royaume",
        "Les prêtres"
      ],
      correctAnswer: "Les astrologues, les Chaldéens et les devins",
      explanation: "Daniel 4v7"
    },
    {
      question: "Qui vint en dernier lieu devant Nebucadnetsar et lui donna l'explication du songe ?",
      options: [
        "Le chef des eunuques",
        "Daniel, nommé Beltschatsar d'après le nom du dieu de Nebucadnetsar, et qui a en lui l'esprit des dieux saints",
        "Schadrac",
        "Un ange"
      ],
      correctAnswer: "Daniel, nommé Beltschatsar d'après le nom du dieu de Nebucadnetsar, et qui a en lui l'esprit des dieux saints",
      explanation: "Daniel 4v8"
    },
    {
      question: "Selon le second songe, que vit Nebucadnetsar au milieu de la terre ?",
      options: [
        "Une grande statue",
        "Un arbre d'une grande hauteur",
        "Une bête terrible",
        "Une montagne"
      ],
      correctAnswer: "Un arbre d'une grande hauteur",
      explanation: "Daniel 4v10"
    },
    {
      question: "Que devint l'arbre que vit Nebucadnetsar au milieu de la terre ?",
      options: [
        "Il resta petit",
        "Cet arbre était devenu grand et fort, sa cime s'élevait jusqu'aux cieux, et on le voyait des extrémités de toute la terre",
        "Il se flétrit",
        "Il fut coupé"
      ],
      correctAnswer: "Cet arbre était devenu grand et fort, sa cime s'élevait jusqu'aux cieux, et on le voyait des extrémités de toute la terre",
      explanation: "Daniel 4v11"
    },
    {
      question: "Comment était le feuillage de l'arbre que vit Nebucadnetsar au milieu de la terre ?",
      options: [
        "Son feuillage était laid",
        "Son feuillage était beau",
        "Il n'avait pas de feuillage",
        "Son feuillage était sec"
      ],
      correctAnswer: "Son feuillage était beau",
      explanation: "Daniel 4v12"
    },
    {
      question: "Comment étaient les fruits de l'arbre que vit Nebucadnetsar au milieu de la terre ?",
      options: [
        "Ses fruits étaient rares",
        "Ses fruits abondants",
        "Il n'avait pas de fruits",
        "Ses fruits étaient amers"
      ],
      correctAnswer: "Ses fruits abondants",
      explanation: "Daniel 4v12"
    },
    {
      question: "Que portait l'arbre que vit Nebucadnetsar au milieu de la terre ?",
      options: [
        "Il portait des épines",
        "Il portait de la nourriture pour tous",
        "Il ne portait rien",
        "Il portait des fleurs seulement"
      ],
      correctAnswer: "Il portait de la nourriture pour tous",
      explanation: "Daniel 4v12"
    },
    {
      question: "Que fera-t-on au tronc d'arbre après que le grand arbre soit coupé selon la sentence de Dieu ?",
      options: [
        "On le brûlera",
        "Mais laissez en terre le tronc où se trouvent les racines, et liez-le avec des chaînes de fer et d'airain, parmi l'herbe des champs",
        "On l'emportera",
        "On l'ignorera"
      ],
      correctAnswer: "Mais laissez en terre le tronc où se trouvent les racines, et liez-le avec des chaînes de fer et d'airain, parmi l'herbe des champs",
      explanation: "Daniel 4v15"
    },
    {
      question: "Pendant combien de temps la sentence durera sur l'arbre que vit Nebucadnetsar ?",
      options: [
        "Trois temps",
        "Sept temps",
        "Dix temps",
        "Douze temps"
      ],
      correctAnswer: "Sept temps",
      explanation: "Daniel 4v16"
    },
    {
      question: "De qui est le décret portant sentence sur l'arbre que vit Nebucadnetsar ?",
      options: [
        "Du roi seulement",
        "Cette sentence est un décret de ceux qui veillent, cette résolution est un ordre des saints",
        "De Daniel",
        "Des Chaldéens"
      ],
      correctAnswer: "Cette sentence est un décret de ceux qui veillent, cette résolution est un ordre des saints",
      explanation: "Daniel 4v17"
    },
    {
      question: "Comment fut Daniel après avoir entendu le second songe de Nebucadnetsar ?",
      options: [
        "Daniel fut joyeux",
        "Daniel fut un moment stupéfait, et ses pensées le troublaient",
        "Daniel fut indifférent",
        "Daniel fut en colère"
      ],
      correctAnswer: "Daniel fut un moment stupéfait, et ses pensées le troublaient",
      explanation: "Daniel 4v19"
    },
    {
      question: "D'après l'explication de Daniel au second songe de Nebucadnetsar, qui est le grand arbre ?",
      options: [
        "Le royaume de Juda",
        "Nebucadnetsar",
        "Babylone",
        "Le temple de Jérusalem"
      ],
      correctAnswer: "Nebucadnetsar",
      explanation: "Daniel 4v22"
    },
    {
      question: "Quel conseil Daniel donna à Nebucadnetsar ?",
      options: [
        "Conseil de fuir",
        "Conseil : « Mets un terme à tes péchés en pratiquant la justice, et à tes iniquités en usant de compassion envers les malheureux, et ton bonheur pourra se prolonger »",
        "Conseil de faire la guerre",
        "Conseil de construire plus de statues"
      ],
      correctAnswer: "Conseil : « Mets un terme à tes péchés en pratiquant la justice, et à tes iniquités en usant de compassion envers les malheureux, et ton bonheur pourra se prolonger »",
      explanation: "Daniel 4v27"
    },
    {
      question: "Après le songe et son explication, au bout de combien de temps toutes les choses se sont accomplies sur le roi Nebucadnetsar ?",
      options: [
        "Au bout d'un an",
        "Au bout de douze mois",
        "Au bout de trois ans",
        "Immédiatement"
      ],
      correctAnswer: "Au bout de douze mois",
      explanation: "Daniel 4v29"
    },
    {
      question: "Où était Nebucadnetsar lorsqu'il commit un autre péché après le conseil de Daniel ?",
      options: [
        "Dans la vallée de Dura",
        "Nebucadnetsar se promenait dans le palais royal à Babylone",
        "Au temple",
        "Au jardin"
      ],
      correctAnswer: "Nebucadnetsar se promenait dans le palais royal à Babylone",
      explanation: "Daniel 4v29"
    },
    {
      question: "A quel moment Nebucadnetsar entendit la voix descendue du Ciel pour exécuter la sentence ?",
      options: [
        "Pendant son sommeil",
        "Pendant qu'il priait",
        "Pendant que la parole d'orgueil était encore dans la bouche du roi Nebucadnetsar",
        "Le lendemain"
      ],
      correctAnswer: "Pendant que la parole d'orgueil était encore dans la bouche du roi Nebucadnetsar",
      explanation: "Daniel 4v31"
    },
    {
      question: "Que fit Nebucadnetsar et que lui revint à après le temps marqué pour la sentence ?",
      options: [
        "Il mourut",
        "Nebucadnetsar leva les yeux vers le ciel, et la raison lui revint",
        "Il resta fou",
        "Il s'enfuit"
      ],
      correctAnswer: "Nebucadnetsar leva les yeux vers le ciel, et la raison lui revint",
      explanation: "Daniel 4v34"
    }
  ],
  5: [
    {
      question: "Qui succéda au roi Nebucadnetsar ?",
      options: [
        "Le roi Darius",
        "Le roi Belschatsar",
        "Le roi Cyrus",
        "Le roi Xerxès"
      ],
      correctAnswer: "Le roi Belschatsar",
      explanation: "Daniel 5v1"
    },
    {
      question: "A qui et à combien le roi Belschatsar donna-t-il un grand festin ?",
      options: [
        "A ses grands au nombre de cent",
        "A ses grands au nombre de mille",
        "A ses femmes seulement",
        "A tout le peuple"
      ],
      correctAnswer: "A ses grands au nombre de mille",
      explanation: "Daniel 5v1"
    },
    {
      question: "Que donna le roi Belschatsar à ses grands ?",
      options: [
        "De l'or et de l'argent",
        "Un grand festin",
        "Des terres",
        "Des présents"
      ],
      correctAnswer: "Un grand festin",
      explanation: "Daniel 5v1"
    },
    {
      question: "Que but Belschatsar en présence de ses grands ?",
      options: [
        "De l'eau seulement",
        "Belschatsar but du vin en leur présence",
        "Du lait",
        "Du jus de fruit"
      ],
      correctAnswer: "Belschatsar but du vin en leur présence",
      explanation: "Daniel 5v1"
    },
    {
      question: "Que fit apporter Belschatsar lorsqu'il eut goûté du vin en présence de ses grands ? Et pour quel but ?",
      options: [
        "Les trésors du palais pour les montrer",
        "Les vases d'or et d'argent que son père Nebucadnetsar avait enlevés du temple de Jérusalem, afin que le roi et ses grands, ses femmes et ses concubines, s'en servissent pour boire",
        "Les livres de sagesse",
        "Les instruments de musique"
      ],
      correctAnswer: "Les vases d'or et d'argent que son père Nebucadnetsar avait enlevés du temple de Jérusalem, afin que le roi et ses grands, ses femmes et ses concubines, s'en servissent pour boire",
      explanation: "Daniel 5v2"
    },
    {
      question: "Qui sont ceux qui s'en servirent des vases d'or et d'argent du temple de Jérusalem pour boire ?",
      options: [
        "Le roi seulement",
        "Le roi et ses grands, ses femmes et ses concubines",
        "Les grands seulement",
        "Les prêtres"
      ],
      correctAnswer: "Le roi et ses grands, ses femmes et ses concubines",
      explanation: "Daniel 5v2 et 3"
    },
    {
      question: "Qui le roi et ses convives louèrent-ils lorsqu'ils burent du vin ?",
      options: [
        "Le Dieu d'Israël",
        "Les dieux d'or, d'argent, d'airain, de fer, de bois et de pierre",
        "Le roi Belschatsar",
        "Nebucadnetsar"
      ],
      correctAnswer: "Les dieux d'or, d'argent, d'airain, de fer, de bois et de pierre",
      explanation: "Daniel 5v4"
    },
    {
      question: "Qu'est-ce qui apparurent lorsque Belschatsar et ses convives burent dans les vases d'or et d'argent du temple de Jérusalem ?",
      options: [
        "Un ange",
        "En ce moment, apparurent les doigts d'une main d'homme, et ils écrivirent, en face du chandelier, sur la chaux de la muraille du palais royal. Le roi vit cette extrémité de main qui écrivait",
        "Une lumière éclatante",
        "Une voix du ciel"
      ],
      correctAnswer: "En ce moment, apparurent les doigts d'une main d'homme, et ils écrivirent, en face du chandelier, sur la chaux de la muraille du palais royal. Le roi vit cette extrémité de main qui écrivait",
      explanation: "Daniel 5v5"
    },
    {
      question: "Où les doigts d'une main d'homme ont-ils écrits lors du sale festin du roi Belschatsar ?",
      options: [
        "Sur le sol",
        "Sur une tablette d'argile",
        "En face du chandelier, sur la chaux de la muraille du palais royal",
        "Sur le plafond"
      ],
      correctAnswer: "En face du chandelier, sur la chaux de la muraille du palais royal",
      explanation: "Daniel 5v5"
    },
    {
      question: "Qui vit les doigts d'une main d'homme qui ont écrits lors du sale festin du roi Belschatsar ?",
      options: [
        "Tous les convives",
        "Le roi Belschatsar vit cette extrémité de main qui écrivait",
        "Daniel seulement",
        "Les mages"
      ],
      correctAnswer: "Le roi Belschatsar vit cette extrémité de main qui écrivait",
      explanation: "Daniel 5v5"
    },
    {
      question: "Quel fut l'état du roi Belschatsar lorsqu'il vit cette extrémité de main qui écrivait ?",
      options: [
        "Il fut joyeux",
        "Alors le roi changea de couleur, et ses pensées le troublèrent ; les jointures de ses reins se relâchèrent, et ses genoux se heurtèrent l'un contre l'autre",
        "Il fut indifférent",
        "Il fut en colère"
      ],
      correctAnswer: "Alors le roi changea de couleur, et ses pensées le troublèrent ; les jointures de ses reins se relâchèrent, et ses genoux se heurtèrent l'un contre l'autre",
      explanation: "Daniel 5v6"
    },
    {
      question: "Comment cria le roi Belschatsar lorsqu'il vit cette extrémité de main qui écrivait ?",
      options: [
        "Doucement",
        "Le roi cria avec force",
        "Il ne cria pas",
        "Il chuchota"
      ],
      correctAnswer: "Le roi cria avec force",
      explanation: "Daniel 5v7"
    },
    {
      question: "Qui le roi Belschatsar fit-il venir lorsqu'il vit cette extrémité de main qui écrivait ?",
      options: [
        "Les soldats",
        "Les astrologues, les Chaldéens et les devins",
        "Daniel seulement",
        "Les princes"
      ],
      correctAnswer: "Les astrologues, les Chaldéens et les devins",
      explanation: "Daniel 5v7"
    },
    {
      question: "Que promit le roi Belschatsar à quiconque lira l'écriture et en donnera l'explication ?",
      options: [
        "De l'or seulement",
        "Quiconque lira cette écriture et m'en donnera l'explication sera revêtu de pourpre, portera un collier d'or à son cou, et aura la troisième place dans le gouvernement du royaume",
        "La liberté",
        "Un poste de chef"
      ],
      correctAnswer: "Quiconque lira cette écriture et m'en donnera l'explication sera revêtu de pourpre, portera un collier d'or à son cou, et aura la troisième place dans le gouvernement du royaume",
      explanation: "Daniel 5v7"
    },
    {
      question: "Les sages de Babylone ont-ils pu lire et expliquer l'écriture sur la muraille ?",
      options: [
        "Oui, immédiatement",
        "Non. Tous les sages du roi entrèrent ; mais ils ne purent pas lire l'écriture et en donner au roi l'explication",
        "Certains ont pu",
        "Après un long temps"
      ],
      correctAnswer: "Non. Tous les sages du roi entrèrent ; mais ils ne purent pas lire l'écriture et en donner au roi l'explication",
      explanation: "Daniel 5v8"
    },
    {
      question: "Qu'eut Belschatsar lorsque les sages de Babylone n'ont pas pu lire et expliquer l'écriture sur la muraille ?",
      options: [
        "Il fut rassuré",
        "Sur quoi le roi Belschatsar, fut très effrayé, il changea de couleur, et ses grands furent consternés",
        "Il fut en colère",
        "Il fut indifférent"
      ],
      correctAnswer: "Sur quoi le roi Belschatsar, fut très effrayé, il changea de couleur, et ses grands furent consternés",
      explanation: "Daniel 5v9"
    },
    {
      question: "Qui parla de Daniel au roi Belschatsar ?",
      options: [
        "Le chef des eunuques",
        "La reine",
        "Un devin",
        "Un soldat"
      ],
      correctAnswer: "La reine",
      explanation: "Daniel 5v10"
    },
    {
      question: "Que trouva-t-on chez Daniel selon Daniel 5v11 ?",
      options: [
        "De la richesse",
        "Des lumières, de l'intelligence, et une sagesse semblable à la sagesse des dieux",
        "Du pouvoir",
        "De la force"
      ],
      correctAnswer: "Des lumières, de l'intelligence, et une sagesse semblable à la sagesse des dieux",
      explanation: "Daniel 5v11"
    },
    {
      question: "A quelle place Nebucadnetsar établit-il Daniel ?",
      options: [
        "Chef des soldats",
        "Le roi Nebucadnetsar établit Daniel chef des magiciens, des astrologues, des Chaldéens, des devins",
        "Chef des trésoriers",
        "Chef des bâtisseurs"
      ],
      correctAnswer: "Le roi Nebucadnetsar établit Daniel chef des magiciens, des astrologues, des Chaldéens, des devins",
      explanation: "Daniel 5v11"
    },
    {
      question: "Que trouva-t-on chez Daniel selon Daniel 5v12 ?",
      options: [
        "Un esprit supérieur, de la science et de l'intelligence, la faculté d'interpréter les songes, d'expliquer les énigmes, et de résoudre les questions difficiles",
        "De la richesse seulement",
        "Du pouvoir seulement",
        "De la force seulement"
      ],
      correctAnswer: "Un esprit supérieur, de la science et de l'intelligence, la faculté d'interpréter les songes, d'expliquer les énigmes, et de résoudre les questions difficiles",
      explanation: "Daniel 5v12"
    },
    {
      question: "Alors Daniel fut introduit devant le roi. Quelle question Belschatsar posa-t-il à Daniel ?",
      options: [
        "Que veux-tu ?",
        "Es-tu ce Daniel, l'un des captifs de Juda, que le roi, mon père, a amenés de Juda ?",
        "Peux-tu m'aider ?",
        "Connais-tu l'écriture ?"
      ],
      correctAnswer: "Es-tu ce Daniel, l'un des captifs de Juda, que le roi, mon père, a amenés de Juda ?",
      explanation: "Daniel 5v13"
    },
    {
      question: "Que répondit Daniel au roi Belschatsar au sujet de ses présents ?",
      options: [
        "Je les accepte avec joie",
        "Daniel répondit en présence du roi : Garde tes dons, et accorde à un autre tes présents ; je lirai néanmoins l'écriture au roi, et je lui en donnerai l'explication",
        "Donne-moi plus",
        "Je ne veux rien"
      ],
      correctAnswer: "Daniel répondit en présence du roi : Garde tes dons, et accorde à un autre tes présents ; je lirai néanmoins l'écriture au roi, et je lui en donnerai l'explication",
      explanation: "Daniel 5v17"
    },
    {
      question: "Que donna le Dieu Suprême à Nebucadnetsar ?",
      options: [
        "La sagesse seulement",
        "L'empire, la grandeur, la gloire et la magnificence",
        "La richesse seulement",
        "La force seulement"
      ],
      correctAnswer: "L'empire, la grandeur, la gloire et la magnificence",
      explanation: "Daniel 5v18"
    },
    {
      question: "Qui sont ceux qui étaient dans la crainte et tremblaient devant Nebucadnetsar ?",
      options: [
        "Les Juifs seulement",
        "Tous les peuples, les nations, les hommes de toutes langues",
        "Les Babyloniens seulement",
        "Les soldats"
      ],
      correctAnswer: "Tous les peuples, les nations, les hommes de toutes langues",
      explanation: "Daniel 5v19"
    },
    {
      question: "A quel moment le roi Nebucadnetsar fut-il précipité de son trône royal et dépouillé de sa gloire ?",
      options: [
        "Quand il était jeune",
        "Lorsque son cœur s'éleva et que son esprit s'endurcit jusqu'à l'arrogance",
        "Quand il est mort",
        "Quand il était malade"
      ],
      correctAnswer: "Lorsque son cœur s'éleva et que son esprit s'endurcit jusqu'à l'arrogance",
      explanation: "Daniel 5v20"
    },
    {
      question: "Pourquoi Nebucadnetsar fut-il chassé du milieu des enfants des hommes ?",
      options: [
        "Parce qu'il était vieux",
        "Parce que son cœur s'éleva et que son esprit s'endurcit jusqu'à l'arrogance",
        "Parce qu'il était malade",
        "Parce qu'il a perdu une bataille"
      ],
      correctAnswer: "Parce que son cœur s'éleva et que son esprit s'endurcit jusqu'à l'arrogance",
      explanation: "Daniel 5v20"
    },
    {
      question: "Pourquoi le Dieu Suprême a-t-il envoyé cette extrémité de main qui a tracé cette écriture ?",
      options: [
        "Pour bénir Belschatsar",
        "Voir Daniel 5v23",
        "Pour avertir le peuple",
        "Pour montrer sa puissance"
      ],
      correctAnswer: "Voir Daniel 5v23",
      explanation: "Daniel 5v23"
    },
    {
      question: "Quelle est l'écriture sur la Muraille ?",
      options: [
        "MENE, MENE, TEKEL, UPHARSIN",
        "Compté, compté, pesé, et divisé",
        "Tu es trouvé léger",
        "Ton royaume est divisé"
      ],
      correctAnswer: "Compté, compté, pesé, et divisé",
      explanation: "Daniel 5v25"
    },
    {
      question: "Quelle est l'explication de l'écriture sur la muraille ?",
      options: [
        "Dieu t'a béni",
        "Compté : Dieu a compté ton règne, et y a mis fin. Pesé : Tu as été pesé dans la balance, et tu as été trouvé léger. Divisé : Ton royaume sera divisé, et donné aux Mèdes et aux Perses",
        "Tu règneras longtemps",
        "Ton royaume sera fort"
      ],
      correctAnswer: "Compté : Dieu a compté ton règne, et y a mis fin. Pesé : Tu as été pesé dans la balance, et tu as été trouvé léger. Divisé : Ton royaume sera divisé, et donné aux Mèdes et aux Perses",
      explanation: "Daniel 5v26-28"
    },
    {
      question: "Que fit le roi Belschatsar dès que Daniel eut lu l'écriture et en donna l'explication ?",
      options: [
        "Il ordonna de tuer Daniel",
        "Aussitôt Belschatsar donna des ordres, et l'on revêtit Daniel de pourpre, on lui mit au cou un collier d'or, et on publia qu'il aurait la troisième place dans le gouvernement du royaume",
        "Il ignora Daniel",
        "Il se moqua de Daniel"
      ],
      correctAnswer: "Aussitôt Belschatsar donna des ordres, et l'on revêtit Daniel de pourpre, on lui mit au cou un collier d'or, et on publia qu'il aurait la troisième place dans le gouvernement du royaume",
      explanation: "Daniel 5v29"
    },
    {
      question: "Qu'arriva-t-il à Belschatsar la nuit où Daniel lut l'écriture et en donna l'explication ?",
      options: [
        "Il s'enfuit",
        "Belschatsar, roi des Chaldéens, fut tué",
        "Il devint fou",
        "Il se repentit"
      ],
      correctAnswer: "Belschatsar, roi des Chaldéens, fut tué",
      explanation: "Daniel 5v30"
    },
    {
      question: "Quand Belschatsar fut-il tué ?",
      options: [
        "Le lendemain",
        "La même nuit où Daniel lut l'écriture et en donna l'explication",
        "Une semaine après",
        "Un mois après"
      ],
      correctAnswer: "La même nuit où Daniel lut l'écriture et en donna l'explication",
      explanation: "Daniel 5v30"
    },
    {
      question: "Qui succéda au roi Belschatsar ?",
      options: [
        "Cyrus",
        "Darius, le Mède",
        "Nebucadnetsar",
        "Un autre Chaldéen"
      ],
      correctAnswer: "Darius, le Mède",
      explanation: "Daniel 5v31"
    },
    {
      question: "A quel âge Darius, le mède, devint roi ?",
      options: [
        "Cinquante ans",
        "Soixante-deux ans",
        "Soixante-dix ans",
        "Quarante ans"
      ],
      correctAnswer: "Soixante-deux ans",
      explanation: "Daniel 5v31"
    }
  ],
  6: [
    {
      question: "Combien de satrapes le roi Darius trouva bon d'établir sur le royaume ?",
      options: [
        "Soixante satrapes",
        "Cent vingt satrapes",
        "Deux cents satrapes",
        "Cinquante satrapes"
      ],
      correctAnswer: "Cent vingt satrapes",
      explanation: "Daniel 6v1"
    },
    {
      question: "A qui les satrapes devraient rendre compte ?",
      options: [
        "Au roi directement",
        "Au trois chefs qui sont à leur tête",
        "A Daniel seulement",
        "Au peuple"
      ],
      correctAnswer: "Au trois chefs qui sont à leur tête",
      explanation: "Daniel 6v2"
    },
    {
      question: "Combien de chefs étaient établis à la tête des satrapes ?",
      options: [
        "Un chef",
        "Trois chefs, au nombre desquels était Daniel",
        "Cinq chefs",
        "Dix chefs"
      ],
      correctAnswer: "Trois chefs, au nombre desquels était Daniel",
      explanation: "Daniel 6v2"
    },
    {
      question: "Pourquoi Daniel surpassait les chefs et les satrapes ?",
      options: [
        "Parce qu'il était plus âgé",
        "Parce qu'il y avait en lui un esprit supérieur",
        "Parce qu'il était parent du roi",
        "Parce qu'il était plus riche"
      ],
      correctAnswer: "Parce qu'il y avait en lui un esprit supérieur",
      explanation: "Daniel 6v3"
    },
    {
      question: "Sur quoi le roi Darius pensait établir Daniel parce qu'il y avait en lui un esprit supérieur ?",
      options: [
        "Sur la ville de Babylone",
        "Sur tout le royaume",
        "Sur les satrapes seulement",
        "Sur les trésors"
      ],
      correctAnswer: "Sur tout le royaume",
      explanation: "Daniel 6v3"
    },
    {
      question: "Qui sont ceux qui cherchaient à accuser Daniel ?",
      options: [
        "Le peuple",
        "Les chefs et les satrapes",
        "Les prêtres",
        "Les soldats"
      ],
      correctAnswer: "Les chefs et les satrapes",
      explanation: "Daniel 6v4"
    },
    {
      question: "En quoi les chefs et les satrapes cherchèrent une occasion d'accuser Daniel ?",
      options: [
        "En ce qui concernait sa religion",
        "En ce qui concernait les affaires du royaume",
        "En ce qui concernait sa famille",
        "En ce qui concernait sa richesse"
      ],
      correctAnswer: "En ce qui concernait les affaires du royaume",
      explanation: "Daniel 6v4"
    },
    {
      question: "Pourquoi les chefs et les satrapes ne purent trouver aucune occasion, ni aucune chose à reprendre chez Daniel ?",
      options: [
        "Parce qu'il était riche",
        "Parce qu'il était fidèle, et qu'on n'apercevait chez lui ni faute, ni rien de mauvais",
        "Parce qu'il était protégé par le roi",
        "Parce qu'il se cachait bien"
      ],
      correctAnswer: "Parce qu'il était fidèle, et qu'on n'apercevait chez lui ni faute, ni rien de mauvais",
      explanation: "Daniel 6v4"
    },
    {
      question: "De quelle façon les chefs et les satrapes se rendirent auprès du roi ?",
      options: [
        "Secrètement",
        "Ces chefs et ces satrapes se rendirent tumultueusement auprès du roi",
        "Individuellement",
        "Par écrit"
      ],
      correctAnswer: "Ces chefs et ces satrapes se rendirent tumultueusement auprès du roi",
      explanation: "Daniel 6v6"
    },
    {
      question: "Qui sont ceux qui sont d'avis qu'il soit publié un édit royal, avec une défense sévère ?",
      options: [
        "Le roi seulement",
        "Tous les chefs du royaume, les intendants, les satrapes, les conseillers, et les gouverneurs",
        "Daniel seulement",
        "Le peuple"
      ],
      correctAnswer: "Tous les chefs du royaume, les intendants, les satrapes, les conseillers, et les gouverneurs",
      explanation: "Daniel 6v7"
    },
    {
      question: "Combien de jours devra durer l'édit royal, avec une défense sévère ?",
      options: [
        "Sept jours",
        "Dans l'espace de trente jours",
        "Quarante jours",
        "Un an"
      ],
      correctAnswer: "Dans l'espace de trente jours",
      explanation: "Daniel 6v7"
    },
    {
      question: "Que portait l'édit royal, avec une défense sévère ?",
      options: [
        "Portait que tous doivent adorer le roi",
        "Portait que quiconque, dans l'espace de trente jours, adressera des prières à quelque dieu ou à quelque homme, excepté à toi, ô roi, sera jeté dans la fosse aux lions",
        "Portait que Daniel doit être exilé",
        "Portait que tous doivent parler la langue des Mèdes"
      ],
      correctAnswer: "Portait que quiconque, dans l'espace de trente jours, adressera des prières à quelque dieu ou à quelque homme, excepté à toi, ô roi, sera jeté dans la fosse aux lions",
      explanation: "Daniel 6v7"
    },
    {
      question: "Comment est la loi des Mèdes et des Perses ?",
      options: [
        "Elle peut être changée",
        "La loi des Mèdes et des Perses est immuable",
        "Elle est flexible",
        "Elle est temporaire"
      ],
      correctAnswer: "La loi des Mèdes et des Perses est immuable",
      explanation: "Daniel 6v8"
    },
    {
      question: "Que fit Daniel lorsqu'il sut que le décret était écrit ?",
      options: [
        "Il cessa de prier",
        "Daniel se retira dans sa maison, où les fenêtres de la chambre supérieure étaient ouvertes dans la direction de Jérusalem ; et trois fois le jour il se mettait à genoux, il priait, et il louait son Dieu, comme il le faisait auparavant",
        "Il s'enfuit",
        "Il alla voir le roi"
      ],
      correctAnswer: "Daniel se retira dans sa maison, où les fenêtres de la chambre supérieure étaient ouvertes dans la direction de Jérusalem ; et trois fois le jour il se mettait à genoux, il priait, et il louait son Dieu, comme il le faisait auparavant",
      explanation: "Daniel 6v10"
    },
    {
      question: "Dans quelle direction étaient ouvertes les fenêtres de la chambre supérieure de Daniel ?",
      options: [
        "Vers Babylone",
        "Les fenêtres de la chambre supérieure étaient ouvertes dans la direction de Jérusalem",
        "Vers l'est",
        "Vers le palais"
      ],
      correctAnswer: "Les fenêtres de la chambre supérieure étaient ouvertes dans la direction de Jérusalem",
      explanation: "Daniel 6v10"
    },
    {
      question: "Combien de fois Daniel priait même lorsqu'il sut que le décret était écrit ?",
      options: [
        "Une fois par jour",
        "Trois fois le jour Daniel se mettait à genoux, il priait, et il louait son Dieu, comme il le faisait auparavant",
        "Cinq fois par jour",
        "Il ne priait plus"
      ],
      correctAnswer: "Trois fois le jour Daniel se mettait à genoux, il priait, et il louait son Dieu, comme il le faisait auparavant",
      explanation: "Daniel 6v10"
    },
    {
      question: "Que trouvèrent les chefs et les satrapes lorsqu'ils entrèrent tumultueusement chez Daniel ?",
      options: [
        "Daniel qui dormait",
        "Ils trouvèrent Daniel qui priait et invoquait son Dieu",
        "Daniel qui mangeait",
        "Daniel qui lisait"
      ],
      correctAnswer: "Ils trouvèrent Daniel qui priait et invoquait son Dieu",
      explanation: "Daniel 6v11"
    },
    {
      question: "Quel était le sentiment du roi Darius lorsqu'il entendit les chefs et les satrapes dénoncer Daniel ?",
      options: [
        "Le roi Darius fut très joyeux",
        "Le roi Darius fut très affligé",
        "Le roi Darius fut en colère",
        "Le roi Darius fut indifférent"
      ],
      correctAnswer: "Le roi Darius fut très affligé",
      explanation: "Daniel 6v14"
    },
    {
      question: "Quel ordre donna le roi Darius voyant qu'il ne pouvait pas sauver Daniel ?",
      options: [
        "Il ordonna de libérer Daniel",
        "Alors le roi donna l'ordre qu'on amenât Daniel, et qu'on le jetât dans la fosse aux lions",
        "Il ordonna d'emprisonner les accusateurs",
        "Il ordonna de changer la loi"
      ],
      correctAnswer: "Alors le roi donna l'ordre qu'on amenât Daniel, et qu'on le jetât dans la fosse aux lions",
      explanation: "Daniel 6v16"
    },
    {
      question: "Quelle prière fit le roi Darius voyant qu'il ne pouvait pas sauver Daniel ?",
      options: [
        "Que Daniel meure rapidement",
        "Le roi prit la parole et dit à Daniel : Puisse ton Dieu, que tu sers avec persévérance, te délivrer !",
        "Que les lions aient faim",
        "Que Daniel se défende"
      ],
      correctAnswer: "Le roi prit la parole et dit à Daniel : Puisse ton Dieu, que tu sers avec persévérance, te délivrer !",
      explanation: "Daniel 6v16"
    },
    {
      question: "Que mit-on sur l'ouverture de la fosse aux lions après avoir jeté Daniel ?",
      options: [
        "Une grille",
        "Une pierre",
        "Une porte",
        "Rien"
      ],
      correctAnswer: "Une pierre",
      explanation: "Daniel 6v17"
    },
    {
      question: "Qui scella la pierre mise sur l'ouverture de la fosse aux lions après avoir jeté Daniel ?",
      options: [
        "Les soldats",
        "Le roi Darius",
        "Les chefs",
        "Daniel lui-même"
      ],
      correctAnswer: "Le roi Darius",
      explanation: "Daniel 6v17"
    },
    {
      question: "Comment était le roi Darius lorsqu'il se rendit dans son palais après que Daniel soit jeté dans la fosse aux lions ?",
      options: [
        "Le roi Darius passa la nuit à festoyer",
        "Le roi Darius passa la nuit à jeun, il ne fit point venir de concubine auprès de lui, et il ne put se livrer au sommeil",
        "Le roi Darius dormit paisiblement",
        "Le roi Darius partit en voyage"
      ],
      correctAnswer: "Le roi Darius passa la nuit à jeun, il ne fit point venir de concubine auprès de lui, et il ne put se livrer au sommeil",
      explanation: "Daniel 6v18"
    },
    {
      question: "A quel moment le roi Darius alla précipitamment à la fosse aux lions ?",
      options: [
        "Au milieu de la nuit",
        "Au point du jour, avec l'aurore",
        "Le lendemain soir",
        "Une semaine après"
      ],
      correctAnswer: "Au point du jour, avec l'aurore",
      explanation: "Daniel 6v19"
    },
    {
      question: "Avec quelle voix le roi Darius appela Daniel lorsqu'il alla précipitamment à la fosse aux lions ?",
      options: [
        "Avec une voix joyeuse",
        "Le roi Darius appela Daniel d'une voix triste",
        "Avec une voix forte",
        "Avec une voix faible"
      ],
      correctAnswer: "Le roi Darius appela Daniel d'une voix triste",
      explanation: "Daniel 6v20"
    },
    {
      question: "Que répondit Daniel de la fosse aux lions au roi Darius ?",
      options: [
        "Je meurs",
        "21 Et Daniel dit au roi : Roi, vis éternellement ? 22 Mon Dieu a envoyé son ange et fermé la gueule des lions, qui ne m'ont fait aucun mal, parce que j'ai été trouvé innocent devant lui ; et devant toi non plus, ô roi, je n'ai rien fait de mauvais",
        "Aide-moi",
        "Les lions vont me manger"
      ],
      correctAnswer: "21 Et Daniel dit au roi : Roi, vis éternellement ? 22 Mon Dieu a envoyé son ange et fermé la gueule des lions, qui ne m'ont fait aucun mal, parce que j'ai été trouvé innocent devant lui ; et devant toi non plus, ô roi, je n'ai rien fait de mauvais",
      explanation: "Daniel 6v21-22"
    },
    {
      question: "Que fit Dieu pour Daniel dans la fosse aux lions ?",
      options: [
        "Rien",
        "Dieu a envoyé son ange et fermé la gueule des lions, qui ne lui ont fait aucun mal",
        "Dieu a tué les lions",
        "Dieu a endormi les lions"
      ],
      correctAnswer: "Dieu a envoyé son ange et fermé la gueule des lions, qui ne lui ont fait aucun mal",
      explanation: "Daniel 6v22"
    },
    {
      question: "Pourquoi Dieu envoya son ange et fermé la gueule des lions ?",
      options: [
        "Parce que Daniel était fort",
        "Parce que Daniel a été trouvé innocent devant Dieu",
        "Parce que Daniel avait prié",
        "Parce que le roi l'avait demandé"
      ],
      correctAnswer: "Parce que Daniel a été trouvé innocent devant Dieu",
      explanation: "Daniel 6v22"
    },
    {
      question: "Qu'ordonna le roi Darius au sujet des hommes qui avaient accusé Daniel ?",
      options: [
        "Il les libéra",
        "Le roi ordonna que ces hommes qui avaient accusé Daniel fussent amenés et jetés dans la fosse aux lions, eux, leurs enfants et leurs femmes",
        "Il les emprisonna",
        "Il les exila"
      ],
      correctAnswer: "Le roi ordonna que ces hommes qui avaient accusé Daniel fussent amenés et jetés dans la fosse aux lions, eux, leurs enfants et leurs femmes",
      explanation: "Daniel 6v24"
    },
    {
      question: "Que firent les lions aux hommes qui avaient accusé Daniel, eux, leurs enfants et leurs femmes ?",
      options: [
        "Les lions les ont épargnés",
        "Avant qu'ils fussent parvenus au fond de la fosse, les lions les saisirent et brisèrent tous leurs os",
        "Les lions ont dormi",
        "Les lions ont fui"
      ],
      correctAnswer: "Avant qu'ils fussent parvenus au fond de la fosse, les lions les saisirent et brisèrent tous leurs os",
      explanation: "Daniel 6v24"
    }
  ],
    7: [
    {
      question: "Qu'eut Daniel la première année de Belschatsar, roi de Babylone ?",
      options: [
        "Une maladie",
        "Daniel eut un songe et des visions de son esprit",
        "Une grande richesse",
        "Un poste important"
      ],
      correctAnswer: "Daniel eut un songe et des visions de son esprit",
      explanation: "Daniel 7v1"
    },
    {
      question: "Quand Daniel eut-il un songe et des visions de son esprit ?",
      options: [
        "La deuxième année de Belschatsar",
        "La première année de Belschatsar, roi de Babylone",
        "La troisième année de Belschatsar",
        "La dernière année de Belschatsar"
      ],
      correctAnswer: "La première année de Belschatsar, roi de Babylone",
      explanation: "Daniel 7v1"
    },
    {
      question: "A quel moment Daniel eut-il un songe et des visions de son esprit ?",
      options: [
        "Pendant qu'il priait",
        "Pendant qu'il était sur sa couche",
        "Pendant qu'il travaillait",
        "Pendant qu'il mangeait"
      ],
      correctAnswer: "Pendant qu'il était sur sa couche",
      explanation: "Daniel 7v1"
    },
    {
      question: "Que fit Daniel suite au songe et aux visions de son esprit ?",
      options: [
        "Il oublia tout",
        "Daniel écrivit le songe, et raconta les principales choses",
        "Il parla au roi",
        "Il garda le silence"
      ],
      correctAnswer: "Daniel écrivit le songe, et raconta les principales choses",
      explanation: "Daniel 7v1"
    },
    {
      question: "Comment Daniel qualifie-t-il sa vision ?",
      options: [
        "Vision diurne",
        "Vision nocturne",
        "Vision céleste",
        "Vision terrestre"
      ],
      correctAnswer: "Vision nocturne",
      explanation: "Daniel 7v2"
    },
    {
      question: "Que vit Daniel dans cette première vision ?",
      options: [
        "Une grande statue",
        "Les quatre vents des cieux firent irruption sur la grande mer",
        "Un ange",
        "Le temple de Jérusalem"
      ],
      correctAnswer: "Les quatre vents des cieux fairent irruption sur la grande mer",
      explanation: "Daniel 7v2"
    },
    {
      question: "Sur quoi furent irruption les quatre vents ?",
      options: [
        "Sur la terre",
        "Sur la grande mer",
        "Sur les montagnes",
        "Sur le ciel"
      ],
      correctAnswer: "Sur la grande mer",
      explanation: "Daniel 7v2"
    },
    {
      question: "Selon la première vision de Daniel, que sortirent de la mer ?",
      options: [
        "Des poissons",
        "Et quatre grands animaux sortirent de la mer, différents l'un de l'autre",
        "Des vagues",
        "Des navires"
      ],
      correctAnswer: "Et quatre grands animaux sortirent de la mer, différents l'un de l'autre",
      explanation: "Daniel 7v3"
    },
    {
      question: "A quoi était semblable le premier animal de la première vision de Daniel ?",
      options: [
        "Le premier était semblable à un ours",
        "Le premier était semblable à un lion, et avait des ailes d'aigles",
        "Le premier était semblable à un léopard",
        "Le premier était semblable à un dragon"
      ],
      correctAnswer: "Le premier était semblable à un lion, et avait des ailes d'aigles",
      explanation: "Daniel 7v4"
    },
    {
      question: "Qu'arriva au premier animal de la première vision pendant que Daniel regardais ?",
      options: [
        "Il grandit encore",
        "Les ailes du lion furent arrachées ; il fut enlevé de terre et mis debout sur ses pieds comme un homme, et un cœur d'homme lui fut donné",
        "Il disparut",
        "Il se transforma en homme"
      ],
      correctAnswer: "Les ailes du lion furent arrachées ; il fut enlevé de terre et mis debout sur ses pieds comme un homme, et un cœur d'homme lui fut donné",
      explanation: "Daniel 7v4"
    },
    {
      question: "A quoi était semblable le second animal de la première vision de Daniel ?",
      options: [
        "Le second animal était semblable à un lion",
        "Le second animal était semblable à un ours, et se tenait sur un côté",
        "Le second animal était semblable à un léopard",
        "Le second animal était semblable à un aigle"
      ],
      correctAnswer: "Le second animal était semblable à un ours, et se tenait sur un côté",
      explanation: "Daniel 7v5"
    },
    {
      question: "Qu'avait le second animal de la première vision de Daniel ? Que lui disait-on ?",
      options: [
        "Il avait une couronne, et on lui disait : Règne",
        "Il avait trois côtes dans la gueule entre les dents, et on lui disait : Lève-toi, mange beaucoup de chair",
        "Il avait des ailes, et on lui disait : Vole",
        "Il avait une épée, et on lui disait : Combats"
      ],
      correctAnswer: "Il avait trois côtes dans la gueule entre les dents, et on lui disait : Lève-toi, mange beaucoup de chair",
      explanation: "Daniel 7v5"
    },
    {
      question: "A quoi était semblable le troisième animal de la première vision de Daniel ?",
      options: [
        "Le troisième animal était semblable à un lion",
        "Le troisième animal était semblable à un ours",
        "Le troisième animal était semblable à un léopard, et avait sur le dos quatre ailes comme un oiseau",
        "Le troisième animal était semblable à un serpent"
      ],
      correctAnswer: "Le troisième animal était semblable à un léopard, et avait sur le dos quatre ailes comme un oiseau",
      explanation: "Daniel 7v6"
    },
    {
      question: "Combien d'ailes étaient sur le dos du Léopard ?",
      options: [
        "Deux ailes",
        "Quatre ailes",
        "Six ailes",
        "Huit ailes"
      ],
      correctAnswer: "Quatre ailes",
      explanation: "Daniel 7v6"
    },
    {
      question: "A quoi était semblable les ailes sur le dos du léopard dans la première vision de Daniel ?",
      options: [
        "Comme des ailes de chauve-souris",
        "Comme un oiseau",
        "Comme des ailes d'ange",
        "Comme des ailes de dragon"
      ],
      correctAnswer: "Comme un oiseau",
      explanation: "Daniel 7v6"
    },
    {
      question: "Combien de têtes avait le Léopard ?",
      options: [
        "Une tête",
        "Deux têtes",
        "Trois têtes",
        "Quatre têtes"
      ],
      correctAnswer: "Quatre têtes",
      explanation: "Daniel 7v6"
    },
    {
      question: "Qu'est-ce qui a été donné au Léopard ?",
      options: [
        "La richesse",
        "La domination",
        "La sagesse",
        "La force"
      ],
      correctAnswer: "La domination",
      explanation: "Daniel 7v6"
    },
    {
      question: "Comment était le quatrième animal de la première vision de Daniel ?",
      options: [
        "Le quatrième animal était petit et faible",
        "Le quatrième animal était terrible, épouvantable et extraordinairement fort",
        "Le quatrième animal était beau et gracieux",
        "Le quatrième animal était ordinaire"
      ],
      correctAnswer: "Le quatrième animal était terrible, épouvantable et extraordinairement fort",
      explanation: "Daniel 7v7"
    },
    {
      question: "Quelles sortes de dents avait le quatrième animal de la première vision de Daniel ?",
      options: [
        "Il avait de petites dents",
        "Il avait de grandes dents de fer",
        "Il n'avait pas de dents",
        "Il avait des dents d'or"
      ],
      correctAnswer: "Il avait de grandes dents de fer",
      explanation: "Daniel 7v7"
    },
    {
      question: "Que faisait le quatrième animal de la première vision de Daniel ?",
      options: [
        "Il dormait",
        "Il mangeait, brisait, et il foulait aux pieds ce qui restait",
        "Il jouait",
        "Il priait"
      ],
      correctAnswer: "Il mangeait, brisait, et il foulait aux pieds ce qui restait",
      explanation: "Daniel 7v7"
    },
    {
      question: "Comment était le quatrième animal par rapport aux autres de la première vision de Daniel ?",
      options: [
        "Il était semblable aux autres",
        "Il était différent de tous les animaux précédents",
        "Il était plus petit que les autres",
        "Il était plus beau que les autres"
      ],
      correctAnswer: "Il était différent de tous les animaux précédents",
      explanation: "Daniel 7v7"
    },
    {
      question: "Combien de cornes avait le quatrième animal de la première vision de Daniel ?",
      options: [
        "Sept cornes",
        "Dix cornes",
        "Douze cornes",
        "Une corne"
      ],
      correctAnswer: "Dix cornes",
      explanation: "Daniel 7v7"
    },
    {
      question: "Que sortit du milieu des cornes du quatrième animal de la première vision de Daniel ?",
      options: [
        "Une autre petite corne",
        "Une grande corne",
        "Un œil",
        "Une bouche"
      ],
      correctAnswer: "Une autre petite corne",
      explanation: "Daniel 7v8"
    },
    {
      question: "Combien de cornes furent arrachées devant la petite corne du quatrième animal de la première vision de Daniel ?",
      options: [
        "Une corne",
        "Deux cornes",
        "Trois des premières cornes",
        "Cinq cornes"
      ],
      correctAnswer: "Trois des premières cornes",
      explanation: "Daniel 7v8"
    },
    {
      question: "Que faisait la petite corne du quatrième animal de la première vision de Daniel ?",
      options: [
        "La petite corne avait des yeux comme des yeux d'homme, et une bouche, qui parlait avec arrogance",
        "La petite corne était silencieuse",
        "La petite corne brillait",
        "La petite corne grandissait"
      ],
      correctAnswer: "La petite corne avait des yeux comme des yeux d'homme, et une bouche, qui parlait avec arrogance",
      explanation: "Daniel 7v8"
    },
    {
      question: "A quel moment s'assit l'Ancien des jours ?",
      options: [
        "Pendant la tempête",
        "Pendant que l'on plaçait des trônes",
        "Pendant la nuit",
        "Pendant le jour"
      ],
      correctAnswer: "Pendant que l'on plaçait des trônes",
      explanation: "Daniel 7v9"
    },
    {
      question: "Comment était l'Ancien des jours ?",
      options: [
        "Son vêtement était noir, et les cheveux de sa tête étaient blancs",
        "Son vêtement était blanc comme la neige, et les cheveux de sa tête étaient comme de la laine pure",
        "Son vêtement était rouge, et les cheveux de sa tête étaient noirs",
        "Son vêtement était bleu, et les cheveux de sa tête étaient gris"
      ],
      correctAnswer: "Son vêtement était blanc comme la neige, et les cheveux de sa tête étaient comme de la laine pure",
      explanation: "Daniel 7v9"
    },
    {
      question: "Comment était le trône de l'Ancien des jours ?",
      options: [
        "Son trône était d'or pur",
        "Son trône était comme des flammes de feu",
        "Son trône était d'argent",
        "Son trône était de pierre"
      ],
      correctAnswer: "Son trône était comme des flammes de feu",
      explanation: "Daniel 7v9"
    },
    {
      question: "Qu'est-ce qui coulait et sortait de devant l'Ancien des jours ?",
      options: [
        "Un fleuve d'eau pure",
        "Un fleuve de feu coulait et sortait de devant lui",
        "Un fleuve de lait",
        "Un fleuve de sang"
      ],
      correctAnswer: "Un fleuve de feu coulait et sortait de devant lui",
      explanation: "Daniel 7v10"
    },
    {
      question: "Combien servaient l'Ancien des jours ?",
      options: [
        "Cent mille",
        "Mille milliers le servaient",
        "Dix mille",
        "Des millions"
      ],
      correctAnswer: "Mille milliers le servaient",
      explanation: "Daniel 7v10"
    },
    {
      question: "Que se passa lorsque les juges s'assirent ?",
      options: [
        "Le silence régna",
        "Les livres furent ouverts",
        "La lumière apparut",
        "La musique commença"
      ],
      correctAnswer: "Les livres furent ouverts",
      explanation: "Daniel 7v10"
    },
    {
      question: "Qu'arriva lorsque la petite corne du quatrième animal parlait avec arrogance ?",
      options: [
        "L'animal fut tué, et son corps fut anéanti, livré au feu pour être brûlé",
        "L'animal grandit",
        "L'animal disparut",
        "L'animal devint plus fort"
      ],
      correctAnswer: "L'animal fut tué, et son corps fut anéanti, livré au feu pour être brûlé",
      explanation: "Daniel 7v11"
    },
    {
      question: "Qu'arrivèrent aux autres animaux lorsque l'Ancien des jours s'assit ?",
      options: [
        "Ils furent tous tués",
        "Les autres animaux furent dépouillés de leur puissance, mais une prolongation de vie leur fut accordée jusqu'à un certain temps",
        "Ils devinrent plus forts",
        "Ils disparurent"
      ],
      correctAnswer: "Les autres animaux furent dépouillés de leur puissance, mais une prolongation de vie leur fut accordée jusqu'à un certain temps",
      explanation: "Daniel 7v12"
    },
    {
      question: "Qui arriva sur les nuées des Cieux selon la première vision nocturnes de Daniel ?",
      options: [
        "Un ange puissant",
        "Quelqu'un de semblable à un Fils de l'homme",
        "L'Ancien des jours",
        "Un animal terrible"
      ],
      correctAnswer: "Quelqu'un de semblable à un Fils de l'homme",
      explanation: "Daniel 7v13"
    },
    {
      question: "Que donna-t-on au Fils de l'homme ?",
      options: [
        "La richesse et l'honneur",
        "La domination, la gloire et le règne",
        "La sagesse et la force",
        "La victoire et la paix"
      ],
      correctAnswer: "La domination, la gloire et le règne",
      explanation: "Daniel 7v14"
    },
    {
      question: "Comment sont la domination et le règne du Fils de l'homme ?",
      options: [
        "Sa domination est temporaire",
        "Sa domination est une domination éternelle qui ne passera point, et son règne ne sera jamais détruit",
        "Sa domination dure mille ans",
        "Sa domination est limitée"
      ],
      correctAnswer: "Sa domination est une domination éternelle qui ne passera point, et son règne ne sera jamais détruit",
      explanation: "Daniel 7v14"
    }
  ],
  8: [
    {
      question: "A quel moment Daniel eut-il sa deuxième vision ?",
      options: [
        "La première année du règne du roi Belschatsar",
        "La troisième année du règne du roi Belschatsar",
        "La dixième année du règne du roi Belschatsar",
        "La dernière année du règne du roi Belschatsar"
      ],
      correctAnswer: "La troisième année du règne du roi Belschatsar",
      explanation: "Daniel 8v1"
    },
    {
      question: "Où était Daniel lorsqu'il eut sa deuxième vision ?",
      options: [
        "A Babylone",
        "Il lui sembla qu'il était à Suse, la capitale, dans la province d'Elam",
        "A Jérusalem",
        "Au bord du fleuve"
      ],
      correctAnswer: "Il lui sembla qu'il était à Suse, la capitale, dans la province d'Elam",
      explanation: "Daniel 8v1"
    },
    {
      question: "Quelle est la capitale de l'empire de Babylone ?",
      options: [
        "Babylone",
        "Suse",
        "Ninive",
        "Jérusalem"
      ],
      correctAnswer: "Suse",
      explanation: "Daniel 8v2"
    },
    {
      question: "Dans quelle province se trouve Suse ?",
      options: [
        "Babylonie",
        "Elam",
        "Judée",
        "Perse"
      ],
      correctAnswer: "Elam",
      explanation: "Daniel 8v2"
    },
    {
      question: "Près de quel fleuve Daniel eut-il sa deuxième vision ?",
      options: [
        "Près du fleuve Euphrate",
        "Près du fleuve d'Ulaï",
        "Près du fleuve Tigre",
        "Près du fleuve Jourdain"
      ],
      correctAnswer: "Près du fleuve d'Ulaï",
      explanation: "Daniel 8v2"
    },
    {
      question: "Quel est le premier animal que Daniel vit près du fleuve d'Ulaï ?",
      options: [
        "Un lion",
        "Un bélier qui se tenait devant le fleuve, et il avait des cornes",
        "Un ours",
        "Un léopard"
      ],
      correctAnswer: "Un bélier qui se tenait devant le fleuve, et il avait des cornes",
      explanation: "Daniel 8v3"
    },
    {
      question: "Où se trouvait le bélier que Daniel vit près du fleuve d'Ulaï ?",
      options: [
        "Derrière le fleuve",
        "Devant le fleuve d'Ulaï",
        "Dans le fleuve",
        "Loin du fleuve"
      ],
      correctAnswer: "Devant le fleuve d'Ulaï",
      explanation: "Daniel 8v3"
    },
    {
      question: "Comment étaient les cornes du bélier que Daniel vit près du fleuve d'Ulaï ?",
      options: [
        "Ces cornes étaient petites",
        "Ces cornes étaient hautes, mais l'une était plus haute que l'autre, et elle s'éleva la dernière",
        "Ces cornes étaient égales",
        "Ces cornes étaient courbées"
      ],
      correctAnswer: "Ces cornes étaient hautes, mais l'une était plus haute que l'autre, et elle s'éleva la dernière",
      explanation: "Daniel 8v3"
    },
    {
      question: "Avec quoi le bélier frappait-il ?",
      options: [
        "Avec ses pattes",
        "Le bélier qui frappait de ses cornes",
        "Avec sa tête",
        "Avec sa queue"
      ],
      correctAnswer: "Le bélier qui frappait de ses cornes",
      explanation: "Daniel 8v4"
    },
    {
      question: "Où le bélier qui frappait-il de ses cornes ?",
      options: [
        "A l'orient seulement",
        "A l'occident, au septentrion et au midi",
        "Partout",
        "Nulle part"
      ],
      correctAnswer: "A l'occident, au septentrion et au midi",
      explanation: "Daniel 8v4"
    },
    {
      question: "Pouvait-on résister au bélier qui frappait-il de ses cornes ?",
      options: [
        "Oui, facilement",
        "Non. Aucun animal ne pouvait lui résister, et il n'y avait personne pour délivrer ses victimes ; il faisait ce qu'il voulait, et il devint puissant",
        "Seulement les grands animaux",
        "Parfois"
      ],
      correctAnswer: "Non. Aucun animal ne pouvait lui résister, et il n'y avait personne pour délivrer ses victimes ; il faisait ce qu'il voulait, et il devint puissant",
      explanation: "Daniel 8v4"
    },
    {
      question: "Quel est le second animal que Daniel vit près du fleuve d'Ulaï ?",
      options: [
        "Un lion",
        "Un bouc venant de l'occident",
        "Un ours",
        "Un dragon"
      ],
      correctAnswer: "Un bouc venant de l'occident",
      explanation: "Daniel 8v5"
    },
    {
      question: "Que faisait le bouc que vit Daniel ?",
      options: [
        "Il dormait",
        "Il parcourait toute la terre à sa surface, sans la toucher",
        "Il mangeait",
        "Il buvait au fleuve"
      ],
      correctAnswer: "Il parcourait toute la terre à sa surface, sans la toucher",
      explanation: "Daniel 8v5"
    },
    {
      question: "Combien de corne avait le bouc que vit Daniel ?",
      options: [
        "Deux cornes",
        "Une grande corne",
        "Quatre cornes",
        "Dix cornes"
      ],
      correctAnswer: "Une grande corne",
      explanation: "Daniel 8v5"
    },
    {
      question: "Où se trouve la grande corne du bouc ?",
      options: [
        "Sur le front",
        "Entre les yeux",
        "Sur le dos",
        "Sur le côté"
      ],
      correctAnswer: "Entre les yeux",
      explanation: "Daniel 8v5"
    },
    {
      question: "Que fit le bouc lorsqu'il arriva jusqu'au bélier ?",
      options: [
        "Il s'enfuit",
        "Il courut sur lui dans toute sa fureur",
        "Il l'ignora",
        "Il se prosterna"
      ],
      correctAnswer: "Il courut sur lui dans toute sa fureur",
      explanation: "Daniel 8v6"
    },
    {
      question: "Combien de cornes le bouc brisa au bélier ?",
      options: [
        "Une corne",
        "Les deux cornes",
        "Aucune corne",
        "Trois cornes"
      ],
      correctAnswer: "Les deux cornes",
      explanation: "Daniel 8v7"
    },
    {
      question: "Qu'arrivera au bouc lorsqu'il devint très puissant ?",
      options: [
        "Sa grande corne se brisa",
        "Il devint plus grand",
        "Il eut plus de cornes",
        "Il devint roi"
      ],
      correctAnswer: "Sa grande corne se brisa",
      explanation: "Daniel 8v8"
    },
    {
      question: "Combien de cornes s'élevèrent pour remplacer la grande corne du bouc ?",
      options: [
        "Deux grandes cornes",
        "Quatre grandes cornes",
        "Sept grandes cornes",
        "Dix grandes cornes"
      ],
      correctAnswer: "Quatre grandes cornes",
      explanation: "Daniel 8v8"
    },
    {
      question: "De quels côtés s'élevèrent les quatre grandes cornes sur le bouc ?",
      options: [
        "Des quatre côtés",
        "Aux quatre vents des cieux",
        "De l'est et de l'ouest",
        "Du nord et du sud"
      ],
      correctAnswer: "Aux quatre vents des cieux",
      explanation: "Daniel 8v8"
    },
    {
      question: "Vers où s'agrandit la petite corne qui sortit de l'une des quatre cornes sur le bouc ?",
      options: [
        "Vers le nord seulement",
        "Elle s'agrandit beaucoup vers le midi, vers l'orient, et vers le plus beau des pays",
        "Vers l'ouest seulement",
        "Vers tous les côtés"
      ],
      correctAnswer: "Elle s'agrandit beaucoup vers le midi, vers l'orient, et vers le plus beau des pays",
      explanation: "Daniel 8v9"
    },
    {
      question: "Que fit tomber à terre, la petite corne du bouc lorsqu'il s'éleva jusqu'à l'armée des Cieux ?",
      options: [
        "Des anges",
        "Elle fit tomber à terre une partie de cette armée et des étoiles, et elle les foula",
        "Des nuages",
        "La lune"
      ],
      correctAnswer: "Elle fit tomber à terre une partie de cette armée et des étoiles, et elle les foula",
      explanation: "Daniel 8v10"
    },
    {
      question: "Que fit tomber à terre, la petite corne du bouc lorsqu'elle s'éleva jusqu'au chef de l'armée ?",
      options: [
        "Le chef de l'armée",
        "Elle enleva au chef de l'armée le sacrifice perpétuel, et renversa le lieu de son sanctuaire",
        "Les armes",
        "Le trône"
      ],
      correctAnswer: "Elle enleva au chef de l'armée le sacrifice perpétuel, et renversa le lieu de son sanctuaire",
      explanation: "Daniel 8v11"
    },
    {
      question: "Qu'est-ce qui fut livré à la petite corne du bouc lorsqu'elle devint très puissante et s'éleva ?",
      options: [
        "Le royaume",
        "L'armée fut livrée avec le sacrifice perpétuel",
        "Le trésor",
        "Le pouvoir"
      ],
      correctAnswer: "L'armée fut livrée avec le sacrifice perpétuel",
      explanation: "Daniel 8v12"
    },
    {
      question: "Qu'est-ce que la petite corne jeta-t-elle par terre ?",
      options: [
        "Les armes",
        "La corne jeta la vérité par terre",
        "Le sanctuaire",
        "Les livres"
      ],
      correctAnswer: "La corne jeta la vérité par terre",
      explanation: "Daniel 8v12"
    },
    {
      question: "Pendant combien de temps s'accomplira la vision sur le sacrifice perpétuel et sur le péché dévastateur ? Jusques à quand le sanctuaire et l'armée seront-ils foulés ?",
      options: [
        "Sept temps",
        "Deux mille trois cents soirs et matins",
        "Soixante-dix semaines",
        "Mille deux cent soixante jours"
      ],
      correctAnswer: "Deux mille trois cents soirs et matins",
      explanation: "Daniel 8v14"
    },
    {
      question: "Que représente le bélier que vit Daniel, et qui avait des cornes ?",
      options: [
        "Le royaume de Babylone",
        "Le bélier que tu as vu, et qui avait des cornes, ce sont les rois des Mèdes et des Perses",
        "Le royaume de Grèce",
        "Le royaume de Rome"
      ],
      correctAnswer: "Le bélier que tu as vu, et qui avait des cornes, ce sont les rois des Mèdes et des Perses",
      explanation: "Daniel 8v20"
    },
    {
      question: "Que représente le bouc que vit Daniel, et qui avait une grande corne entre les yeux ?",
      options: [
        "Le royaume de Médie",
        "Le bouc, c'est le roi de Javan",
        "Le royaume de Perse",
        "Le royaume de Babylone"
      ],
      correctAnswer: "Le bouc, c'est le roi de Javan",
      explanation: "Daniel 8v21"
    },
    {
      question: "Que représente la grande corne entre les yeux du bouc que vit Daniel ?",
      options: [
        "Le premier roi",
        "Le dernier roi",
        "Un prince",
        "Un prophète"
      ],
      correctAnswer: "C'est le premier roi",
      explanation: "Daniel 8v21"
    }
  ],
   9: [
    {
      question: "Qui est le père du roi Darius ?",
      options: [
        "Nebucadnetsar",
        "Assuérus",
        "Cyrus",
        "Belschatsar"
      ],
      correctAnswer: "Assuérus",
      explanation: "Daniel 9v1"
    },
    {
      question: "De quelle race est le roi Darius ?",
      options: [
        "Race des Chaldéens",
        "Race des Mèdes",
        "Race des Perses",
        "Race des Juifs"
      ],
      correctAnswer: "Race des Mèdes",
      explanation: "Daniel 9v1"
    },
    {
      question: "Où Darius est-il devenu roi ?",
      options: [
        "Darius était devenu roi du royaume de Perse",
        "Darius était devenu roi du royaume des Chaldéens",
        "Darius était devenu roi de Juda",
        "Darius était devenu roi de Babylone"
      ],
      correctAnswer: "Darius était devenu roi du royaume des Chaldéens",
      explanation: "Daniel 9v1"
    },
    {
      question: "Quand Daniel vit-il qu'il devait s'écouler soixante-dix ans pour les ruines de Jérusalem ?",
      options: [
        "La deuxième année de Darius",
        "La première année de Darius, fils d'Assuérus, de la race des Mèdes, lequel était devenu roi du royaume des Chaldéens",
        "La troisième année de Darius",
        "La dixième année de Darius"
      ],
      correctAnswer: "La première année de Darius, fils d'Assuérus, de la race des Mèdes, lequel était devenu roi du royaume des Chaldéens",
      explanation: "Daniel 9v1"
    },
    {
      question: "Par quoi Daniel vit-il qu'il devait s'écouler soixante-dix ans pour les ruines de Jérusalem ?",
      options: [
        "Par une vision",
        "Par les livres",
        "Par un ange",
        "Par le prophète Jérémie"
      ],
      correctAnswer: "Par les livres",
      explanation: "Daniel 9v2"
    },
    {
      question: "Combien d'années devraient durer pour les ruines de Jérusalem ?",
      options: [
        "Quarante ans",
        "Soixante-dix ans",
        "Cent ans",
        "Vingt ans"
      ],
      correctAnswer: "Soixante-dix ans",
      explanation: "Daniel 9v2"
    },
    {
      question: "Qui prophétisa les soixante-dix ans pour les ruines de Jérusalem ?",
      options: [
        "Ésaïe, le prophète",
        "Jérémie, le prophète",
        "Ézéchiel, le prophète",
        "Daniel, le prophète"
      ],
      correctAnswer: "Jérémie, le prophète",
      explanation: "Daniel 9v2"
    },
    {
      question: "Que fit Daniel lorsqu'il vit qu'il devait s'écouler soixante-dix ans pour les ruines de Jérusalem ?",
      options: [
        "Je tournai ma face vers le Seigneur Dieu, afin de recourir à la prière et aux supplications, en jeûnant et en prenant le sac et la cendre",
        "Il alla voir le roi",
        "Il partit pour Jérusalem",
        "Il écrivit une lettre"
      ],
      correctAnswer: "Je tournai ma face vers le Seigneur Dieu, afin de recourir à la prière et aux supplications, en jeûnant et en prenant le sac et la cendre",
      explanation: "Daniel 9v3"
    },
    {
      question: "Que prit Daniel lorsqu'il vit qu'il devait s'écouler soixante-dix ans pour les ruines de Jérusalem ?",
      options: [
        "De l'or et de l'argent",
        "Le sac et la cendre",
        "Des parfums",
        "Des offrandes"
      ],
      correctAnswer: "Le sac et la cendre",
      explanation: "Daniel 9v3"
    },
    {
      question: "Vers qui tourna Daniel lorsqu'il vit qu'il devait s'écouler soixante-dix ans pour les ruines de Jérusalem ?",
      options: [
        "Vers le roi",
        "Vers le Seigneur Dieu",
        "Vers Jérusalem",
        "Vers les prêtres"
      ],
      correctAnswer: "Vers le Seigneur Dieu",
      explanation: "Daniel 9v3"
    },
    {
      question: "A qui Dieu fait-il miséricorde ?",
      options: [
        "A tous les hommes",
        "A ceux qui t'aiment et qui observent tes commandements !",
        "Aux riches",
        "Aux puissants"
      ],
      correctAnswer: "A ceux qui t'aiment et qui observent tes commandements !",
      explanation: "Daniel 9v4"
    },
    {
      question: "De quoi les enfants d'Israël se sont-ils détournés ?",
      options: [
        "De leurs maisons",
        "Des commandements et de tes ordonnances de l'Eternel",
        "De leurs richesses",
        "De leur pays"
      ],
      correctAnswer: "Des commandements et de tes ordonnances de l'Eternel",
      explanation: "Daniel 9v5"
    },
    {
      question: "Qui Israël n'avait pas écouté ?",
      options: [
        "Les rois d'Israël",
        "Les serviteurs, les prophètes de l'Eternel, qui ont parlé de l'Eternel aux rois, aux chefs, aux pères, et à tout le peuple du pays d'Israël",
        "Les prêtres",
        "Les sages"
      ],
      correctAnswer: "Les serviteurs, les prophètes de l'Eternel, qui ont parlé de l'Eternel aux rois, aux chefs, aux pères, et à tout le peuple du pays d'Israël",
      explanation: "Daniel 9v6"
    },
    {
      question: "A cause de quoi Israël s'est-il rendu coupable envers l'Eternel ?",
      options: [
        "A cause de leur pauvreté",
        "A cause des infidélités",
        "A cause de leur faiblesse",
        "A cause de leurs ennemis"
      ],
      correctAnswer: "A cause des infidélités",
      explanation: "Daniel 9v7"
    },
    {
      question: "Qu'est-ce qu'Israël n'avait pas écouté selon Daniel 9v10 ?",
      options: [
        "La voix du roi",
        "La voix de l'Eternel, notre Dieu, pour suivre ses lois",
        "La voix des prophètes",
        "La voix de leur conscience"
      ],
      correctAnswer: "La voix de l'Eternel, notre Dieu, pour suivre ses lois",
      explanation: "Daniel 9v10"
    },
    {
      question: "Qu'est-ce qu'Israël a-t-il transgressé ?",
      options: [
        "La loi du roi",
        "La loi de l'Eternel, notre Dieu",
        "La loi des nations",
        "La loi naturelle"
      ],
      correctAnswer: "La loi de l'Eternel, notre Dieu",
      explanation: "Daniel 9v11"
    },
    {
      question: "Qu'est-ce que l'Eternel a accompli contre Israël pour n'avoir pas écouté Sa voix ?",
      options: [
        "L'Eternel a accompli les paroles qu'il avait prononcées contre Israël et contre ses chefs qui les ont gouvernés, Il a fait venir sur eux une grande calamité, et il n'en est jamais arrivé sous le ciel entier une semblable à celle qui est arrivée à Jérusalem",
        "Il les a bénis",
        "Il les a protégés",
        "Il les a enrichis"
      ],
      correctAnswer: "L'Eternel a accompli les paroles qu'il avait prononcées contre Israël et contre ses chefs qui les ont gouvernés, Il a fait venir sur eux une grande calamité, et il n'en est jamais arrivé sous le ciel entier une semblable à celle qui est arrivée à Jérusalem",
      explanation: "Daniel 9v12"
    },
    {
      question: "Qui a fait sortir Israël du pays d'Egypte ?",
      options: [
        "Moïse",
        "Le Seigneur, notre Dieu",
        "Aaron",
        "Les juges"
      ],
      correctAnswer: "Le Seigneur, notre Dieu",
      explanation: "Daniel 9v15"
    },
    {
      question: "Qu'est-ce que Daniel a confessé à Dieu ?",
      options: [
        "Sa richesse",
        "Daniel a confessé à Dieu son péché et le péché du peuple d'Israël",
        "Sa sagesse",
        "Sa force"
      ],
      correctAnswer: "Daniel a confessé à Dieu son péché et le péché du peuple d'Israël",
      explanation: "Daniel 9v20"
    },
    {
      question: "Quel homme s'était approché de Daniel pendant qu'il priait ?",
      options: [
        "Un ange",
        "L'ange Gabriel",
        "L'ange Micaël",
        "Un prophète"
      ],
      correctAnswer: "L'ange Gabriel",
      explanation: "Daniel 9v21"
    },
    {
      question: "Comment l'ange Gabriel s'était-il approché de Daniel pendant qu'il priait ?",
      options: [
        "Lentement",
        "D'un vol rapide",
        "En marchant",
        "En courant"
      ],
      correctAnswer: "D'un vol rapide",
      explanation: "Daniel 9v21"
    },
    {
      question: "A quel moment l'ange Gabriel s'était-il approché de Daniel pendant qu'il priait ?",
      options: [
        "Au moment de l'offrande du matin",
        "Au moment de l'offrande du soir",
        "A minuit",
        "A midi"
      ],
      correctAnswer: "Au moment de l'offrande du soir",
      explanation: "Daniel 9v21"
    },
    {
      question: "Combien de temps ont été fixés sur le peuple d'Israël et sur la ville Sainte ?",
      options: [
        "Quarante semaines",
        "Soixante-dix semaines",
        "Cent vingt semaines",
        "Sept semaines"
      ],
      correctAnswer: "Soixante-dix semaines",
      explanation: "Daniel 9v24"
    },
    {
      question: "Qui sera oint après les Soixante-dix semaines ?",
      options: [
        "Le roi",
        "Le Saint des saints",
        "Le prophète",
        "Le prêtre"
      ],
      correctAnswer: "Le Saint des saints",
      explanation: "Daniel 9v24"
    },
    {
      question: "Combien de temps y a-t-il depuis le moment où la parole a annoncé que Jérusalem sera rebâtie jusqu'à l'Oint, au Conducteur ?",
      options: [
        "Il y a sept semaines",
        "Il y soixante-deux semaines",
        "Il y a soixante-dix semaines",
        "Il y a une semaine"
      ],
      correctAnswer: "Il y a sept semaines",
      explanation: "Daniel 9v25"
    },
    {
      question: "Pendant combien de temps les places et les fossés seront-ils rétablis ?",
      options: [
        "Dans sept semaines",
        "Dans soixante-deux semaines",
        "Dans soixante-dix semaines",
        "Dans une semaine"
      ],
      correctAnswer: "Dans soixante-deux semaines",
      explanation: "Daniel 9v25"
    },
    {
      question: "Qui détruira la ville et le sanctuaire, après les soixante-deux semaines où les places et les fossés seront rétablis ?",
      options: [
        "Le roi de Perse",
        "Le peuple d'un chef qui viendra",
        "Le roi de Grèce",
        "Le roi de Rome"
      ],
      correctAnswer: "Le peuple d'un chef qui viendra",
      explanation: "Daniel 9v26"
    },
    {
      question: "Pour combien de temps le chef d'un peuple qui viendra fera une solide alliance avec plusieurs ?",
      options: [
        "Pour sept ans",
        "Pour une semaine",
        "Pour soixante-dix semaines",
        "Pour un temps"
      ],
      correctAnswer: "Pour une semaine",
      explanation: "Daniel 9v27"
    },
    {
      question: "Quand « le chef d'un peuple qui viendra » fera cesser le sacrifice et l'offrande ?",
      options: [
        "Au début de la semaine",
        "Durant la moitié de la semaine",
        "A la fin de la semaine",
        "Pendant toute la semaine"
      ],
      correctAnswer: "Durant la moitié de la semaine",
      explanation: "Daniel 9v27"
    }
  ],
  10: [
    {
      question: "Qui est Cyrus ?",
      options: [
        "Roi de Babylone",
        "Roi de Perse",
        "Roi de Grèce",
        "Roi de Juda"
      ],
      correctAnswer: "Roi de Perse",
      explanation: "Daniel 10v1"
    },
    {
      question: "Qu'est-ce fut révélé à Daniel la troisième année de Cyrus, roi de Perse ?",
      options: [
        "Une vision",
        "Une parole fut révélée à Daniel",
        "Un songe",
        "Un ange"
      ],
      correctAnswer: "Une parole fut révélée à Daniel",
      explanation: "Daniel 10v1"
    },
    {
      question: "Comment est cette parole qui fut révélée à Daniel la troisième année de Cyrus, roi de Perse ?",
      options: [
        "Cette Parole est Mystérieuse",
        "Cette Parole est Véritable",
        "Cette Parole est Obscure",
        "Cette Parole est Joyeuse"
      ],
      correctAnswer: "Cette Parole est Véritable",
      explanation: "Daniel 10v1"
    },
    {
      question: "Qu'annonce cette parole qui fut révélée à Daniel la troisième année de Cyrus, roi de Perse ?",
      options: [
        "Cette parole, qui est véritable, annonce une grande joie",
        "Cette parole, qui est véritable, annonce une grande calamité",
        "Cette parole annonce la paix",
        "Cette parole annonce la richesse"
      ],
      correctAnswer: "Cette parole, qui est véritable, annonce une grande calamité",
      explanation: "Daniel 10v1"
    },
    {
      question: "Combien de temps Daniel fit-il dans le deuil lorsqu'il eut l'intelligence de la vision ?",
      options: [
        "Daniel fut sept jours dans le deuil",
        "Daniel fut trois semaines dans le deuil",
        "Daniel fut quarante jours dans le deuil",
        "Daniel fut un an dans le deuil"
      ],
      correctAnswer: "Daniel fut trois semaines dans le deuil",
      explanation: "Daniel 10v2"
    },
    {
      question: "Que fit Daniel pendant ses trois semaines de deuil ?",
      options: [
        "Je ne mangeai aucun mets délicat, il n'entra ni viande ni vin dans ma bouche, et je ne m'oignis point jusqu'à ce que les trois semaines fussent accomplies",
        "Il jeûna complètement",
        "Il mangea normalement",
        "Il festoya"
      ],
      correctAnswer: "Je ne mangeai aucun mets délicat, il n'entra ni viande ni vin dans ma bouche, et je ne m'oignis point jusqu'à ce que les trois semaines fussent accomplies",
      explanation: "Daniel 10v3"
    },
    {
      question: "Quand Daniel était-il au bord du grand fleuve qui est Hiddékel ?",
      options: [
        "Le premier jour du premier mois",
        "Le vingt-quatrième jour du premier mois",
        "Le dixième jour du premier mois",
        "Le dernier jour du premier mois"
      ],
      correctAnswer: "Le vingt-quatrième jour du premier mois",
      explanation: "Daniel 10v4"
    },
    {
      question: "Où était Daniel le vingt-quatrième jour du premier mois ?",
      options: [
        "A Babylone",
        "Au bord du grand fleuve qui est Hiddékel",
        "A Suse",
        "A Jérusalem"
      ],
      correctAnswer: "Au bord du grand fleuve qui est Hiddékel",
      explanation: "Daniel 10v4"
    },
    {
      question: "Dans sa vision, qui Daniel vit au bord du grand fleuve Hiddékel ?",
      options: [
        "Un ange ordinaire",
        "Un homme vêtu de lin, et ayant sur les reins une ceinture d'or d'Uphaz",
        "Le roi Cyrus",
        "Un prophète"
      ],
      correctAnswer: "Un homme vêtu de lin, et ayant sur les reins une ceinture d'or d'Uphaz",
      explanation: "Daniel 10v5"
    },
    {
      question: "Comme quoi était le corps de l'homme vêtu de lin que vit Daniel au bord du grand fleuve Hiddékel ?",
      options: [
        "Son corps était comme de bronze",
        "Son corps était comme de chrysolithe",
        "Son corps était comme de fer",
        "Son corps était comme d'argent"
      ],
      correctAnswer: "Son corps était comme de chrysolithe",
      explanation: "Daniel 10v6"
    },
    {
      question: "Comme quoi brillait le visage de l'homme vêtu de lin que vit Daniel au bord du grand fleuve Hiddékel ?",
      options: [
        "Son visage brillait comme le soleil",
        "Son visage brillait comme l'éclair",
        "Son visage brillait comme la lune",
        "Son visage brillait comme les étoiles"
      ],
      correctAnswer: "Son visage brillait comme l'éclair",
      explanation: "Daniel 10v6"
    },
    {
      question: "Comme quoi étaient les yeux de l'homme vêtu de lin que vit Daniel au bord du grand fleuve Hiddékel ?",
      options: [
        "Ses yeux étaient comme des diamants",
        "Ses yeux étaient comme des flammes de feu",
        "Ses yeux étaient comme des pierres précieuses",
        "Ses yeux étaient comme du cristal"
      ],
      correctAnswer: "Ses yeux étaient comme des flammes de feu",
      explanation: "Daniel 10v6"
    },
    {
      question: "Comme quoi était le son de la voix de l'homme vêtu de lin que vit Daniel au bord du grand fleuve Hiddékel ?",
      options: [
        "Le son de sa voix était comme le tonnerre",
        "Le son de sa voix était comme le bruit d'une multitude",
        "Le son de sa voix était doux",
        "Le son de sa voix était faible"
      ],
      correctAnswer: "Le son de sa voix était comme le bruit d'une multitude",
      explanation: "Daniel 10v6"
    },
    {
      question: "Avec Qui Daniel vit-il la vision ?",
      options: [
        "Avec ses compagnons",
        "Seul",
        "Avec le roi",
        "Avec les soldats"
      ],
      correctAnswer: "Seul",
      explanation: "Daniel 10v7"
    },
    {
      question: "Les hommes qui étaient avec Daniel virent-ils la vision ?",
      options: [
        "Oui, tous la virent",
        "Les hommes qui étaient avec Daniel ne la virent point",
        "Certains la virent",
        "Ils la virent partiellement"
      ],
      correctAnswer: "Les hommes qui étaient avec Daniel ne la virent point",
      explanation: "Daniel 10v7"
    },
    {
      question: "Que manquèrent à Daniel lorsqu'il eut cette grande vision tout seul ?",
      options: [
        "La parole",
        "Les forces",
        "La vue",
        "L'ouïe"
      ],
      correctAnswer: "Les forces",
      explanation: "Daniel 10v8"
    },
    {
      question: "Qu'arriva à Daniel lorsqu'il entendit le son de des paroles de la vision ?",
      options: [
        "Daniel tomba frappé d'étourdissement, la face contre terre",
        "Daniel se mit à courir",
        "Daniel cria",
        "Daniel chanta"
      ],
      correctAnswer: "Daniel tomba frappé d'étourdissement, la face contre terre",
      explanation: "Daniel 10v9"
    },
    {
      question: "Depuis quand les paroles de Daniel ont été entendues par Dieu et que l'ange ait été envoyé ?",
      options: [
        "Dès le premier jour où Daniel a eu à cœur de comprendre, et de s'humilier devant ton Dieu",
        "Après trois semaines",
        "Immédiatement",
        "Le dernier jour"
      ],
      correctAnswer: "Dès le premier jour où Daniel a eu à cœur de comprendre, et de s'humilier devant ton Dieu",
      explanation: "Daniel 10v12"
    },
    {
      question: "Qui a résisté à l'homme vêtu de lin qui parlait à Daniel ?",
      options: [
        "Le chef du royaume de Grèce",
        "Le chef du royaume de Perse",
        "Le chef du royaume de Babylone",
        "Le chef du royaume de Juda"
      ],
      correctAnswer: "Le chef du royaume de Perse",
      explanation: "Daniel 10v13"
    },
    {
      question: "Pendant combien de temps le chef du royaume de Perse a-t-il résisté à l'ange venu à Daniel ?",
      options: [
        "Sept jours",
        "Vingt et un jours",
        "Trois jours",
        "Quarante jours"
      ],
      correctAnswer: "Vingt et un jours",
      explanation: "Daniel 10v13"
    },
    {
      question: "Qui est venu au secours à l'ange venu à Daniel ?",
      options: [
        "Gabriel",
        "Micaël, l'un des principaux chefs",
        "Raphaël",
        "Uriel"
      ],
      correctAnswer: "Micaël, l'un des principaux chefs",
      explanation: "Daniel 10v13"
    },
    {
      question: "Combien de fois Daniel est-il appelé « Homme bien-aimé » ?",
      options: [
        "Une fois",
        "Deux fois",
        "Trois fois",
        "Quatre fois"
      ],
      correctAnswer: "Deux fois",
      explanation: "Daniel 10v11 et Daniel 10v19"
    },
    {
      question: "Combien de fois l'expression « Ne crains rien » est-elle dite à Daniel ?",
      options: [
        "Une fois",
        "Deux fois",
        "Trois fois",
        "Quatre fois"
      ],
      correctAnswer: "Deux fois",
      explanation: "Daniel 10v12 et Daniel 10v19"
    }
  ],
  11: [
    {
      question: "Qui était auprès de Darius, le Mède pour l'aider et le soutenir la première année de son règne ?",
      options: [
        "L'ange Gabriel",
        "Celui qui avait l'apparence d'un homme",
        "Micaël",
        "Daniel"
      ],
      correctAnswer: "Celui qui avait l'apparence d'un homme",
      explanation: "Daniel 11v1"
    },
    {
      question: "En quelle année Celui qui avait l'apparence d'un homme était auprès de Darius, le Mède pour l'aider et le soutenir ?",
      options: [
        "La troisième année de son règne",
        "La première année de son règne",
        "La dixième année de son règne",
        "La dernière année de son règne"
      ],
      correctAnswer: "La première année de son règne",
      explanation: "Daniel 11v1"
    },
    {
      question: "Combien de rois Perses y aura encore au moment la Parole fut révélée à Daniel ?",
      options: [
        "Il y aura encore un roi en Perse",
        "Il y aura encore deux rois en Perse",
        "Il y aura encore trois rois en Perse",
        "Il y aura encore quatre rois en Perse"
      ],
      correctAnswer: "Il y aura encore trois rois en Perse",
      explanation: "Daniel 11v2"
    },
    {
      question: "Combien de rois Perses y a-t-il au total ?",
      options: [
        "Trois",
        "Quatre",
        "Cinq",
        "Six"
      ],
      correctAnswer: "Quatre",
      explanation: "Daniel 11v2"
    },
    {
      question: "Qu'est-ce que le quatrième roi, Perse, amassera plus que tous les autres rois Perses ?",
      options: [
        "Le quatrième amassera plus de soldats que tous les autres",
        "Le quatrième amassera plus de richesses que tous les autres",
        "Le quatrième amassera plus de terres que tous les autres",
        "Le quatrième amassera plus de sagesse que tous les autres"
      ],
      correctAnswer: "Le quatrième amassera plus de richesses que tous les autres",
      explanation: "Daniel 11v2"
    },
    {
      question: "Qui dominera avec une grande puissance, et fera ce qu'il voudra ?",
      options: [
        "Un roi faible",
        "Un vaillant roi",
        "Un roi sage",
        "Un roi juste"
      ],
      correctAnswer: "Un vaillant roi",
      explanation: "Daniel 11v3"
    },
    {
      question: "Que sera le royaume lorsque le vaillant roi qui s'élèvera de Javan se sera élevé ?",
      options: [
        "Et lorsqu'il se sera élevé, son royaume se brisera et sera divisé vers les quatre vents des cieux ; il n'appartiendra pas à ses descendants, et il ne sera pas aussi puissant qu'il était, car il sera déchiré, et il passera à d'autres qu'à eux",
        "Son royaume deviendra éternel",
        "Son royaume s'agrandira",
        "Son royaume deviendra plus fort"
      ],
      correctAnswer: "Et lorsqu'il se sera élevé, son royaume se brisera et sera divisé vers les quatre vents des cieux ; il n'appartiendra pas à ses descendants, et il ne sera pas aussi puissant qu'il était, car il sera déchiré, et il passera à d'autres qu'à eux",
      explanation: "Daniel 11v4"
    },
    {
      question: "Qui viendra pour rétablir la concorde entre le roi du midi et celui du septentrion ?",
      options: [
        "La fille du roi du midi",
        "La fille du roi du septentrion",
        "Un prophète",
        "Un sage"
      ],
      correctAnswer: "La fille du roi du midi",
      explanation: "Daniel 11v6"
    },
    {
      question: "Qui se mettront en campagne et rassembleront une multitude nombreuse de troupes contre le roi du midi ?",
      options: [
        "Les alliés du roi du midi",
        "Les fils du roi du septentrion",
        "Les frères du roi du midi",
        "Les généraux du roi du septentrion"
      ],
      correctAnswer: "Les fils du roi du septentrion",
      explanation: "Daniel 11v10"
    },
    {
      question: "Contre qui le roi du midi s'irritera-t-il ?",
      options: [
        "Contre ses propres soldats",
        "Contre le roi du septentrion",
        "Contre ses alliés",
        "Contre ses conseillers"
      ],
      correctAnswer: "Contre le roi du septentrion",
      explanation: "Daniel 11v11"
    },
    {
      question: "Au temps du combat entre le roi du midi et celui du septentrion, combien d'hommes s'élèveront contre le roi du midi ?",
      options: [
        "Un seul",
        "Plusieurs",
        "Deux",
        "Trois"
      ],
      correctAnswer: "Plusieurs",
      explanation: "Daniel 11v14"
    },
    {
      question: "Qui sont ceux parmi le peuple de Daniel qui se révolteront pour accomplir la vision ?",
      options: [
        "Des hommes paisibles",
        "Des hommes violents",
        "Des hommes sages",
        "Des hommes riches"
      ],
      correctAnswer: "Des hommes violents",
      explanation: "Daniel 11v14"
    },
    {
      question: "De quoi s'emparera le roi du septentrion ?",
      options: [
        "Des trésors",
        "Des villes fortes",
        "Des terres",
        "Des navires"
      ],
      correctAnswer: "Des villes fortes",
      explanation: "Daniel 11v15"
    },
    {
      question: "Que se proposera de donner le roi du septentrion au roi du midi ?",
      options: [
        "De l'or",
        "Sa fille pour femme",
        "Des terres",
        "La paix"
      ],
      correctAnswer: "Sa fille pour femme",
      explanation: "Daniel 11v17"
    },
    {
      question: "De quelle côté le roi du septentrion tournera ses vues et en prendra plusieurs ?",
      options: [
        "Du côté de la terre",
        "Du côté des îles",
        "Du côté des montagnes",
        "Du côté du désert"
      ],
      correctAnswer: "Du côté des îles",
      explanation: "Daniel 11v18"
    },
    {
      question: "Qui prendra la place du roi du septentrion, sans être revêtu de la dignité royale ?",
      options: [
        "Un homme noble",
        "Un homme méprisé",
        "Un homme riche",
        "Un homme sage"
      ],
      correctAnswer: "Un homme méprisé",
      explanation: "Daniel 11v21"
    },
    {
      question: "Par quoi l'homme méprisé s'empara du royaume du septentrion, sans être revêtu de la dignité royale ?",
      options: [
        "Par la force",
        "Par l'intrigue",
        "Par l'héritage",
        "Par l'élection"
      ],
      correctAnswer: "Par l'intrigue",
      explanation: "Daniel 11v21"
    },
    {
      question: "Comment les troupes répandront-elles contre l'homme méprise qui s'empara du royaume du septentrion ?",
      options: [
        "Comme un feu",
        "Comme un torrent",
        "Comme un vent",
        "Comme une tempête"
      ],
      correctAnswer: "Comme un torrent",
      explanation: "Daniel 11v22"
    },
    {
      question: "De quoi usera l'homme méprise qui s'empara du royaume du septentrion ?",
      options: [
        "De force",
        "De tromperie",
        "De sagesse",
        "De richesse"
      ],
      correctAnswer: "De tromperie",
      explanation: "Daniel 11v23"
    },
    {
      question: "Que chercheront les deux rois (celui du midi et celui du septentrion) en leur cœur et comment parleront-ils à la même table ?",
      options: [
        "Les deux rois chercheront en leur cœur à faire le bien, et à la même table ils parleront avec fausseté",
        "Les deux rois chercheront en leur cœur à faire le mal, et à la même table ils parleront avec fausseté",
        "Les deux rois chercheront la paix, et parleront avec sincérité",
        "Les deux rois chercheront la guerre, et parleront avec colère"
      ],
      correctAnswer: "Les deux rois chercheront en leur cœur à faire le mal, et à la même table ils parleront avec fausseté",
      explanation: "Daniel 11v27"
    },
    {
      question: "Sur qui l'homme méprise qui s'empara du royaume du septentrion portera ses regards dans sa fureur contre l'alliance sainte ?",
      options: [
        "Il portera ses regards sur ceux qui auront abandonné l'alliance sainte",
        "Il portera ses regards sur ceux qui gardent l'alliance sainte",
        "Il portera ses regards sur les prêtres",
        "Il portera ses regards sur les prophètes"
      ],
      correctAnswer: "Il portera ses regards sur ceux qui auront abandonné l'alliance sainte",
      explanation: "Daniel 11v30"
    },
    {
      question: "Que feront les troupes qui se présenteront contre l'alliance sainte sur ordre de l'homme méprise qui s'empara du royaume du septentrion ?",
      options: [
        "Des troupes se présenteront sur son ordre ; elles profaneront le sanctuaire, la forteresse, elles feront cesser le sacrifice perpétuel, et dresseront l'abomination du dévastateur",
        "Elles protégeront le sanctuaire",
        "Elles restaureront le sacrifice",
        "Elles honoreront l'alliance"
      ],
      correctAnswer: "Des troupes se présenteront sur son ordre ; elles profaneront le sanctuaire, la forteresse, elles feront cesser le sacrifice perpétuel, et dresseront l'abomination du dévastateur",
      explanation: "Daniel 11v31"
    },
    {
      question: "Par quoi l'homme méprise qui s'empara du royaume du septentrion séduira-t-il les traîtres de l'alliance ?",
      options: [
        "Par des menaces",
        "Par des flatteries",
        "Par des richesses",
        "Par des promesses"
      ],
      correctAnswer: "Par des flatteries",
      explanation: "Daniel 11v32"
    },
    {
      question: "Comment agiront ceux du peuple qui connaîtront leur Dieu face à la séduction ?",
      options: [
        "Mais ceux du peuple qui connaîtront leur Dieu agiront avec fermeté",
        "Ils fuiront",
        "Ils se cacheront",
        "Ils trahiront"
      ],
      correctAnswer: "Mais ceux du peuple qui connaîtront leur Dieu agiront avec fermeté",
      explanation: "Daniel 11v32"
    },
    {
      question: "Combien de sages succomberont jusqu'au temps de la fin ?",
      options: [
        "Tous les sages",
        "Aucun sage",
        "Quelques-uns des hommes sages succomberont",
        "La plupart des sages"
      ],
      correctAnswer: "Quelques-uns des hommes sages succomberont",
      explanation: "Daniel 11v35"
    },
    {
      question: "Contre qui l'homme méprise qui s'empara du royaume du septentrion dira des choses incroyables ?",
      options: [
        "Il dira des choses incroyables contre le Dieu des dieux",
        "Il dira des choses incroyables contre les rois",
        "Il dira des choses incroyables contre les prophètes",
        "Il dira des choses incroyables contre le peuple"
      ],
      correctAnswer: "Il dira des choses incroyables contre le Dieu des dieux",
      explanation: "Daniel 11v36"
    },
    {
      question: "Qu'honorera l'homme méprise qui s'empara du royaume du septentrion ?",
      options: [
        "Le dieu des forteresses sur son piédestal",
        "Le Dieu d'Israël",
        "Les dieux de ses pères",
        "Aucun dieu"
      ],
      correctAnswer: "Le dieu des forteresses sur son piédestal",
      explanation: "Daniel 11v38"
    },
    {
      question: "Au temps de la fin, qui se heurtera à l'homme méprisé qui s'empara du royaume de septentrion et qui se fondra sur lui ?",
      options: [
        "Au temps de la fin, le roi du midi se heurtera contre lui. Et le roi du septentrion fondra sur lui comme une tempête",
        "Le roi d'orient seulement",
        "Le roi d'occident seulement",
        "Aucun roi"
      ],
      correctAnswer: "Au temps de la fin, le roi du midi se heurtera contre lui. Et le roi du septentrion fondra sur lui comme une tempête",
      explanation: "Daniel 11v40"
    },
    {
      question: "Quels sont les pays qui seront délivrés de la main de l'homme méprisé qui s'empara du royaume de septentrion ?",
      options: [
        "Edom, Moab, et les principaux des enfants d'Ammon seront délivrés de sa main",
        "Juda et Israël",
        "L'Égypte et la Libye",
        "La Perse et la Médie"
      ],
      correctAnswer: "Edom, Moab, et les principaux des enfants d'Ammon seront délivrés de sa main",
      explanation: "Daniel 11v41"
    }
  ],
  12: [
    {
      question: "Qui est Micaël ?",
      options: [
        "Micaël, un ange ordinaire",
        "Micaël, le grand chef, le défenseur des enfants du peuple de Dieu",
        "Micaël, un prophète",
        "Micaël, un roi"
      ],
      correctAnswer: "Micaël, le grand chef, le défenseur des enfants du peuple de Dieu",
      explanation: "Daniel 12v1"
    },
    {
      question: "A quel moment se lèvera Micaël, le grand chef, le défenseur des enfants du peuple de Dieu ?",
      options: [
        "En ce temps-là, qui sera une époque de paix",
        "En ce temps-là, qui sera une époque de détresse, telle qu'il n'y en a point eu de semblable depuis que les nations existent jusqu'à cette époque",
        "En ce temps-là, qui sera une époque de richesse",
        "En ce temps-là, qui sera une époque de joie"
      ],
      correctAnswer: "En ce temps-là, qui sera une époque de détresse, telle qu'il n'y en a point eu de semblable depuis que les nations existent jusqu'à cette époque",
      explanation: "Daniel 12v1"
    },
    {
      question: "Qu'arrivera à ceux du peuple d'Israël qui seront trouvés inscrits dans le livre ?",
      options: [
        "Ceux du peuple d'Israël qui seront trouvés inscrits dans le livre seront sauvés",
        "Ils seront punis",
        "Ils seront oubliés",
        "Ils seront exilés"
      ],
      correctAnswer: "Ceux du peuple d'Israël qui seront trouvés inscrits dans le livre seront sauvés",
      explanation: "Daniel 12v1"
    },
    {
      question: "Pour quoi plusieurs de ceux qui dorment dans la poussière de la terre se réveilleront ?",
      options: [
        "Ils se réveilleront pour vivre encore sur terre",
        "Ils se réveilleront, les uns pour la vie éternelle, et les autres pour l'opprobre, pour la honte éternelle",
        "Ils se réveilleront pour dormir à nouveau",
        "Ils se réveilleront pour travailler"
      ],
      correctAnswer: "Ils se réveilleront, les uns pour la vie éternelle, et les autres pour l'opprobre, pour la honte éternelle",
      explanation: "Daniel 12v2"
    },
    {
      question: "Qui sont ceux qui brilleront comme la splendeur du ciel, à toujours et à perpétuité ?",
      options: [
        "Ceux qui auront été riches",
        "Ceux qui auront été intelligents",
        "Ceux qui auront été puissants",
        "Ceux qui auront été beaux"
      ],
      correctAnswer: "Ceux qui auront été intelligents",
      explanation: "Daniel 12v3"
    },
    {
      question: "Qui sont ceux qui brilleront comme les étoiles, à toujours et à perpétuité ?",
      options: [
        "Ceux qui auront enseigné la justice, à la multitude",
        "Ceux qui auront gouverné",
        "Ceux qui auront combattu",
        "Ceux qui auront construit"
      ],
      correctAnswer: "Ceux qui auront enseigné la justice, à la multitude",
      explanation: "Daniel 12v3"
    },
    {
      question: "Jusqu'à quand Daniel devra-t-il tenir secrètes les paroles, et sceller le livre ?",
      options: [
        "Jusqu'à la mort de Daniel",
        "Jusqu'au temps de la fin",
        "Jusqu'à la venue du Messie",
        "Jusqu'à la fin des temps"
      ],
      correctAnswer: "Jusqu'au temps de la fin",
      explanation: "Daniel 12v4"
    },
    {
      question: "Où se tenait l'homme vêtu de lin ?",
      options: [
        "L'homme vêtu de lin se tenait au-dessus des eaux du fleuve",
        "L'homme vêtu de lin se tenait sur la rive",
        "L'homme vêtu de lin se tenait dans le fleuve",
        "L'homme vêtu de lin se tenait sur une montagne"
      ],
      correctAnswer: "L'homme vêtu de lin se tenait au-dessus des eaux du fleuve",
      explanation: "Daniel 12v6"
    },
    {
      question: "Que demanda l'un des deux autres hommes à l'homme vêtu de lin, qui se tenait au-dessus des eaux du fleuve ?",
      options: [
        "Quand sera la fin de ces prodiges ?",
        "Qui es-tu ?",
        "Que signifient ces visions ?",
        "Quand viendra le salut ?"
      ],
      correctAnswer: "Quand sera la fin de ces prodiges ?",
      explanation: "Daniel 12v6"
    },
    {
      question: "Par qui jura l'homme vêtu de lin, qui se tenait au-dessus des eaux du fleuve ?",
      options: [
        "Par le Dieu vivant",
        "Par celui qui vit éternellement",
        "Par le Dieu du ciel",
        "Par le Dieu d'Israël"
      ],
      correctAnswer: "Par celui qui vit éternellement",
      explanation: "Daniel 12v7"
    },
    {
      question: "Combien de dureront les prodiges, vus par Daniel ?",
      options: [
        "Ce sera dans un temps, des temps, et la moitié d'un temps",
        "Ce sera dans sept temps",
        "Ce sera dans soixante-dix semaines",
        "Ce sera dans mille ans"
      ],
      correctAnswer: "Ce sera dans un temps, des temps, et la moitié d'un temps",
      explanation: "Daniel 12v7"
    },
    {
      question: "Quand sera la fin des prodiges, vus par Daniel ?",
      options: [
        "Quand le peuple sera fort",
        "Quand la force du peuple saint sera entièrement brisée",
        "Quand le temple sera reconstruit",
        "Quand le Messie viendra"
      ],
      correctAnswer: "Quand la force du peuple saint sera entièrement brisée",
      explanation: "Daniel 12v7"
    },
    {
      question: "Au temps de la fin, combien seront purifiés, blanchis et épurés ?",
      options: [
        "Peu",
        "Plusieurs",
        "Tous",
        "Aucun"
      ],
      correctAnswer: "Plusieurs",
      explanation: "Daniel 12v10"
    },
    {
      question: "Au temps de la fin, qui ne comprendra pas les Paroles de la vision de Daniel ?",
      options: [
        "Aucun des méchants ne comprendra",
        "Tous comprendront",
        "Les sages seulement",
        "Les justes seulement"
      ],
      correctAnswer: "Aucun des méchants ne comprendra",
      explanation: "Daniel 12v10"
    },
    {
      question: "Combien de temps y aura-t-il depuis le temps où cessera le sacrifice perpétuel, et où sera dressée l'abomination du dévastateur ?",
      options: [
        "Il y aura mille deux cent soixante jours",
        "Il y aura mille deux cent quatre-vingt-dix jours",
        "Il y aura mille trois cent trente-cinq jours",
        "Il y aura deux mille trois cents jours"
      ],
      correctAnswer: "Il y aura mille deux cent quatre-vingt-dix jours",
      explanation: "Daniel 12v11"
    },
    {
      question: "Au temps de la fin, qui sera heureux ?",
      options: [
        "Celui qui aura fui",
        "Heureux celui qui attendra, et qui arrivera jusqu'à mille trois cent trente-cinq jours !",
        "Celui qui aura combattu",
        "Celui qui aura enseigné"
      ],
      correctAnswer: "Heureux celui qui attendra, et qui arrivera jusqu'à mille trois cent trente-cinq jours !",
      explanation: "Daniel 12v12"
    }
  ]
};