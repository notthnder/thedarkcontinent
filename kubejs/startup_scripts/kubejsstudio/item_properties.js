// kubejsstudio item/block properties; re-apply merges by id
ItemEvents.modification(event => {
    event.modify('l2complements:reinforced_warp_stone', m => { m.maxDamage = 4 })
})
