import { ILanguage } from "./ILanguage";
import { IProject, IProjectFilter } from "./IProject";
import { ITalk } from "./ITalk";
import { ITestimonial } from "./ITestimonial";

export interface IDB {
  projects: IProject[];
  testimonials: ITestimonial[];
  projectFilters: IProjectFilter[];
  talks: ITalk[];
  links: {
    linkedinProfile: string;
  };
  flags: Record<ILanguage, string>;
  contactEmail: string;
}
