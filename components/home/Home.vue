<template>
	<div class="home-container">
		<div class="home-content">
			<Home01Presentation />
			<Home02Slider />
			<Separation />
			<Home03Description id="restaurant-section" />
			<Separation />
			<Home04Dishes />
			<Separation />
			<Home05FoodMenu id="menu-section" />
			<Separation />
			<Home06Contact id="contact-section" />
			<Separation />
			<Home07Reservation />
		</div>
	</div>
</template>

<style lang="scss">
.home-container {
	background-color: rgb(25, 78, 55);
	color: rgb(255, 255, 255);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 80px;

	@media (max-width: 500px) {
		padding-top: 60px;
	}

	@media (max-width: 400px) {
		padding-top: 45px;
	}

	.home-content {
		background-color: rgb(255, 255, 255);
		width: 100%;
		margin: 0 60px;
		height: 100%;
		color: black;

		@media (max-width: 900px) {
			margin: 0 30px;
		}

		@media (max-width: 700px) {
			margin: 0;
		}
	}
}
</style>
