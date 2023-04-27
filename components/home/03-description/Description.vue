<template>
	<div class="description-container">
		<div class="description-content">
			<span class="content-for-desktop"
				>Nous sommes ravis de vous accueillir dans notre restaurant situé au
				cœur de la forêt du Livradois. Au sein de notre établissement, vous
				pourrez déguster des plats gourmands préparés avec des produits frais
				directement issus de nos forêts du Puy-de-Dôme. Nous mettons beaucoup
				d'amour dans la préparation de nos plats pour vous offrir une expérience
				culinaire authentique et inoubliable.</span
			>
			<span class="content-for-mobile"
				>Nous sommes ravis de vous accueillir dans notre restaurant situé au
				cœur de la forêt du Livradois. Au sein de notre établissement, vous
				pourrez déguster des plats gourmands préparés avec des produits frais
				directement issus de nos forêts du Puy-de-Dôme.</span
			>
			<button @click="scrollToBook">Réserver une table</button>
		</div>
		<div class="description-image">
			<div class="image-container">
				<img src="../../../assets/desc.webp" alt="description" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
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
.description-container {
	background-color: rgb(240, 240, 240);
	display: flex;
	height: 450px;
	width: 100%;

	@media (max-width: 700px) {
		flex-direction: column;
		height: 350px;
	}

	@media (max-width: 500px) {
		height: 300px;
	}

	@media (max-width: 400px) {
		height: 250px;
	}

	.description-content {
		width: 60%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0px 10px 0px 20px;
		flex-direction: column;
		gap: 40px;

		@media (max-width: 900px) {
			padding: 0px 10px 0px 10px;
		}

		@media (max-width: 700px) {
			width: 100%;
			gap: 25px;
			padding: 0;
		}

		.content-for-desktop {
			display: block;

			@media (max-width: 800px) {
				display: none;
			}
		}

		.content-for-mobile {
			display: none;

			@media (max-width: 800px) {
				display: block;
			}
		}

		span {
			font-size: 1.4vw;
			text-align: center;
			width: 80%;

			@media (max-width: 1200px) {
				font-size: 1.2rem;
			}

			@media (max-width: 900px) {
				font-size: 1.1rem;
			}

			@media (max-width: 500px) {
				width: 90%;
				font-size: 1rem;
			}

			@media (max-width: 400px) {
				font-size: 1rem;
			}
		}

		button {
			padding: 8px 16px;
			font-size: 1.2vw;
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
				font-size: 0.8rem;
				padding: 6px 12px;
			}
		}
	}

	.description-image {
		width: 40%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-right: 10px;

		@media (max-width: 700px) {
			display: none;
		}

		.image-container {
			height: 90%;
			width: auto;
			overflow: hidden;

			@media (max-width: 1200px) {
				height: 85%;
			}

			@media (max-width: 900px) {
				height: 80%;
			}

			@media (max-width: 800px) {
				height: 70%;
			}
		}

		img {
			height: 100%;
			width: auto;
			transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.4, 1);

			&:hover {
				transform: scale(1.08);
			}
		}
	}
}
</style>
