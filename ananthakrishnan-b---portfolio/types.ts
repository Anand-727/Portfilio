export interface NavItem {
    label: string;
    href: string;
    icon: React.ReactNode;
}

export interface Skill {
    name: string;
    level: number;
    category: 'language' | 'web' | 'ai';
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    features: string[];
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
    details: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: React.ReactNode;
}