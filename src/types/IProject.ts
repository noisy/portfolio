import type { AllFilterTag, IFilter } from ".";

export type IProjectBadge =
  | "Angular"
  | "Java"
  | "C/C++"
  | "Android"
  | "Python"
  | "Django"
  | "Vue"
  | "TypeScript"
  | "Blockchain"
  | "jQuery"
  | "Game"
  | "Board Game"
  | "Open Source"
  | "Rest API";

export type ITechnology =
  | "android"
  | "angular"
  | "apollographql"
  | "babeljs"
  | "bootstrap4"
  | "bootstrap5"
  | "c"
  | "cookiecutter"
  | "cpp"
  | "css3"
  | "cypress"
  | "django-rest-framework"
  | "django"
  | "docker"
  | "git"
  | "github"
  | "gitlab"
  | "graphql"
  | "html5"
  | "java"
  | "javascript"
  | "jenkins"
  | "jestjs"
  | "jira"
  | "jquery"
  | "mantis"
  | "paypal"
  | "postgresql"
  | "ps3"
  | "python"
  | "solr"
  | "sqlalchemy"
  | "stripe"
  | "stripe"
  | "typescript"
  | "vue"
  | "windows"
  | "xbox360";

export type IProjectFilterTag =
  | "responsive"
  | "bootstrap"
  | "vue"
  | "python-django"
  | "js-ts";

export interface IProjectFilter extends IFilter {
  name: string;
  tag: IProjectFilterTag | AllFilterTag;
}

export interface IProject {
  name: string;
  slug: string;
  url: string;
  archivedUrl?: string;
  type: string;
  companyName?: string;
  thumbnail: string;
  summaryTitle: string;
  summary: string;
  filterTags: IProjectFilterTag[];
  badges: IProjectBadge[];
  technologies: ITechnology[];
  thumbnailLogo: string;
  featured: boolean;
  repositoryUrl?: string;
}
export interface ICompany {
  name: string;
  url: string;
  logo: string;
}
export interface ISkillGroup {
  name: string;
  skills: string[];
  icon: string;
}
