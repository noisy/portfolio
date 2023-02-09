import type { IProjectFilterTag } from "@/types";
import { useDB } from "./useDB";

export function useProjectFiltersTags(): {
  projectFilterTags: IProjectFilterTag[];
} {
  const { projects } = useDB();
  const projectFilterTags = new Set<IProjectFilterTag>();

  projects.forEach(({ filterTags: tags }) => {
    tags.forEach((tag) => {
      projectFilterTags.add(tag);
    });
  });

  return {
    projectFilterTags: [...projectFilterTags],
  };
}
