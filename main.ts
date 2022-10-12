let sprite_1 = game.createSprite(0, randint(0, 5))
let sprite_2 = game.createSprite(randint(1, 4), randint(0, 5))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        sprite_1.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        sprite_1.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.A)) {
        sprite_1.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        sprite_1.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (sprite_1.isTouching(sprite_2)) {
        music.playTone(440, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.Happy)
        game.gameOver()
        basic.clearScreen()
    }
})
