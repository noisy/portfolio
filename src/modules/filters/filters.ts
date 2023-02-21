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
  const neededFilterTags = [allFilterTag as FilterTag, ...usedFilterTags];
  const usedFilters = filters.filter(({ tag }) =>
    neededFilterTags.includes(tag as FilterTag)
  );
  const tagsWhichDoNotHavePairInFilters = neededFilterTags.filter(
    (tag) => !usedFilters.map(({ tag }) => tag as FilterTag).includes(tag)
  );

  if (tagsWhichDoNotHavePairInFilters.length > 0) {
    throw new Error(
      `Some tags do not have pair in filters: ${tagsWhichDoNotHavePairInFilters.join(
        ", "
      )}`
    );
  }

  return usedFilters;
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

export function setAllFilterTagAsActive<Filter extends IFilter>(
  filters: Filter[]
): Required<IFilter>[] {
  return filters.map((filter) => ({
    ...filter,
    isActive: filter.tag === allFilterTag,
  }));
}

export const forTestingsOnly = {
  extractUsedFilterTags,
};
