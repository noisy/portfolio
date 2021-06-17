export type IProjectTag =
  | "angular"
  | "python-django"
  | "android"
  | "java"
  | "ccpp";
export type IProjectBadge =
  | "Angular"
  | "Java"
  | "C/C++"
  | "Android"
  | "Python"
  | "Django"
  | "jQuery";

export type ITechnology =
  | "android"
  | "angular"
  | "c"
  | "cpp"
  | "django"
  | "java"
  | "jquery"
  | "python"
  | "solr"
  | "sqlalchemy";

export interface IProjectFilter {
  name: string;
  tag: string;
}

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
