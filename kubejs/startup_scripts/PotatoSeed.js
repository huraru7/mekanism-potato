function BlownPotatoSeeds(event, name) {
	event
		.create(`${name}_blown_potato`, "crop")
		.crop(`kubejs:${name}_blown_potato`)
		.displayName(`${name} blown potato`)
		.age(4, (builder) => {
			//event.create('作る作物のID','crop（固定）').crop('収穫した時に出るアイテムのID').displayneme('表示名').age（成長段階の数）
			builder
				.shape(0, 0, 0, 0, 16, 2, 16) //成長段階,未検証x,未検証y,未検証z,当たり判定x,当たり判定y,当たり判定z
				.shape(1, 0, 0, 0, 16, 6, 16)
				.shape(2, 0, 0, 0, 16, 10, 16)
				.shape(3, 0, 0, 0, 16, 14, 16);
		})
		.texture(0, "kubejs:block/test_crop_0")
		.texture(1, "kubejs:block/test_crop_1")
		.texture(2, "kubejs:block/test_crop_2")
		.texture(3, "kubejs:block/test_crop_3")
		.item((seedItem) => {
			seedItem.texture("kubejs:item/test"); //種のテクスチャ
		});
}

onEvent("block.registry", (event) => {
	BlownPotatoSeeds(event, "coal");
});
