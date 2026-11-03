StartupEvents.registry('entity_type', event => {
    event.create('collision_arrow', 'entityjs:arrow')

    // Collision box
    .sized(3, 3)

    // Invisible
    .textureLocation(entity => {
    return 'kubejs:textures/item/transparent_item.png'})

    .clientTrackingRange(8)
    .mobCategory('misc')

    // Just for the affix trigger
    .setBaseDamage(0)

    // Entity collision
    .canHitEntity(entity => {
    return entity.isLiving()})

    // Remove arrow after hitting entity
    .onHitEntity(context => {
    const { entity } = context
    entity.remove('discarded')})

    // Remove arrow on block hit
    .onHitBlock(context => {
    const { entity } = context
    entity.remove('discarded')})

    // Failsafe: remove remaining after 3 seconds
    .tickDespawn(entity => {
    if (entity.age >= 60) {
    entity.remove('discarded')}})
})