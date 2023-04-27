<template>
	<div class="dishes-container">
		<div class="dishes-content">
			<h3>{{ dishes[dishID].title }}</h3>
			<p>{{ dishes[dishID].description }}</p>
		</div>
		<div class="dishes-image">
			<div class="plateau-container">
				<button class="left-button" title="Vers la gauche" @click="left">
					<i class="fa-solid fa-caret-left" />
				</button>
				<img class="plateau" src="../../../assets/plateau.webp" alt="dishes" />
				<div class="image-container">
					<img
						class="assiette"
						:src="dishes[dishID].image"
						:alt="dishes[dishID].title"
					/>
				</div>
				<button class="right-button" title="Vers la droite" @click="right">
					<i class="fa-solid fa-caret-right" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { DISHES_DATA } from "./DishesData";

export default {
	data() {
		return {
			dishID: 0,
			dishes: DISHES_DATA,
		};
	},
	methods: {
		left() {
			if (this.dishID > 0) {
				this.dishID--;
			} else {
				this.dishID = this.dishes.length - 1;
			}
		},
		right() {
			if (this.dishID < this.dishes.length - 1) {
				this.dishID++;
			} else {
				this.dishID = 0;
			}
		},
	},
};
</script>

<style lang="scss">
.dishes-container {
	background-color: white;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1200px) {
		height: 350px;
	}

	@media (max-width: 900px) {
		height: 300px;
	}

	@media (max-width: 800px) {
		flex-direction: column;
		height: 100%;
	}

	@media (max-width: 400px) {
		gap: 35px;
	}

	.dishes-content {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		@media (max-width: 800px) {
			width: 100%;
			order: 2;
		}

		h3 {
			font-size: 1.9vw;

			@media (max-width: 1200px) {
				font-size: 1.5rem;
			}

			@media (max-width: 800px) {
				margin: 10px 0;
			}

			@media (max-width: 400px) {
				font-size: 1.3rem;
				margin: 0;
			}
		}

		p {
			font-size: 1.4vw;
			text-align: center;
			width: 80%;

			@media (max-width: 1200px) {
				font-size: 1.1rem;
			}

			@media (max-width: 400px) {
				font-size: 1rem;
			}
		}
	}

	.dishes-image {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (max-width: 800px) {
			width: 100%;
			order: 1;
		}

		.plateau-container {
			width: 600px;
			height: 400px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;

			@media (max-width: 800px) {
				width: 450px;
				height: 250px;
			}

			@media (max-width: 500px) {
				width: 400px;
				height: 250px;
			}

			@media (max-width: 400px) {
				width: 280px;
				height: 130px;
			}

			.plateau {
				width: 90%;
				height: auto;
				z-index: 1;
				position: absolute;

				@media (max-width: 1200px) {
					width: 80%;
				}
			}

			.image-container {
				width: 55%;
				height: auto;
				z-index: 2;
				overflow: hidden;
				position: absolute;

				@media (max-width: 1200px) {
					width: 45%;
				}

				.assiette {
					width: 100%;
					height: auto;
					z-index: 2;
					transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.4, 1);

					&:hover {
						transform: scale(1.08);
					}
				}
			}

			button {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				border-radius: 3px;
				height: 10%;
				width: 6%;
				display: flex;
				justify-content: center;
				align-items: center;
				z-index: 3;
				background-color: rgb(25, 78, 55);
				color: white;
				border: none;
				box-shadow: 0px 0px 0px 1.2px rgb(0, 0, 0);
				transition: 0.3s;
				font-size: 1.2rem;

				&:hover {
					cursor: pointer;
					color: black;
					background-color: rgb(245, 245, 245);
				}

				@media (max-width: 1200px) {
					font-size: 1rem;
				}

				@media (max-width: 800px) {
					font-size: 0.8rem;
				}

				@media (max-width: 500px) {
					font-size: 0.7rem;
				}

				@media (max-width: 400px) {
					height: 18%;
				}
			}

			.left-button {
				left: 7.5%;

				@media (max-width: 1200px) {
					left: 11.5%;
				}
			}

			.right-button {
				right: 7.5%;

				@media (max-width: 1200px) {
					right: 11.5%;
				}
			}
		}
	}
}
</style>
