import { IBlogPost } from "./IBlogPost";
import { ILanguage } from "./ILanguage";
import { IProject, IProjectFilter } from "./IProject";
import { ITalk, ITalkFilter } from "./ITalk";
import { ITestimonial } from "./ITestimonial";

export interface IDB {
  projects: IProject[];
  testimonials: ITestimonial[];
  projectFilters: IProjectFilter[];
  talks: ITalk[];
  talkFilters: ITalkFilter[];
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
