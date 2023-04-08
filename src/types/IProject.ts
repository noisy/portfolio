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
  | "Vue"
  | "Game"
  | "Board Game"
  | "Open Source"
  | "Rest API"
  | "Website";

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
  | "github-pages"
  | "gitlab"
  | "google-analytics"
  | "graphql"
  | "html5"
  | "java"
  | "javascript"
  | "jenkins"
  | "jestjs"
  | "jira"
  | "jquery"
  | "mantis"
  | "netlify"
  | "paypal"
  | "postgresql"
  | "ps3"
  | "python"
  | "solr"
  | "sqlalchemy"
  | "stripe"
  | "typescript"
  | "vue"
  | "windows"
  | "xbox360";

export type IProjectFilterTag =
  | "android"
  | "blockchain"
  | "bootstrap"
  | "c-cpp"
  | "java"
  | "js-ts"
  | "python-django"
  | "responsive"
  | "vue";

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
