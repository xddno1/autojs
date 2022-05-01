requestScreenCapture()
console.show()
var 黑色开始 = images.read("/storage/emulated/0/钢琴块图片/黑色开始.jpg") //random(320,450),random(1280,1340)
var 蓝色开始 = images.read("/storage/emulated/0/钢琴块图片/蓝色开始.jpg") //random(320,450),random(1280,1340)
var 继续 = images.read("/storage/emulated/0/钢琴块图片/继续.jpg")
var 长条 = images.read("/storage/emulated/0/钢琴块图片/长条.jpg") //
for (;;) {
    img = captureScreen()
    var 继续坐标 = findImage(img, 继续)
    var 长条坐标 = findImage(img, 长条)
    var 黑色开始坐标 = findImage(img, 黑色开始)
    if (继续坐标 != null) {
        click(继续坐标.x, 继续坐标.y)
    }
    if (黑色开始坐标 != null) {
        log(" 找到了")
        click(黑色开始坐标.x + 200, 黑色开始坐标.y + 200)
        back()
    }
    if (长条坐标 != null) {
        click(长条坐标.x, 长条坐标.y)
        back()
    }
    sleep(150)
}