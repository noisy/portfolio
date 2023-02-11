export type ArrayElement<ArrayType> = ArrayType extends (infer ElementType)[]
  ? ElementType
  : ArrayType;

export function extractUsedFilterTags<
  Items,
  FilterAttributeName extends keyof Items,
  Item extends ArrayElement<Items[FilterAttributeName]>
>(items: Items[], filterAttributeName: FilterAttributeName): Item[] {
  const usedFilterTags = new Set<Item>();

  items.forEach((item) => {
    const tags = item[filterAttributeName];
    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        usedFilterTags.add(tag);
      });
    } else {
      usedFilterTags.add(tags as Item);
    }
  });
  return [...usedFilterTags];
}

import { allFilterTag, type IFilter } from "@/types/IFilters";

export function getFiltersBasedOnUsedTags<Filter extends IFilter, FilterTag>(
  filters: Filter[],
  filterTags: FilterTag[]
): Filter[] {
  const dynamiclyCalculatedFilters = filterTags.map(
    (tag) =>
      filters.find((f) => f.tag === tag) ||
      ({
        name: tag,
        tag,
      } as unknown as Filter)
  );

  dynamiclyCalculatedFilters.push({ name: "All", tag: allFilterTag } as Filter);
  return dynamiclyCalculatedFilters;
}
