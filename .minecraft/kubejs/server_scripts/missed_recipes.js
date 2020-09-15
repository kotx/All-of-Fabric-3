events.listen("recipes", function (event) {

event.recipes.minecraft.blasting(item.of('appliedenergistics2:silicon', 4), 'appliedenergistics2:certus_quartz_dust')

event.shaped(item.of('rgbable:rgb_block', 1), [
    'GGG',
    'GDG',
    'GGG'
  ], {
    G: 'minecraft:gravel',
	D: 'minecraft:white_dye'
  })
event.shaped(item.of('byg:ebony_bookshelf', 1), [
    'EEE',
    'BBB',
    'EEE'
  ], {
    E: 'byg:ebony_planks',
    B: 'minecraft:book'
  })
 /*
  // Pine Slab
  event.shaped(item.of("woods_and_mires:pine_slab", 6), [
    ["woods_and_mires:pine_planks", "woods_and_mires:pine_planks", "woods_and_mires:pine_planks"],
  ]);
  */
});
