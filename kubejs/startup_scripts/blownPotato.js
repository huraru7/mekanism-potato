// アイテム登録イベントのリスナー
function createBlownPotato(event, material) {
	event
		.create(`${material}_blown_potato`)
		.displayName(`${material} Blown Potato`)
		.texture(`kubejs:item/${material}_blown_potato`)
		.group("kubejs.my_items");
}
onEvent("item.registry", (event) => {
	const blownPotato = [
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
	blownPotato.forEach((material) => createBlownPotato(event, material));
});
