// アイテム登録イベントのリスナー
onEvent("item.registry", (event) => {
	event
		.create("huranium_ingot") // アイテムのID（適切な名前を付けてください）
		.displayName("Huranium Ingot") // ゲーム内での表示名
		.texture("kubejs:item/huranium_ingot") // テクスチャのリソースロケーション
		.maxStackSize(16) // 最大スタックサイズ（1-64）
		.rarity("epic") // レアリティ（common, uncommon, rare, epic）
		.tooltip("Huraniumとは...?") // ツールチップ（アイテムの説明）
		.glow(true) // エンチャントされたような光る効果
		.group("kubejs.my_items");
	event
		.create("ethylene_coating_potato") // エチレンコーティングポテト
		.displayName("Ethylene Coating Potato")
		.texture("kubejs:item/ethylene_coating_potato")
		.group("kubejs.my_items");
	event
		.create("compressed_potatos") // 圧縮ジャガイモ
		.displayName("Compressed Potato")
		.texture("kubejs:item/compressed_potatos")
		.group("kubejs.my_items");
	event
		.create("crystal_potatos") // クリスタルジャガイモ
		.displayName("Crystal Potato")
		.texture("kubejs:item/potato_crystal")
		.group("kubejs.my_items");
	event
		.create("potato_ingot") // ジャガイモインゴット
		.displayName("Potato Ingot")
		.texture("kubejs:item/potato_ingot")
		.group("kubejs.my_items");
	event
		.create("potato_stick") // ジャガイモスティック
		.displayName("Potato Stick")
		.texture("kubejs:item/potato_stick")
		.group("kubejs.my_items");
});

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
