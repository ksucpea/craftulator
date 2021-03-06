const original = document.querySelector('.steps').innerHTML;
const original2 = document.querySelector('.totals').innerHTML;
const button = document.querySelector('#craft');
let selectblock = document.getElementsByName('block');
button.onclick = function() {
    for (w = 0; w < selectblock.length; w++) {
        if (selectblock[w].checked) {
            item = selectblock[w].value;
            break;
        }
    }
    let number = document.querySelector('#numero').value;
    var stackenabled = document.querySelector('#stacks').checked;
    if (stackenabled == true) {
        number = number * 64;
    }
    document.querySelector('.steps').innerHTML = original;
    totals = [];
    let output = eval(item);
    let step = createNewStep(output.Level);
    newCraft(item, number, step);
};
document.querySelector('body').addEventListener('mouseup', function(e) {
    if (e.target.id == 'blocksearch' || e.target.id != 'blocktype' && document.querySelector('#blocktype').classList.contains('closed') == false) {
        document.querySelector('#blocktype').classList.toggle('closed');
    }
});
document.querySelector('#blocktype').addEventListener('change', function() {
    document.querySelector('.blocksearcher input').value = event.target.value;
});


var log = {Level: 0, Name: 'Log'};
var sand = {Level: 0, Name: 'Sand'};
var redstone = {Level: 0, Name: 'Redstone'};
var dirt = {Level: 0, Name: 'Dirt'};
var gravel = {Level: 0, Name: 'Gravel'};
var cobblestone = {Level: 0, Name: 'Cobblestone'};
var iron_ore = {Level: 0, Name: 'Iron Ore'};
var gold_ore = {Level: 0, Name: 'Gold Ore'};
var coal = {Level: 0, Name: 'Coal'};
var diamond = {Level: 0, Name: 'Diamond'};
var string = {Level: 0, Name: 'String'};
var slimeball = {Level: 0, Name: 'Slimeball'};
var wool = {Level: 0, Name: 'Wool'};
var gunpowder = {Level: 0, Name: 'Gunpowder'};
var ink_sac = {Level: 0, Name: 'Ink Sac'};
var leather = {Level: 0, Name: 'Leather'};
var sugarcane = {Level: 0, Name: 'Sugarcane'};
var clay = {Level: 0, Name: 'Clay'};
var obsidian = {Level: 0, Name: 'Obsidian'};
var glowstone_dust = {Level: 0, Name: 'Glowstone Dust'};
var nether_star = {Level: 0, Name: 'Nether Star'};
var nether_quartz = {Level: 0, Name: 'Nether Quartz'};
var bone = {Level: 0, Name: 'Bone'};
var poppy = {Level: 0, Name: 'Poppy'};
var dandelion = {Level: 0, Name: 'Dandelion'};
var cactus = {Level: 0, Name: 'Cactus'};
var lapis_lazuli = {Level: 0, Name: 'Lapis Lazuli'};
var cocoa_beans = {Level: 0, Name: 'Cocoa Beans'};
var feather = {Level: 0, Name: 'Feather'};
var flint = {Level: 0, Name: 'Flint'};

