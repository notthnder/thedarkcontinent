EntityEvents.spawned('falling_block', event => {
  const entity = event.entity
  const blockState = entity.blockState

  // Blocks to prevent from becoming a falling block entity.
  if (
    //blockState.is('modID:itemID') || 
    blockState.is()
  ) {
event.cancel()
  }
})