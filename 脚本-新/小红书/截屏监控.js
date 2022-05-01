engines.execScriptFile("./开启录屏权限.js")
requestScreenCapture()
var img1, img2

img1 = getscreen(img1)
img2 = getscreen(img2)


while (!findImage(img1, img2)) {
    img1 = getscreen(img1)
    img2 = getscreen(img2)
}


function getscreen(img) {
    img = captureScreen()
    img = images.clip(img, 0, 1700, 540, 300);
    sleep(10000)
    log("img")
    return img
}