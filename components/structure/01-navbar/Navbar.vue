<template>
	<div class="navbar">
		<div class="navbar-content">
			<span @click="scrollToRestaurant" id="restaurant">Restaurant</span>
			<span @click="scrollToMenu" id="dishes">Nos plats</span>
			<span id="logo">LE BOIS SAVOUREUX</span>
			<span @click="scrollToContact" id="contact">Contact</span>
			<span @click="scrollToBook" id="book">Réserver</span>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		scrollToTheTop() {
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
		scrollToRestaurant() {
			console.log("scrollToRestaurant");
			const restaurant = document.getElementById("restaurant-section");
			if (restaurant) {
				const restaurantRect = restaurant.getBoundingClientRect();
				const yOffset =
					restaurantRect.top +
					window.pageYOffset -
					window.innerHeight / 2 +
					restaurantRect.height / 2;
				window.scrollTo({ top: yOffset, behavior: "smooth" });
			}
		},
		scrollToMenu() {
			const foodMenu = document.getElementById("menu-section");
			if (foodMenu) {
				const foodMenuRect = foodMenu.getBoundingClientRect();
				const adjustment = -40;
				const yOffset =
					foodMenuRect.top +
					window.pageYOffset -
					window.innerHeight / 2 +
					foodMenuRect.height / 2 +
					adjustment;
				window.scrollTo({ top: yOffset, behavior: "smooth" });
			}
		},
		scrollToContact() {
			const contact = document.getElementById("contact-section");
			if (contact) {
				const contactRect = contact.getBoundingClientRect();
				const adjustment = -40;
				const yOffset =
					contactRect.top +
					window.pageYOffset -
					window.innerHeight / 2 +
					contactRect.height / 2 +
					adjustment;
				window.scrollTo({ top: yOffset, behavior: "smooth" });
			}
		},
		scrollToBook() {
			const scrollHeight = document.documentElement.scrollHeight;
			const windowHeight = window.innerHeight;
			const scrollPosition = scrollHeight - windowHeight;
			window.scrollTo({ top: scrollPosition, behavior: "smooth" });
		},
	},
};
</script>

<style lang="scss">
.navbar {
	background-color: rgb(25, 78, 55);
	width: 100%;
	height: 80px;
	position: fixed;
	display: flex;
	justify-content: center;
	z-index: 10;
	margin: 0;
	padding: 0;

	@media (max-width: 500px) {
		height: 60px;
	}

	.navbar-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 75%;
		height: 100%;

		@media (max-width: 1000px) {
			width: 80%;
		}

		@media (max-width: 900px) {
			justify-content: center;
		}

		span {
			color: rgb(255, 255, 255);
			font-size: 1.6vw;
			letter-spacing: 1px;

			@media (max-width: 1000px) {
				font-size: 1.2rem;
			}
		}

		#restaurant,
		#dishes,
		#contact,
		#book {
			padding: 2.5px 0;
			transition: 0.2s ease-in;

			@media (max-width: 900px) {
				display: none;
			}

			&:hover {
				cursor: pointer;
				box-shadow: inset 0 -1.5px 0 0 rgb(255, 255, 255);
			}
		}

		i {
			display: none;

			@media (max-width: 900px) {
				display: block;
				font-size: 1.4rem;
				color: rgb(255, 255, 255);
			}

			@media (max-width: 500px) {
				font-size: 1.2rem;
			}

			@media (max-width: 400px) {
				font-size: 1.15rem;
			}

			&:hover {
				cursor: pointer;
			}
		}

		#logo {
			font-size: 1.8vw;
			font-weight: 500;
			letter-spacing: 0.5px;

			&:hover {
				cursor: default;
			}

			@media (max-width: 1000px) {
				font-size: 1.3rem;
			}

			@media (max-width: 500px) {
				font-size: 1.2rem;
			}

			@media (max-width: 400px) {
				font-size: 1.25rem;
			}
		}
	}
}
</style>
