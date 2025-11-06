# Portfolio Lucas Abadie – Développeur & Game Dev

**Portfolio personnel** de Lucas Abadie, développeur passionné par le web et le développement de jeux vidéo. Ce site présente mes projets professionnels et personnels, mon parcours, mes compétences et ma vision du développement.

🔗 **Site en ligne :** [lucasabadie.fr](https://lucasabadie.fr)

## 🎯 À propos

Ce portfolio met en avant mon expertise en développement web et game development, avec une sélection de projets variés allant des applications web fullstack aux jeux vidéo développés sous Unreal Engine et Unity.

## 🚀 Getting Started

Pour lancer le projet localement :

1. **Installer les dépendances**

   ```sh
   yarn install
   ```

2. **Lancer le serveur de développement**

   ```sh
   yarn dev
   ```

   Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

3. **Build pour la production**

   ```sh
   yarn build
   ```

4. **Export statique**

   ```sh
   yarn build
   yarn serve
   ```

## 🧠 Structure du Projet

```
├── app/                    # Pages et routes Next.js App Router
│   ├── page.tsx           # Page d'accueil
│   ├── projects/          # Section projets
│   ├── legal-notice/      # Mentions légales
│   └── privacy-policy/    # Politique de confidentialité
├── components/            # Composants React réutilisables
│   ├── Home/             # Composants de la page d'accueil
│   │   ├── Hero.tsx      # Section héro
│   │   ├── About.tsx     # Section à propos
│   │   ├── Career.tsx    # Parcours professionnel
│   │   ├── Contact.tsx   # Formulaire de contact
│   │   └── Spotlight.tsx # Projets mis en avant
│   ├── Projects/         # Composants de la section projets
│   ├── UI/               # Composants UI génériques
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Pied de page
│   └── FloatingCursor.tsx # Curseur personnalisé
├── data/                 # Données des projets
│   └── Projects.ts       # Base de données des projets
├── public/               # Assets statiques
│   └── assets/projects/  # Images et médias des projets
├── lib/                  # Utilitaires et helpers
└── types/                # Types TypeScript
```

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- **Hero Section** : Présentation animée avec effets de texte génératifs
- **À Propos** : Ma vision du développement et mes valeurs
- **Projets en Vedette** : Sélection des meilleurs projets avec système de cartes empilées
- **Parcours Professionnel** : Timeline interactive de mon expérience
- **Contact** : Formulaire de contact intégré avec EmailJS

### 🎮 Section Projets
- Galerie complète de tous mes projets (web, game dev, applications)
- Filtrage par catégories : Game, Web, Formation, Technologies
- Pages détaillées pour chaque projet avec :
  - Description et contexte
  - Galeries d'images et vidéos
  - Compétences techniques développées
  - Liens vers GitHub et démos en ligne
- Pagination dynamique

### 🎨 Design & UX
- **Mode sombre** : Thème élégant avec palette noir/blanc/gris
- **Animations** : Transitions fluides avec Framer Motion
- **Cursor personnalisé** : Curseur interactif qui suit la souris
- **Background animé** : Effet de bruit (noise) pour texture visuelle
- **Responsive** : Design adaptatif pour tous les appareils
- **Performance** : Lazy loading, optimisation des images (WebP/AVIF)
- **SEO optimisé** : Métadonnées, structure sémantique

## ��️ Technologies Utilisées

### Frontend
- **Next.js 15** : Framework React avec App Router
- **React 19** : Librairie UI
- **TypeScript** : Typage statique
- **Tailwind CSS** : Framework CSS utility-first
- **Framer Motion** : Animations et transitions
- **Lucide React** : Icônes modernes

### Fonctionnalités
- **EmailJS** : Envoi d'emails via le formulaire de contact
- **React Player** : Lecteur vidéo pour les démos
- **Next Themes** : Gestion du thème (dark mode)

### Qualité du Code
- **ESLint** : Linting et bonnes pratiques
- **Prettier** : Formatage automatique
- **Husky** : Git hooks pour validation pré-commit
- **Lint-staged** : Validation des fichiers modifiés

## 🎨 Personnalisation

### Modifier les projets

Les projets sont définis dans `/data/Projects.ts`. Pour ajouter un nouveau projet :

```typescript
{
  id: "mon-projet",
  name: "Mon Projet",
  description: "Description courte",
  categories: ["Web", "TypeScript"],
  date: "2025",
  banner: "/images/projects/mon-projet-banner.webp",
  githubUrl: "https://github.com/...",
  content: {
    pitch: "Description détaillée...",
    images: [/* ... */],
    technicalContribution: "Ma contribution...",
    competences: [/* ... */]
  }
}
```

## 📝 Scripts Disponibles

```sh
yarn dev          # Lancer le serveur de développement
yarn build        # Build de production
yarn serve        # Servir l'export statique
yarn lint         # Vérifier le code
yarn lint:fix     # Corriger automatiquement
yarn format       # Formater le code avec Prettier
yarn check-format # Vérifier le formatage
```

## 🚀 Déploiement

Le site est configuré pour l'export statique (`output: "export"`) et peut être déployé sur :
- Vercel
- Netlify
- GitHub Pages
- Tout serveur web statique

## 📧 Contact

Pour toute question ou opportunité professionnelle, n'hésitez pas à me contacter via le formulaire sur le site ou directement par email.

---

**Développé par Lucas Abadie** – Basé sur le template MONO by [Aniq UI](https://www.aniq-ui.com)
