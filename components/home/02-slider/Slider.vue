<template>
	<div class="slider-container">
		<div class="slides">
			<div
				class="slide-item"
				v-for="(item, index) in currentItems"
				:key="index"
			>
				<div class="image-container">
					<img :src="item.image" :alt="item.title" />
				</div>
			</div>
			<div class="slider-left" title="Vers la gauche" @click="left">
				<i class="fa-solid fa-caret-left" />
			</div>
			<div class="slider-right" title="Vers la droite" @click="right">
				<i class="fa-solid fa-caret-right" />
			</div>
		</div>
	</div>
</template>
<script>
import { SLIDER_DATA } from "./SliderData";

export default {
	data() {
		return {
			items: SLIDER_DATA,
			currentIndex: 0,
		};
	},
	computed: {
		currentItems() {
			const current = this.currentIndex;
			const last = current + 2;
			const items = [...this.items];

			if (last > items.length - 1) {
				const extraItems = items.slice(0, last - items.length + 1);
				return items.slice(current).concat(extraItems);
			}

			return items.slice(current, last + 1);
		},
	},
	methods: {
		left() {
			this.currentIndex--;
			if (this.currentIndex < 0) {
				this.currentIndex = this.items.length - 1;
			}
		},
		right() {
			this.currentIndex++;
			if (this.currentIndex > this.items.length - 1) {
				this.currentIndex = 0;
			}
		},
	},
};
</script>

<style lang="scss">
.slider-container {
	width: 100%;

	.slides {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5%;
		position: relative;

		@media (max-width: 800px) {
			gap: 6%;
		}

		.slide-item {
			width: 25%;
			height: auto;
			display: flex;

			@media (max-width: 800px) {
				width: 30%;
			}

			@media (max-width: 400px) {
				width: 55%;
			}

			.image-container {
				overflow: hidden;
				width: 100%;
				height: auto;
			}

			img {
				width: 100%;
				height: auto;
				transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.4, 1);

				&:hover {
					transform: scale(1.08);
				}
			}
		}

		.slide-item:nth-child(n + 3) {
			@media (max-width: 800px) {
				display: none;
			}
		}
		.slide-item:nth-child(n + 2) {
			@media (max-width: 400px) {
				display: none;
			}
		}

		.slider-left,
		.slider-right {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			border-radius: 3px;
			height: 35px;
			width: 25px;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 6;
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

			@media (max-width: 400px) {
				height: 30px;
				width: 20px;
			}
		}

		.slider-left {
			left: 3%;

			@media (max-width: 800px) {
				left: 8%;
			}

			@media (max-width: 400px) {
				left: 10%;
			}
		}

		.slider-right {
			right: 3%;

			@media (max-width: 800px) {
				right: 8%;
			}

			@media (max-width: 400px) {
				right: 10%;
			}
		}
	}
}
</style>
