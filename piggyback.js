var magik = magikcraft.io;

function piggyback(player){
    var ingredients = [];

    ingredients.push("lizardEyes");
    ingredients.push("piratesGoldTooth");
    ingredients.push("mushroom");
    ingredients.push("witchesWart");

    var newSpell = magik.caldarium(ingredients);

    newSpell(player);
}

magik.invoco(piggyback);