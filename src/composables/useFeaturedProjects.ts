import { useDB } from "./useDB";

export function useFeaturedProjects() {
  const { projects } = useDB();
  return {
    projects: projects.filter((p) => p.featured),
  };
}
