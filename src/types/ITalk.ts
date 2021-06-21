import { ILanguage } from "./ILanguage";

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
}
