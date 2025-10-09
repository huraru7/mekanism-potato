onEvent("item.registry", (event) => {
	event
		.create("kubejs:diamond_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#33FFFF")
		.color(1, "#00ffff");
	event
		.create("kubejs:emerald_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#7fff00")
		.color(1, "#00ff00");
	event
		.create("kubejs:gold_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#ffd700")
		.color(1, "#ffff00");
	event
		.create("kubejs:iron_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#d3d3d3")
		.color(1, "#f5f5f5");
	event
		.create("kubejs:lapis_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#0000ff")
		.color(1, "#1e90ff");
	event
		.create("kubejs:redstone_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#dc143c")
		.color(1, "#ff0000");
	event
		.create("kubejs:osmium_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#40e0d0")
		.color(1, "#87ceeb");
	event
		.create("kubejs:coal_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#696969")
		.color(1, "#808080");
	event
		.create("kubejs:copper_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#ff8c00")
		.color(1, "#daa520");
	event
		.create("kubejs:steel_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#b8b6b4")
		.color(1, "#3e3e3e");
	event.create("kubejs:tin_singularity").textureJson({
		layer0: "kubejs:item/singularity",
		layer1: "kubejs:item/singularity_overlay",
	});
	event
		.create("kubejs:uranium_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#6b8e23")
		.color(1, "#98fb98");
	event
		.create("kubejs:refined_obsidian_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#4e3f6a")
		.color(1, "#c09fbf");
	event
		.create("kubejs:refined_glowstone_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#ffe86d")
		.color(1, "#fff9e2");
	event
		.create("kubejs:netherite_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#080707ff")
		.color(1, "#737173");
	event
		.create("kubejs:lead_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#a8b8b5")
		.color(1, "#e1f1ee");
	event
		.create("kubejs:bronze_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#b36f4b")
		.color(1, "#ffe2a2");
	event
		.create("kubejs:potato_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#d9aa51")
		.color(1, "#d9aa51");
	event
		.create("kubejs:singularity_singularity")
		.textureJson({
			layer0: "kubejs:item/singularity",
			layer1: "kubejs:item/singularity_overlay",
		})
		.color(0, "#65BBE9")
		.color(1, "#65BBE9");
});
onEvent("mekanism.gas.registry", (event) => {
	event.create("kubejs:diamond_blown_potato_gas").color(0x4169e1);
	event.create("kubejs:emerald_blown_potato_gas").color(0x7fff00);
	event.create("kubejs:gold_blown_potato_gas").color(0xffd700);
	event.create("kubejs:iron_blown_potato_gas").color(0xd3d3d3);
	event.create("kubejs:lapis_blown_potato_gas").color(0x0000ff);
	event.create("kubejs:redstone_blown_potato_gas").color(0xdc143c);
	event.create("kubejs:osmium_blown_potato_gas").color(0x40e0d0);
	event.create("kubejs:coal_blown_potato_gas").color(0x696969);
	event.create("kubejs:copper_blown_potato_gas").color(0xff8c00);
	event.create("kubejs:steel_blown_potato_gas").color(0xb8b6b4);
	event.create("kubejs:tin_blown_potato_gas").color(0x000000);
	event.create("kubejs:uranium_blown_potato_gas").color(0x6b8e23);
	event.create("kubejs:refined_obsidian_blown_potato_gas").color(0x4e3f6a);
	event.create("kubejs:refined_glowstone_blown_potato_gas").color(0xffe86d);
	event.create("kubejs:netherite_blown_potato_gas").color(0x111111);
	event.create("kubejs:lead_blown_potato_gas").color(0xa8b8b5);
	event.create("kubejs:bronze_blown_potato_gas").color(0xb36f4b);
});
