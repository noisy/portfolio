import type { AllFilterTag, IFilter } from "./IFilters";
import type { ILanguage } from "./ILanguage";

export type ITalkFilterTag = "git" | "docker" | "blockchain";

export interface ITalkFilter extends IFilter {
  name: string;
  tag: ITalkFilterTag | AllFilterTag;
}

export interface ITalk {
  source: string;
  conference?: string;
  where?: string;
  id: string;
  type: string;
  language: ILanguage;
  title: string;
  description: string;
  date: string;
  filterTags: ITalkFilterTag[];
  slides?: string;
}
