<template>
	<div class="presentation-container">
		<div class="presentation-content">
			<p>Succombez à la gourmandise au plein coeur de la forêt.</p>
			<br />
			<div class="buttons">
				<button @click="scrollToMenu">Découvrir la carte</button>
				<button @click="scrollToBook">Réserver</button>
			</div>
			<img src="../../../assets/banner.png" alt="banner" />
			<div class="filter" />
		</div>
	</div>
</template>

<script>
export default {
	methods: {
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
.presentation-container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.presentation-content {
		display: flex;
		flex-direction: column;
		width: 90%;
		align-items: center;
		justify-content: center;
		background-color: rgb(245, 245, 245);
		padding: 80px 0px;
		color: black;
		gap: 10px;
		margin: 50px 0 60px 0;
		position: relative;

		@media (max-width: 1600px) {
			padding: 60px 0px;
		}

		@media (max-width: 1100px) {
			padding: 50px 0px;
		}

		@media (max-width: 900px) {
			padding: 40px 0px;
		}

		@media (max-width: 700px) {
			padding: 30px 0px;
			gap: 0px;
		}

		@media (max-width: 400px) {
			padding: 25px;
			margin: 50px 0 50px 0;
		}

		img {
			position: absolute;
			width: 100%;
			height: auto;
			z-index: 2;
			filter: drop-shadow(0 0 0.1rem rgb(100, 100, 100));

			@media (max-width: 850px) {
				display: none;
			}
		}

		.filter {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 3;
		}

		p {
			padding: 0px 0px 15px 0px;
			font-size: 2.1vw;
			text-align: center;
			line-height: 1.5;
			margin: 0;
			width: 80%;
			z-index: 8;

			@media (max-width: 1200px) {
				padding: 0px 0px 5px 0px;
			}

			@media (max-width: 900px) {
				font-size: 1.2rem;
			}

			@media (max-width: 500px) {
				width: 90%;
				font-size: 1.2rem;
			}
		}

		.buttons {
			z-index: 8;
			button {
				padding: 8px 16px;
				font-size: 1.2vw;
				margin: 0 10px;
				background-color: rgb(25, 78, 55);
				color: white;
				border: none;
				box-shadow: 0px 0px 0px 1.2px rgb(0, 0, 0);
				transition: 0.3s;

				&:hover {
					cursor: pointer;
					color: black;
					background-color: rgb(245, 245, 245);
				}

				@media (max-width: 1200px) {
					font-size: 0.9rem;
				}

				@media (max-width: 500px) {
					font-size: 0.8rem;
				}

				@media (max-width: 400px) {
					font-size: 0.75rem;
					padding: 6px 12px;
					margin: 0 6px;
				}
			}
		}
	}
}
</style>
