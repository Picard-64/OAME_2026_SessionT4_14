let Lock = 0
let Check = 0
datalogger.setColumnTitles(
"Lock",
"Running Time",
"Light",
"Acceleration x",
"Acceleration y",
"Acceleration z"
)
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        datalogger.deleteLog()
        Check = 0
        basic.showNumber(5)
        control.waitMicros(1000)
        basic.showNumber(4)
        control.waitMicros(1000)
        basic.showNumber(3)
        control.waitMicros(1000)
        basic.showNumber(2)
        control.waitMicros(1000)
        basic.showNumber(1)
        control.waitMicros(1000)
        basic.showIcon(IconNames.Yes)
        Check = 1
        Lock = input.runningTimeMicros()
        basic.clearScreen()
    }
    while (Check > 0 && Check <= 900) {
        datalogger.log(
        datalogger.createCV("Lock", Lock),
        datalogger.createCV("Running Time", input.runningTimeMicros()),
        datalogger.createCV("Light", input.lightLevel()),
        datalogger.createCV("Acceleration x", input.acceleration(Dimension.X)),
        datalogger.createCV("Acceleration y", input.acceleration(Dimension.Y)),
        datalogger.createCV("Acceleration z", input.acceleration(Dimension.Z))
        )
        Check += 1
    }
    basic.showIcon(IconNames.No)
})
