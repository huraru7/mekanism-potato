onEvent("recipes", (event) => {
	event.remove({ id: "mekanismtools:steel/tools/paxel" });
	event.shaped("mekanismtools:steel_paxel", ["ABC", " D ", " D "], {
		A: "mekanismtools:steel_axe",
		B: "mekanismtools:steel_pickaxe",
		C: "mekanismtools:steel_shovel",
		D: "kubejs:potato_stick",
	});

	event.remove({ id: "mekanism:energy_tablet" });
	event.shaped("mekanism:energy_tablet", ["CAC", "BDB", "CAC"], {
		A: "kubejs:potato_ingot",
		B: "mekanism:alloy_infused",
		C: "minecraft:redstone",
		D: "kubejs:gold_blown_potato",
	});

	event.remove({ id: "mekanismgenerators:generator/wind" });
	event.shaped("mekanismgenerators:wind_generator", [" D ", "DCD", "ABA"], {
		A: "mekanism:energy_tablet",
		B: "mekanism:basic_control_circuit",
		C: "mekanism:alloy_infused",
		D: "kubejs:compressed_potatos",
	});

	//mekanismのガスタンクレシピ
	function chemicaltanksRecipe(event, material, grade, tank) {
		event.remove({ id: "mekanism:chemical_tank/" + grade });
		event.shaped("mekanism:" + grade + "_chemical_tank", ["BAB", "ACA", "BAB"], {
			A: "kubejs:compressed_potatos",
			B: material,
			C: tank,
		});
	}
	chemicaltanksRecipe(event, "kubejs:redstone_blown_potato", "basic", "kubejs:osmium_blown_potato");
	chemicaltanksRecipe(event, "mekanism:alloy_infused", "advanced", "mekanism:basic_chemical_tank");
	chemicaltanksRecipe(event, "mekanism:alloy_reinforced", "elite", "mekanism:advanced_chemical_tank");
	chemicaltanksRecipe(event, "mekanism:alloy_atomic", "ultimate", "mekanism:elite_chemical_tank");

	//mekanismの液体タンクレシピ
	function fluidtanksRecipe(event, material, grade, tank) {
		event.remove({ id: "mekanism:fluid_tank/" + grade });
		event.shaped("mekanism:" + grade + "_fluid_tank", ["BAB", "ACA", "BAB"], {
			A: "kubejs:compressed_potatos",
			B: material,
			C: tank,
		});
	}
	fluidtanksRecipe(event, "mekanism:alloy_infused", "advanced", "mekanism:basic_fluid_tank");
	fluidtanksRecipe(event, "mekanism:alloy_reinforced", "elite", "mekanism:advanced_fluid_tank");
	fluidtanksRecipe(event, "mekanism:alloy_atomic", "ultimate", "mekanism:elite_fluid_tank");

	//mekanism原子分解機のレシピ
	event.remove({ id: "mekanism:atomic_disassembler" });
	event.shaped("mekanism:atomic_disassembler", ["DBD", " A ", " C "], {
		A: Item.of("minecraft:diamond_pickaxe", "{Damage:0}"),
		B: "mekanism:energy_tablet",
		C: "kubejs:potato_stick",
		D: "kubejs:potato_ingot",
	});

	//mekanismのパクセルレシピ
	event.shaped(Item.of("mekanismtools:netherite_paxel", "{Damage:0}"), ["ABC", " D ", " D "], {
		A: Item.of("minecraft:netherite_pickaxe", "{Damage:0}"),
		B: Item.of("minecraft:netherite_axe", "{Damage:0}"),
		C: Item.of("minecraft:netherite_shovel", "{Damage:0}"),
		D: "kubejs:potato_stick",
	});

	//extended craftingの黒インゴットレシピ
	event.remove({ id: "extendedcrafting:black_iron_ingot" });
	event.shapeless("extendedcrafting:black_iron_ingot", ["kubejs:potato_ingot", "minecraft:black_dye"]);

	//同位体遠心分離機
	event.remove({ id: "mekanism:isotopic_centrifuge" });
	event.shaped("mekanism:isotopic_centrifuge", ["AAA", "BCB", "AAA"], {
		A: "kubejs:potato_ingot",
		B: "mekanism:ultimate_control_circuit",
		C: "mekanism:elite_chemical_tank",
	});

	//パン
	event.remove({ id: "minecraft:bread" });
	event.shaped("minecraft:bread", ["   ", "AAA", "   "], {
		A: "minecraft:potato",
	});

	//レーザー増幅器
	event.remove({ id: "mekanism:laser_amplifier" });
	event.shaped("mekanism:laser_amplifier", ["AAA", "ABC", "AAA"], {
		A: "kubejs:potato_ingot",
		B: "mekanism:ultimate_energy_cube",
		C: "kubejs:diamond_blown_potato",
	});

	//浄化室
	event.remove({ id: "mekanism:purification_chamber" });
	event.shaped("mekanism:purification_chamber", ["ABA", "CDC", "ABA"], {
		A: "mekanism:alloy_infused",
		B: "mekanism:advanced_control_circuit",
		C: "kubejs:osmium_blown_potato",
		D: "mekanism:enrichment_chamber",
	});
});
