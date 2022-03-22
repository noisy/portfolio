export type IProjectFilterTag =
  | "angular"
  | "vue"
  | "python-django"
  | "js-ts"
  | "android"
  | "java"
  | "blockchain"
  | "react"
  | "ccpp";
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
  | "jQuery";

export type ITechnology =
  | "android"
  | "angular"
  | "apollographql"
  | "c"
  | "cookiecutter"
  | "cpp"
  | "django-rest-framework"
  | "django"
  | "docker"
  | "git"
  | "github"
  | "gitlab"
  | "graphql"
  | "java"
  | "javascript"
  | "jenkins"
  | "jira"
  | "jquery"
  | "postgresql"
  | "python"
  | "solr"
  | "stripe"
  | "sqlalchemy"
  | "typescript"
  | "jestjs"
  | "paypal"
  | "cypress"
  | "babeljs"
  | "stripe"
  | "vue";

export interface IProjectFilter {
  name: string;
  tag: IProjectFilterTag;
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
  filterTags: IProjectFilterTag[];
  badges: IProjectBadge[];
  technologies: ITechnology[];
  thumbnailLogo: string;
  featured: boolean;
  repositoryUrl?: string;
}
