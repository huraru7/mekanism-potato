const factory_RemoveRecipe = (event, material) => {
	event.remove({ id: `mekanism:factory/basic/${material}` });
	event.remove({ id: `mekanism:factory/advanced/${material}` });
	event.remove({ id: `mekanism:factory/elite/${material}` });
	event.remove({ id: `mekanism:factory/ultimate/${material}` });
};
onEvent("recipes", (event) => {
	const materials = [
		"smelting",
		"enriching",
		"crushing",
		"compressing",
		"combining",
		"purifying",
		"injecting",
		"infusing",
		"sawing",
	];
	materials.forEach((material) => factory_RemoveRecipe(event, material));
});
