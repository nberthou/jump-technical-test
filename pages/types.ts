export type BeerData = {
  id: number;
  name: string;
  description: string;
  tagline: string;
  image_url: string;
  first_brewed: string;
};

export type Beer = Omit<BeerData, "image_url" | "first_brewed"> & {
  image: string;
  firstBrewed: string;
};
