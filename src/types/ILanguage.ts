import type { IFilter } from "./IFilters";

export type ILanguage = "Polish" | "English";
export interface ILanguageFilter extends IFilter {
  name: string;
  tag: ILanguage;
}
