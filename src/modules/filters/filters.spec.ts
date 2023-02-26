import { allFilterTag, type IProject, type ITalk } from "@/types";
import { describe, expect, it } from "vitest";
import { forTestingsOnly, getNeededFilters } from "./filters";

const { extractUsedFilterTags } = forTestingsOnly;

describe("extractUsedFilterTags", () => {
  it("extractUsedFilterTags extracts an empty list of filter tags in case wrongAttribiute name is used to store tags in DB ", () => {
    const projects = [
      { wrongAttribiute: ["a", "b", "c"] },
      { wrongAttribiute: ["a", "b", "c"] },
      { wrongAttribiute: ["a", "b", "c"] },
    ] as unknown as IProject[];

    const usedFilterTags = extractUsedFilterTags(projects, "filterTags");
    expect(usedFilterTags).toEqual([]);
  });

  it("extractUsedFilterTags extracts a list of not repeating tags if all 3 projects use the same 3 tags ", () => {
    const projects = [
      { filterTags: ["a", "b", "c"] },
      { filterTags: ["a", "b", "c"] },
      { filterTags: ["a", "b", "c"] },
    ] as unknown as IProject[];

    const usedFilterTags = extractUsedFilterTags(projects, "filterTags");
    expect(usedFilterTags).toEqual(["a", "b", "c"]);
  });

  it("extractUsedFilterTags extracts a list of not repeating tags in case some tags are used more than once ", () => {
    const projects = [
      { filterTags: ["a", "b", "c"] },
      { filterTags: ["b", "c", "d"] },
      { filterTags: ["x", "y", "z"] },
    ] as unknown as IProject[];

    const usedFilterTags = extractUsedFilterTags(projects, "filterTags");
    expect(usedFilterTags).toEqual(["a", "b", "c", "d", "x", "y", "z"]);
  });

  it("extractUsedFilterTags extracts a list from an attrbute, which constain an item and not a list of items", () => {
    const talks = [
      { language: "polish" },
      { language: "english" },
      { language: "spanish" },
      { language: "english" },
    ] as unknown as ITalk[];

    const usedFilterTags = extractUsedFilterTags(talks, "language");
    expect(usedFilterTags).toEqual(["polish", "english", "spanish"]);
  });
});

describe("getNeededFiltersBasedOnUsedTags", () => {
  describe("Missing filters", () => {
    it("getNeededFiltersBasedOnUsedTags for tags which do not have a pair in provided filters, throws an error", () => {
      const projects = [
        { filterTags: ["a", "b", "c"] },
      ] as unknown as IProject[];

      const filters = [
        { name: "All", tag: allFilterTag, isActive: false },
        { name: "AAA", tag: "a", isActive: false },
        { name: "BBB", tag: "b", isActive: false },
      ];

      expect(() =>
        getNeededFilters(projects, "filterTags", filters)
      ).toThrowError("Some tags do not have pair in filters: c");
    });

    it("getNeededFiltersBasedOnUsedTags for missing filter with tag *, throws an error", () => {
      const projects = [
        { filterTags: ["a", "b", "c"] },
      ] as unknown as IProject[];

      const filters = [
        { name: "AAA", tag: "a", isActive: false },
        { name: "BBB", tag: "b", isActive: false },
        { name: "CCC", tag: "c", isActive: false },
      ];

      expect(() =>
        getNeededFilters(projects, "filterTags", filters)
      ).toThrowError("Some tags do not have pair in filters: *");
    });
  });

  describe("Pairing tags with filters", () => {
    it("getNeededFiltersBasedOnUsedTags uses defined filters names for specific tags", () => {
      const projects = [
        { filterTags: ["a", "b"] },
        { filterTags: ["c"] },
      ] as unknown as IProject[];

      const filters = [
        { name: "All", tag: allFilterTag, isActive: false },
        { name: "AAA", tag: "a", isActive: false },
        { name: "BBB", tag: "b", isActive: false },
        { name: "CCC", tag: "c", isActive: false },
      ];

      const neededFilters = getNeededFilters(projects, "filterTags", filters);

      expect(neededFilters).toEqual([
        { name: "All", tag: allFilterTag, isActive: false },
        { name: "AAA", tag: "a", isActive: false },
        { name: "BBB", tag: "b", isActive: false },
        { name: "CCC", tag: "c", isActive: false },
      ]);
    });

    it("getNeededFiltersBasedOnUsedTags allows to set a name for default All(*) filter", () => {
      const projects = [{ filterTags: ["a", "b"] }] as unknown as IProject[];

      const filters = [
        { name: "Everything", tag: allFilterTag, isActive: false },
        { name: "AAA", tag: "a", isActive: false },
        { name: "BBB", tag: "b", isActive: false },
      ];

      const neededFilters = getNeededFilters(projects, "filterTags", filters);

      expect(neededFilters).toEqual([
        { name: "Everything", tag: allFilterTag, isActive: false },
        { name: "AAA", tag: "a", isActive: false },
        { name: "BBB", tag: "b", isActive: false },
      ]);
    });
  });

  describe("Skipping not needed filters", () => {
    it("getNeededFiltersBasedOnUsedTags skips filters which are not needed", () => {
      const projects = [{ filterTags: ["a", "b"] }] as unknown as IProject[];

      const filters = [
        { name: "All", tag: allFilterTag, isActive: false },
        { name: "AAA", tag: "a", isActive: false },
        { name: "BBB", tag: "b", isActive: false },
        { name: "CCC", tag: "c", isActive: false },
        { name: "DDD", tag: "d", isActive: false },
      ];

      const neededFilters = getNeededFilters(projects, "filterTags", filters);

      expect(neededFilters).toEqual([
        { name: "All", tag: allFilterTag, isActive: false },
        { name: "AAA", tag: "a", isActive: false },
        { name: "BBB", tag: "b", isActive: false },
      ]);
    });
  });

  describe("Order of filters", () => {
    it('order of filters determines the order of returned filters. "All" if not specified otherwise, should be always the first one', () => {
      const talks = [
        { language: "polish" },
        { language: "english" },
        { language: "spanish" },
      ] as unknown as ITalk[];

      const filters = [
        { name: "🇬🇧", tag: "english", isActive: false },
        { name: "🇵🇱", tag: "polish", isActive: false },
        { name: "🌎", tag: allFilterTag, isActive: false },
        { name: "🇪🇸", tag: "spanish", isActive: false },
      ];

      const neededFilters = getNeededFilters(talks, "language", filters);

      expect(neededFilters).toEqual([
        { name: "🇬🇧", tag: "english", isActive: false },
        { name: "🇵🇱", tag: "polish", isActive: false },
        { name: "🌎", tag: allFilterTag, isActive: false },
        { name: "🇪🇸", tag: "spanish", isActive: false },
      ]);
    });
  });
});
