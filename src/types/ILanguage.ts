import { AllFilterTag } from "./IFilters";

export type ILanguage = "Polish" | "English";
export interface ILanguageFilter {
  name: string;
  tag: ILanguage | AllFilterTag;
}
