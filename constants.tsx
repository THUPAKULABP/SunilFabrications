import React from 'react';
import { GalleryItem } from './types';

export const OWNER_NUMBERS = {
  PRIMARY: "+919100248598",
  SECONDARY: "+919100433411"
};

export interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string;
  details: string[];
  icon: (props: any) => React.ReactNode;
}

export const SERVICES: ServiceDetail[] = [
  {
    title: "Window Systems",
    description: "Premium UPVC and Aluminium window solutions with thermal insulation.",
    longDescription: "Our window systems are engineered for the modern home. We use high-grade UPVC and thermally broken aluminium to ensure maximum energy efficiency. Options include sliding, casement, tilt-and-turn, and villa windows, all available with double glazing for superior soundproofing and climate control.",
    details: [
      "Acoustic Insulation up to 40dB",
      "Multi-point Locking Systems for Security",
      "Weather Resistance and UV Protection",
      "Custom Colors and Finishes"
    ],
    icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 12h18" /><path d="M12 3v18" /></svg>
    )
  },
  {
    title: "Door Fabrication",
    description: "Elegant and durable glass doors, sliding doors, and mesh doors.",
    longDescription: "From grand entryways to functional patio exits, our doors combine security with aesthetic appeal. We specialize in heavy-duty sliding systems, slimline profile glass doors, and integrated mosquito mesh solutions. Each door is custom-fabricated to fit your space perfectly with smooth-glide hardware.",
    details: [
      "Silent Glide Technology",
      "Integrated Stainless Steel Mesh",
      "Slim Profile Architectual Designs",
      "Corrosion Resistant Fittings"
    ],
    icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4h3a2 2 0 0 1 2 2v14" /><path d="M2 20h20" /><path d="M13 20V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" /><path d="M9 12v.01" /></svg>
    )
  },
  {
    title: "Elevation Glass",
    description: "Stunning architectural glass elevations for modern buildings.",
    longDescription: "Transform building exteriors with our structural glazing and curtain wall systems. We provide end-to-end solutions for glass elevations, including design, structural analysis, and precision installation. We use spider fittings, point-supported glass, and tempered safety glass to create breathtaking facades.",
    details: [
      "Toughened Safety Glass (up to 12mm)",
      "Spider and Patch Fittings",
      "Reflective and Low-E Glass Options",
      "High Structural Load Endurance"
    ],
    icon: (props: any) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V3h14v18" /><path d="M9 7h1" /><path d="M9 11h1" /><path d="M9 15h1" /><path d="M14 7h1" /><path d="M14 11h1" /><path d="M14 15h1" /></svg>
    )
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Modern Villa Elevation',
    category: 'Elevation',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    description: 'Full structural glazing for a high-end luxury villa.'
  },
  {
    id: '2',
    title: 'Mesh Door System',
    category: 'Mesh',
    imageUrl: 'https://images.unsplash.com/photo-1594488310064-16b779a1f1bc?auto=format&fit=crop&q=80&w=800',
    description: 'Precision fitted mosquito mesh doors with smooth sliding.'
  },
  {
    id: '3',
    title: 'Commercial Office Partition',
    category: 'Glass Fitting',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'Toughened glass partitions for modern office spaces.'
  },
  {
    id: '4',
    title: 'UPVC Sliding Window',
    category: 'Windows',
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
    description: 'Acoustic-sealed UPVC windows with double glazing.'
  },
  {
    id: '5',
    title: 'Architectural Ventilators',
    category: 'Windows',
    imageUrl: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800',
    description: 'Custom designed ventilators for optimal air flow.'
  },
  {
    id: '6',
    title: 'Premium Glass Doors',
    category: 'Doors',
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800',
    description: 'Frosted glass doors with high-quality hardware.'
  }
];