import { useDB } from "./useDB.js";

export function useFeaturedProjects() {
  const { projects } = useDB();
  return {
    projects: projects.filter((p) => p.featured),
  };
}
