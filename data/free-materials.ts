// Free materials configuration
// Add new materials here - component will auto-render them

export type MaterialType = 'email-download' | 'external-link' | 'purchase' | 'coming-soon';

export interface FreeMaterial {
  id: string;
  title: string;
  description: string;
  type: MaterialType;
  category?: string; // e.g., "PDF", "Catalogue", "Guide"

  // For email downloads
  emailType?: 'free-pdf' | 'early-access' | 'modern-ba-skills';
  emailPlaceholder?: string;
  emailButtonText?: string;

  // For external links
  url?: string;
  linkText?: string;

  // For purchases
  price?: string;
  productType?: string;

  // Display options
  badge?: string; // e.g., "NEW", "POPULAR"
  order?: number; // Display order
}

export const paidMaterials: FreeMaterial[] = [
  {
    id: 'workbook-ai-ba',
    title: 'AI for Business Analysts',
    description: 'Complete workbook with practical AI workflows and tools',
    type: 'purchase',
    category: 'Workbook',
    price: 'PLN 60',
    productType: 'workbook-ai-ba',
    order: 1,
  },
  {
    id: 'workbook-ai-pm',
    title: 'AI for Project Managers',
    description: 'Practical AI tools and workflows for project management',
    type: 'coming-soon',
    category: 'Workbook',
    price: 'PLN 60',
    emailType: 'early-access',
    emailPlaceholder: 'Your email',
    emailButtonText: 'Get Early Access',
    badge: 'COMING SOON',
    order: 2,
  },
];

export const freeMaterials: FreeMaterial[] = [
  {
    id: 'free-pdf-7-prompts',
    title: 'Free PDF',
    description: '7 AI prompts and use cases for Business Analysts + system prompts',
    type: 'email-download',
    category: 'PDF',
    emailType: 'free-pdf',
    emailPlaceholder: 'Your email',
    emailButtonText: 'Download Free PDF',
    order: 3,
  },
  {
    id: 'ai-catalogue',
    title: 'AI Courses & Tools',
    description: 'Curated catalogue of AI courses, materials, and tools recommendations',
    type: 'external-link',
    category: 'Catalogue',
    url: 'https://quaint-pyjama-f63.notion.so/AI-BA-Catalogue-15d789c904c180659aebe11a3d1bce54',
    linkText: 'Browse Catalogue',
    badge: 'FREE',
    order: 4,
  },
  {
    id: 'modern-ba-skills',
    title: 'Modern BA Skillset',
    description: 'Essential skills and competencies for modern business analysts',
    type: 'coming-soon',
    category: 'Guide',
    emailType: 'modern-ba-skills',
    emailPlaceholder: 'Your email',
    emailButtonText: 'Get Notified',
    order: 5,
  },
];
