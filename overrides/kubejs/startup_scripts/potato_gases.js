onEvent("mekanism.gas.registry", (event) => {
	event.create("kubejs:potato_gas").fuel(80, 5000).color(0xd9aa51);
	event.create("kubejs:compressed_potato_gas").fuel(80, 45000).color(0x6d3701);
});
