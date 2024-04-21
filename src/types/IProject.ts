import type { AllFilterTag, IFilter } from ".";

export type IProjectBadge =
  | "Android"
  | "Angular"
  | "Blockchain"
  | "C/C++"
  | "Django"
  | "Java"
  | "jQuery"
  | "Python"
  | "TypeScript"
  | "Vue";

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
  | "paypal"
  | "postgresql"
  | "python"
  | "solr"
  | "sqlalchemy"
  | "stripe"
  | "stripe"
  | "typescript"
  | "vue"
  | "xstate";

export type IProjectFilterTag =
  | "android"
  | "angular"
  | "blockchain"
  | "c-cpp"
  | "java"
  | "js-ts"
  | "python-django"
  | "react"
  | "vue";

export interface IProjectFilter extends IFilter {
  name: string;
  tag: IProjectFilterTag | AllFilterTag;
}

export interface IProject {
  name: string;
  slug: string;
  url?: string;
  urlName?: string;
  archivedUrl?: string;
  type: string;
  companyName?: string;
  companyUrl?: string;
  thumbnail: string;
  summaryTitle: string;
  summary: string;
  filterTags: IProjectFilterTag[];
  badges: IProjectBadge[];
  technologies: ITechnology[];
  thumbnailLogo: string;
  featured: boolean;
  repositoryName?: string;
  repositoryUrl?: string;
}
export interface ICompany {
  name: string;
  url?: string;
  logo: string;
}
export interface ISkillGroup {
  name: string;
  skills: string[];
  icon: string;
}
