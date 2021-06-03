export interface ITestimonial {
  author: string;
  title: string;
  type: "linkedin" | "steemit";
  pictureUrl: string;
  body: string;
  relevantForProjects: string[];
}

export type IProjectTag = "python-django" | "android" | "java" | "ccpp";
export type IProjectBadge = "Java" | "C/C++" | "Android" | "Python";
export type ITechnology = "android" | "c" | "cpp" | "java";

export interface IProject {
  name: string;
  slug: string;
  url: string;
  archivedUrl: string;
  type: string;
  companyName: string;
  thumbnail: string;
  summaryTitle: string;
  summary: string;
  tags: IProjectTag[];
  badges: IProjectBadge[];
  technologies: ITechnology[];
  thumbnailLogo: string;
  featured: boolean;
}
