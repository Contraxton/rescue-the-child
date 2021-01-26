let mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f d b b b b f . . . . . 
    . . . . f b b b b b f . . . . . 
    . . . . f b f f f f f . . . . . 
    . . . . f b b b f b f . . . . . 
    . . . . f b b b f b f . . . . . 
    . . . . f b b b f b f . . . . . 
    . . . f d f f f f f d f . . . . 
    . . f d d b e e e b d d f . . . 
    . . f e b b b e b b b e f . . . 
    . . f e f e b b b e f e f . . . 
    . . f f f e b b b e f f f . . . 
    . . b b f c c d c c f b b . . . 
    . . . . f e b b b e f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . e e . e e . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
