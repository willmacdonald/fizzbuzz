let i = 1
for (let index = 0; index < 15; index++) {
    basic.showNumber(i)
    if (i % 3 == 0) {
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
    }
    if (i % 5 == 0) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
    }
    i += 1
}
