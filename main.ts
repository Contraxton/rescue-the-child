namespace SpriteKind {
    export const badGuy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.badGuy, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 5 5 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.badGuy, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`level5`)
    mySprite2.setPosition(34896053, 8345)
    mySprite.setPosition(34896053, 6.386084765845897e+23)
    projectile.setPosition(34896053, 8345)
    game.showLongText("loading next round...", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level2`)
    mySprite2.setPosition(91, 4)
    mySprite.setPosition(76, 34)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    .....fffff..........
    ....fd6666f.........
    ....f66666f.........
    ....f6fffff.........
    ....f666f6f.........
    ....f666f6f.........
    ....f666f6f.fff.....
    ...fdfffffdffd7fff2.
    ..fdd6eee6dedddddd2.
    ..fe666e666ebdddddf.
    ..fefe666effbdfffff.
    ..fffe666ef.fdf.....
    ..bbfccdccf.fff.....
    ....fe666ef.........
    ....fffffff.........
    .....ee.ee..........
    ....................
    ....................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . . f f . . . f f . . . . 
    . . f f f f . . . . . f f . . . 
    . f f . . f f . . . f . . f . . 
    . f . . . . f f . f f . . f f . 
    f f . . . f . . f f . f . . f . 
    f . . . . . . . . . . f . . f . 
    f . . . . . . . . . . . . . f . 
    . f . . . f f f f f f . . . f . 
    . f . . . f . . . . f . . . f . 
    . f f . . f . . . . f . . f . . 
    . . f f . . f . . . . . f f . . 
    . . . f f f . . . . f f f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.badGuy)
mySprite2.follow(mySprite, 50)
mySprite2.setPosition(91, 4)
