import { allFilterTag, type IFilter } from "@/types/IFilters";

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

  dynamiclyCalculatedFilters.push({ name: "All", tag: allFilterTag } as Filter);
  return dynamiclyCalculatedFilters;
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
