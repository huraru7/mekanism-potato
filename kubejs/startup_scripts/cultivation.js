// onEvent("block.registry", (event) => {
// 	event
// 		.create("testcrop", "crop")
// 		.displayName("Test Crop")
// 		// 成長段階
// 		.age(7, (builder) => {
// 			builder.box(0, 0, 0, 16, 2, 16).box(0, 0, 0, 16, 8, 16).box(0, 0, 0, 16, 12, 16).box(0, 0, 0, 16, 16, 16);
// 		})
// 		.texture(0, "kubejs:block/test_crop_0")
// 		.texture(1, "kubejs:block/test_crop_1")
// 		.texture(2, "kubejs:block/test_crop_2")
// 		.texture(3, "kubejs:block/test_crop_3")

// 		// 植えられるアイテムを指定
// 		.placeBlock("kubejs:testcrop", "kubejs:coal_blown_potato")
// 		// 収穫時のドロップを設定（増殖可能）
// 		.crop("kubejs:coal_blown_potato", 1, 3); // 1～3個ドロップ
// });
