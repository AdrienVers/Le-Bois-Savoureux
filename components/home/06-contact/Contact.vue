<template>
	<div class="contact-container">
		<div class="contact-map">
			<img
				src="../../../assets/map.webp"
				alt="carte"
				@click="redirectToLink"
				class="clickable-image"
			/>
		</div>
		<div class="contact-info-container">
			<div class="contact-info">
				<h2>Adresse</h2>
				<p>14 Rue des Martinanches, Auzelles (63590).</p>
				<span
					>Pour plus de précision et générer un itinéraire, vous pouvez cliquer
					sur la carte.</span
				>
			</div>
			<div class="contact-info">
				<h2>Déjeuner</h2>
				<p>Mardi au Dimanche (12h00 à 15h00)</p>
				<span>Fermeture des cuisines : 14h00.</span>
			</div>
			<div class="contact-info">
				<h2>Dîner</h2>
				<p>Mardi au Samedi (19h00 à 23h00)</p>
				<span>Fermeture des cuisines : 22h00.</span>
			</div>
			<div class="contact-info-close">
				<p>
					Le restaurant est fermé les jours fériés, lundis et dimanches soirs.
					Pour toute demande, nous sommes joignable par mail
					bois-savoureux@gmail.com ou par téléphone (01 43 45 28 14).
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		redirectToLink() {
			window.open(
				"https://www.google.com/maps/place/45%C2%B038'22.0%22N+3%C2%B029'08.5%22E/@45.63945,3.4831141,17z/data=!3m1!4b1!4m4!3m3!8m2!3d45.63945!4d3.485689",
				"_blank",
			);
		},
	},
};
</script>

<style lang="scss">
.contact-title {
	text-align: center;
	padding: 10px 30px 5px 10px;
	font-size: 2.2vw;

	@media (max-width: 1400px) {
		font-size: 2rem;
	}

	@media (max-width: 800px) {
		font-size: 1.8rem;
		padding: 10px 0px 0px 0px;
	}

	@media (max-width: 500px) {
		font-size: 1.25rem;
	}
}

.contact-container {
	width: 100%;
	display: flex;

	@media (max-width: 800px) {
		flex-direction: column;
		align-items: center;
	}

	.contact-map {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (max-width: 800px) {
			width: 100%;
			order: 2;
		}

		img {
			width: 68%;

			@media (max-width: 1200px) {
				width: 80%;
			}

			@media (max-width: 800px) {
				width: 50%;
			}

			&:hover {
				cursor: pointer;
			}
		}
	}

	.contact-info-container {
		width: 50%;

		@media (max-width: 800px) {
			width: 80%;
			display: flex;
			flex-direction: column;
			padding-bottom: 40px;
			order: 1;
		}

		.contact-info {
			padding: 10px 15px 10px 0;

			@media (max-width: 1200px) {
				padding: 5px 10px 5px 0;
			}

			h2 {
				margin: 0;
				padding: 8px 0 5px 0;
				font-weight: 500;
				text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
				font-size: 1.4vw;

				@media (max-width: 1200px) {
					font-size: 1.2rem;
					padding: 5px 0 3px 0;
				}

				@media (max-width: 400px) {
					font-size: 1.05rem;
				}
			}

			p {
				margin: 0;
				padding: 5px 0;
				font-size: 1.2vw;

				@media (max-width: 1200px) {
					font-size: 1rem;
				}

				@media (max-width: 400px) {
					font-size: 0.85rem;
				}
			}

			span {
				font-size: 1rem;

				@media (max-width: 1200px) {
					font-size: 0.9rem;
				}
			}
		}

		.contact-info-close {
			padding: 10px 20px 10px 0;

			p {
				margin: 0;
				font-size: 1rem;

				@media (max-width: 1200px) {
					font-size: 0.9rem;
				}

				@media (max-width: 400px) {
					font-size: 0.85rem;
				}
			}
		}
	}
}
</style>
