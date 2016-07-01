var magik = magikcraft.io;

function teleport(where){
    var me = magik.ego();
    var location = me.memoriae.teneoRes(where);
    magik.ianuae(location);
}

magik.invoco(teleport);