var sandstone = {Level: 1, Name: 'Sandstone', Output: 1, Components: 1, Comp1: sand, HowManyComp1: 4, Recipe:[1,1,0,1,1,0,0,0,0]};
var glass = {Level: 1, Name: 'Glass', Output: 1, Components: 1, Comp1: sand, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0], Furnace: true};
var gold_ingot = {Level: 1, Name: 'Gold Ingot', Output: 1, Components: 1, Comp1: gold_ore, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0], Furnace: true};
var iron_ingot = {Level: 1, Name: 'Iron Ingot', Output: 1, Components: 1, Comp1: iron_ore, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0], Furnace: true};
var coarse_dirt = {Level: 1, Name: 'Coarse Dirt', Output: 1, Components: 2, Comp1: gravel, HowManyComp1: 2, Comp2: dirt, HowManyComp2: 2, Recipe: [1,2,0,2,1,0,0,0,0]};
var furnace = {Level: 1, Name: 'Furnace', Output: 1, Components: 1, Comp1: cobblestone, HowManyComp1: 8, Recipe:[1,1,1,1,0,1,1,1,1]};
var stone = {Level: 1, Name: 'Stone', Output: 1, Components: 1, Comp1: cobblestone, HowManyComp1: 1, Recipe:[1,0,0,0,0,0,0,0,0], Furnace: true};
var wood_plank = {Level: 1, Name: 'Wood Plank', Output: 4, Components: 1, Comp1: log, HowManyComp1: 1, Recipe:[1,0,0,0,0,0,0,0,0]};
var wool_craftable = {Level: 1, Name: 'Wool', Output: 1, Components: 1, Comp1: string, HowManyComp1: 4, Recipe: [1,1,0,1,1,0,0,0,0]};
var cobblestone_slab = {Level: 1, Name: 'Cobblestone Slab', Output: 6, Components: 1, Comp1: cobblestone, HowManyComp1: 3, Recipe: [1,1,1,0,0,0,0,0,0]};
var tnt = {Level: 1, Name: 'TNT', Output: 1, Components: 2, Comp1: sand, HowManyComp1: 4, Comp2: gunpowder, HowManyComp2: 5, Recipe: [2,1,2,1,2,1,2,1,2]};
var paper = {Level: 1, Name: 'Paper', Output: 3, Components: 1, Comp1: sugarcane, HowManyComp1: 3, Recipe: [1,1,1,0,0,0,0,0,0]};
var brick = {Level: 1, Name: 'Brick', Output: 1, Components: 1, Comp1: clay, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0], Furnace: true};
var glowstone = {Level: 1, Name: 'Glowstone', Output: 1, Components: 1, Comp1: glowstone_dust, HowManyComp1: 4, Recipe: [1,1,0,1,1,0,0,0,0]};
var lead = {Level: 1, Name: 'Lead', Output: 2, Components: 2, Comp1: string, HowManyComp1: 4, Comp2: slimeball, HowManyComp2: 1, Recipe: [1,1,0,1,2,0,0,0,1]};
var observer = {Level: 1, Name: 'Observer', Output: 1, Components: 3, Comp1: cobblestone, HowManyComp1: 6, Comp2: redstone, HowManyComp2: 2, Comp3: nether_quartz, HowManyComp3: 1, Recipe: [1,1,1,2,2,3,1,1,1]};
var bone_meal = {Level: 1, Name: 'Bone Meal', Output: 3, Components: 1, Comp1: bone, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0]};
var black_dye = {Level: 1, Name: 'Black Dye', Output: 1, Components: 1, Comp1: ink_sac, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0]};
var red_dye = {Level: 1, Name: 'Red Dye', Output: 1, Components: 1, Comp1: poppy, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0]};
var yellow_dye = {Level: 1, Name: 'Yellow Dye', Output: 1, Components: 1, Comp1: dandelion, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0]};
var green_dye = {Level: 1, Name: 'Green Dye', Output: 1, Components: 1, Comp1: cactus, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0], Furnace: true};
var blue_dye = {Level: 1, Name: 'Blue Dye', Output: 1, Components: 1, Comp1: lapis_lazuli, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0]};
var brown_dye = {Level: 1, Name: 'Brown Dye', Output: 1, Components: 1, Comp1: cocoa_beans, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0]};

