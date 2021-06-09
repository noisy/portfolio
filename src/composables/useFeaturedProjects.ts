import { useDB } from "./useDB";
import { IProject } from "@/types";

export function useFeaturedProjects(): { projects: IProject[] } {
  const { projects } = useDB();
  return {
    projects: projects.filter((p) => p.featured),
  };
}
