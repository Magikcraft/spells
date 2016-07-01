var magik = magikcraft.io;

function recite(name){
    magik.say(magik.ego().memoriae.getItem(name));
}

magik.invoco(recite);