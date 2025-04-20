export const links = {
  services: "/services",
  about: "/",
  news: "/news",
} as const;

export type LinkKeys = keyof typeof links;

export const linksName: Record<LinkKeys, string> = {
  services: "Услуги",
  about: "О компании",
  news: "Новости",
};

export const linksFooter = {
  about: "/about",
  advantages: "/advantages",
  news: "/news",
  feedbacks: "/eedbacks",
  services: "/services",
} as const;

export const linksFooterName: Record<keyof typeof linksFooter, string> = {
  about: "О компании",
  advantages: "Преимущества",
  feedbacks: "Отзывы",
  services: "Услуги",
  news: "Новости",
};
