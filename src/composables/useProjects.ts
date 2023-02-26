import { getNeededFilters } from "@/modules/filters/filters";
import type { IProject, IProjectFilter } from "@/types";
import { ref, type Ref } from "vue";
import { useDB } from "./useDB";

export function useProjects(): {
  projects: IProject[];
  projectFilters: Ref<IProjectFilter[]>;
} {
  const { projects, projectFilters } = useDB();

  return {
    projects,
    projectFilters: ref(
      getNeededFilters(projects, "filterTags", projectFilters)
    ),
  };
}
