export type Project = {
  id: string;
  name: string;
  description: string;
  categories: string[];
  isProfessional?: boolean;
  enterprise?: {
    name: string;
    url: string;
    role?: string;
  };
  date?: string;
  banner: string;
  url?: string;
  githubUrl?: string;
  content: {
    pitch: string;
    video?: string;
    images: {
      url: string;
      alt?: string;
    }[];
    technicalContribution: string;
    competences: {
      title: string;
      subtitle?: string;
      skills: string[];
    }[];
  };
};

// TODO: fill the projects
export const projects: Project[] = [
  {
    id: "toon-tanks",
    name: "Toon Tanks",
    description:
      "Pilotez un mini tank et survivez aux salves ennemies dans ce shooter arcade explosif en 3D.",
    categories: ["Game", "Formation", "UnrealEngine", "C++", "3D", "PC", "Arcade"],
    date: "2025",
    banner: "/images/projects/toon-tanks-banner.webp",
    content: {
      pitch:
        "Toon Tanks est un jeu d’arcade développé sous Unreal Engine 5, où le joueur prend les commandes d’un petit tank pour affronter des vagues de tourelles ennemies.\n\nLe principe est simple mais addictif : esquiver, viser, tirer et survivre le plus longtemps possible. Inspiré des classiques du genre, le jeu combine rapidité, précision et fun immédiat.\n\nRéalisé dans le cadre d’une formation Udemy, ce projet m’a permis d’approfondir la programmation C++ dans Unreal, de comprendre la structure du gameplay framework et d’explorer la création d’une IA basique. Une extension multijoueur est prévue afin d’ajouter un mode compétitif entre joueurs.",
      images: [
        {
          url: "/images/projects/toon-tanks-1.webp",
          alt: "Aperçu du gameplay de Toon Tanks",
        },
        {
          url: "/images/projects/toon-tanks-2.webp",
          alt: "Interface et tir des tourelles dans Toon Tanks",
        },
      ],
      technicalContribution:
        "J’ai conçu et programmé l’ensemble du gameplay en C++, incluant les déplacements du tank, le système de tir, la détection des collisions, la gestion des points de vie et la génération procédurale de chaque niveau.\n\nJ’ai développé un HUD interactif pour afficher les informations du joueur en temps réel et intégré des comportements d’IA pour les tourelles ennemies via Blueprints.\n\nCe projet m’a permis de maîtriser les fondations du gameplay framework d’Unreal Engine, de consolider mes compétences en programmation orientée objet et de poser les bases d’une extension multijoueur.",
      competences: [
        {
          title: "Développement Unreal Engine",
          skills: [
            "C++ & Blueprints",
            "Systèmes de gameplay",
            "IA & interactions",
            "Conception de niveaux",
            "Optimisation des performances",
            "Intégration du HUD",
            "Préparation multijoueur",
            "Génération procédurale",
          ],
        },
        {
          title: "Architecture & Pipeline",
          skills: [
            "Structure du projet Unreal",
            "Classes & composants C++ personnalisés",
            "Optimisation du workflow de développement",
            "Réplication réseau",
          ],
        },
        {
          title: "Outils & Collaboration",
          skills: ["Perforce", "Git", "Gestion des branches & changelists"],
        },
        {
          title: "Compétences Complémentaires",
          skills: [
            "Game Design",
            "Programmation orientée objet",
            "Approche itérative du développement",
            "Optimisation du flux de travail",
            "Équilibrage gameplay",
            "Debug et tests",
          ],
        },
      ],
    },
  },
  {
    id: "sifter",
    name: "Sifter",
    description: "Explorez, pillez et survivez dans des lieux maudits pour racheter votre liberté.",
    categories: ["Game", "Formation", "UnrealEngine", "C++", "3D", "Adventure", "PC"],
    date: "2025",
    banner: "/assets/projects/Sifter/Sifter5.webp",
    githubUrl: "https://github.com/LucasAbadie/Sifter",
    content: {
      pitch:
        "Sifter est un jeu d’aventure et d’exploration développé sous Unreal Engine 5, où le joueur incarne un pilleur de tombeaux en quête de richesses et de liberté. Chaque expédition se déroule dans des lieux abandonnés — manoirs, ruines ou catacombes — remplis d’objets précieux, d’énigmes à résoudre et de pièges mortels à éviter.\n\nLe joueur doit collecter les trésors sans les endommager, tout en affrontant des hordes d’ennemis et en protégeant son butin. Une phase de préparation permettra d’acheter du matériel et d’améliorer son équipement entre les explorations, ajoutant une dimension stratégique à l’expérience.\n\nÀ terme, un mode multijoueur viendra enrichir le jeu, offrant une expérience coopérative où plusieurs explorateurs uniront leurs efforts pour s’enrichir et survivre ensemble. Le but ultime : amasser assez de fortune pour payer son droit à la liberté… ou découvrir un secret bien plus sombre.",
      images: [
        {
          url: "/assets/projects/Sifter/Sifter1.webp",
          alt: "Level Design n°1 d'une crypte dans Sifter",
        },
        {
          url: "/assets/projects/Sifter/Sifter2.webp",
          alt: "Level Design n°2 d'une crypte dans Sifter",
        },
        {
          url: "/assets/projects/Sifter/Sifter3.webp",
          alt: "Level Design n°3 d'une crypte dans Sifter",
        },
        {
          url: "/assets/projects/Sifter/Sifter4.webp",
          alt: "Level Design n°4 d'une crypte dans Sifter",
        },
        {
          url: "/assets/projects/Sifter/Sifter5.webp",
          alt: "Level Design n°5 d'une crypte dans Sifter",
        },
      ],
      technicalContribution:
        "Sur Sifter, j’ai participé à la conception et au développement des mécaniques principales du jeu sous Unreal Engine 5. Cela inclut la gestion du mouvement du joueur, la collecte d’objets, le système de dégâts, la génération procédurale des niveaux, et la logique d’interaction avec les pièges et les énigmes.\n\nJ’ai également travaillé sur la base du système d’économie et d’inventaire, permettant la valorisation et la protection des objets collectés, ainsi que sur la mise en place des comportements d’IA pour les ennemis. Une attention particulière a été portée à l’équilibrage du gameplay afin de maintenir la tension entre exploration, risque et récompense.\n\nEnfin, j’ai commencé la préparation du futur mode multijoueur en étudiant la réplication réseau dans Unreal et en structurant les systèmes pour supporter la coopération entre plusieurs joueurs.",
      competences: [
        {
          title: "Développement Unreal Engine",
          skills: [
            "C++ & Blueprints",
            "Systèmes de gameplay",
            "IA & interactions",
            "Gestion des objets et de l’inventaire",
            "Systèmes d’énigmes et de pièges",
            "Préparation multijoueur",
            "Intégration du HUD",
            "Optimisation des performances",
            "Génération procédurale",
          ],
        },
        {
          title: "Architecture & Pipeline",
          skills: [
            "Structure du projet Unreal",
            "Classes & composants C++ personnalisés",
            "Optimisation du workflow de développement",
            "Réplication réseau",
            "Framework Gameplay Abilities",
          ],
        },
        {
          title: "Outils & Collaboration",
          skills: ["Perforce", "Git", "Gestion des branches & changelists"],
        },
        {
          title: "Compétences Complémentaires",
          skills: [
            "Game design",
            "Équilibrage gameplay / économie",
            "Design d’énigmes interactives",
            "Programmation orientée objet",
            "Approche itérative du développement",
            "Debug et tests",
          ],
        },
      ],
    },
  },
  {
    id: "dayoff",
    name: "Day Off",
    description:
      "Vivez l’expérience de Charlie, partagée entre pression professionnelle et équilibre personnel.",
    categories: ["Game", "Unity", "C#", "2D", "Entreprise", "Mobile"],
    date: "2024",
    banner: "/assets/projects/DayOff/DayOff.webp",
    url: "https://www.theseedcrew.com/day-off/",
    content: {
      pitch:
        "Day Off est une expérience narrative développée sous Unity qui plonge le joueur dans le quotidien numérique de Charlie, une employée dont la vie personnelle et professionnelle se confondent peu à peu.\n\nÀ travers une interface simulant un smartphone, le joueur interagit avec des applications, des notifications, des mails et des messages, observant jour après jour la montée de la pression, des attentes et de la fatigue mentale.\n\nL’expérience se déroule sur cinq journées consécutives, reflétant la lente dégradation de l’équilibre entre vie pro et perso. Sans recours à des dialogues explicites, le jeu mise sur le réalisme des interactions et le rythme des notifications pour transmettre le poids psychologique du burn-out.\n\nDay Off propose ainsi une expérience introspective et réaliste sur la santé mentale au travail, encourageant la réflexion et la prise de conscience à travers un format accessible et immersif.",
      video: "",
      images: [
        {
          url: "/assets/projects/DayOff/DayOff.webp",
          alt: "Simulation d’interface mobile dans Day Off",
        },
        {
          url: "/assets/projects/DayOff/DayOff.webp",
          alt: "Notifications et applications du smartphone de Charlie dans Day Off",
        },
      ],
      technicalContribution:
        "J’ai participé à la conception et au développement de Day Off, en contribuant à la création de l’interface utilisateur simulant un smartphone fonctionnel et réactif. Mon travail a porté sur la gestion des applications internes (messagerie, mails, notifications, paramètres) et sur la logique temporelle gérant la progression du joueur sur cinq journées virtuelles.\n\nJ’ai également travaillé sur la mise en scène des transitions et l’ordonnancement des événements pour renforcer la narration visuelle, sans recourir à des dialogues directs. L’expérience devait rester fluide, crédible et émotionnellement engageante.\n\nCe projet m’a permis de perfectionner mes compétences en développement Unity (C#, UI Toolkit, gestion des states et coroutines) ainsi qu’en conception d’interfaces.",
      competences: [
        {
          title: "Développement Unity",
          skills: [
            "C#",
            "UI Toolkit & Canvas",
            "Gestion d’états & coroutines",
            "Simulation d’interface mobile",
            "Systèmes d’événements temporels",
            "Gestion de la progression",
          ],
        },
        {
          title: "Architecture & Pipeline",
          skills: [
            "Structure modulaire du projet",
            "Optimisation UI & performance",
            "Scripting événementiel",
          ],
        },
        {
          title: "Outils & Collaboration",
          skills: ["Perforce", "Collaboration interdisciplinaire", "Documentation technique"],
        },
        {
          title: "Compétences Complémentaires",
          skills: ["Sensibilisation à la santé mentale", "Mise en scène non verbale"],
        },
      ],
    },
  },
  {
    id: "theater-robots",
    name: "Theater & Robots",
    description:
      "Construisez votre deck et racontez des histoires dans une décharge peuplée de robots rêveurs.",
    categories: ["Game", "Entreprise", "Roguelite", "Deckbuilder", "Unity", "C#", "Mobile"],
    date: "2025",
    banner: "/assets/projects/TheaterRobots/TR0.webp",
    url: "",
    content: {
      pitch:
        "Theater & Robots est un roguelite deckbuilder narratif développé sous Unity pour mobile (Android/iOS). Le joueur incarne un robot vivant dans une décharge, dont la mission est de divertir ses compagnons en rejouant, à travers des cartes et des mécaniques de jeu, les grands récits issus de la mémoire collective humaine.\n\nLe jeu détourne les codes du genre : ici, le combat n’est pas une bataille de force, mais un duel d’imagination et de créativité. Chaque carte, chaque choix et chaque combinaison incarnent une manière de raconter, d’improviser ou de transformer une histoire. Trois classes jouables — le Scriptwriter, le Poet et le Dramatist — offrent des approches uniques du storytelling, entre stratégie, émotion et inventivité.\n\nGrâce à sa structure roguelite, chaque run renouvelle l’expérience avec des talents, des événements et des pouvoirs aléatoires. Theater & Robots propose ainsi une rejouabilité infinie où la narration devient l’arme principale du joueur.",
      images: [
        {
          url: "/assets/projects/TheaterRobots/TR0.webp",
          alt: "Interface de combat et cartes du deckbuilder Theater & Robots",
        },
        {
          url: "/assets/projects/TheaterRobots/TR1.webp",
          alt: "Sélection des classes Scriptwriter, Poet et Dramatist dans Theater & Robots",
        },
        {
          url: "/assets/projects/TheaterRobots/TR2.webp",
          alt: "Sélection des classes Scriptwriter, Poet et Dramatist dans Theater & Robots",
        },
        {
          url: "/assets/projects/TheaterRobots/TR3.webp",
          alt: "Sélection des classes Scriptwriter, Poet et Dramatist dans Theater & Robots",
        },
        {
          url: "/assets/projects/TheaterRobots/TR6.webp",
          alt: "Sélection des classes Scriptwriter, Poet et Dramatist dans Theater & Robots",
        },
      ],
      technicalContribution:
        "Sur Theater & Robots, j’ai participé à la conception et au développement des mécaniques fondamentales du deckbuilder, en m’appuyant sur une architecture modulaire pensée pour la clarté du code.\n\nJ’ai travaillé à la mise en place des systèmes de cartes (Spells, Enchantments, Artefacts, Channels), à la logique de pioche et de gestion du deck, ainsi qu’à l’intégration des différentes mécaniques de jeu propres à chaque classe. Le système de tour par tour, la gestion des événements et des pouvoirs aléatoires ont également été optimisés pour garantir un rythme fluide sur mobile.\n\nLe projet m’a permis d’approfondir mes compétences en développement Unity, notamment sur la structuration d’un jeu complexe basé sur des données (ScriptableObjects, Data-Driven Design), la gestion des interfaces adaptatives et la conception de boucles de gameplay roguelike.",
      competences: [
        {
          title: "Développement Unity",
          skills: [
            "C#",
            "Systèmes de cartes et deckbuilder",
            "Architecture orientée données (ScriptableObjects)",
            "Gestion du tour par tour",
            "UI mobile adaptative",
          ],
        },
        {
          title: "Architecture & Pipeline",
          skills: [
            "Structure modulaire du projet",
            "Système d’événements et de talents",
            "Gestion de la rejouabilité",
            "Optimisation mobile",
          ],
        },
        {
          title: "Outils & Collaboration",
          skills: ["Perforce", "Gestion collaborative des assets", "Documentation technique"],
        },
        {
          title: "Compétences Complémentaires",
          skills: ["Game design"],
        },
      ],
    },
  },
  {
    id: "recovr",
    name: "RecovR",
    description: "Le jeu vidéo catalyseur de diversité et d'inclusion au travail.",
    categories: [
      "Game",
      "Entreprise",
      "Web",
      "Pro",
      "UnrealEngine",
      "C++",
      "Blueprint",
      "PC",
      "Mobile",
      "Navigateur",
    ],
    isProfessional: true,
    enterprise: {
      name: "The Seed Crew",
      url: "https://theseedcrew.com",
      role: "Lead Developer",
    },
    date: "2019 - 2023",
    banner: "/assets/projects/RecovR/RecovR.webp",
    url: "https://recovr.me",
    content: {
      pitch:
        "RecovR est une expérience interactive unique qui place les joueurs face à des situations de discrimination inspirées du réel.\nDans un univers immersif en 3D, chacun explore différents choix de comportements et en mesure les conséquences, sans culpabilisation.\n\nDéveloppé à partir de 5 années de recherche en sciences humaines et sociales, RecovR accompagne les organisations dans la construction d’une culture plus inclusive.\n\nDisponible en atelier collectif ou en format digital modulable, RecovR offre des outils de sensibilisation concrets, engageants et mesurables pour transformer durablement les pratiques.",
      images: [
        {
          url: "/assets/projects/RecovR/RecovR0.webp",
          alt: "RecovR Dashboard",
        },
        {
          url: "/assets/projects/RecovR/RecovR1.webp",
          alt: "RecovR Game Menu Screen",
        },
        {
          url: "/assets/projects/RecovR/RecovR2.webp",
          alt: "RecovR Gameplay 1",
        },
        {
          url: "/assets/projects/RecovR/RecovR.webp",
          alt: "RecovR Gameplay 2",
        },
        {
          url: "/assets/projects/RecovR/RecovR4.webp",
          alt: "RecovR Gameplay 3",
        },
        {
          url: "/assets/projects/RecovR/RecovR3.webp",
          alt: "RecovR Game Metrics",
        },
      ],
      technicalContribution:
        "En tant que cofondateur, lead tech et développeur principal chez The Seed Crew, j’ai participé à la conception et au développement de RecovR.\nMon rôle a couvert la programmation des mécaniques de jeu, des interfaces et des 3C sous Unreal Engine, la mise en place d’une API REST (Express.js, MongoDB, Docker) et le développement d’un dashboard web en Vue.js pour la gestion et l’analyse des données.\nCe projet m’a permis de conjuguer expertise technique, gestion de production et engagement sociétal, en transformant le jeu vidéo en véritable levier d’impact positif.",
      competences: [
        {
          title: "Développement Unreal Engine",
          skills: [
            "C++ & Blueprints",
            "Systèmes de gameplay",
            "IA & interactions",
            "Conception de niveaux et UI",
            "Optimisation des performances",
            "Gestion des données",
            "Intégration de sous-systèmes",
            "Intégration d’API",
          ],
        },
        {
          title: "Architecture & Pipeline",
          skills: [
            "Configuration du projet & builds",
            "Workflow multi-plateformes",
            "Scripts d’automatisation",
          ],
        },
        {
          title: "Outils & Collaboration",
          skills: [
            "Perforce",
            "Git",
            "Gestion des branches & changelists",
            "Configuration serveur",
            "Environnements Docker",
            "Suivi Agile",
            "Communication d’équipe",
          ],
        },
        {
          title: "Compétences Complémentaires",
          skills: ["API REST (Express.JS)", "MongoDB", "Vue.js", "UX & game design"],
        },
      ],
    },
  },
  {
    id: "3defenz",
    name: "3DefenZ",
    description:
      "Défendez votre base à travers un tower defense sobre et lumineux dans un univers néon minimaliste",
    categories: ["Game", "TowerDefense", "Unity", "C#", "3D", "Web", "Études"],
    date: "2025",
    banner: "/images/projects/3defenz-banner.webp",
    url: "https://3defenz.lucasabadie.fr/",
    githubUrl: "https://github.com/LucasAbadie/3DefenZ",
    content: {
      pitch:
        "3DefenZ est un tower defense développé sous Unity et conçu pour une diffusion web. Le joueur doit gérer ses ressources pour placer et améliorer différentes tourelles face à des vagues d’ennemis aux comportements variés.\n\nLe projet met l’accent sur la lisibilité, la progression stratégique et la clarté des mécaniques. Chaque tour et chaque ennemi ont été pensés pour encourager l’expérimentation et la planification à long terme.\n\nSon esthétique néon, combinée à une interface épurée, propose une expérience de jeu sobre et fluide, où la gestion et la précision priment sur la frénésie. Réalisé dans le cadre du Master MAPI MAJE, 3DefenZ explore les fondamentaux du game design de défense en alliant accessibilité et rigueur technique.",
      images: [
        {
          url: "/images/projects/3defenz-1.webp",
          alt: "Vue du champ de bataille néon dans 3DefenZ",
        },
        {
          url: "/images/projects/3defenz-2.webp",
          alt: "Interface et tourelles améliorables dans 3DefenZ",
        },
      ],
      technicalContribution:
        "Sur 3DefenZ, j’ai développé les systèmes de gameplay principaux, incluant le comportement des tourelles, le pathfinding des ennemis, et la logique des vagues successives. J’ai conçu un système d’économie permettant d’acheter et d’améliorer les tours en fonction des performances du joueur.\n\nJ’ai également intégré l’interface utilisateur, regroupant les informations de score, les options d’achat et de gestion des tours, tout en veillant à maintenir une expérience fluide sur navigateur.\n\nCe projet m’a permis de renforcer mes compétences en développement Unity, notamment sur la gestion d’agents IA (NavMesh), la programmation d’interactions dynamiques et la mise en place d’une direction artistique cohérente autour d’un style néon.",
      competences: [
        {
          title: "Développement Unity",
          skills: [
            "C#",
            "Systèmes de tours et vagues d’ennemis",
            "Pathfinding avec NavMesh",
            "Gestion d’économie et de score",
            "Intégration de l’UI",
          ],
        },
        {
          title: "Architecture & Pipeline",
          skills: [
            "Structure modulaire du gameplay",
            "Système d’améliorations",
            "Optimisation web",
            "Gestion des effets lumineux",
          ],
        },
        {
          title: "Outils & Collaboration",
          skills: ["Git", "Perforce", "Versionning collaboratif", "Documentation technique"],
        },
        {
          title: "Compétences Complémentaires",
          skills: [
            "Game design stratégique",
            "Équilibrage des mécaniques",
            "Direction artistique néon",
            "Expérience utilisateur web",
          ],
        },
      ],
    },
  },
  {
    id: "kingblop",
    name: "King Blop",
    description: "Projet réalisé pour dans le cadre de la Global Game Jam de Janvier 2018.",
    categories: ["Game", "Étudiant", "Unity", "C#", "2D", "PC", "GameJam"],
    date: "2018",
    banner: "",
    url: "https://globalgamejam.org/2018/games/king-blop",
    content: {
      pitch:
        "King Blop est un jeu PC réaliser sous Unity3D.\nC'est un plateformer 2D avec des sons en beatbox ainsi que des graphismes utilisant la texture du carton.\n\nSynopsis :\nIl y a longtemps, dans un royaume très très lointain, un roi est mort. Et maintenant .... Il est devenu un POULPE! Il a pour but de sauver TOUTES ses pieuvres et de trouver sa nouvelle couronne! ",
      images: [],
      technicalContribution: "",
      competences: [
        {
          title: "Développement Unity",
          skills: [
            "C++",
            "Systèmes de gameplay",
            "IA & interactions",
            "Conception de niveaux et UI",
            "Optimisation des performances",
            "Level design",
          ],
        },
        {
          title: "Architecture & Pipeline",
          skills: [],
        },
        {
          title: "Outils & Collaboration",
          skills: ["Git", "Suivi Agile", "Gestion des branches & changelists"],
        },
        {
          title: "Compétences Complémentaires",
          skills: ["Game Design"],
        },
      ],
    },
  },
  {
    id: "perfect-match",
    name: "Perfect Match",
    description:
      "Projet réalisé dans le cadre du Master MAPI (Management de Projets Innovants) parcours MAJE.",
    categories: ["Game", "Étudiant", "Unity", "C#", "2D", "Mobile"],
    date: "2017-2018",
    banner: "/assets/projects/PerfectMatch/PerfectMatch.webp",
    url: "",
    content: {
      pitch:
        "Perfect Macth est un jeu mobile réaliser sous Unity3D.\nDans celui-ci, nous contrôlons deux personnages dans un jeu style arcade. L’un inflige des dégâts et protège le second, et l'autre ... car la réussite du jeu dépend directement du niveau de stress du second personnage généré par les enemies. ",
      images: [
        {
          url: "/assets/projects/PerfectMatch/PerfectMatch.webp",
          alt: "Perfect Match Logo",
        },
        {
          url: "/assets/projects/PerfectMatch/PerfectMatch.webp",
          alt: "Perfect Match Logo",
        },
        {
          url: "/assets/projects/PerfectMatch/PerfectMatch.webp",
          alt: "Perfect Match Logo",
        },
      ],
      technicalContribution: "",
      competences: [
        {
          title: "Développement Unity",
          skills: [
            "C++",
            "Systèmes de gameplay",
            "IA & interactions",
            "Conception de niveaux et UI",
            "Optimisation des performances",
            "Level design",
          ],
        },
        {
          title: "Architecture & Pipeline",
          skills: [],
        },
        {
          title: "Outils & Collaboration",
          skills: ["Git", "Suivi Agile", "Gestion des branches & changelists"],
        },
        {
          title: "Compétences Complémentaires",
          skills: ["Game Design"],
        },
      ],
    },
  },
];
