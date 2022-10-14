input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let JAVIER = game.createSprite(0, 2)
let ANDREA = game.createSprite(randint(1, 4), randint(0, 4))
let JUAN = game.createSprite(randint(1, 4), randint(0, 4))
let BELIA = game.createSprite(randint(1, 4), randint(0, 4))
ANDREA.set(LedSpriteProperty.Brightness, 100)
JUAN.set(LedSpriteProperty.Brightness, 130)
BELIA.set(LedSpriteProperty.Brightness, 180)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        JAVIER.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        JAVIER.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        JAVIER.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        JAVIER.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (JAVIER.isTouching(ANDREA)) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.OnceInBackground)
        ANDREA.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        game.gameOver()
    }
})
loops.everyInterval(3000, function () {
	
})
