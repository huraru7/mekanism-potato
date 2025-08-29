onEvent("recipes", (event) => {
	const materials = [
		"coal",
		"copper",
		"diamond",
		"emerald",
		"gold",
		"iron",
		"lapis",
		"redstone",
		"osmium",
		"steel",
		"tin",
		"uranium",
		"refined_obsidian",
		"refined_glowstone",
		"netherite",
		"lead",
		"bronze",
	];
	materials.forEach((material) => singularityMaterials(event, material));

	event.shaped("kubejs:singularity_singularity", ["AAA", "AAA", "AAA"], {
		A: "ae2:singularity",
	});
});

function singularityMaterials(event, material) {
	event.custom({
		type: "mekanism:reaction",
		itemInput: { ingredient: { item: "kubejs:" + material + "_blown_potato" } },
		fluidInput: { amount: 100, fluid: "minecraft:water" },
		gasInput: { amount: 90, gas: "kubejs:potato_gas" },
		energyRequired: 100,
		duration: 100,
		gasOutput: { amount: 1000, gas: "kubejs:" + material + "_blown_potato_gas" },
	});
}
