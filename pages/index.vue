<template>
	<Html lang="fr">
		<div>
			<Structure01Navbar />
			<Home />
			<Structure02Footbar />
		</div>
	</Html>
</template>

<script setup lang="ts">
useHead({
	title: "Le Bois Savoureux - Restaurant",
	meta: [
		{ charset: "utf-8" },
		{
			name: "Restaurant en forêt",
			content:
				"Restaurant situé au cœur de la forêt du Livradois dans lequel vous pourrez déguster des plats gourmands préparés avec des produits frais directement issus de nos forêts du Puy-de-Dôme.",
		},
		{
			name: "description",
			content:
				"Le Bois Savoureux est un restaurant situé au cœur de la forêt du Livradois. Nous vous proposons une cuisine gourmande préparée avec des produits frais directement issus de nos forêts du Puy-de-Dôme.",
		},
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1",
		},
		{
			name: "keywords",
			content:
				"Restaurant, Livradois, Puy-de-Dôme, Forêt, Gourmand, Cuisine, Produits frais, Bois Savoureux",
		},
	],
	link: [
		{
			rel: "icon",
			type: "image/x-icon",
			href: "/logo.png",
		},
	],
});
</script>
