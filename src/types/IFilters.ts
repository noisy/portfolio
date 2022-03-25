export type AllFilterTag = "*";
export const allFilterTag: AllFilterTag = "*";

export interface IFilter {
  name: string;
  tag: string | AllFilterTag;
}
