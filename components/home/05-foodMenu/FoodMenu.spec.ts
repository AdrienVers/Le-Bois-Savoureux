import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FoodMenu from "./FoodMenu.vue";

describe("FoodMenu.vue", () => {
	it('should contain "ENTRÉES", "PLATS", "DESSERTS", "COCKTAILS"', () => {
		const wrapper = mount(FoodMenu);
		const categories: string[] = ["ENTRÉES", "PLATS", "DESSERTS", "COCKTAILS"];

		categories.forEach((category: string) => {
			expect(wrapper.text()).toContain(category);
		});
	});
});
