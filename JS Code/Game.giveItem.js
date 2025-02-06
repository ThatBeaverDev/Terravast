Game.giveItem = function (item, amt) {
    if (item === "") {
        return
    }
    Game.inventoryGain.push({item: item, amt: amt})
    let itemIdx = Game.world.inventory.indexOf(item);
    if (itemIdx == -1) {
        itemIdx = Game.world.inventoryAmt.indexOf(0);
        Game.world.inventory[itemIdx] = item;
    }
    Game.world.inventoryAmt[itemIdx] += amt;
}

Game.giveItem=function(n,t){if(""===n)return;Game.inventoryGain.push({item:n,amt:t});let e=Game.world.inventory.indexOf(n);-1==e&&(e=Game.world.inventoryAmt.indexOf(0),Game.world.inventory[e]=n),Game.world.inventoryAmt[e]+=t};