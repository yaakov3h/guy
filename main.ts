input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        . . . . #
        . . . # #
        . . # . #
        . # . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        . # . . #
        # . # . #
        # . . # .
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . # . #
        . . # . #
        . . # . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # . # # .
        . # . . #
        # . . . #
        # . . . #
        # . # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # . . # .
        . # . # .
        # . # . .
        # . . # .
        # . . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
basic.clearScreen()
basic.showIcon(IconNames.Skull)
basic.forever(function () {
	
})
