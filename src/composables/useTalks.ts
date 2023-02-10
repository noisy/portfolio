import { extractUsedFilterTags, getFilters } from "@/modules/filters/filters";
import type { ITalk, ITalkFilter } from "@/types";
import { useDB } from "./useDB";

const { talks, talkFilters } = useDB();

export function useTalks(): { talks: ITalk[]; talkFilters: ITalkFilter[] } {
  const usedFilterTags = extractUsedFilterTags(talks, "filterTags");
  return {
    talks,
    talkFilters: getFilters(talkFilters, usedFilterTags),
  };
}
