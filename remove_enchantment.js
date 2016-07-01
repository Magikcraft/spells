var magik = magikcraft.io;

function remove_enchantment(){
    magik.player(magik.meumNomen()).auguriums = [];
    magik.say("Removed all enchantments");
}

magik.invoke(remove_enchantment);