<template>
	<div class="reservation-container">
		<form class="reservation-form" @submit.prevent="submitForm">
			<div class="reservation-block">
				<div class="reservation-row-identifier">
					<label htmlFor="name">Prénom</label>
					<input
						type="text"
						name="name"
						title="Prénom"
						v-model="name"
						required
					/>
				</div>
				<div class="reservation-row-identifier">
					<label htmlFor="surname">Nom</label>
					<input type="text" name="surname" title="Nom" v-model="surname" />
				</div>
			</div>
			<div class="reservation-block">
				<div class="reservation-row-identifier">
					<label htmlFor="email">Adresse mail</label>
					<input type="email" title="Email" v-model="email" />
				</div>
				<div class="reservation-row-identifier">
					<label htmlFor="tel">Téléphone</label>
					<input type="tel" name="tel" title="Téléphone" v-model="phone" />
				</div>
			</div>
			<div id="labels" class="reservation-block-information">
				<div class="reservation-row-information">
					<label>Personnes</label>
					<label>Emplacement</label>
				</div>
				<div class="reservation-row-information">
					<label>Date</label>
					<label>Heure</label>
				</div>
			</div>
			<div class="reservation-block-information">
				<div class="reservation-row-information">
					<input
						type="number"
						placeholder="0 personne"
						required
						v-model="people"
					/>
					<select v-model="place">
						<option value="">Emplacement...</option>
						<option value="intérieur">Intérieur</option>
						<option value="extérieur">Terrasse</option>
					</select>
				</div>
				<div class="reservation-row-information">
					<input
						type="date"
						id="date-input"
						:min="minDate"
						placeholder="Date..."
						required
						v-model="date"
					/>
					<select required v-model="hour">
						<option value="">Heure...</option>
						<option disabled value="">Déjeuner</option>
						<option value="12h00">12h00</option>
						<option value="12h00">12h30</option>
						<option value="12h00">13h00</option>
						<option disabled value="">Dîner</option>
						<option value="19h00">19h00</option>
						<option value="12h00">19h30</option>
						<option value="12h00">20h00</option>
					</select>
				</div>
			</div>
			<div class="reservation-block">
				<div class="reservation-row-ask">
					<label htmlFor="ask">Demande particulière</label>
					<textarea name="ask" title="Demande"></textarea>
				</div>
			</div>
			<div class="reservation-submit">
				<button type="submit">
					<span>Réserver &nbsp;</span><i class="fa-regular fa-paper-plane" />
				</button>
			</div>
		</form>
		<p class="message">{{ message }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			surname: "",
			email: "",
			phone: "",
			people: "",
			place: "",
			date: "",
			hour: "",
			minDate: "",
			message: "",
		};
	},
	mounted() {
		const today = new Date();
		const year = today.getFullYear();
		const month = ("0" + (today.getMonth() + 1)).slice(-2);
		const day = ("0" + today.getDate()).slice(-2);

		this.minDate = `${year}-${month}-${day}`;
	},
	methods: {
		submitForm() {
			this.message = `La réservation a été effectuée par ${this.name} !`;
		},
	},
};
</script>

