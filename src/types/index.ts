export type ProjectDTO = {
  name: string;
  thumbnail?: string;
  linkRepo: string;
  linkGoTo: string | null;
  tags?: string[];
};
