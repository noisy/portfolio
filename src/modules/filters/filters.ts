export type ArrayElement<ArrayType> = ArrayType extends (infer ElementType)[]
  ? ElementType
  : ArrayType;

export function extractUsedFilterTags<
  ItemsToFilter,
  FilterAttributeName extends keyof ItemsToFilter
>(
  items: ItemsToFilter[],
  filterAttributeName: FilterAttributeName
): ArrayElement<ItemsToFilter[FilterAttributeName]>[] {
  const usedFilterTags = new Set<
    ArrayElement<ItemsToFilter[FilterAttributeName]>
  >();

  items.forEach((item) => {
    const tags = item[filterAttributeName];
    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        usedFilterTags.add(tag);
      });
    } else {
      throw new Error(
        `item.${String(filterAttributeName)} seems to be not an array: ${String(
          tags
        )}`
      );
    }
  });
  return [...usedFilterTags];
}

import { allFilterTag, type IFilter } from "@/types/IFilters";

export function getFilters<Filter extends IFilter, FilterTag>(
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
