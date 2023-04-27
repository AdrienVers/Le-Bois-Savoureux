interface FoodMenuData {
	id: number;
	name: string;
	description: string;
	ingredients: string;
	price: number;
	category: "ENTRÉES" | "PLATS" | "DESSERTS" | "COCKTAILS";
}

export const FOOD_MENU_DATA: FoodMenuData[] = [
	{
		id: 0,
		name: "Tartelette forestière",
		description:
			"Tarte feuilletée fourrée d'un savoureux pâté de sanglier et champignons, accompagnée de gougères au potiron et d'un toast gourmand à la mûre.",
		ingredients: "Sanglier, champignons, gougères au potiron, mûre.",
		price: 9,
		category: "ENTRÉES",
	},
	{
		id: 1,
		name: "Toasts des bois",
		description:
			"Délicieux petits toasts garnis de fromages frais de chèvre, de bufflonne et de brebis, agrémentés de ciboulette, feuilles de mâche, olives et noix concassées.",
		ingredients: "Fromages de chèvre, bufflonne et brebis.",
		price: 7,
		category: "ENTRÉES",
	},
	{
		id: 2,
		name: "Croustilles particulières",
		price: 6,
		description:
			"Chips de sauterelles, grillons et chenilles, accompagnés respectivement d'une sauce sureau et baies de genièvre, sauce tomate et basilic, et d'une sauce blanche aux pleurotes, ail des ours et ciboulettes.",
		ingredients: "Sauterelles, grillons, chenilles, accompagnés de sauces.",
		category: "ENTRÉES",
	},
	{
		id: 3,
		name: "Sanglier au baies forestières",
		price: 14,
		description:
			"Filet tendre de sanglier mariné aux baies forestières, accompagnée d'une sauce onctueuse et caramélisée aux champignons et fruits rouges (framboises, airelles et mûres).",
		ingredients: "Sanglier, baies, champignons, fruits rouges.",
		category: "PLATS",
	},
	{
		id: 4,
		name: "Champignons sublimés",
		price: 12,
		description:
			"Velouté de cèpes et épinards, garnis de trompettes de la mort, cèpes et pleurotes dorées, tendres et moelleuses.",
		ingredients:
			"Cèpes, velouté d'épinards, trompettes de la mort et pleurotes.",
		category: "PLATS",
	},
	{
		id: 5,
		name: "Chevreuil et Baies de printemps",
		price: 13,
		description:
			"Gigue de chevreuil mariné aux baies de printemps sucrées et légèrement épicées, accompagnée de légumes verts cuits à la vapeur.",
		ingredients: "Chevreuil, baies de printemps, légumes verts.",
		category: "PLATS",
	},
	{
		id: 6,
		name: "Cœur chocolaté",
		price: 6,
		description:
			"Fondant au chocolat en forme de cœur avec nappage, accompagné d'une boule de glace vanille et d'une petite tarte sablée gourmande aux fraises des bois.",
		ingredients: "Chocolat, glace vanille, tarte sablée aux fruits rouges.",
		category: "DESSERTS",
	},
	{
		id: 7,
		name: "Myrtilles des bois",
		price: 7,
		description:
			"Tarte aux myrtilles accompagnée d'une boule de glace vanille et d'une petite pâtisserie gourmande réalisée par le chef, aux framboises, mûres et myrtilles.",
		ingredients:
			"Myrtilles, glace vanille, pâtisserie aux framboises, mûres et myrtilles.",
		category: "DESSERTS",
	},
	{
		id: 8,
		name: "Tarte automnale",
		price: 6,
		description:
			"Tartelette sablée garnie d'un mélange généreux de noix et de noisettes caramélisées, servie avec une giroflée et boule de glace vanille légèrement épicées sur le dessus.",
		ingredients: "Tarte noisettes et noix, giroflée, glace vanille.",
		category: "DESSERTS",
	},
	{
		id: 9,
		name: "L'écorce des bois",
		price: 9,
		description: "",
		ingredients: "Whisky tourbé, liqueur de chêne, cointreau et citron.",
		category: "COCKTAILS",
	},
	{
		id: 10,
		name: "Jardin Zen",
		price: 11,
		description: "",
		ingredients: "Vermouth blanc, génépi, rhum, sucre roux, limonade.",
		category: "COCKTAILS",
	},
	{
		id: 11,
		name: "La forêt enchantée",
		price: 12,
		description: "",
		ingredients: "Kirsch, liqueur de vanille, cerise, amarula, cacao, menthe.",
		category: "COCKTAILS",
	},
];
