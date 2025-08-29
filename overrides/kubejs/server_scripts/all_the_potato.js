function getIngredient(material) {
	switch (material) {
		case "antimatter":
			return "mekanism:pellet_antimatter";
		case "coal":
			return "minecraft:coal";
		case "diamond":
			return "minecraft:diamond";
		case "emerald":
			return "minecraft:emerald";
		case "lapis":
			return "minecraft:lapis_lazuli";
		case "redstone":
			return "minecraft:redstone";
		case "osmium":
			return "mekanism:ingot_osmium";
		case "uranium":
			return "mekanism:ingot_uranium";
		case "steel":
			return "mekanism:ingot_steel";
		case "tin":
			return "mekanism:ingot_tin";
		case "refined_obsidian":
			return "mekanism:ingot_refined_obsidian";
		case "refined_glowstone":
			return "mekanism:ingot_refined_glowstone";
		case "lead":
			return "mekanism:ingot_lead";
		case "bronze":
			return "mekanism:ingot_bronze";
		default:
			return "minecraft:" + material + "_ingot";
	}
}
function replacingRecipe(event, material) {
	event.replaceInput({ input: getIngredient(material) }, getIngredient(material), `kubejs:${material}_blown_potato`);
}
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
		"antimatter",
		"steel",
		"tin",
		"uranium",
		"refined_obsidian",
		"refined_glowstone",
		"netherite",
		"lead",
		"bronze",
	];
	materials.forEach((material) => replacingRecipe(event, material));
});
