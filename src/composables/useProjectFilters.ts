import type { IProjectFilter } from "@/types";
import { allFilterTag } from "@/types";
import { useDB } from "./useDB";
import { useProjectFiltersTags } from "./useProjectFiltersTags";

const { projectFilters } = useDB();
const { projectFilterTags } = useProjectFiltersTags();

export function useProjectFilters(): { projectFilters: IProjectFilter[] } {
  const dynamiclyCalculatedProjectFilters = projectFilterTags.map(
    (tag) =>
      projectFilters.find((f) => f.tag === tag) || {
        name: tag,
        tag,
      }
  );

  return {
    projectFilters: [
      ...dynamiclyCalculatedProjectFilters,
      { name: "All", tag: allFilterTag },
    ],
  };
}
