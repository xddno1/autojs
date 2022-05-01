requestScreenCapture()
queueimg = images.read("./remake.jpg")

while(1){
    sleep(1000)
    if (a=findImage(captureScreen(), queueimg))
        click(a.x, a.y)
}