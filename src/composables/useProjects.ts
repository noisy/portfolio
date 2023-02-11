import { setupIsotopeFilters } from "@/libs/isotope-custom";
import { getDynamicFilters } from "@/modules/filters/filters";
import type { IProject, IProjectFilter } from "@/types";
import { onMounted } from "vue";
import { useDB } from "./useDB";

export function useProjects(): {
  projects: IProject[];
  projectFilters: IProjectFilter[];
} {
  const { projects, projectFilters } = useDB();
  onMounted(() => setupIsotopeFilters(["project-filters"]));

  return {
    projects,
    projectFilters: getDynamicFilters(projects, "filterTags", projectFilters),
  };
}
