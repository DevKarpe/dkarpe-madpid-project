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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    for (let value of tiles.getTilesByType(sprites.dungeon.purpleSwitchDown)) {
        tiles.setTileAt(value, sprites.dungeon.purpleSwitchUp)
    }
    for (let value of tiles.getTilesByType(sprites.dungeon.stairLadder)) {
        tiles.setTileAt(value, sprites.dungeon.stairLarge)
    }
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardSpike)) {
        tiles.setTileAt(value, sprites.dungeon.floorLight0)
        tiles.setWallAt(value, false)
    }
})
let Narrator2: Sprite = null
let Player1: Sprite = null
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
controller.moveSprite(Player1)
Player1.setPosition(61, 26)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000262626262626262626262626262626262626261b2626262626262626262626262626261b2626262626262626262626262626261b2626262626262626262626262626261b1b1f1d201e2122231c2427262626261b1b1b1b1b1b1b1b1b1b1b2a262626261b262626261b262626262626262626261b262626261b262626262626262626261b262626261b262626262626262626261b262626261b262626262626262626261b262626261b1b1d201e2122262626261b262626261b1b1b1b1b1b1b2626262625262626262626262626261b2626262625262626262626262626261b26262626252626262626262626261b1b2626262625252525252525252525292626`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . . . 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . . 2 2 2 2 2 2 
2 2 2 . 2 2 2 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
`,
            [myTiles.tile0,sprites.builtin.oceanDepths3,sprites.builtin.oceanDepths6,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths8,sprites.builtin.oceanDepths9,sprites.builtin.oceanSand6,sprites.builtin.oceanSand10,sprites.builtin.oceanSand3,sprites.builtin.oceanSand0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.builtin.brick,sprites.dungeon.hazardSpike,sprites.dungeon.collectibleInsignia,sprites.builtin.crowd7,sprites.builtin.crowd1,sprites.builtin.crowd3,sprites.builtin.crowd0,sprites.builtin.crowd2,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd8,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.builtin.crowd9,sprites.dungeon.hazardWater,sprites.dungeon.stairLadder,sprites.dungeon.buttonOrange],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(Player1)
let Enemy1 = sprites.create(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c c . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f c 3 b c 3 b c f b b c c c . 
f c b b b b b b c f b c b c c . 
c c 1 b b b 1 b c b b c b b c . 
c b b b b b b b b b c c c b c . 
c b 1 f f 1 c b b c c c c c . . 
c f 1 f f 1 f b b b b f c . . . 
f f f f f f f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 2 b b b c f . . . . 
. . f 2 2 2 b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Enemy1.follow(Player1)
