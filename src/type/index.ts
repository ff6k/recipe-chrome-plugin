export type SOCIAL_PLATFORM_INFO = {
  name: string;
  link: string;
  logo: string;
  height: number;
  width: number;
};

export type RECIPE_TRAIT = {
  type: string;
  value: { color: string; text: string; isGradient: boolean }[];
};

export type RECIPE_DATA = {
  id: number;
  title: string;
  countryCode: string;
  difficulty: string;
  description: string;
  fullRecipeLink: string;
  socials: SOCIAL_PLATFORM_INFO[];
  traits: RECIPE_TRAIT[];
  image: string;
};
