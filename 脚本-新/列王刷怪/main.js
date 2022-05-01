requestScreenCapture()
queueimg = images.read("./havequeue.jpg")


while (1) {
    sleep(5000)
    click(950, 1850)
    sleep(5000)
    click(640, 2280)
    sleep(5000)
    click(540, 1140)
    sleep(5000)
    click(540, 1650)
    sleep(5000)
    if (findImage(captureScreen(), queueimg))
        click(700, 2280)
    sleep(5000)
    click(500, 500)

}