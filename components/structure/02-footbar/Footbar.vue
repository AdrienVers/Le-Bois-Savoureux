<template>
	<div class="footer">
		<div class="copyright">
			<span id="title-copyright">© LE BOIS SAVOUREUX 2023.</span>
			&nbsp;
			<span id="all-rights">ALL RIGHTS RESERVED.</span>
		</div>
		<div class="icons">
			<i class="fa-brands fa-square-facebook" />
			<i class="fa-brands fa-instagram" />
			<i class="fa-brands fa-twitter" />
		</div>
	</div>
</template>

<style lang="scss">
.footer {
	background-color: rgb(25, 78, 55);
	color: rgb(255, 255, 255);
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	@media (max-width: 500px) {
		height: 55px;
	}

	span {
		font-size: 1.15vw;
		@media (max-width: 1200px) {
			font-size: 1rem;
		}

		@media (max-width: 500px) {
			font-size: 0.9rem;
		}

		@media (max-width: 400px) {
			font-size: 0.8rem;
		}
	}

	#all-rights {
		@media (max-width: 700px) {
			display: none;
		}
	}

	.copyright {
		@media (max-width: 1000px) {
			width: 70%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		@media (max-width: 500px) {
			width: 65%;
		}

		@media (max-width: 400px) {
			width: 80%;
		}
	}

	.icons {
		position: absolute;
		right: 100px;

		@media (max-width: 1000px) {
			position: relative;
			right: 0;
			width: 30%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		@media (max-width: 500px) {
			width: 35%;
		}

		@media (max-width: 400px) {
			display: none;
		}

		i {
			margin: 0 10px;
			font-size: 1.8rem;

			@media (max-width: 1200px) {
				font-size: 1.5rem;
			}

			@media (max-width: 1000px) {
				margin: 0;
				padding: 0 10px;
			}

			@media (max-width: 500px) {
				font-size: 1.2rem;
			}

			@media (max-width: 400px) {
				font-size: 1.1rem;
			}

			@media (max-width: 300px) {
				font-size: 1rem;
				padding: 0 5px;
			}
		}
	}
}
</style>
