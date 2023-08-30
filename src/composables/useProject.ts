import type { IProject } from "@/types";

function getImagesPaths(project: IProject, size: number): string[] {
  return [...Array(size).keys()].map(
    (slide) => `@/images/projects/${project.slug}/${slide + 1}.png`
  );
}

export function useProject(): {
  getImagesPaths: (project: IProject, size: number) => string[];
} {
  return { getImagesPaths };
}
