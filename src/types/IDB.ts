import { IBlogPost } from "./IBlogPost";
import { ILanguage } from "./ILanguage";
import { IProject, IProjectFilter } from "./IProject";
import { ITalk, ITalkFilter } from "./ITalk";
import { ITestimonial } from "./ITestimonial";
import { ILanguageFilter } from ".";

export interface IDB {
  projects: IProject[];
  testimonials: ITestimonial[];
  projectFilters: IProjectFilter[];
  talks: ITalk[];
  talkFilters: ITalkFilter[];
  languageFilters: ILanguageFilter[];
  links: {
    linkedinProfile?: string;
    twitterProfile?: string;
    githubProfile?: string;
    stackOverflowProfile?: string;
  };
  flags: Record<ILanguage, string>;
  contactEmail: string;
  blogPosts: IBlogPost[];
}
