events.listen("recipes", function (event) {


  // Heart of the Sky
  event.remove({ output: "winged:heart_of_the_sky" });


  // Angel Ring
  event.remove({ output: "kibe:angel_ring" });
  event.shaped(item.of("kibe:angel_ring"), [
    ["dml-refabricated:glitch_ingot", "astromine:univite_block",         "dml-refabricated:glitch_ingot"],
    ["minecraft:elytra",              "techreborn:interdimensional_su",  "minecraft:elytra"],
    ["winged:booster_empty",          "iron-jetpacks:netherite_jetpack", "winged:booster_empty"],
  ]);


  // Boosters
  event.remove({ output: "winged:booster_empty" });
  event.shaped(item.of("winged:booster_empty"), [
    ["techreborn:titanium_plate", "techreborn:titanium_plate",         "techreborn:titanium_plate"],
    ["techreborn:titanium_plate", "techreborn:superconductor_upgrade", "techreborn:titanium_plate"],
    ["techreborn:titanium_plate", "techreborn:superconductor_upgrade", "techreborn:titanium_plate"],
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


    // Quantum Suit
  event.remove({ output: "techreborn:quantum_helmet" });
  event.shaped(item.of("techreborn:quantum_helmet"), [
    ["techreborn:data_storage_chip", "techreborn:lapotronic_orb", "techreborn:data_storage_chip"],
    ["winged:booster_empty",         null,                        "winged:booster_empty"],
    [null,                           null,                        null],
  ]);

  event.remove({ output: "techreborn:quantum_chestplate" });
  event.shaped(item.of("techreborn:quantum_chestplate"), [
    ["techreborn:tungstensteel_plate",  null,                                   "techreborn:tungstensteel_plate"],
    ["techreborn:superconductor_cable", "kibe:angel_ring",                      "techreborn:superconductor_cable"],
    ["techreborn:data_storage_chip",    "techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
  ]);

  event.remove({ output: "techreborn:quantum_leggings" });
  event.shaped(item.of("techreborn:quantum_leggings"), [
    ["techreborn:data_storage_chip",   "techreborn:lapotronic_orb", "techreborn:data_storage_chip"],
    ["winged:booster_empty",           null,                        "winged:booster_empty"],
    ["techreborn:tungstensteel_plate", null,                        "techreborn:tungstensteel_plate"],
  ]);

  event.remove({ output: "techreborn:quantum_boots" });
  event.shaped(item.of("techreborn:quantum_boots"), [
    ["techreborn:lapotronic_orb",    null, "techreborn:lapotronic_orb"],
    ["techreborn:data_storage_chip", null, "techreborn:data_storage_chip"],
    ["winged:booster_empty",         null, "winged:booster_empty"],
  ]);


  // Solar Panels
  event.remove({ id: "techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/industrial_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
  event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });


  // Metals
  event.remove({ id: "indrev:shapeless/steel_dust" });
});
