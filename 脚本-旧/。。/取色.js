requestScreenCapture()
launchApp("QQ")
sleep(3000)
var color
color=images.pixel(captureScreen(), 200, 1710)
color=colors.toString(color)
alert(color)