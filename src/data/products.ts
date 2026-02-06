import { Book, Lightbulb, Zap, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Product { 
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  image?: string;
  price: string;
  features?: string[];
  inStock?: boolean;
  featured?: boolean;
  color: string; 
  tags?: string[];
}

export const products: Product[] = [
  {
    id: 'pack-famille-tafakkur',
    title: `Pack Famille • حقيبية الأسرة`,
    description: `L'intégralité du contenu des 5 niveaux du programme Tafakkar Maa Annous.`,
    longDescription: `
    Un pack complet contenant tous les matériels pédagogiques du programme Tafakkur pour les familles. 
    Développez la personnalité de vos enfants à travers des activités ludiques et éducatives couvrant les aspects personnels, relationnels, créatifs et spirituels.
    `,
    icon: Book,
    image: '/produits/pack-famille.jpeg',
    price: '1890 dhs',
    features: [
      'Contenu complet des 5 niveaux du programme',
      'Activités ludiques et interactives',
      'Support papier de qualité',
      'Guide parental inclus',
      'Livraison rapide'
    ],
    inStock: true,
    featured: true,
    color: 'bg-terracotta-50',
    tags: ['Famille', 'Complet', 'Développement personnel']
  },
  {
    id: 'je-suis-intelligent-emotionellement',
    title: `Programme Je Suis Intelligent Émotionellement • برنامج أنا ذكي عاطفيا`,
    description: `Comment doit réagir un enfant quand il se sent appeuré, énervé, triste, ou même ennuyé ?`,
    longDescription: `
    Ce programme aide les enfants à développer leur intelligence émotionnelle. À travers des histoires,
    des jeux et des activités pratiques, ils apprennent à reconnaître, comprendre et gérer leurs émotions
    pour une meilleure vie sociale et émotionnelle.

    Le programme « Je suis émotionnellement intelligent » se compose de :

    • Le guide éducatif

    • La roue des émotions

    • Le carnet des réussites

    • Des autocollants
    `,
    icon: Heart,
    image: '/produits/intelligence-emotionelle.jpg',
    price: '520 dhs',
    features: [
      'Gestion des émotions adaptée à l\'enfant',
      'Activités pratiques et ludiques',
      'Illustrations attrayantes',
      'Conseils pour les parents',
      'Format compact et portable'
    ],
    inStock: true,
    featured: false,
    color: 'bg-sage-50',
    tags: ['Enfants', 'Émotions', 'Développement']
  },
  {
    id: 'serie-je-suis-positif',
    title: `Série Je Suis Positif • سلسلة أنا إيجابي`,
    description: `Pour apprendre à bien vivre, développer sa confiance en soi et sa créativité, et construire de bonnes habitudes.`,
    longDescription: `
    4 histoires exceptionnelles de la collection « Je suis positif », pour les enfants à partir de 4 ans.

✨ Histoire : Je trouverai une solution ✨
Développe chez l’enfant la résilience psychologique et la créativité, renforce les compétences de résolution de problèmes et la confiance en soi.

✨ Histoire : Le jeu de l’imagination ✨
Favorise la pensée positive, l’imagination et la créativité, et renforce la motivation et l’autodiscipline.

✨ Histoire : Je suis formidable ✨
Développe chez l’enfant la résilience psychologique et créative, traite la jalousie et construit l’estime de soi.

✨ Histoire : Le découvreur de la beauté ✨
Développe chez l’enfant la contemplation consciente, le sens de la beauté, la pensée positive et la créativité.
    `,
    icon: Lightbulb,
    image: '/produits/positif.jpeg',
    price: '290 dhs',
    features: [
      'Histoires inspirantes',
      'Développement de la confiance en soi',
      'Activités de créativité',
      'Construction d\'habitudes positives',
      'Illustrations colorées et engageantes'
    ],
    inStock: true,
    featured: false,
    color: 'bg-cream-100',
    tags: ['Positivité', 'Habitudes', 'Confiance']
  },
  {
    id: 'serie-je-suis-penseur',
    title: `Série Je Suis un Penseur • سلسلة أنا متفكر`,
    description: `Bâtir sa foi à travers des preuves scientifiques, des réfléxions profondes, et des histoires ludiques.`,
    longDescription: `
    Ce programme complète le pack famille.

Jusqu’à présent, 8 guides pratiques ont été publiés pour construire la foi à travers la réflexion sur les effets des Beaux Noms d’Allah.
Chaque guide se compose d’une histoire, d’exercices et de jeux variés.

Titres des guides :

[La fleur unique] : réflexion sur les effets de l’attribut d’Allah Le Beau

[Qu’as-tu vu ?] : réflexion sur les effets du Nom d’Allah Le Créateur

[Allah m’aime] : réflexion sur les effets du Nom d’Allah Le Tout-Affectueux

[Merci ô Allah] : réflexion sur les effets du Nom d’Allah Le Donateur

[Le petit chat est heureux] : réflexion sur les effets du Nom d’Allah Le Très Miséricordieux

[Comment vas-tu, ô Soleil ?] : réflexion sur les effets de l’attribut d’Allah Le Beau

[La course des feuilles] : réflexion sur les effets du Nom d’Allah L’Omniscient

[Le Guide m’a enseigné] : réflexion sur les effets du Nom d’Allah Le Guide
    `,
    icon: Zap,
    image: '/produits/penseur.jpeg',
    price: '920 dhs',
    features: [
      'Pensée critique et philosophique',
      'Preuves scientifiques',
      'Histoires inspirantes',
      'Activités réfléchies',
      'Construction de valeurs'
    ],
    inStock: true,
    featured: false,
    color: 'bg-sage-100',
    tags: ['Pensée', 'Philosophie', 'Valeurs']
  },
  {
    id: 'life-planner',
    title: `Life Planner • منظم الحياة`,
    description: `Organiser sa vie, c'est plus que gérer son temps : c'est trouver l'équilibre et l'épanouissement.`,
    longDescription: `
    Le Life Planner est un outil complet pour organiser tous les aspects de votre vie : travail, famille, santé,
    épanouissement personnel, émotionnel et spirituel. Un guide pratique pour construire une vie équilibrée
    et alignée avec vos valeurs.
    `,
    icon: Book,
    image: '/produits/life-planner.jpeg',
    price: '199 dhs',
    features: [
      'Planification globale de la vie',
      'Équilibre travail-famille-santé',
      'Sections pour chaque domaine de vie',
      'Exercices pratiques',
      'Design épuré et fonctionnel'
    ],
    inStock: true,
    featured: true,
    color: 'bg-terracotta-50',
    tags: ['Planification', 'Organisation', 'Équilibre']
  },
];
