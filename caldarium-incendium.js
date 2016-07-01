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