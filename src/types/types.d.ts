export interface CallToAction {
  text: string;
  href: string;
  linkOut?: "_blank";
  variant?: "primary" | "secondary" | "link";
  icon?: string;
  ariaLabel?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  iconClass?: string;
  cta?: CallToAction;
}

export interface ClientFeature {
  title: string;
  description: string;
  externalUrl: string;
  href: string;
  logo?: string;
  icon?: string;
  iconClass?: string;
}

export interface AreaFeature extends Feature {
  cta: CallToAction;
}

export type Value = Feature;

export type ClientValue = ClientFeature;

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  title: string;
  description: string;
  monthly: boolean;
  setupFee: boolean;
  price: string;
  icon: string;
  features?: string[];
  addon: boolean;
}

export interface NavLink {
  text: string;
  href: string;
  children?: NavLink[];
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  containerClass?: string;
  descContainerClass?: string;
  classes?: Record<string, string>;
  descClasses?: Record<string, string>;
  animate?: boolean;
}

export interface HeadlineProps extends Widget {
  title?: string;
  subtitle?: string;
  tagline?: string;
  titleAs?: string;
}

export interface HeroProps extends HeadlineProps {
  description?: string; // override or additional? Hero has description, Headline has subtitle. Hero has actions.
  actions?: string | CallToAction[];
  image?: ImageMetadata | string; // Just in case, though checked Hero.astro and it uses slots mostly or props.
}

export interface FeaturesProps extends HeadlineProps {
  features?: Feature[];
  columns?: number; // Values has columns
}

export interface AreaFeaturesProps extends HeadlineProps {
  features?: AreaFeature[];
  columns?: number; // Values has columns
}

export interface ContentProps extends HeadlineProps {
  content?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  items?: Feature[];
  isReversed?: boolean;
  isAfterContent?: boolean;
  description?: string[]; // Adding back description as string array for compatibility
  actions?: string | CallToAction[];
}

export interface ServiceListProps extends HeadlineProps {
  services?: Service[];
}

export interface ProductListProps extends HeadlineProps {
  products?: Product[];
}

export interface ValuesProps extends HeadlineProps {
  items?: Value[];
  columns?: 1 | 2 | 3 | 4;
}

export interface ClientsProps extends HeadlineProps {
  items?: WebValue[];
  columns?: 1 | 2 | 3 | 4;
}
