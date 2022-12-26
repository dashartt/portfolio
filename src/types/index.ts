export type ProjectDTO = {
  name: string;
  thumbnail: string | null;
  linkRepo: string;
  linkGoTo: string | null;
  tags?: string[];
};
