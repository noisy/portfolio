import { setupIsotopeFilters } from "@/libs/isotope-custom";
import { getDynamicFilters } from "@/modules/filters/filters";
import type { ILanguageFilter, ITalk, ITalkFilter } from "@/types";
import { onMounted } from "vue";
import { useDB } from "./useDB";

export function useTalks(): {
  talks: ITalk[];
  talkFilters: ITalkFilter[];
  languageFilters: ILanguageFilter[];
} {
  const { talks, talkFilters, languageFilters } = useDB();

  onMounted(() => setupIsotopeFilters(["talk-filters", "language-filters"]));

  return {
    talks,
    talkFilters: getDynamicFilters(talks, "filterTags", talkFilters),
    languageFilters: getDynamicFilters(talks, "language", languageFilters),
  };
}
