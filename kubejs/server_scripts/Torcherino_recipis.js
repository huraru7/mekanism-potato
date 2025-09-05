onEvent("recipes", (event) => {
	event.remove({ mod: "torcherino" });
	event.custom({
		//torcherino
		type: "extendedcrafting:shaped_table",
		tier: 3,
		pattern: ["AAAAAAA", "ABCCCBA", "ACDEFCA", "ACEGECA", "ACFEDCA", "ABCCCBA", "AAAAAAA"],

		key: {
			A: "kubejs:potato_ingot",
			B: "mekaevolution:infinite_control_circuit",
			C: "mekanism:upgrade_speed",
			D: "minecraft:redstone_torch",
			E: "minecraft:clock",
			F: "minecraft:torch",
			G: "extendedcrafting:ultimate_singularity",
		},
		result: "torcherino:torcherino",
	});

	event.custom({
		//compressed_torcherino
		type: "extendedcrafting:shaped_table",
		tier: 3,
		pattern: ["AAAAAAA", "ABBCBBA", "ABEEEBA", "ACEEECA", "ABEEEBA", "ABBCBBA", "AAAAAAA"],
		key: {
			A: "kubejs:potato_ingot",
			B: "mekaevolution:infinite_control_circuit",
			C: "kubejs:antimatter_blown_potato",
			E: "torcherino:torcherino",
		},
		result: "torcherino:compressed_torcherino",
	});

	event.custom({
		//compressed_torcherino
		type: "extendedcrafting:shaped_table",
		tier: 3,
		pattern: ["AAAAAAA", "ABBCBBA", "ABEEEBA", "ACEEECA", "ABEEEBA", "ABBCBBA", "AAAAAAA"],
		key: {
			A: "kubejs:potato_ingot",
			B: "mekaevolution:infinite_control_circuit",
			C: "kubejs:antimatter_blown_potato",
			E: "torcherino:compressed_torcherino",
		},
		result: "torcherino:double_compressed_torcherino",
	});
});
