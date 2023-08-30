export interface ITestimonial {
  author: string;
  title: string;
  type: "linkedin" | "steemit" | "written";
  pictureUrl?: string;
  signature?: string;
  body: string;
  relevantForProjects: string[];
  url: string;
}
