scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.blizzard)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Whiskers.vy == 0) {
        Whiskers.vy = -150
    }
})
let Whiskers: Sprite = null
scene.setBackgroundColor(9)
Whiskers = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f . 
    f f f f f f f f f f f f f f 5 f 
    . . . . f f f f f f f f f f f f 
    . . . . f f f f f f f f f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . f . f . . . f . f . . . 
    . . . . f . f . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Whiskers, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Whiskers.ay = 200
scene.cameraFollowSprite(Whiskers)
