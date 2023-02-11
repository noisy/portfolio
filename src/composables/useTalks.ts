import { setupIsotopeFilters } from "@/libs/isotope-custom";
import {
  extractUsedFilterTags,
  getFiltersBasedOnUsedTags,
} from "@/modules/filters/filters";
import type { ILanguageFilter, ITalk, ITalkFilter } from "@/types";
import { onMounted } from "vue";
import { useDB } from "./useDB";

export function useTalks(): {
  talks: ITalk[];
  talkFilters: ITalkFilter[];
  languageFilters: ILanguageFilter[];
} {
  const { talks, talkFilters, languageFilters } = useDB();
  const usedFilterTags = extractUsedFilterTags(talks, "filterTags");
  const usedLanguageFilterTags = extractUsedFilterTags(talks, "language");

  onMounted(() => setupIsotopeFilters(["talk-filters", "language-filters"]));

  return {
    talks,
    talkFilters: getFiltersBasedOnUsedTags(talkFilters, usedFilterTags),
    languageFilters: getFiltersBasedOnUsedTags(
      languageFilters,
      usedLanguageFilterTags
    ),
  };
}
