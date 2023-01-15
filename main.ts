input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 0)
        basic.pause(500)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 255, 0)
        basic.pause(500)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        basic.pause(500)
    }
    for (let index = 0; index < 1; index++) {
        cuteBot.singleheadlights(cuteBot.RGBLights.ALL, 255, 255, 0)
        basic.pause(1000)
        cuteBot.singleheadlights(cuteBot.RGBLights.ALL, 0, 0, 0)
        basic.pause(500)
    }
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(50, 0)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(0, 50)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(50, 50)
    }
})
