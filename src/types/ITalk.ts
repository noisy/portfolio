import { ILanguage } from "./ILanguage";

export type ITalkFilterTag = "git" | "docker" | "blockchain";

export interface ITalkFilter {
  name: string;
  tag: ITalkFilterTag;
}

export interface ILanguageFilter {
  name: string;
  tag: ILanguage;
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
