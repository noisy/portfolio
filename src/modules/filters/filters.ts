import { allFilterName, allFilterTag, type IFilter } from "@/types/IFilters";

export function getDynamicFilters<
  Items,
  FilterAttributeName extends keyof Items,
  Filter extends IFilter,
  FilterTag extends ArrayElement<Items[FilterAttributeName]>
>(
  items: Items[],
  filterAttributeName: FilterAttributeName,
  filters: Filter[]
): Filter[] {
  const usedFilterTags: FilterTag[] = extractUsedFilterTags(
    items,
    filterAttributeName
  );

  const dynamiclyCalculatedFilters = usedFilterTags.map(
    (tag) =>
      filters.find((f) => f.tag === tag) ||
      ({
        name: tag,
        tag,
      } as unknown as Filter)
  );
  return [findOrCreateAllFilter(filters), ...dynamiclyCalculatedFilters];
}

function findOrCreateAllFilter<Filter extends IFilter>(
  filters: Filter[]
): Filter {
  const allFilter = filters.find((f) => f.tag === allFilterTag);
  if (allFilter) return allFilter;
  return {
    name: allFilterName,
    tag: allFilterTag,
  } as unknown as Filter;
}

type ArrayElement<ArrayType> = ArrayType extends (infer ElementType)[]
  ? ElementType
  : ArrayType;

function extractUsedFilterTags<
  Items,
  FilterAttributeName extends keyof Items,
  FilterTag extends ArrayElement<Items[FilterAttributeName]>
>(items: Items[], filterAttributeName: FilterAttributeName): FilterTag[] {
  const usedFilterTags = new Set<FilterTag>();

  items.forEach((item) => {
    const tags = item[filterAttributeName];
    if (!tags) return;
    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        usedFilterTags.add(tag);
      });
    } else {
      usedFilterTags.add(tags as FilterTag);
    }
  });
  return [...usedFilterTags];
}

export const forTestingsOnly = {
  extractUsedFilterTags,
};
