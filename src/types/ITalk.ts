import { AllFilterTag, IFilter } from "./IFilters";
import { ILanguage } from "./ILanguage";

export type ITalkFilterTag = "git" | "docker" | "blockchain" | AllFilterTag;

export interface ITalkFilter extends IFilter {
  name: string;
  tag: ITalkFilterTag;
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
}
