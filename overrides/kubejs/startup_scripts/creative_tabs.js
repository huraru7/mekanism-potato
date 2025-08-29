onEvent("creative_mode_tab", (event) => {
	event.create("kubejs.my_items", (tab) => {
		tab.icon("kubejs:huranium_ingot");
		tab.displayName("My Custom Items");
		tab.addItems(["kubejs:huranium_ingot", "kubejs:compressed_potatos"]);
	});
});
