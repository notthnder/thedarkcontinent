const projectileSpeeds = { 
  'aquamirae:maze_rose': 3.0,
  'aquamirae:terrible_chakram': 3.0,
  'archaion:echo_star': 2.5,
  'dungeonnowloading:flame_projectile': 1.0,
  'antarchy:water_bomb': 2.0,
  'alexscaves:water_bolt': 1.0,
  'legendary_monsters:bomb': 1.0,
  'legendary_monsters:chorus_bomb': 1.0,
  'opposing_force:laser_bolt': 3.0,
  'opposing_force:bullet': 3.0,
  'hedges_bestiary:endgel_bullet': 3.0
}

EntityEvents.spawned(event => {
  // Projectile
  const entity = event.entity
  if (!projectileSpeeds[entity.type]) return 
      
  const shooter = entity.owner 

  // AbstractArrow 
  const arrow = entity.level.createEntity('kubejs:collision_arrow')
  arrow.setPosition(entity.x, entity.y, entity.z)
  arrow.setOwner(shooter)

  arrow.mergeNbt({
  pickup: 0,
  damage: 0,
  Silent: true,
  NoGravity: true
  })

  // AbstractArrow follows Projectile
  const speed = projectileSpeeds[entity.type]
  const motion = entity.deltaMovement
  arrow.shoot(motion.x, motion.y, motion.z, speed, 0)

  arrow.spawn()

})

