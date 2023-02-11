import type { AllFilterTag, IFilter } from "./IFilters";

export type ILanguage = "polish" | "english";

export type ILanguageFilterTag = ILanguage;

export interface ILanguageFilter extends IFilter {
  name: string;
  tag: ILanguageFilterTag | AllFilterTag;
}
