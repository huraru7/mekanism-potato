Onevent("recipes", (event) => {
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
			"   ",
			"   ",
			"AAA",
		],
		{
			A: "kubejs:compressed_potatos",
		}
	);
});
