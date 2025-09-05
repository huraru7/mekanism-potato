onEvent("recipes", (event) => {
	event.recipes.mekanismPurifying("minecraft:poisonous_potato", "minecraft:potato", { gas: "mekanism:oxygen", amount: 1 }); //�W���K�C���������
	event.recipes.mekanism.injecting("kubejs:crystal_potatos", "minecraft:potato", "1x mekanism:hydrogen_chloride");
	event.recipes.mekanismPurifying("4x minecraft:poisonous_potato", "kubejs:crystal_potatos", {
		gas: "mekanism:oxygen",
		amount: 1,
	});
	event.recipes.mekanism.purifying("kubejs:ethylene_coating_potato", "minecraft:potato", "1x mekanism:ethene");
	event.recipes.mekanism.injecting(
		"4x kubejs:crystal_potatos",
		"kubejs:ethylene_coating_potato",
		"1x mekanism:hydrogen_chloride"
	);

	event.custom({
		type: "mekanism:reaction", //�|�e�g�K�X
		itemInput: { ingredient: { item: "minecraft:potato" } },
		fluidInput: { amount: 50, fluid: "minecraft:water" },
		gasInput: { amount: 100, gas: "mekanism:oxygen" },
		energyRequired: 100,
		duration: 100,
		gasOutput: { amount: 100, gas: "kubejs:potato_gas" },
	});
	event.custom({
		type: "mekanism:reaction", //���k�|�e�g�K�X
		itemInput: { ingredient: { item: "kubejs:compressed_potatos" } },
		fluidInput: { amount: 50, fluid: "minecraft:water" },
		gasInput: { amount: 100, gas: "mekanism:oxygen" },
		energyRequired: 100,
		duration: 100,
		gasOutput: { amount: 100, gas: "kubejs:compressed_potato_gas" },
	});

	event.custom({
		type: "mekanism:reaction",
		itemInput: { ingredient: { item: "minecraft:potato" } },
		fluidInput: { amount: 100, fluid: "mekanism:nutritional_paste" },
		gasInput: { amount: 100, gas: "mekanism:water_vapor" },
		energyRequired: 100,
		duration: 100,
		itemOutput: { item: "minecraft:potato", count: 8 },
	});
	event.custom({
		type: "mekanism:reaction",
		itemInput: { ingredient: { item: "kubejs:compressed_potatos" } },
		fluidInput: { amount: 100, fluid: "mekanism:nutritional_paste" },
		gasInput: { amount: 900, gas: "mekanism:water_vapor" },
		energyRequired: 100,
		duration: 100,
		itemOutput: { item: "kubejs:compressed_potatos", count: 8 },
	});

	event.custom({
		type: "mekanism:reaction",
		itemInput: { ingredient: { item: "minecraft:poisonous_potato" } },
		fluidInput: { amount: 100, fluid: "mekanism:nutritional_paste" },
		gasInput: { amount: 100, gas: "mekanism:water_vapor" },
		energyRequired: 100,
		duration: 100,
		itemOutput: { item: "minecraft:potato", count: 16 },
	});
});
