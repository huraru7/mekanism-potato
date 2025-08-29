onEvent("recipes", (event) => {
	event.remove({ id: "mekanism:mekasuit_helmet" });
	event.custom({
		type: "extendedcrafting:shaped_table",
		tier: 2,
		pattern: ["AAAAA", "ABCBA", "ABDBA", "AEFEA", "AAGAA"],
		key: {
			A: "kubejs:potato_ingot",
			B: "mekanism:hdpe_sheet",
			C: "solarpanels:light_absorbing_energy_tablet",
			D: "minecraft:netherite_helmet",
			E: "mekaevolution:supreme_control_circuit",
			F: "mekanism:pellet_polonium",
			G: "mekaevolution:infinite_energy_cube",
		},
		result: "mekanism:mekasuit_helmet",
	});

	event.remove({ id: "mekanism:mekasuit_bodyarmor" });
	event.custom({
		type: "extendedcrafting:shaped_table",
		tier: 2,
		pattern: ["AAAAA", "ABCBA", "ABDBA", "AEFEA", "AAGAA"],
		key: {
			A: "kubejs:potato_ingot",
			B: "mekanism:hdpe_sheet",
			C: "solarpanels:light_absorbing_energy_tablet",
			D: "minecraft:netherite_chestplate",
			E: "mekaevolution:supreme_control_circuit",
			F: "mekanism:pellet_polonium",
			G: "mekaevolution:infinite_energy_cube",
		},
		result: "mekanism:mekasuit_bodyarmor",
	});

	event.remove({ id: "mekanism:mekasuit_pants" });
	event.custom({
		type: "extendedcrafting:shaped_table",
		tier: 2,
		pattern: ["AAAAA", "ABCBA", "ABDBA", "AEFEA", "AAGAA"],
		key: {
			A: "kubejs:potato_ingot",
			B: "mekanism:hdpe_sheet",
			C: "solarpanels:light_absorbing_energy_tablet",
			D: "minecraft:netherite_leggings",
			E: "mekaevolution:supreme_control_circuit",
			F: "mekanism:pellet_polonium",
			G: "mekaevolution:infinite_energy_cube",
		},
		result: "mekanism:mekasuit_pants",
	});

	event.remove({ id: "mekanism:mekasuit_boots" });
	event.custom({
		type: "extendedcrafting:shaped_table",
		tier: 2,
		pattern: ["AAAAA", "ABCBA", "ABDBA", "AEFEA", "AAGAA"],
		key: {
			A: "kubejs:potato_ingot",
			B: "mekanism:hdpe_sheet",
			C: "solarpanels:light_absorbing_energy_tablet",
			D: "minecraft:netherite_boots",
			E: "mekaevolution:supreme_control_circuit",
			F: "mekanism:pellet_polonium",
			G: "mekaevolution:infinite_energy_cube",
		},
		result: "mekanism:mekasuit_boots",
	});

	event.remove({ id: "mekanism:meka_tool" });
	event.custom({
		type: "extendedcrafting:shaped_table",
		tier: 2,
		pattern: ["AAAAA", "ABCBA", "ABDBA", "AEFGA", "AAHAA"],
		key: {
			A: "kubejs:potato_ingot",
			B: "mekanism:hdpe_sheet",
			C: "solarpanels:light_absorbing_energy_tablet",
			D: "mekanismtools:netherite_paxel",
			E: "mekanism:atomic_disassembler",
			F: "mekanism:pellet_polonium",
			G: "mekanism:configurator",
			H: "mekaevolution:infinite_energy_cube",
		},
		result: "mekanism:meka_tool",
	});
});