var stone_pressure_plate = {Level: 2, Name: 'Stone Pressure Plate', Output: 1, Components: 1, Comp1: stone, HowManyComp1: 2, Recipe:[1,1,0,0,0,0,0,0,0]};
var wood_slab = {Level: 2, Name: 'Wood Slab', Output: 6, Components: 1, Comp1: wood_plank, HowManyComp1: 3, Recipe: [1,1,1,0,0,0,0,0,0]};
var sandstone_slab = {Level: 2, Name: 'Sandstone Slab', Output: 6, Components: 1, Comp1: sandstone, HowManyComp1: 3, Recipe: [1,1,1,0,0,0,0,0,0]};
var stick = {Level: 2, Name: 'Stick', Output: 4, Components: 1, Comp1: wood_plank, HowManyComp1: 2, Recipe: [1,0,0,1,0,0,0,0,0]};
var note_block = {Level: 2, Name: 'Note Block', Output: 1, Components: 2, Comp1: wood_plank, HowManyComp1: 8, Comp2: redstone, HowManyComp2: 1, Recipe:[1,1,1,1,2,1,1,1,1]};
var piston = {Level: 2, Name: 'Piston', Output: 1, Components: 4, Comp1: wood_plank, HowManyComp1: 3, Comp2: iron_ingot, HowManyComp2: 1, Comp3: cobblestone, HowManyComp3: 4, Comp4: redstone, HowManyComp4: 1, Recipe:[1,1,1,3,2,3,3,4,3]};
var block_of_gold = {Level: 2, Name: 'Block of Gold', Output: 1, Components: 1, Comp1: gold_ingot, HowManyComp1: 9, Recipe: [1,1,1,1,1,1,1,1,1]};
var block_of_iron = {Level: 2, Name: 'Block of Iron', Output: 1, Components: 1, Comp1: iron_ingot, HowManyComp1: 9, Recipe: [1,1,1,1,1,1,1,1,1]};
var block_of_diamond = {Level: 2, Name: 'Block of Diamond', Output: 1, Components: 1, Comp1: diamond, HowManyComp1: 9, Recipe: [1,1,1,1,1,1,1,1,1]};
var book = {Level: 2, Name: 'Book', Output: 1, Components: 2, Comp1: paper, HowManyComp1: 3, Comp2: leather, HowManyComp2: 1, Recipe: [1,1,1,2,0,0,0,0,0]};
var bricks = {Level: 2, Name: 'Bricks', Output: 1, Components: 1, Comp1: brick, HowManyComp1: 4, Recipe: [1,1,0,1,1,0,0,0,0]};
var chest = {Level: 2, Name: 'Chest', Output: 1, Components: 1, Comp1: wood_plank, HowManyComp1: 8, Recipe: [1,1,1,1,0,1,1,1,1]};
var crafting_table = {Level: 2, Name: 'Crafting Table', Output: 1, Components: 1, Comp1: wood_plank, HowManyComp1: 4, Recipe: [1,1,0,1,1,0,0,0,0]};
var wood_stair = {Level: 2, Name: 'Wood Stair', Output: 4, Components: 1, Comp1: wood_plank, HowManyComp1: 6, Recipe: [1,0,0,1,1,0,1,1,1]};
var redstone_lamp = {Level: 2, Name: 'Redstone :amp', Output: 1, Components: 2, Comp1: glowstone, HowManyComp1: 1, Comp2: redstone, HowManyComp2: 4, Recipe: [0,2,0,2,1,2,0,2,0]};
var beacon = {Level: 2, Name: 'Beacon', Output: 1, Components: 3, Comp1: glass, HowManyComp1: 5, Comp2: obsidian, HowManyComp2: 3, Comp3: nether_star, HowManyComp3: 1, Recipe: [1,1,1,1,3,1,2,2,2]};
var bed = {Level: 2, Name: 'Bed', Output: 1, Components: 2, Comp1: wood_plank, HowManyComp1: 3, Comp2: wool, HowManyComp2: 3, Recipe: [2,2,2,1,1,1,0,0,0]};
var stone_slab = {Level: 2, Name: 'Stone Slab', Output: 6, Components: 1, Comp1: stone, HowManyComp1: 3, Recipe: [1,1,1,0,0,0,0,0,0]};
var minecart = {Level: 2, Name: 'Minecart', Output: 1, Components: 1, Comp1: iron_ingot, HowManyComp1: 5, Recipe: [1,0,1,1,1,1,0,0,0]};
var firework_rocket = {Level: 2, Name: 'Firework Rocket', Output: 3, Components: 2, Comp1: paper, HowManyComp1: 1, Comp2: gunpowder, HowManyComp2: 1, Recipe: [1,2,0,0,0,0,0,0,0]};
var shield = {Level: 2, Name: 'Shield', Output: 1, Components: 2, Comp1: wood_plank, HowManyComp1: 5, Comp2: iron_ingot, HowManyComp2: 1, Recipe: [1,2,1,1,1,1,0,1,0]};
var boat = {Level: 2, Name: 'Boat', Output: 1, Components: 1, Comp1: wood_plank, HowManyComp1: 5, Recipe: [1,0,1,1,1,1,0,0,0]};
var iron_nugget = {Level: 2, Name: 'Iron Nugget', Output: 9, Components: 1, Comp1: iron_ingot, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0]};
var water_bottle = {Level: 2, Name: 'Water Bottle', Output: 3, Components: 1, Comp1: glass, HowManyComp1: 3, Recipe: [1,0,1,0,1,0,0,0,0]};
var white_dye = {Level: 2, Name: 'White Dye', Output: 1, Components: 1, Comp1: bone_meal, HowManyComp1: 1, Recipe: [1,0,0,0,0,0,0,0,0]};
var orange_dye = {Level: 2, Name: 'Orange Dye', Output: 2, Components: 2, Comp1: red_dye, HowManyComp1: 1, Comp2: yellow_dye, HowManyComp2: 1, Recipe: [1,2,0,0,0,0,0,0,0]};
var cyan_dye = {Level: 2, Name: 'Cyan Dye', Output: 2, Components: 2, Comp1: blue_dye, HowManyComp1: 1, Comp2: green_dye, HowManyComp2: 1, Recipe: [1,2,0,0,0,0,0,0,0]};
var purple_dye = {Level: 2, Name: 'Purple Dye', Output: 2, Components: 2, Comp1: blue_dye, HowManyComp1: 1, Comp2: red_dye, HowManyComp2: 1, Recipe: [1,2,0,0,0,0,0,0,0]};
var compass = {Level: 2, Name: 'Compass', Output: 1, Components: 2, Comp1: iron_ingot, HowManyComp1: 4, Comp2: redstone, HowManyComp2: 1, Recipe: [0,1,0,1,2,1,0,1,0]};
var glass_pane = {Level: 2, Name: 'Glass Pane', Output: 16, Components: 1, Comp1: glass, HowManyComp1: 6, Recipe: [1,1,1,1,1,1,0,0,0]};

