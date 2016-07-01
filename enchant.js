var magik = magikcraft.io;

function enchant(target){
    var Reflect = new magik.Enchantment();
    Reflect.trigger = 'SPELL_CAST';
    Reflect.action = function (target){
        magik.dixit('')
    }
    
    magik.persona(target).enchant(Reflect);
    
}

magik.invoco(enchant);