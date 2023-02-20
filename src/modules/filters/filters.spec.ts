import type { IProject, ITalk } from "@/types";
import { describe, expect, it } from "vitest";
import { forTestingsOnly, getDynamicFilters } from "./filters";

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

describe("getDynamicFilters", () => {
  it("getDynamicFilters for not filters provided, uses tags as names for filters, and add one more filter with 'All' name and '*' tag", () => {
    const projects = [{ filterTags: ["a", "b", "c"] }] as unknown as IProject[];

    const filters = getDynamicFilters(projects, "filterTags", []);
    expect(filters).toEqual([
      { name: "All", tag: "*" },
      { name: "a", tag: "a" },
      { name: "b", tag: "b" },
      { name: "c", tag: "c" },
    ]);
  });

  it("getDynamicFilters uses defined filters names for specific tags. For other tags, tag is used as a name. All(*) filter is added", () => {
    const projects = [
      { filterTags: ["a", "b"] },
      { filterTags: ["c", "d"] },
    ] as unknown as IProject[];

    const filters = getDynamicFilters(projects, "filterTags", [
      { name: "All", tag: "*" },
      { name: "AAA", tag: "a" },
      { name: "BBB", tag: "b" },
    ]);

    expect(filters).toEqual([
      { name: "All", tag: "*" },
      { name: "AAA", tag: "a" },
      { name: "BBB", tag: "b" },
      { name: "c", tag: "c" },
      { name: "d", tag: "d" },
    ]);
  });

  it("getDynamicFilters allows to set a name for default All(*) filter", () => {
    const projects = [{ filterTags: ["a", "b"] }] as unknown as IProject[];

    const filters = getDynamicFilters(projects, "filterTags", [
      { name: "Everything", tag: "*" },
      { name: "AAA", tag: "a" },
      { name: "BBB", tag: "b" },
    ]);

    expect(filters).toEqual([
      { name: "Everything", tag: "*" },
      { name: "AAA", tag: "a" },
      { name: "BBB", tag: "b" },
    ]);
  });

  it.skip('order of filters determines the order of returned filters. "All" if not specified otherwise, should be always the first one', () => {
    const projects = [
      { filterTags: ["d", "b"] },
      { filterTags: ["c", "a"] },
    ] as unknown as IProject[];

    const filters = getDynamicFilters(projects, "filterTags", [
      { name: "CCC", tag: "c" },
      { name: "DDD", tag: "d" },
      { name: "AAA", tag: "a" },
      { name: "BBB", tag: "b" },
      { name: "All", tag: "*" },
    ]);

    console.log(filters);

    expect(filters).toEqual([
      { name: "CCC", tag: "c" },
      { name: "DDD", tag: "d" },
      { name: "AAA", tag: "a" },
      { name: "BBB", tag: "b" },
      { name: "All", tag: "*" },
    ]);
  });
});
