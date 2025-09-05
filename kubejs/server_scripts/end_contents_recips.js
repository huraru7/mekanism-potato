onEvent("recipes", (event) => {
	event.remove({ id: "mekaevolution:absolute_control_circuit" });
	event.remove({ id: "mekaevolution:supreme_control_circuit" });
	event.remove({ id: "mekaevolution:cosmic_control_circuit" });
	event.remove({ id: "mekaevolution:infinite_control_circuit" });

	function ControlCircuit(event, base1, base2, material) {
		//mekaevolutionの回路のレシピ作成
		event.shaped("mekaevolution:" + material + "_control_circuit", ["   ", "AMA", "   "], {
			A: base2,
			M: base1,
		});
	}
	ControlCircuit(event, "mekanism:ultimate_control_circuit", "kubejs:diamond_blown_potato", "absolute");
	ControlCircuit(event, "mekaevolution:absolute_control_circuit", "ae2:fluix_pearl", "supreme");
	ControlCircuit(event, "mekaevolution:supreme_control_circuit", "mekanism:pellet_polonium", "cosmic");
	ControlCircuit(event, "mekaevolution:cosmic_control_circuit", "extendedcrafting:ender_star", "infinite");

	event.remove({ id: "javd:portal_block" });
	event.shaped(
		"javd:portal_block",
		[
			//ポータルブロック
			"AAA",
			"ABA",
			"AAA",
		],
		{
			A: "kubejs:compressed_potatos",
			B: "minecraft:ender_eye",
		}
	);

	event.remove({ id: "mekanism:digital_miner" });
	event.custom({
		//デジタルマイナー
		type: "extendedcrafting:shaped_table",
		tier: 2,
		pattern: ["ACCCA", "CDDDC", "BDIDB", "CEEEC", "AFGHA"],
		key: {
			A: "mekanism:ultimate_energy_cube",
			B: "mekanism:logistical_sorter",
			C: "kubejs:potato_ingot",
			D: "mekaevolution:absolute_control_circuit",
			E: "minecraft:iron_block",
			F: "mekanism:personal_chest",
			G: "mekanism:seismic_vibrator",
			H: "mekanism:teleporter",
			I: "mekanism:atomic_disassembler",
		},
		result: "mekanism:digital_miner",
	});
	event.remove({ id: "compactmekanismmachines:compact_fission_reactor" });
	event.custom({
		//コンパクト核分裂炉
		type: "extendedcrafting:shaped_table",
		tier: 3,
		pattern: ["AAAAAAA", "ABCCCBA", "ACFHGCA", "ACHIHCA", "ACDHECA", "ABCCCBA", "AAAAAAA"],
		key: {
			A: "mekanismgenerators:fission_reactor_casing",
			B: "mekaevolution:cosmic_control_circuit",
			C: "mekanism:radioactive_waste_barrel",
			D: "mekanismgenerators:control_rod_assembly",
			E: "mekanismgenerators:fission_fuel_assembly",
			F: "mekanismgenerators:fission_reactor_logic_adapter",
			G: "mekanismgenerators:fission_reactor_port",
			H: "mekanism:sps_casing",
			I: "mekanism:reprocessed_fissile_fragment",
		},
		result: "compactmekanismmachines:compact_fission_reactor",
	});

	event.custom({
		//反物質吹き付けポテト
		type: "extendedcrafting:shaped_table",
		tier: 2,
		pattern: ["AAAAA", "A B A", "ABCBA", "A B A", "AAAAA"],
		key: {
			A: "minecraft:potato",
			B: "mekaevolution:infinite_control_circuit",
			C: "mekanism:pellet_antimatter",
		},
		result: "kubejs:antimatter_blown_potato",
	});

	event.remove({ id: "extendedcrafting:ultimate_singularity" });
	event.recipes.extendedcrafting.shapeless_table({
		//アルティメットシンギュラリティ
		tier: 4,
		ingredients: [
			{ item: "kubejs:diamond_singularity" },
			{ item: "kubejs:emerald_singularity" },
			{ item: "kubejs:gold_singularity" },
			{ item: "kubejs:iron_singularity" },
			{ item: "kubejs:lapis_singularity" },
			{ item: "kubejs:redstone_singularity" },
			{ item: "kubejs:osmium_singularity" },
			{ item: "kubejs:coal_singularity" },
			{ item: "kubejs:copper_singularity" },
			{ item: "kubejs:steel_singularity" },
			{ item: "kubejs:tin_singularity" },
			{ item: "kubejs:uranium_singularity" },
			{ item: "kubejs:refined_obsidian_singularity" },
			{ item: "kubejs:refined_glowstone_singularity" },
			{ item: "kubejs:netherite_singularity" },
			{ item: "kubejs:lead_singularity" },
			{ item: "kubejs:bronze_singularity" },
			{ item: "kubejs:potato_singularity" },
			{ item: "kubejs:singularity_singularity" },
		],
		result: {
			item: "extendedcrafting:ultimate_singularity",
		},
	});

	//The Ultimate Nugget
	event.shapeless("extendedcrafting:the_ultimate_nugget", [
		"extendedcrafting:crystaltine_catalyst",
		"extendedcrafting:enhanced_ender_catalyst",
		"extendedcrafting:ender_catalyst",
		"extendedcrafting:redstone_catalyst",
		"extendedcrafting:elite_catalyst",
		"extendedcrafting:advanced_catalyst",
		"extendedcrafting:basic_catalyst",
		"extendedcrafting:ultimate_catalyst",
	]);

	event.shaped("solarpanels:creative_energy_tablet", ["IAI", "KMK", "IAI"], {
		A: "mekanism:pellet_antimatter",
		M: "solarpanels:photonic_energy_tablet",
		K: "mekanism:alloy_atomic",
		I: "mekaevolution:cosmic_control_circuit",
	});

	//huranium_ingot
	event.custom({
		type: "extendedcrafting:shaped_table",
		tier: 4,
		pattern: [
			"ABCDEDCBA",
			"BFGHIHGFB",
			"CGJKLKJGC",
			"DHKMNMKHD",
			"EILOPOLIE",
			"DHKQRSKHD",
			"CGJKLKJGC",
			"BFGHIHGFB",
			"ABCDEDCBA",
		],
		key: {
			A: "mekaevolution:infinite_control_circuit",
			B: "mekaevolution:cosmic_control_circuit",
			C: "extendedcrafting:the_ultimate_nugget",
			D: "extendedcrafting:the_ultimate_ingot",
			E: "extendedcrafting:the_ultimate_component",
			F: "kubejs:potato_singularity",
			G: "kubejs:antimatter_blown_potato",
			H: "kubejs:crystal_potatos",
			I: "extendedcrafting:the_ultimate_catalyst",
			J: "megacells:cell_component_16m",
			K: "solarpanels:creative_energy_tablet",
			L: "extendedcrafting:ultimate_singularity",
			M: "mekaevolution:qio_drive_absolute",
			N: "torcherino:double_compressed_torcherino",
			O: "mekaevolution:infinite_energy_cube",
			P: "kubejs:potato_ingot",
			Q: "torcherino:torcherino",
			R: "extendedcrafting:the_ultimate_block",
			S: "torcherino:compressed_torcherino",
		},
		result: "kubejs:huranium_ingot",
	});

	//シンギュラリティ作成のためのmultiblock
	event.custom({
		type: "extendedcrafting:shaped_table",
		tier: 2,
		pattern: ["AAAAA", "AABAA", "ABCBA", "AABAA", "AAAAA"],
		key: {
			A: "kubejs:potato_ingot",
			B: "ae2:cell_component_256k",
			C: "ae2:condenser",
		},
		result: "kubejs:potato_processin",
	});
});
