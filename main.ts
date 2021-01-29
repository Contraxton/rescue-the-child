namespace SpriteKind {
    export const badGuy = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`mandelorian walking`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.badGuy, function (sprite, otherSprite) {
    game.over(false, effects.confetti)
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`mandelorian walking`,
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`mandelorian walking`,
    200,
    true
    )
})
let moving = false
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    .....fffff..........
    ....f96666f.........
    ....f66669f.........
    ....fffffff.........
    ....f66f66f.........
    ....f96f66f.........
    ....f66f96f.........
    ...f9fffff6ff.......
    ..f666eee669f.......
    ..fe966e696ef.......
    ..fefe666efff.......
    ..fffe966efff.......
    ..bbfccdccfbb.......
    ....fe669ef.........
    ....fffffff.........
    .....ee.ee..........
    ....................
    ....................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
game.onUpdate(function () {
    moving = controller.down.isPressed() || controller.up.isPressed()
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
