import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Reservation from "./Reservation.vue";

describe("ReservationForm", () => {
	it("should fill correctly inputs and should submit correctly the form", async () => {
		const wrapper = mount(Reservation);

		const nameInput = wrapper.find('input[type="text"]');
		await nameInput.setValue("Andrew");
		expect(wrapper.vm.name).toBe("Andrew");

		const lastNameInput = wrapper.findAll('input[type="text"]')[1];
		await lastNameInput.setValue("Lincoln");
		expect(wrapper.vm.surname).toBe("Lincoln");

		const emailInput = wrapper.find('input[type="email"]');
		await emailInput.setValue("andrew.lincoln@example.com");
		expect(wrapper.vm.email).toBe("andrew.lincoln@example.com");

		const phoneInput = wrapper.find('input[type="tel"]');
		await phoneInput.setValue("0123456789");
		expect(wrapper.vm.phone).toBe("0123456789");

		const peopleInput = wrapper.find('input[type="number"]');
		await peopleInput.setValue(2);
		expect(wrapper.vm.people).toBe(2);

		const locationSelect = wrapper.findAll("select")[0];
		await locationSelect.setValue("intérieur");
		expect(wrapper.vm.place).toBe("intérieur");

		const dateInput = wrapper.find('input[type="date"]');
		await dateInput.setValue("2023-05-01");
		expect(wrapper.vm.date).toBe("2023-05-01");

		const timeSelect = wrapper.findAll("select")[1];
		await timeSelect.setValue("12h00");
		expect(wrapper.vm.hour).toBe("12h00");

		const messageArea = wrapper.find("textarea");
		await messageArea.setValue(
			"Une table près de la fenêtre, s'il vous plaît.",
		);

		await wrapper.find("form").trigger("submit.prevent");

		expect(wrapper.find(".message").text()).toBe(
			"La réservation a été effectuée par Andrew !",
		);
	});
});
