onEvent("recipes", (event) => {
	event.remove({ mod: "extendedcrafting" });
});

onEvent("recipes", (event) => {
	event.shaped(
		"extendedcrafting:crafting_core",
		[
			// クラフティングコア
			"BBB",
			"BAB",
			"CCC",
		],
		{
			A: "minecraft:crafting_table",
			B: "extendedcrafting:basic_catalyst",
			C: "kubejs:potato_ingot",
		}
	);
});
