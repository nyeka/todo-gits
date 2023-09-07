import { expect, test } from "vitest";
import { Sum } from "./sum";

test("add sum 1 + 2 to equal 3", () => {
  expect(Sum(1, 2)).toBe(3);
});
