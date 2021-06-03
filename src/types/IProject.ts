type IProjectTag = "python-django" | "android" | "java" | "ccpp";
type IProjectBadge = "Java" | "C/C++" | "Android" | "Python";
type ITechnology = "android" | "c" | "cpp" | "java";

export default interface IProject {
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
