Game_Action.prototype.applyCritical = function(damage) {
    console.log(`crit was doubled from ${damage}`);
    return damage * 2;
};