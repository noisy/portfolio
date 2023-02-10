import { extractUsedFilterTags, getFilters } from "@/modules/filters/filters";
import type { IProject, IProjectFilter } from "@/types";
import { useDB } from "./useDB";

const { projects, projectFilters } = useDB();

export function useProjects(): {
  projects: IProject[];
  projectFilters: IProjectFilter[];
} {
  const usedFilterTags = extractUsedFilterTags(projects, "filterTags");
  return {
    projects,
    projectFilters: getFilters(projectFilters, usedFilterTags),
  };
}
