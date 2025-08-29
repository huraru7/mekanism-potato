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
	event.shaped(
		"kubejs:compressed_potatos",
		[
			// 圧縮ポテト
			"AAA",
			"AAA",
			"AAA",
		],
		{
			A: "minecraft:potato",
		}
	);
	event.shapeless("9x minecraft:potato", [
		// 圧縮ポテトを分解
		"kubejs:compressed_potatos",
	]);
	event.shaped(
		"kubejs:potato_ingot",
		[
			// ポテトインゴット
			"AAA",
			"AAA",
			"AAA",
		],
		{
			A: "kubejs:compressed_potatos",
		}
	);
	event.shapeless("9x kubejs:compressed_potatos", [
		// ポテトインゴットを分解
		"kubejs:potato_ingot",
	]);
	event.shaped(
		"kubejs:potato_stick",
		[
			// ポテト棒
			"   ",
			" A ",
			" A ",
		],
		{
			A: "kubejs:potato_ingot",
		}
	);
});
