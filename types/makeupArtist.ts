export type MakeupArtist = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  availability: string;
  intro: string;
  bio: string;
  hero: {
    variant: "editorial-split" | "portrait-stack" | "cinematic-video";
    primaryImage: string;
    primaryAlt: string;
    secondaryImage?: string;
    secondaryAlt?: string;
    videoSrc?: string;
    videoPoster?: string;
  };
  services: {
    title: string;
    description: string;
    icon:
      | "sparkle"
      | "brush"
      | "camera"
      | "diamond"
      | "runway"
      | "profile";
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  portfolio: {
    src: string;
    alt: string;
    category: string;
  }[];
  videos?: {
    src: string;
    title: string;
    poster?: string;
    description?: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    text: string;
  }[];
  collaborations: string[];
  social: {
    instagram: string;
    tiktok?: string;
    email: string;
    phone?: string;
  };
  design: {
    primaryColor: string;
    secondaryColor: string;
    fontStyle?: string;
  };
};
