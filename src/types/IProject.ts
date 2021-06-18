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
  | "Vue"
  | "TypeScript"
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
