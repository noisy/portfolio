import { getNeededFilters } from "@/modules/filters/filters";
import type { ILanguageFilter, ITalk, ITalkFilter } from "@/types";
import { ref, type Ref } from "vue";
import { useDB } from "./useDB";

export function useTalks(): {
  talks: ITalk[];
  talkFilters: Ref<ITalkFilter[]>;
  languageFilters: Ref<ILanguageFilter[]>;
} {
  const { talks, talkFilters, languageFilters } = useDB();

  return {
    talks,
    talkFilters: ref(getNeededFilters(talks, "filterTags", talkFilters)),
    languageFilters: ref(getNeededFilters(talks, "language", languageFilters)),
  };
}
