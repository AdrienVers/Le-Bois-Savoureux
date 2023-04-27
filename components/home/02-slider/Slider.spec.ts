import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Slider from "./Slider.vue";

describe("Slider.vue", () => {
	it("should change the displayed image (currentIndex) when left button is clicked", async () => {
		const wrapper = mount(Slider);
		const initialIndex = wrapper.vm.currentIndex;
		const leftButton = wrapper.find(".slider-left");

		await leftButton.trigger("click");

		const newIndex = wrapper.vm.currentIndex;
		const expectedIndex =
			initialIndex === 0 ? wrapper.vm.items.length - 1 : initialIndex - 1;

		expect(newIndex).toBe(expectedIndex);
	});

	it("should change the displayed image (currentIndex) when right button is clicked", async () => {
		const wrapper = mount(Slider);
		const initialIndex = wrapper.vm.currentIndex;
		const rightButton = wrapper.find(".slider-right");

		await rightButton.trigger("click");

		const newIndex = wrapper.vm.currentIndex;
		const expectedIndex =
			initialIndex === wrapper.vm.items.length - 1 ? 0 : initialIndex + 1;

		expect(newIndex).toBe(expectedIndex);
	});
});
