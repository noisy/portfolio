import type { ILanguageFilter } from ".";
import type { IBlogPost } from "./IBlogPost";
import type { ILanguage } from "./ILanguage";
import type {
  ICompany,
  IProject,
  IProjectFilter,
  ISkillGroup,
} from "./IProject";
import type { ITalk, ITalkFilter } from "./ITalk";
import type { ITestimonial } from "./ITestimonial";

export interface IDB {
  projects: IProject[];
  projectFilters: IProjectFilter[];
  companies: ICompany[];
  testimonials: ITestimonial[];
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
  skillsGroups: ISkillGroup[];
}
