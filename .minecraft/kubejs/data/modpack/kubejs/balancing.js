events.listen("recipes", function (event) {

  // Heart of the Sky
  event.remove({ output: "winged:heart_of_the_sky" });

  // Angel Ring
  event.remove({ output: "kibe:angel_ring" });
  event.shaped(item.of("kibe:angel_ring"), [
    ["dml-refabricated:glitch_ingot",  "astromine:univite_block",         "dml-refabricated:glitch_ingot"],
    ["techreborn:quantum_solar_panel", "kibe:diamond_ring",               "techreborn:quantum_solar_panel"],
    ["minecraft:elytra",               "iron-jetpacks:netherite_jetpack", "minecraft:elytra"],
  ]);

  // Boosters
  event.remove({ output: "winged:booster_empty" });
  event.shaped(item.of("winged:booster_empty"), [
    ["techreborn:tungstensteel_plate", "techreborn:steel_ingot", "techreborn:tungstensteel_plate"],
    ["techreborn:steel_ingot",         "techreborn:cell",        "techreborn:steel_ingot"],
    ["techreborn:steel_ingot",         "techreborn:cell",        "techreborn:steel_ingot"],
  ]);

  // Rocket Aglet
  event.remove({ output: "bunchotrinkets:rocket_aglet" });
  event.shaped(item.of("bunchotrinkets:rocket_aglet"), [
    ["techreborn:tungstensteel_plate", "techreborn:mixed_metal_ingot",     "techreborn:tungstensteel_plate"],
    ["minecraft:firework_rocket",      "blockus:legacy_nether_reactor_core", "minecraft:firework_rocket"],
    ["techreborn:tungstensteel_plate", "techreborn:mixed_metal_ingot",     "techreborn:tungstensteel_plate"],
  ]);

  // Solar Panels
  event.remove({ id: "techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/industrial_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
});
