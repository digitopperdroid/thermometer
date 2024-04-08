input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
basic.showLeds(`
    . . . . .
    . . . . .
    . # # . .
    . # # . .
    . # # . .
    `)
basic.forever(function () {
    basic.showNumber(input.temperature())
})