var lever = {Level: 3, Name: 'Lever', Output: 1, Components: 2, Comp1: stick, HowManyComp1: 1, Comp2: cobblestone, HowManyComp2: 1, Recipe: [1,0,0,2,0,0,0,0,0]};
var bow = {Level: 3, Name: 'Bow', Output: 1, Components: 2, Comp1: stick, HowManyComp1: 3, Comp2: string, HowManyComp2: 3, Recipe: [0,1,2,1,0,2,0,1,2]};
var torch = {Level: 3, Name: 'Torch', Output: 4, Components: 2, Comp1: stick, HowManyComp1: 1, Comp2: coal, HowManyComp2: 1, Recipe: [2,0,0,1,0,0,0,0,0]};
var redstone_torch = {Level: 3, Name: 'Redstone Torch', Output: 1, Components: 2, Comp1: stick, HowManyComp1: 1, Comp2: redstone, HowManyComp2: 1, Recipe: [2,0,0,1,0,0,0,0,0]};
var rail = {Level: 3, Name: 'Rail', Output: 16, Components: 2, Comp1: stick, HowManyComp1: 1, Comp2: iron_ingot, HowManyComp2: 6, Recipe: [2,0,2,2,1,2,2,0,2]};
var powered_rail = {Level: 3, Name: 'Powered Rail', Output: 6, Components: 3, Comp1: stick, HowManyComp1: 1, Comp2: gold_ingot, HowManyComp2: 6, Comp3: redstone, HowManyComp3: 1, Recipe: [2,0,2,2,1,2,2,3,2]};
var detector_rail = {Level: 3, Name: 'Detector Rail', Output: 6, Components: 3, Comp1: stone_pressure_plate, HowManyComp1: 1, Comp2: iron_ingot, HowManyComp2: 6, Comp3: redstone, HowManyComp3: 1, Recipe: [2,0,2,2,1,2,2,3,2]};
var sticky_piston = {Level: 3, Name: 'Sticky Piston', Output: 1, Components: 2, Comp1: piston, HowManyComp1: 1, Comp2: slimeball, HowManyComp2: 1, Recipe: [2,0,0,1,0,0,0,0,0]};
var bookshelf = {Level: 3, Name: 'Bookshelf', Output: 1, Components: 2, Comp1: book, HowManyComp1: 3, Comp2: wood_plank, HowManyComp2: 6, Recipe: [2,2,2,1,1,1,2,2,2]};
var ladder = {Level: 3, Name: 'Ladder', Output: 3, Components: 1, Comp1: stick, HowManyComp1: 7, Recipe: [1,0,1,1,1,1,1,0,1]};
var enchantment_table = {Level: 3, Name: 'Enchantment Table', Output: 1, Components: 3, Comp1: book, HowManyComp1: 1, Comp2: diamond, HowManyComp2: 1, Comp3: obsidian, HowManyComp3: 1, Recipe: [0,1,0,2,3,2,3,3,3]};
var sign =  {Level: 3, Name: 'Sign', Output: 3, Components: 2, Comp1: stick, HowManyComp1: 1, Comp2: wood_plank, HowManyComp2: 6, Recipe: [2,2,2,2,2,2,0,1,0]};
var hopper = {Level: 3, Name: 'Hopper', Output: 1, Components: 2, Comp1: chest, HowManyComp1: 1, Comp2: iron_ingot, HowManyComp2: 5, Recipe: [2,0,2,2,1,2,0,2,0]};
var minecart_with_chest = {Level: 3, Name: 'Minecart With Chest', Output: 1, Components: 2, Comp1: minecart, HowManyComp1: 1, Comp2: chest, HowManyComp2: 1, Recipe: [2,0,0,1,0,0,0,0,0]};
var barrel = {Level: 3, Name: 'Barrel', Output: 1, Components: 2, Comp1: wood_slab, HowManyComp1: 2, Comp2: wood_plank, HowManyComp2: 6, Recipe: [2,1,2,2,0,2,2,1,2]};
var wood_fence = {Level: 3, Name: 'Wood Fence', Output: 3, Components: 2, Comp1: stick, HowManyComp1: 2, Comp2: wood_plank, HowManyComp2: 4, Recipe: [2,1,2,2,1,2,0,0,0]};
var wood_fence_gate = {Level: 3, Name: 'Wood Fence Gate', Output: 1, Components: 2, Comp1: stick, HowManyComp1: 4, Comp2: wood_plank, HowManyComp2: 2, Recipe: [1,2,1,1,2,1,0,0,0]};
var white_concrete_powder = {Level: 3, Name: 'White Concrete Powder', Output: 8, Components: 3, Comp1: white_dye, HowManyComp1: 1, Comp2: sand, HowManyComp2: 4, Comp3: gravel, HowManyComp3: 4, Recipe: [1,2,2,2,2,3,3,3,3]};
var gray_dye = {Level: 3, Name: 'Gray Dye', Output: 2, Components: 2, Comp1: white_dye, HowManyComp1: 1, Comp2: black_dye, HowManyComp2: 1, Recipe: [2,1,0,0,0,0,0,0,0]};
var light_gray_dye = {Level: 3, Name: 'Light Gray Dye', Output: 3, Components: 2, Comp1: white_dye, HowManyComp1: 2, Comp2: black_dye, HowManyComp2: 1, Recipe: [1,2,0,1,0,0,0,0,0]};
var lime_dye = {Level: 3, Name: 'Lime Dye', Output: 2, Components: 2, Comp1: white_dye, HowManyComp1: 1, Comp2: green_dye, HowManyComp2: 1, Recipe: [2,1,0,0,0,0,0,0,0]};
var light_blue_dye = {Level: 3, Name: 'Light Blue Dye', Output: 2, Components: 2, Comp1: white_dye, HowManyComp1: 1, Comp2: blue_dye, HowManyComp2: 1, Recipe: [2,1,0,0,0,0,0,0,0]};
var pink_dye = {Level: 3, Name: 'Pink Dye', Output: 2, Components: 2, Comp1: white_dye, HowManyComp1: 1, Comp2: red_dye, HowManyComp2: 1, Recipe: [2,1,0,0,0,0,0,0,0]};
var map = {Level: 3, Name: 'Map', Output: 1, Components: 2, Comp1: compass, HowManyComp1: 1, Comp2: paper, HowManyComp2: 8, Recipe: [2,2,2,2,1,2,2,2,2]};
var tripwire_hook = {Level: 3, Name: 'Tripwire Hook', Output: 2, Components: 3, Comp1: stick, HowManyComp1: 1, Comp2: wood_plank, HowManyComp2: 1, Comp3: iron_ingot, HowManyComp3:1, Recipe: [3,0,0,1,0,0,2,0,0]};
var anvil = {Level: 3, Name: 'Anvil', Output: 1, Components: 2, Comp1: block_of_iron, HowManyComp1: 3, Comp2: iron_ingot, HowManyComp2: 4, Recipe: [1,1,1,0,2,0,2,2,2]};
var arrow = {Level: 3, Name: 'Arrow', Output: 4, Components: 3, Comp1: stick, HowManyComp1: 1, Comp2: flint, HowManyComp2: 1, Comp3: feather, HowManyComp3:1, Recipe: [2,0,0,1,0,0,3,0,0]};
var minecart_with_furnace = {Level: 3, Name: 'Minecart With Furnace', Output: 1, Components: 2, Comp1: minecart, HowManyComp1: 1, Comp2: furnace, HowManyComp2: 1, Recipe: [2,0,0,1,0,0,0,0,0]};


