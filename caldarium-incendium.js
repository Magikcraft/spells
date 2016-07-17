var magik = magikcraft.io;

function spell(player){
    var ingredients = [];

    ingredients.push("piratesGoldTooth");
    ingredients.push("lizardEyes");
    ingredients.push("mushroom");
    ingredients.push("witchesWart");

    var newSpell = magik.caldarium(ingredients);

    newSpell(player);
}

magik.invoco(caldarium);

/**
 * caldarium is a "spell factory"
 * It returns a new spell depending on the ingredients that you pass
 * in as an array. This example produces the 
 * 
 */