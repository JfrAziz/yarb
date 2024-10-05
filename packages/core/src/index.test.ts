import { apply } from ".";
import { expect, test } from "vitest";

test("evaluate variable", () => {
	expect(apply({ var: "xyz" }, { xyz: 123 })).toBe(123);

	expect(apply({ var: "xyz", default: 456 }, {})).toBe(456);
});

test("evaluate value", () => {
	expect(apply({ val: "xyz" })).toBe("xyz");

	expect(apply({ val: 123 })).toBe(123);
});

test("evaluate value", () => {
	expect(apply({ ">": [{ val: 123 }, { val: 456 }] })).toBe(false);

	expect(apply({ ">": [{ val: 456 }, { val: 123 }] })).toBe(true);
});