var redstone_comparator = {Level: 4, Name: 'Redstone Comparator', Output: 1, Components: 3, Comp1: redstone_torch, HowManyComp1: 3, Comp2: stone, HowManyComp2: 3, Comp3: nether_quartz, HowManyComp3: 1, Recipe: [0,1,0,1,3,1,2,2,2]};
var minecart_with_hopper = {Level: 4, Name: 'Minecart With Hopper', Output: 1, Components: 2, Comp1: hopper, HowManyComp1: 1, Comp2: minecart, HowManyComp2: 1, Recipe: [1,0,0,2,0,0,0,0,0]};
var dispenser = {Level: 4, Name: 'Dispenser', Output: 1, Components: 3, Comp1: bow, HowManyComp1: 1, Comp2: cobblestone, HowManyComp2: 7, Comp3: redstone, HowManyComp3: 1, Recipe: [2,2,2,2,1,2,2,3,2]};
var redstone_repeater = {Level: 4, Name: 'Redstone Repeater', Output: 1, Components: 3, Comp1: redstone_torch, HowManyComp1: 2, Comp2: stone, HowManyComp2: 3, Comp3: redstone, HowManyComp3: 1, Recipe: [1,3,1,2,2,2,0,0,0]};
var composter = {Level: 4, Name: 'Composter', Output: 1, Components: 2, Comp1: wood_fence, HowManyComp1: 4, Comp2: wood_plank, HowManyComp2: 3, Recipe: [1,0,1,1,0,1,2,2,2]};
var crossbow = {Level: 4, Name: 'Crossbow', Output: 1, Components: 4, Comp1: tripwire_hook, HowManyComp1: 1, Comp2: stick, HowManyComp2: 3, Comp3: iron_ingot, HowManyComp3: 1, Comp4: string, HowManyComp4:2, Recipe: [2,3,2,4,1,4,0,2,0]};


var concrete_powder = {Level: 4, Name: 'Concrete Powder', Output: 8, Components: 3, Comp1: "", HowManyComp1: 1, Comp2: sand, HowManyComp2: 4, Comp3: gravel, HowManyComp3: 4, Recipe: [1,2,2,2,2,3,3,3,3], DyeOptions: true};

