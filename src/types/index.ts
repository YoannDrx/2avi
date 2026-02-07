export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type Reference = {
  id: string;
  title: string;
  image: string;
  year: number;
  category: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
};
