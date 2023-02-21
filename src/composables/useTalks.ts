import { setupIsotopeFilters } from "@/libs/isotope-custom";
import { getDynamicFilters } from "@/modules/filters/filters";
import type { ILanguageFilter, ITalk, ITalkFilter } from "@/types";
import { onMounted, ref, type Ref } from "vue";
import { useDB } from "./useDB";

export function useTalks(): {
  talks: ITalk[];
  talkFilters: Ref<ITalkFilter[]>;
  languageFilters: Ref<ILanguageFilter[]>;
} {
  const { talks, talkFilters, languageFilters } = useDB();

  onMounted(() => setupIsotopeFilters(["talk-filters", "language-filters"]));

  return {
    talks,
    talkFilters: ref(getDynamicFilters(talks, "filterTags", talkFilters)),
    languageFilters: ref(getDynamicFilters(talks, "language", languageFilters)),
  };
}