var firesvg = '<svg class="fire" viewBox="0 -0.5 42 42" shape-rendering="crispEdges"><path stroke="#c7c7c7" d="M0 0h3M6 0h27M36 0h6M0 1h3M6 1h27M36 1h6M0 2h3M6 2h27M36 2h6M0 3h3M9 3h9M21 3h9M39 3h3M0 4h3M9 4h9M21 4h9M39 4h3M0 5h3M9 5h9M21 5h9M39 5h3M0 6h6M9 6h9M21 6h9M33 6h3M39 6h3M0 7h6M9 7h9M21 7h9M33 7h3M39 7h3M0 8h6M9 8h9M21 8h9M33 8h3M39 8h3M0 9h3M12 9h6M24 9h6M36 9h6M0 10h3M12 10h6M24 10h6M36 10h6M0 11h3M12 11h6M24 11h6M36 11h6M0 12h3M12 12h9M24 12h6M36 12h6M0 13h3M12 13h9M24 13h6M36 13h6M0 14h3M12 14h9M24 14h6M36 14h6M0 15h3M12 15h6M27 15h3M39 15h3M0 16h3M12 16h6M27 16h3M39 16h3M0 17h3M12 17h6M27 17h3M39 17h3M12 18h6M27 18h3M39 18h3M12 19h6M27 19h3M39 19h3M12 20h6M27 20h3M39 20h3M12 21h3M27 21h3M12 22h3M27 22h3M12 23h3M27 23h3M9 24h6M27 24h6M9 25h6M27 25h6M9 26h6M27 26h6M9 27h6M27 27h3M9 28h6M27 28h3M9 29h6M27 29h3M12 30h3M24 30h6M12 31h3M24 31h6M12 32h3M24 32h6M0 33h3M12 33h3M24 33h6M39 33h3M0 34h3M12 34h3M24 34h6M39 34h3M0 35h3M12 35h3M24 35h6M39 35h3M12 36h3M27 36h3M39 36h3M12 37h3M27 37h3M39 37h3M12 38h3M27 38h3M39 38h3M0 39h3M12 39h6M27 39h6M0 40h3M12 40h6M27 40h6M0 41h3M12 41h6M27 41h6" /><path stroke="#c45a56" d="M3 0h3M33 0h3M3 1h3M33 1h3M3 2h3M33 2h3M6 3h3M18 3h3M30 3h3M6 4h3M18 4h3M30 4h3M6 5h3M18 5h3M30 5h3M3 9h3M21 9h3M33 9h3M3 10h3M21 10h3M33 10h3M3 11h3M21 11h3M33 11h3M18 15h3M18 16h3M18 17h3M0 18h3M36 18h3M0 19h3M36 19h3M0 20h3M36 20h3M6 21h3M15 21h3M30 21h3M6 22h3M15 22h3M30 22h3M6 23h3M15 23h3M30 23h3M21 24h3M21 25h3M21 26h3M0 30h3M36 30h3M0 31h3M36 31h3M0 32h3M36 32h3" /><path stroke="#ecb43f" d="M3 3h3M33 3h3M3 4h3M33 4h3M3 5h3M33 5h3M6 6h3M18 6h3M30 6h3M6 7h3M18 7h3M30 7h3M6 8h3M18 8h3M30 8h3M3 12h3M21 12h3M33 12h3M3 13h3M21 13h3M33 13h3M3 14h3M21 14h3M33 14h3M21 15h3M21 16h3M21 17h3M6 18h3M21 18h3M30 18h3M6 19h3M21 19h3M30 19h3M6 20h3M21 20h3M30 20h3M0 21h3M36 21h3M0 22h3M36 22h3M0 23h3M36 23h3M15 24h3M15 25h3M15 26h3M6 27h3M15 27h3M30 27h3M6 28h3M15 28h3M30 28h3M6 29h3M15 29h3M30 29h3M0 36h3M6 36h3M15 36h3M30 36h3M36 36h3M0 37h3M6 37h3M15 37h3M30 37h3M36 37h3M0 38h3M6 38h3M15 38h3M30 38h3M36 38h3" /><path stroke="#8b8b8b" d="M36 3h3M36 4h3M36 5h3M36 6h3M36 7h3M36 8h3M9 9h3M9 10h3M9 11h3M9 12h3M9 13h3M9 14h3M9 15h3M24 15h3M36 15h3M9 16h3M24 16h3M36 16h3M9 17h3M24 17h3M36 17h3M9 18h3M24 18h3M9 19h3M24 19h3M9 20h3M24 20h3M9 21h3M24 21h3M39 21h3M9 22h3M24 22h3M39 22h3M9 23h3M24 23h3M39 23h3M6 24h3M24 24h3M39 24h3M6 25h3M24 25h3M39 25h3M6 26h3M24 26h3M39 26h3M21 27h6M39 27h3M21 28h6M39 28h3M21 29h6M39 29h3M9 30h3M21 30h3M39 30h3M9 31h3M21 31h3M39 31h3M9 32h3M21 32h3M39 32h3M9 33h3M36 33h3M9 34h3M36 34h3M9 35h3M36 35h3M9 36h3M24 36h3M9 37h3M24 37h3M9 38h3M24 38h3M3 39h9M18 39h9M33 39h9M3 40h9M18 40h9M33 40h9M3 41h9M18 41h9M33 41h9" /><path stroke="#fcfb39" d="M6 9h3M18 9h3M30 9h3M6 10h3M18 10h3M30 10h3M6 11h3M18 11h3M30 11h3M6 12h3M30 12h3M6 13h3M30 13h3M6 14h3M30 14h3M3 15h3M33 15h3M3 16h3M33 16h3M3 17h3M33 17h3M3 18h3M18 18h3M33 18h3M3 19h3M18 19h3M33 19h3M3 20h3M18 20h3M33 20h3M21 21h3M33 21h3M21 22h3M33 22h3M21 23h3M33 23h3M0 24h3M18 24h3M36 24h3M0 25h3M18 25h3M36 25h3M0 26h3M18 26h3M36 26h3M36 27h3M36 28h3M36 29h3M6 30h3M15 30h3M30 30h3M6 31h3M15 31h3M30 31h3M6 32h3M15 32h3M30 32h3M15 33h3M21 33h3M15 34h3M21 34h3M15 35h3M21 35h3" /><path stroke="#ffffff" d="M6 15h3M30 15h3M6 16h3M30 16h3M6 17h3M30 17h3M3 21h3M18 21h3M3 22h3M18 22h3M3 23h3M18 23h3M3 24h3M33 24h3M3 25h3M33 25h3M3 26h3M33 26h3M0 27h6M18 27h3M33 27h3M0 28h6M18 28h3M33 28h3M0 29h6M18 29h3M33 29h3M3 30h3M18 30h3M33 30h3M3 31h3M18 31h3M33 31h3M3 32h3M18 32h3M33 32h3M3 33h6M18 33h3M30 33h6M3 34h6M18 34h3M30 34h6M3 35h6M18 35h3M30 35h6M3 36h3M18 36h6M33 36h3M3 37h3M18 37h6M33 37h3M3 38h3M18 38h6M33 38h3" /></svg>';
var arrowsvg = '<svg class="arrow" viewBox="0 -0.5 62 45"><path stroke="#c7c7c7" d="M0 0h38M41 0h21M0 1h38M41 1h21M0 2h38M41 2h21M0 3h38M44 3h18M0 4h38M44 4h18M0 5h38M44 5h18M0 6h38M47 6h15M0 7h38M47 7h15M0 8h38M47 8h15M0 9h38M50 9h12M0 10h38M50 10h12M0 11h38M50 11h12M0 12h38M53 12h9M0 13h38M53 13h9M0 14h38M53 14h9M0 15h38M56 15h6M0 16h38M56 16h6M0 17h38M56 17h6M59 18h3M59 19h3M59 20h3M59 24h3M59 25h3M59 26h3M0 27h38M56 27h6M0 28h38M56 28h6M0 29h38M56 29h6M0 30h38M53 30h9M0 31h38M53 31h9M0 32h38M53 32h9M0 33h38M50 33h12M0 34h38M50 34h12M0 35h38M50 35h12M0 36h38M47 36h15M0 37h38M47 37h15M0 38h38M47 38h15M0 39h38M44 39h18M0 40h38M44 40h18M0 41h38M44 41h18M0 42h38M41 42h21M0 43h38M41 43h21M0 44h38M41 44h21" /><path stroke="#8b8b8b" d="M38 0h3M38 1h3M38 2h3M38 3h6M38 4h6M38 5h6M38 6h9M38 7h9M38 8h9M38 9h12M38 10h12M38 11h12M38 12h15M38 13h15M38 14h15M38 15h18M38 16h18M38 17h18M0 18h59M0 19h59M0 20h59M0 21h62M0 22h62M0 23h62M0 24h59M0 25h59M0 26h59M38 27h18M38 28h18M38 29h18M38 30h15M38 31h15M38 32h15M38 33h12M38 34h12M38 35h12M38 36h9M38 37h9M38 38h9M38 39h6M38 40h6M38 41h6M38 42h3M38 43h3M38 44h3" /></svg>';
var craftinglayout = '<table border="0" cellpadding="0" cellspacing="0"><tr class="row"><th id="c0"><img src=" " alt=""><span class="stepoutput"></span></th><th id="c1"><img src=" " alt=""><span class="stepoutput"></span></th><th id="c2"><img src=" " alt=""><span class="stepoutput"></span></th></tr><tr class="row"><th id="c3"><img src=" " alt=""><span class="stepoutput"></span></th><th id="c4"><img src=" " alt=""><span class="stepoutput"></span></th><th id="c5"><img src=" " alt=""><span class="stepoutput"></span></th></tr><tr class="row"><th id="c6"><img src=" " alt=""><span class="stepoutput"></span></th><th id="c7"><img src=" " alt=""><span class="stepoutput"></span></th><th id="c8"><img src=" " alt=""><span class="stepoutput"></span></th></tr></table></div>' + arrowsvg;
var furnacelayout = '<div class="furnaceboxes"><div class="furnacebox" id="furnacebox1"><img src=" " alt=""><span class="stepoutput"></span></div>' + firesvg + '<div class="furnacebox" id="furnacebox2"><img src="blocks/coal.png" alt=""><span class="stepoutput"></span></div></div></div>' + arrowsvg;

