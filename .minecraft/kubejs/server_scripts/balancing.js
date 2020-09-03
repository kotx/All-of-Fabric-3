events.listen("recipes", function (event) {

  // Heart of the Sky
  event.remove({ output: "winged:heart_of_the_sky" });

  // Angel Ring
  event.remove({ output: "kibe:angel_ring" });
  event.shaped(item.of("kibe:angel_ring"), [
    ["dml-refabricated:glitch_ingot",  "astromine:univite_block",         "dml-refabricated:glitch_ingot"],
    ["minecraft:elytra",               "kibe:diamond_ring",               "minecraft:elytra"],
    ["techreborn:quantum_solar_panel", "iron-jetpacks:netherite_jetpack", "techreborn:quantum_solar_panel"],
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
    ["astromine:stellum_plate", "astromine:stellum_ingot",     "astromine:stellum_plate"],
    ["minecraft:firework_rocket",      "blockus:legacy_nether_reactor_core", "minecraft:firework_rocket"],
    ["astromine:stellum_plate", "astromine:stellum_ingot",     "astromine:stellum_plate"],
  ]);

  // Altar
  event.shaped(item.of("astromine:altar"), [
    ["techreborn:tungstensteel_storage_block", "techreborn:tungstensteel_storage_block", "techreborn:tungstensteel_storage_block"],
    ["astromine:galaxium_block",               "techreborn:lead_storage_block",          "astromine:galaxium_block"],
    ["techreborn:tungstensteel_storage_block", "techreborn:tungstensteel_storage_block", "techreborn:tungstensteel_storage_block"],
  ]);

   // Altar Pedestal
   event.shaped(item.of("astromine:altar_pedestal"), [
     ["techreborn:tungstensteel_plate", "techreborn:tungstensteel_plate", "techreborn:tungstensteel_plate"],
     ["astromine:galaxium",             "techreborn:lead_plate",          "astromine:galaxium"],
     ["techreborn:tungstensteel_plate", "techreborn:tungstensteel_plate", "techreborn:tungstensteel_plate"],
   ]);

  // Solar Panels
  event.remove({ id: "techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/industrial_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });

  // Metals
  event.remove({ id: "indrev:shapeless/steel_dust" });
});
