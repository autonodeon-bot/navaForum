export interface NavItem {
  label: string;
  href: string;
}

export interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface PricingTier {
  price: number;
  deadline: string;
  active: boolean;
}

export interface ProgramItem {
  time: string;
  title: string;
  description?: string;
}