let totals = [];

function setImageFromName(name, location) {
    let block = name.replace(/ /g, "_").toLowerCase();
    let source = 'blocks/' + block + '.png';
    location.src = source;
}

function checkTotals(component, amount) {
    if (totals.length > 0) {
        for (let i = 0; i < totals.length; i++) {
            if (component.Name == totals[i].Item) {
                totals[i].Amount += amount;
                break;
            } else if (i + 1 == totals.length) {
                totals.push({
                    Item: component.Name,
                    Amount: amount
                })
                break;
            }
        }
    } else {
        totals.push({
            Item: component.Name,
            Amount: amount
        });
    }
    document.querySelector('.totals').innerHTML = original2;
    for (let i = 0; i < totals.length; i++) {
        let material = document.createElement("p");
        material.textContent = totals[i].Amount + 'x ' + totals[i].Item;
        document.querySelector('.totals').appendChild(material);
    }
}

function insertStepResources(component, number, crafter) {
    let line = document.createElement('p');
    line.textContent = number + 'x ' + component;
    crafter.appendChild(line);
}

function newCraft(item, number, step) {
    let output = eval(item);
    let crafter = output.hasOwnProperty('Furnace') ? createCrafter(furnacelayout, number, step) : createCrafter(craftinglayout, number, step);
    if (output.hasOwnProperty('Furnace')) {
        let component = output['Comp1'];
        let coal = Math.ceil(number / 8);
        crafter.querySelector('#furnacebox1 .stepoutput').textContent = number;
        crafter.querySelector('#furnacebox2 .stepoutput').textContent = coal;
        setImageFromName(component.Name, crafter.querySelector('#furnacebox1 img'));
        checkTotals(component, number);
        insertStepResources(component.Name, number, crafter);
    } else {
        for (let i = 1; i <= output.Components; i++) {
            let component = output['Comp' + i];
            let outputting = (Math.ceil(number / output['Output'])) * output['Output'];
            let nextoutput = output['HowManyComp' + i] * (outputting / output['Output']);
            let each = nextoutput / output['HowManyComp' + i];
            insertStepResources(component.Name, nextoutput, crafter);
            for (let o = 0; o < 9; o++) {
                if (i == output.Recipe[o]) {
                    let coord = crafter.querySelector('#c' + o);
                    setImageFromName(component.Name, coord.firstChild);
                    coord.lastChild.textContent = each;
                }
            }
            if (component.Level >= 1) {
                let nextstep = i == 1 && !document.querySelector('#step' + (output.Level - 1)) ? createNewStep(output.Level - 1) : output.Level - 1;
                newCraft(component, nextoutput, nextstep);
            } else {
                checkTotals(component, nextoutput);
            }
        }
    }
    setImageFromName(output.Name, crafter.querySelector('.craftingresult img'));
}

function createNewStep(number) {
    let step = document.createElement("div");
    step.classList.add("step");
    step.id = "step" + number;
    let steptitle = document.createElement('p');
    steptitle.textContent = "Step " + number;
    document.querySelector('.steps').appendChild(step);
    step.appendChild(steptitle);
    return number
}

function createCrafter(layout, number, step) {
    let title = layout == craftinglayout ? 'Crafting Table' : 'Furnace';
    let crafter = document.createElement("div");
    crafter.classList.add("crafting");
    crafter.innerHTML += '<p>' + title + '</p><div class="crafting-upper"><div class="craftingtable">' + layout + '<div class="craftingresult" id="craftingresult69"><img src=" "><span class="stepoutput">' + number + '</span></div></div><div class="crafting-lower"></div>';
    document.querySelector('#step' + step).appendChild(crafter);
    return crafter
}


function filterBlocks() {
    let block = document.querySelectorAll('.block');
    let filter = document.querySelector('#blocksearch').value.toLowerCase();
    for (let i = 0; i < block.length; i++) {
        let txtValue = block[i].textContent;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            block[i].style.display = "";
        } else {
            block[i].style.display = "none";
        }
    }
}