<style lang="scss">
.reservation-container {
	width: 100%;
	display: flex;
	background-color: rgb(245, 245, 245);
	flex-direction: column;
	padding: 50px 0 30px 0;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	@media (max-width: 1200px) {
		padding: 30px 0;
	}

	@media (max-width: 800px) {
		padding: 20px 0;
	}

	@media (max-width: 500px) {
		padding: 10px 0;
	}

	@media (max-width: 400px) {
		padding: 5px 0;
	}

	.reservation-form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.reservation-block {
			display: flex;
			width: 100%;
			justify-content: center;

			@media (max-width: 800px) {
				flex-direction: column;
			}

			.reservation-row-identifier {
				display: flex;
				flex-direction: column;
				width: 40%;
				margin: 0 12px;
				justify-content: center;
				align-items: center;

				@media (max-width: 800px) {
					width: 90%;
					margin-left: 20px;
				}

				input {
					width: 95.5%;
					border: none;
					box-shadow: 0 0 0 1px rgb(200, 200, 200);
					padding: 12px;
					font-size: 1.15vw;

					@media (max-width: 1800px) {
						font-size: 1rem;
					}

					@media (max-width: 500px) {
						font-size: 0.85rem;
						padding: 6px;
					}
				}

				label {
					margin: 18px 0px 8px 20px;
					width: 100%;
					font-size: 1.15vw;

					@media (max-width: 1800px) {
						font-size: 1.2rem;
						margin: 18px 0px 8px 5px;
					}

					@media (max-width: 500px) {
						font-size: 0.85rem;
					}
				}
			}

			.reservation-row-ask {
				display: flex;
				flex-direction: column;
				width: 80%;
				align-items: center;
				margin-bottom: 50px;

				@media (max-width: 800px) {
					width: 87%;
					margin-left: 30px;
				}

				@media (max-width: 500px) {
					font-size: 0.85rem;
				}

				@media (max-width: 400px) {
					width: 90%;
					margin: 0 0 30px 15px;
				}

				textarea {
					width: 100%;
					padding: 10px;
					border: 1px solid rgb(200, 200, 200);
					font-size: 1.15vw;
					font-family: inherit;

					@media (max-width: 1800px) {
						font-size: 1rem;
					}

					@media (max-width: 500px) {
						font-size: 0.85rem;
						width: 90%;
					}
				}

				label {
					margin: 18px 15px 8px 0px;
					width: 100%;
					font-size: 1.15vw;

					@media (max-width: 1800px) {
						font-size: 1.2rem;
					}

					@media (max-width: 500px) {
						width: 90%;
					}
				}
			}
		}

		#labels {
			font-size: 1.15vw;
			margin-top: 5px;

			@media (max-width: 1800px) {
				font-size: 1.2rem;
				margin-top: 0px;
			}

			@media (max-width: 800px) {
				display: none;
			}
		}

		.reservation-block-information {
			display: flex;
			width: 100%;
			justify-content: center;

			@media (max-width: 800px) {
				flex-direction: column;
			}

			.reservation-row-information {
				display: flex;
				width: 40%;
				margin: 0 10px;

				@media (max-width: 800px) {
					width: 90%;
					margin: 35px 0 5px 20px;
				}

				@media (max-width: 500px) {
					margin: 25px 0 0px 20px;
				}

				input,
				select {
					width: 50%;
					border: none;
					box-shadow: 0 0 0 1px rgb(200, 200, 200);
					padding: 12px;
					background-color: rgb(255, 255, 255);
					font-size: 1vw;

					&:hover {
						cursor: pointer;
					}

					@media (max-width: 1800px) {
						font-size: 1rem;
					}

					@media (max-width: 500px) {
						font-size: 0.85rem;
						padding: 6px;
					}
				}

				input {
					margin-right: 18px;
					height: 18px;

					@media (max-width: 500px) {
						margin-right: 12px;
						font-size: 0.85rem;
					}

					&::placeholder {
						@media (max-width: 500px) {
							color: rgb(0, 0, 0);
						}
					}
				}

				select {
					appearance: none;

					@media (max-width: 500px) {
						font-size: 0.85rem;
					}
				}

				label {
					width: 50%;
					margin: 18px 0px 8px 0px;
				}

				label:nth-child(1) {
					margin: 18px 40px 8px 5px;
				}

				#date-input {
					font-family: inherit;
					position: relative;

					&::-webkit-calendar-picker-indicator {
						opacity: 0;
						display: flex;
						width: 100%;
						height: 100%;
						padding: 0;
						position: absolute;

						&:hover {
							cursor: pointer;
						}
					}

					@media (max-width: 500px) {
						appearance: none;

						&::before {
							content: attr(placeholder);
							white-space: pre;
						}

						&:valid::before {
							content: "" !important;
						}
					}
				}
			}
		}

		.reservation-submit {
			display: flex;
			margin: 10px 0 0 0;
			width: 100%;
			justify-content: center;

			@media (max-width: 500px) {
				margin: 5px 0 0 0;
			}

			button {
				padding: 8px 16px;
				font-size: 1.2vw;
				background-color: rgb(25, 78, 55);
				color: white;
				border: none;
				box-shadow: 0px 0px 0px 1.2px rgb(0, 0, 0);
				transition: 0.3s;
				margin: 0 10px;

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

				i {
					transform: rotate(25deg);
				}
			}
		}
	}

	.message {
		padding: 20px 0 0 0;
	}
}
</style>
