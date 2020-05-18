namespace SpriteKind {
    export const Narrator = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function doNarrator () {
    scene.setBackgroundColor(1)
    Narrator2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Narrator)
    game.showLongText("Welcome to the Underworld. To make your escape you must complete the mazes. Good luck. Press A to start", DialogLayout.Bottom)
    pause(100)
    Narrator2.destroy()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPinkDepressed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.collectibleInsignia)
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardLava0)) {
        tiles.setTileAt(value, sprites.dungeon.collectibleInsignia)
        tiles.setWallAt(value, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    for (let value of tiles.getTilesByType(sprites.dungeon.purpleSwitchDown)) {
        tiles.setTileAt(value, sprites.dungeon.purpleSwitchUp)
    }
    for (let value of tiles.getTilesByType(sprites.dungeon.stairLadder)) {
        tiles.setTileAt(value, sprites.dungeon.stairLarge)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    enemyprojectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c b a c . . . . . . 
. . . . c c b c f a c . . . . . 
. . . . a f b b b a c . . . . . 
. . . . a f f b a f c c . . . . 
. . . . c b b a f f c . . . . . 
. . . . . b b a f a . . . . . . 
. . . . . . c b b . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Player1, 0, 48)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorDark3)
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleInsignia)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark3)
    }
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardLava1)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark3)
    }
    for (let value of tiles.getTilesByType(sprites.builtin.crowd7)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark3)
    }
    for (let value of tiles.getTilesByType(sprites.builtin.crowd1)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark3)
    }
    for (let value of tiles.getTilesByType(sprites.builtin.crowd3)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark3)
    }
    for (let value of tiles.getTilesByType(sprites.builtin.crowd0)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark3)
    }
    for (let value of tiles.getTilesByType(sprites.builtin.crowd2)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark3)
    }
    for (let value of tiles.getTilesByType(sprites.builtin.crowd4)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark3)
    }
    for (let value of tiles.getTilesByType(sprites.builtin.crowd5)) {
        tiles.setTileAt(value, sprites.dungeon.floorDark3)
    }
    doWin()
})
function doPlayer () {
    Player1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    tiles.setTilemap(tiles.createTilemap(
            hex`0a000d00140105050505050506141402130f0f0f0f0f071414020f0f0f0f0f0f071414020f0f0f0f0f0f071414020f0f0f0f0f0f07141404090a16160b0908141414140216160714141414010c0d16160e1c06141402170f0f0f0f0f0714140212121212121207141402121212121212071414021b121212120f071414040909090909090814`,
            img`
2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.floorLight0,sprites.dungeon.buttonOrange,sprites.dungeon.hazardLava1,sprites.builtin.brick,sprites.dungeon.hazardSpike,sprites.dungeon.buttonTeal,sprites.dungeon.chestOpen,sprites.dungeon.collectibleInsignia,sprites.dungeon.stairLarge,sprites.dungeon.stairLadder,sprites.dungeon.purpleSwitchDown,sprites.dungeon.purpleSwitchUp],
            TileScale.Sixteen
        ))
    controller.moveSprite(Player1)
    scene.cameraFollowSprite(Player1)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    doLevel2()
})
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    tiles.setTileAt(tiles.getTileLocation(3, 5), sprites.dungeon.collectibleInsignia)
    tiles.setWallAt(tiles.getTileLocation(3, 5), false)
    tiles.setTileAt(tiles.getTileLocation(4, 4), sprites.dungeon.collectibleInsignia)
    tiles.setWallAt(tiles.getTileLocation(4, 4), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardSpike)) {
        tiles.setTileAt(value, sprites.dungeon.floorLight0)
        tiles.setWallAt(value, false)
    }
})
function doLevel2 () {
    Player1.setPosition(61, 26)
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000262626262626262626262626262626262626261b2626262626262626262626262626261b2626262626262626262626262626261b2626262626262626262626262626261b1a1f1d201e2122231c2427262626261a1b1b1b1b1b1b1b1b1b1b2d262626261b262626261b262626262626262626261b262626261b262626262626262626261b262626261b262626262626262626261b262626261b262626262626262626261b262626261b1b1d201e2122262626261b262626261b1b1b1b1b1b1b2626262625262626262626262626261b2626262625262626262626262626261b262626262526262626262626262626262626262625252525252525252525192626`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . . . . . . . . . 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . . 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
`,
            [myTiles.tile0,sprites.builtin.oceanDepths3,sprites.builtin.oceanDepths6,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths8,sprites.builtin.oceanDepths9,sprites.builtin.oceanSand6,sprites.builtin.oceanSand10,sprites.builtin.oceanSand3,sprites.builtin.oceanSand0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.builtin.brick,sprites.dungeon.hazardSpike,sprites.dungeon.collectibleInsignia,sprites.builtin.crowd7,sprites.builtin.crowd1,sprites.builtin.crowd3,sprites.builtin.crowd0,sprites.builtin.crowd2,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd8,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.builtin.crowd9,sprites.dungeon.hazardWater,sprites.dungeon.stairLadder,sprites.dungeon.buttonOrange,sprites.castle.rock0,sprites.dungeon.darkGroundNorth,sprites.dungeon.buttonPinkDepressed,sprites.dungeon.floorDark3],
            TileScale.Sixteen
        ))
    scene.cameraFollowSprite(Player1)
    game.showLongText("You have gained a skill, you can now throw rocks by pressing the button \"b\". Use it to destroy anything in your path.", DialogLayout.Bottom)
}
function doWin () {
    scene.setBackgroundColor(1)
    Rock = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 f f f f . . . . . 
. . . . . . f f f c d b 1 b c 1 1 1 c f . . . . 
. . . . f c 1 1 1 c b f b f 1 b 1 b 1 f . . . . 
. . . . f 1 b 1 b 1 f f f f b f b f b f . . . . 
. . . . f b f b f f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    game.showLongText("So you won, you have escaped from the Underworld, for now...", DialogLayout.Bottom)
    game.over(true)
}
let Rock: Sprite = null
let Player1: Sprite = null
let enemyprojectile: Sprite = null
let Narrator2: Sprite = null
doNarrator()
doPlayer()
