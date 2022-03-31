import type { IProject } from "@/types";
import { useDB } from "./useDB";

export function useFeaturedProjects(): { projects: IProject[] } {
  const { projects } = useDB();
  return {
    projects: projects.filter((p) => p.featured),
  };
}
