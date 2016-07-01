var magik = magikcraft.io;

function toss_reverse(){
    var shield = new magik.Augurium({name: "No, Toss You!"});
    shield.event = "TOSS";
    shield.action = function reverse(target, caster){
        return caster;
    };
    shield.incanta(magik.meumNomen());
}

magik.invoco(toss_reverse);