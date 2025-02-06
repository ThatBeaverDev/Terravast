Game.takeItem =function (item, amt) {
    if (item === "") {
        return
    }
    let itemIdx = Game.world.inventory.indexOf(item);
    if (itemIdx == -1) {
        return
    }
    if ([0,1].includes(Game.world.inventoryAmt[itemIdx])) {
        Game.world.inventoryAmt[itemIdx] = 0
        Game.world.inventory[itemIdx] = ""
        return
    }
    Game.world.inventoryAmt[itemIdx] -= 1

}

Game.giveItem=function n(e,r){if(""===e)return;let t=Game.world.inventory.indexOf(e);-1==t&&(t=Game.world.inventoryAmt.indexOf(0),Game.world.inventory[t]=e),Game.world.inventoryAmt[t]+=r};