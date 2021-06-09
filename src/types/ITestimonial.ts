export interface ITestimonial {
  author: string;
  title: string;
  type: "linkedin" | "steemit";
  pictureUrl: string;
  body: string;
  relevantForProjects: string[];
  url: string;
}
