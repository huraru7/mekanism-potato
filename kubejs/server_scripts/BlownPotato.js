function getIngredient(material) {
	switch (material) {
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
function blownPotatoRecipe(event, material) {
	// 吹き飛んだポテトを作成
	event.shaped("kubejs:" + material + "_blown_potato", ["AAA", "AMA", "AAA"], {
		A: "minecraft:potato",
		M: getIngredient(material),
	});
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
		"steel",
		"tin",
		"uranium",
		"refined_obsidian",
		"refined_glowstone",
		"netherite",
		"lead",
		"bronze",
	];
	materials.forEach((material) => blownPotatoRecipe(event, material));
});
