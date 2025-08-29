onEvent("recipes", (event) => {
	event.shapeless("3x minecraft:bone_meal", ["4x #minecraft:saplings"]);

	event.shapeless("2x minecraft:black_dye", ["3x #minecraft:saplings", "#minecraft:coals"]);

	event.shapeless("2x minecraft:ender_pearl", ["2x kubejs:redstone_blown_potato", "ae2:ender_dust"]);

	event.shapeless("3x minecraft:string", ["ae2:silicon"]);

	event.shapeless("minecraft:gunpowder", ["2x kubejs:compressed_potatos", "3x mekanism:dust_charcoal"]);

	event.shapeless("minecraft:ink_sac", ["kubejs:compressed_potatos", "minecraft:slime_ball"]);

	event.shapeless("minecraft:slime_ball", ["minecraft:emerald", "minecraft:clay_ball"]);

	event.shapeless("minecraft:nether_star", ["minecraft:netherite_ingot", "kubejs:singularity_singularity"]);
});
