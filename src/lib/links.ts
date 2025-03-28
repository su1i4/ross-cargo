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
