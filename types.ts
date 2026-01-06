
export enum ProjectStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  CUTTING = 'Cutting/Fabricating',
  READY_FOR_INSTALL = 'Ready for Installation',
  READY_FOR_PAYMENT = 'Ready for Payment',
  COMPLETED = 'Completed'
}

export enum FeedbackStatus {
  PUBLISHED = 'Published',
  PENDING = 'Pending',
  HIDDEN = 'Hidden'
}

export type MeasurementUnit = 'Inches' | 'cm' | 'Feet';

export interface Measurement {
  label: string;
  width: string;
  height: string;
  quantity: number;
  notes?: string;
}

export interface VentilatorItem {
  label: string;
  quantity: number;
  unitPrice: number;
}

export interface Feedback {
  id: string;
  projectId?: string;
  clientName: string;
  rating: number;
  comment: string;
  createdAt: string;
  status: FeedbackStatus;
}

export interface ProjectOrder {
  id: string;
  clientName: string;
  clientPhone: string;
  location: string;
  latLng?: {
    lat: number;
    lng: number;
  };
  mapUrl?: string;
  measurements: Measurement[];
  ventilators?: VentilatorItem[];
  photoUrls?: string[];
  status: ProjectStatus;
  createdAt: string;
  totalCost?: number;
  estimatedCost?: number;
  unit?: MeasurementUnit;
  feedback?: Feedback;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Windows' | 'Doors' | 'Elevation' | 'Mesh' | 'Glass Fitting';
  imageUrl: string;
  description: string;
}
