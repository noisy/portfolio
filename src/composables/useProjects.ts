import { setupIsotopeFilters } from "@/libs/isotope-custom";
import {
  extractUsedFilterTags,
  getFiltersBasedOnUsedTags,
} from "@/modules/filters/filters";
import type { IProject, IProjectFilter } from "@/types";
import { onMounted } from "vue";
import { useDB } from "./useDB";

export function useProjects(): {
  projects: IProject[];
  projectFilters: IProjectFilter[];
} {
  const { projects, projectFilters } = useDB();
  const usedFilterTags = extractUsedFilterTags(projects, "filterTags");

  onMounted(() => setupIsotopeFilters(["project-filters"]));

  return {
    projects,
    projectFilters: getFiltersBasedOnUsedTags(projectFilters, usedFilterTags),
  };
}
