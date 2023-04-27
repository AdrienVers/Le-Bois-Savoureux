<template>
	<div class="menu-container">
		<div class="menu-left">
			<div class="section">
				<h2>ENTRÉES</h2>
			</div>
			<div v-for="item in starter" :key="item.id">
				<div class="title-container">
					<div class="title">
						<h3>
							<span>{{ item.name }}</span>
							<span class="price">{{ item.price }} €</span>
						</h3>
					</div>
				</div>
				<div class="description">
					<p>{{ item.ingredients }}</p>
				</div>
			</div>
			<div class="section">
				<h2>PLATS</h2>
			</div>
			<div v-for="item in mainCourse" :key="item.id">
				<div class="title-container">
					<div class="title">
						<h3>
							<span>{{ item.name }}</span>
							<span class="price">{{ item.price }} €</span>
						</h3>
					</div>
				</div>
				<div class="description">
					<p>{{ item.ingredients }}</p>
				</div>
			</div>
		</div>
		<div class="menu-right">
			<div class="section">
				<h2>DESSERTS</h2>
			</div>
			<div v-for="item in dessert" :key="item.id">
				<div class="title-container">
					<div class="title">
						<h3>
							<span>{{ item.name }}</span>
							<span class="price">{{ item.price }} €</span>
						</h3>
					</div>
				</div>
				<div class="description">
					<p>{{ item.ingredients }}</p>
				</div>
			</div>
			<div class="section">
				<h2>COCKTAILS</h2>
			</div>
			<div v-for="item in cocktail" :key="item.id">
				<div class="title-container">
					<div class="title">
						<h3>
							<span>{{ item.name }}</span>
							<span class="price">{{ item.price }} €</span>
						</h3>
					</div>
				</div>
				<div class="description">
					<p>{{ item.ingredients }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { FOOD_MENU_DATA } from "./FoodMenuData";

export default {
	setup() {
		const starter = FOOD_MENU_DATA.filter(
			(item) => item.category === "ENTRÉES",
		);
		const mainCourse = FOOD_MENU_DATA.filter(
			(item) => item.category === "PLATS",
		);
		const dessert = FOOD_MENU_DATA.filter(
			(item) => item.category === "DESSERTS",
		);
		const cocktail = FOOD_MENU_DATA.filter(
			(item) => item.category === "COCKTAILS",
		);

		return {
			starter,
			mainCourse,
			dessert,
			cocktail,
		};
	},
};
</script>

<style lang="scss">
.menu-container {
	width: 100%;
	display: flex;
	background-color: rgb(245, 245, 245);
	padding: 25px 0 70px 0;

	@media (max-width: 1800px) {
		padding: 10px 0 35px 0;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		padding: 5px 0 30px 0;
		align-items: center;
		justify-content: center;
	}

	.menu-left,
	.menu-right {
		width: 50%;
		padding: 0 50px;

		@media (max-width: 700px) {
			padding: 0 20px;
		}

		@media (max-width: 600px) {
			width: 80%;
			display: flex;
			flex-direction: column;
			padding: 0;
		}

		.section {
			h2 {
				font-size: 1.5vw;
				text-align: center;
				padding-top: 10px;

				@media (max-width: 1200px) {
					font-size: 1.2rem;
				}

				@media (max-width: 700px) {
					font-size: 1.1rem;
				}

				@media (max-width: 400px) {
					padding-top: 5px;
					font-size: 1rem;
				}
			}
		}
	}

	.title-container {
		max-width: 40rem;
		overflow-x: hidden;
		padding-top: 10px;

		.title:before {
			float: left;
			vertical-align: middle;
			padding-top: 4px;
			width: 0;
			white-space: nowrap;
			content: ". . . . . . . . . . . . . . . . . . . . "
				". . . . . . . . . . . . . . . . . . . . "
				". . . . . . . . . . . . . . . . . . . . "
				". . . . . . . . . . . . . . . . . . . . ";

			@media (max-width: 1200px) {
				padding-top: 2px;
			}
		}

		h3 {
			margin: 0;
			font-size: 1.5vw;
			font-weight: 500;
			text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);

			@media (max-width: 1200px) {
				font-size: 1.2rem;
			}

			@media (max-width: 700px) {
				font-size: 1.1rem;
			}

			@media (max-width: 400px) {
				font-size: 1.05rem;
			}
		}

		span {
			padding-right: 0.4em;
			background: rgb(245, 245, 245);
		}

		span + span {
			float: right;
			padding-left: 0.5em;
			background: rgb(245, 245, 245);
		}

		.price {
			font-size: 1.2vw;
			padding-top: 4px;

			@media (max-width: 1200px) {
				font-size: 1rem;
			}

			@media (max-width: 700px) {
				font-size: 0.9rem;
			}

			@media (max-width: 400px) {
				font-size: 0.85rem;
			}
		}
	}

	.description {
		width: 100%;

		p {
			margin: 0;
			padding: 2px 0;
			font-size: 1vw;

			@media (max-width: 1200px) {
				font-size: 0.9rem;
			}

			@media (max-width: 700px) {
				font-size: 0.8rem;
			}

			@media (max-width: 400px) {
				font-size: 0.75rem;
			}
		}
	}
}
</style>
