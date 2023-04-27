import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Dishes from "./Dishes.vue";

describe("Dishes.vue", () => {
	it("should change the displayed dish (dishID) when left button is clicked", async () => {
		const wrapper = mount(Dishes);
		const initialDishID = wrapper.vm.dishID;
		const leftButton = wrapper.find(".left-button");

		await leftButton.trigger("click");

		const newID = wrapper.vm.dishID;
		const expectedID =
			initialDishID === 0 ? wrapper.vm.dishes.length - 1 : initialDishID - 1;

		expect(newID).toBe(expectedID);
	});

	it("should change the displayed dish (dishID) when right button is clicked", async () => {
		const wrapper = mount(Dishes);
		const initialDishID = wrapper.vm.dishID;
		const rightButton = wrapper.find(".right-button");

		await rightButton.trigger("click");

		const newID = wrapper.vm.dishID;
		const expectedID =
			initialDishID === wrapper.vm.dishes.length - 1 ? 0 : initialDishID + 1;

		expect(newID).toBe(expectedID);
	});
});
