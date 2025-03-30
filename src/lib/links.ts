export const links = {
  services: "services",
  about: "about",
  blog: "blog",
} as const;

export type LinkKeys = keyof typeof links;

export const linksName: Record<LinkKeys, string> = {
  services: "Услуги",
  about: "О компании",
  blog: "Блог",
};

export const linksFooter = {
  about: "about",
  advantages: 'advantages',
  blog: "blog",
  feedbacks: 'feedbacks',
  services: 'services',
  news: 'news'
} as const;

export const linksFooterName: Record<keyof typeof linksFooter, string> = {
  about: "О компании",
  advantages: "Преимущества",
  blog: "Блог",
  feedbacks: "Отзывы",
  services: "Услуги",
  news: "Новости",
};
