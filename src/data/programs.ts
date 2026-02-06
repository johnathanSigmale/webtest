import { MessageCircle, HeartHandshake, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ProgramCategory = 'Enfants' | 'Familles' | 'Écoles' | 'Tous'; 
type Module = {
  title: string;
  content: string;
}

export interface Program { 
  id: string;
  title: string;
  comment?: string;
  description: string;
  apropos?: string;
  icon: LucideIcon;
  brochure?: string;
  tags: string[];
  image: string;
  objectifs?: string[];
  modules?: Module[];
  features?:string[];
  category?: ProgramCategory;
  duration?: string;
  format?: string;
  price?: string;
  produit?: boolean;
  featured?: boolean;
  color: string;
}

export const programs: Program[] = [
  {
    id: 'accompagnement-individuel',
    title: 'Accompagnement Individuel',
    description:
      'Un accompagnement sur-mesure pour débloquer des situations spécifiques et retrouver confiance.',
    apropos : `
    L'accompagnement individuel permet d'identifier les sources d'anxiété ou de malaises physiques et  émotionnels que l'on peut resentir au quotidien, d'instaurer un mode de vie compatible avec ses valeurs, ses ambitions et ses priorités, tenant compte des contraintes éventuelles.

    L'objectif étant de retrouver sérénité et paix intérieure visant à apaiser le mental et à cultiver un bien-être durable.
    `,
    modules: [
      {title: 'Consultation Individuelle', content: '• 30 min : 250dhs\n• 1 heure : 500dhs\n• 2 heures : 900dhs'},
      {title: 'Accompagnement, Formation, et nettoyage emotionel profond', content: '4 séances pendant 1 mois :\n• 1 heure par semaine pour 1750dhs\n• 2 heures par semaine pour 3000dhs'}
    ],
    objectifs: ['Identifier les sources d\'anxiété et de malaises', 'Retrouver confiance et estime de soi', 'Instaurer un mode de vie aligné avec ses valeurs', 'Cultiver sérénité et bien-être durable'],
    features: ['Accompagnement personnalisé et sur-mesure', 'Nettoyage émotionnel profond', 'Flexible : consultation ou suivi sur plusieurs séances', 'Disponible en ligne et en présentiel'],
    icon: MessageCircle,
    brochure: '/brochures/brochure-accompagnement.jpeg',
    tags: ['30mn-2h', 'En ligne ou présentiel'],
    image: '/programmes/consultation.jpg',
    category: 'Tous',
    duration: '30mn-2h par séance',
    format: 'En ligne ou en présentiel',
    price: 'À partir de 250dhs',
    color: 'bg-terracotta-50',
  },
  {
    id: 'bilan-orientation',
    title: `Bilan d'Orientation Scolaire`,
    description:
      'Un petit investissement pour choisir son chemin en toute confiance.',
    apropos: `
    Le bilan d'orientation scolaire est un processus complet permettant aux jeunes de mieux se connaître et de faire des choix éducatifs éclairés. À travers des tests psychométriques et une analyse approfondie de leur profil, les élèves découvrent leurs forces, leurs intérêts et leurs préférences d'environnement de travail. Cela leur permet de choisir des filières adaptées à leur potentiel et à leurs aspirations.
    `,
    modules: [
      {title: 'Test des intelligences multiples', content: `Comprendre vos modes d'apprentissage et vos atouts naturels.`},
      {title: 'Synthèse de profil', content: `Une vision claire : forces, motivations, intérêts, axes de progression.`},
      {title: 'Analyse RIASEC / ECPR', content: `Identifier les intérêts et préférences d'environnements.`},
      {title: `Pistes d'orientation adaptées`, content: `Des filières concrètes et cohérentes avec votre profil.`}
    ],
    objectifs: ['Mieux se connaître', 'Clarifier ses intérêts et motivations', 'Faire les bons choix d\'orientation', 'Gagner en confiance pour l\'avenir'],
    features: ['Accompagnement personnalisé et individuel', 'Tests psychométriques validés scientifiquement', 'Analyse approfondie du profil', 'Recommandations de filières concrètes et adaptées'],
    image: '/programmes/orientation.jpg',
    brochure: '/brochures/brochure-orientation.jpeg',
    icon: GraduationCap,
    tags: ['2h', 'En ligne ou en présentiel'],
    category: 'Enfants',
    duration: '4-6h',
    format: 'En ligne ou en présentiel',
    price: 'À partir de 2700dhs',
    color: 'bg-sage-50',
    featured: true,
  },
  {
    id: 'tafakkur-famille',
    title: 'Formations Éducatives Familles',
    description:
      `Nos formations couvrent des domaines essentiels : discipline positive, pédagogie créative, développement de l'intelligence et construction d'une mentalité de réussite.`,
    apropos: `
    Les formations Tafakkur pour les familles offrent aux parents les outils et les connaissances nécessaires pour accompagner efficacement le développement de leurs enfants. Chaque formation couvre des domaines essentiels : discipline positive, pédagogie créative, développement de l'intelligence et construction d'une mentalité de réussite. Ces formations complémentaires permettent aux parents de créer un environnement familial épanouissant et éducatif.
    `,
    image: '/programmes/formation-familles.avif',
    modules: [
      {title: '1- Discipline Positive et Apaisement du Comportement', content: '• 26 heures réparties sur 13 séances\n• 2400dhs'},
      {title: `2- Pédagogie pour une Personnalité Créative et Éthique`, content: '• 28 heures réparties sur 14 séances\n• 2400dhs'},
      {title: `3- Comment Développer l'Intelligence de mes Enfants`, content: '• 10 heures réparties sur 5 séances\n• 960dhs'},
      {title: `4- Construire une Mentalité de Réussite pour Moi et mes Enfants`, content: '• 14 heures réparties sur 7 séances\n• 1340dhs'},
    ],
    objectifs: ['Maîtriser les techniques de discipline positive', 'Favoriser la créativité et l\'éthique chez l\'enfant', 'Développer l\'intelligence multidimensionnelle', 'Construire une famille résiliente et épanouie'],
    features: ['Formations progressives et complémentaires', 'Approche pratique avec des outils applicables immédiatement', 'Accompagnement parental bienveillant', 'Accès à des ressources et supports pédagogiques'],
    brochure: '/brochures/brochure-formation-familles.pdf',
    icon: HeartHandshake,
    tags: [],
    category: 'Familles',
    duration: '10h-28h',
    format: 'En ligne',
    price: 'À partir de 960dhs',
    color: 'bg-cream-100',
  },
  {
    id: 'tafakkur-ecoles',
    title: 'Formations Éducatives Écoles',
    comment: '*Formations certifiantes',
    image: '/programmes/formation-ecoles.webp',
    brochure: '/brochures/brochure-formation-ecoles.pdf',
    description:
      `Une approche innovante pour intégrer le développement personnel dans le cursus scolaire.`,
    apropos: `
    Le programme TAFAKKUR pour les écoles va bien au-delà de l'apprentissage en classe.
    Non seulement les élèves sont équipés des compétences nécessaires pour prendre des décisions éclairées et réussir dans leur vie, mais leur entourage est également impacté positivement.
    Notre programme est constituée de 5 niveaux successifs et est destiné aux enfants de 5 à 12 ans.
    `,
    features : [
      `Les livres nécessaires aux enseignants, aux élèves et même aux parents afin de suivre l'évolution de leurs enfants`,
      `Formations des enseignants et des superviseurs`,
      `Accompagnement des établissements scolaires durant toute la période d'applications du programme`
    ],
    modules: [
      {title: `1- Je Suis une Personne Spéciale`, content: `• Tranche d'âge : 5-6-7 ans`},
      {title: `2- Je Vous Aime`, content: `• Tranche d'âge : 7-8 ans`},
      {title: `3- La Beauté de la Différence`, content: `• Tranche d'âge : 8-9-10-11 ans`},
      {title: `4- Mes Idées et Mes Sentiments`, content: `• Tranche d'âge : 9-10-11-12 ans`},
      {title: `5- Ma Force Mentale`, content: `• Tranche d'âge : 10-11-12-13 ans`},
    ],
    objectifs: ['Développer la personnalité complète de l\'enfant', 'Cultiver la pensée critique et créative', 'Renforcer la confiance en soi et l\'estime personnelle', 'Former des leaders responsables et humains'],
    icon: GraduationCap,
    tags: ['Annuel', 'Pour établissements'],
    category: 'Écoles',
    duration: '30h-42h',
    format: 'En ligne',
    price: 'Sur devis',
    color: 'sage',
  },
];