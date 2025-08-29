onEvent("recipes", (event) => {
	event.custom({
		type: "mekanism:reaction",
		itemInput: { ingredient: { item: "kubejs:huranium_ingot" } },
		fluidInput: { amount: 10000, fluid: "mekanismgenerators:fusion_fuel" },
		gasInput: { amount: 10000, gas: "kubejs:compressed_potato_gas" },
		energyRequired: 1000000000,
		duration: 1200,
		itemOutput: { item: "kubejs:huranium_ingot", count: 2 },
	});

	event.custom({
		type: "mekanism:reaction",
		itemInput: { ingredient: { item: "mekanism:pellet_antimatter" } },
		fluidInput: { amount: 10000, fluid: "mekanismgenerators:fusion_fuel" },
		gasInput: { amount: 10000, gas: "kubejs:compressed_potato_gas" },
		energyRequired: 1000000000,
		duration: 1200,
		itemOutput: { item: "mekanism:pellet_antimatter", count: 2 },
	});

	event.custom({
		type: "mekanism:reaction",
		itemInput: {
			ingredient: { item: "extendedcrafting:ultimate_singularity" },
		},
		fluidInput: { amount: 10000, fluid: "mekanismgenerators:fusion_fuel" },
		gasInput: { amount: 10000, gas: "kubejs:compressed_potato_gas" },
		energyRequired: 1000000000,
		duration: 1200,
		itemOutput: { item: "extendedcrafting:ultimate_singularity", count: 2 },
	});

	event.custom({
		//テスト
		type: "extendedcrafting:shaped_table",
		tier: 2,
		pattern: ["AABAA", "ACDEA", "BFGHB", "AIJKA", "AABAA"],
		key: {
			A: "mekaevolution:infinite_control_circuit",
			B: "kubejs:huranium_ingot",
			C: "mekanismgenerators:gas_burning_generator",
			D: "solarpanels:photonic_solar_panel",
			E: "mekanismgenerators:heat_generator",
			F: "fluxnetworks:gargantuan_flux_storage",
			G: Item.of("mekaevolution:infinite_energy_cube", '{mekData:{EnergyContainers:[{Container:0b,stored:"65536000000"}]}}'),
			H: "megacells:cell_component_256m",
			I: "compactmekanismmachines:compressed_wind_generator_x532480",
			J: "compactmekanismmachines:compact_fission_reactor",
			K: "mekanismgenerators:advanced_solar_generator",
		},
		result: Item.of(
			"mekanism:creative_energy_cube",
			'{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'
		),
	});

	event.custom({
		//クリエイティブビン
		type: "extendedcrafting:shaped_table",
		tier: 4,
		pattern: [
			"ABCDDDCBA",
			"BEBFFFBEB",
			"CBADDDABC",
			"DFDGHGDFD",
			"DFDHIHDFD",
			"DFDGHGDFD",
			"CBADDDABC",
			"BEBFFFBEB",
			"ABCDDDCBA",
		],
		key: {
			A: "extendedcrafting:ultimate_singularity",
			B: "kubejs:potato_ingot",
			C: "kubejs:huranium_ingot",
			D: "extendedcrafting:the_ultimate_ingot",
			E: "mekaevolution:infinite_control_circuit",
			F: "kubejs:antimatter_blown_potato",
			G: "extendedcrafting:the_ultimate_catalyst",
			H: "mekaevolution:qio_drive_infinite",
			I: "mekanism:ultimate_bin",
		},
		result: "mekanism:creative_bin",
	});

	event.custom({
		//クリエイティブセル
		type: "extendedcrafting:shaped_table",
		tier: 4,
		pattern: [
			"ABBCDCBBA",
			"EFGHIJKFE",
			"EGALMLAKE",
			"NOLPQRLSN",
			"DTUVWXYZD",
			"NaLbcdLeN",
			"EfALgLAhE",
			"EFfijkhFE",
			"ABBCDCBBA",
		],
		key: {
			A: "kubejs:huranium_ingot",
			B: "extendedcrafting:the_ultimate_block",
			C: "kubejs:potato_ingot",
			D: "kubejs:compressed_potatos",
			E: "extendedcrafting:ender_star_block",
			F: "kubejs:potato_stick",
			G: "ironchest:obsidian_chest",
			H: "mekanism:creative_bin",
			I: "extendedcrafting:ultimate_auto_table",
			J: Item.of(
				"mekanism:creative_energy_cube",
				'{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'
			),
			K: "megacells:mega_crafting_monitor",
			L: "extendedcrafting:ultimate_singularity",
			M: "kubejs:antimatter_blown_potato",
			N: "kubejs:crystal_potatos",
			O: "fluxnetworks:gargantuan_flux_storage",
			P: "megacells:chemical_storage_cell_256m",
			Q: "ae2_mega_things:chemical_disk_drive_256m",
			R: "ae2_mega_things:item_disk_drive_256m",
			S: "mekaevolution:infinite_logistical_transporter",
			T: "mekanism:module_gravitational_modulating_unit",
			U: "mekaevolution:infinite_control_circuit",
			V: "megacells:portable_item_cell_256m",
			W: "megacells:item_storage_cell_256m",
			X: "ae2_mega_things:fluid_disk_drive_256m",
			Y: "extendedcrafting:the_ultimate_catalyst",
			Z: "mekaevolution:qio_drive_infinite",
			a: "mekanism:digital_miner",
			b: "megacells:portable_fluid_cell_256m",
			c: "megacells:fluid_storage_cell_256m",
			d: "megacells:portable_chemical_cell_256m",
			e: "mekaevolution:infinite_energy_cube",
			f: "megacells:mega_crafting_accelerator",
			g: "extendedcrafting:the_ultimate_ingot",
			h: "megacells:256m_crafting_storage",
			i: "compactmekanismmachines:compressed_wind_generator_x532480",
			j: "torcherino:double_compressed_torcherino",
			k: "compactmekanismmachines:compact_fission_reactor",
		},
		result: "ae2:creative_item_cell",
	});
	event.shapeless("ae2:creative_fluid_cell", ["ae2:creative_item_cell", "ae2:fluid_cell_housing"]);
	event.shapeless("appmek:creative_chemical_cell", ["ae2:creative_item_cell", "appmek:chemical_cell_housing"]);

	event.custom({
		//クリエイティブタンク
		type: "extendedcrafting:shaped_table",
		tier: 4,
		pattern: [
			"ABBBCBBBA",
			"BDEFGFEDB",
			"BHBIIIBHB",
			"BEBJKJBEB",
			"CGBELEBGC",
			"BEBJMJBEB",
			"BDBIIIBDB",
			"BHEFGFEHB",
			"ABBBCBBBA",
		],
		key: {
			A: "extendedcrafting:the_ultimate_ingot",
			B: "kubejs:potato_ingot",
			C: "mekaevolution:infinite_control_circuit",
			D: "mekanism:ultimate_energy_cube",
			E: "kubejs:antimatter_blown_potato",
			F: "kubejs:potato_singularity",
			G: "extendedcrafting:ultimate_singularity",
			H: "mekanism:supercharged_coil",
			I: "kubejs:huranium_ingot",
			J: "appmek:chemical_storage_cell_256k",
			K: "mekanism:electric_pump",
			L: "mekanism:ultimate_fluid_tank",
			M: "mekanism:fluidic_plenisher",
		},
		result: "mekanism:creative_fluid_tank",
	});

	event.custom({
		type: "extendedcrafting:shaped_table",
		tier: 4,
		pattern: [
			"ABBBCBBBA",
			"BDEFGFEDB",
			"BHBIIIBHB",
			"BEBJKJBEB",
			"CGBELEBGC",
			"BEBJMJBEB",
			"BDBIIIBDB",
			"BHEFGFEHB",
			"ABBBCBBBA",
		],
		key: {
			A: "extendedcrafting:the_ultimate_ingot",
			B: "kubejs:potato_ingot",
			C: "mekaevolution:infinite_control_circuit",
			D: "mekanism:ultimate_energy_cube",
			E: "kubejs:antimatter_blown_potato",
			F: "kubejs:potato_singularity",
			G: "extendedcrafting:ultimate_singularity",
			H: "mekanism:supercharged_coil",
			I: "kubejs:huranium_ingot",
			J: "appmek:chemical_storage_cell_256k",
			K: "mekaevolution:infinite_mechanical_pipe",
			L: "mekanism:ultimate_chemical_tank",
			M: "mekanism:isotopic_centrifuge",
		},
		result: "mekanism:creative_chemical_tank",
	});
});
