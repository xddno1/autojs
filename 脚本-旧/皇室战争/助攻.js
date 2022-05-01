console.show()
requestScreenCapture()
var 结算确定 = images.read("/storage/emulated/0/皇室战争图片/结算确定.jpg")
var 对战 = images.read("/storage/emulated/0/皇室战争图片/对战.png")
var 退出游戏 = threads.start(function() {
    while (true) {
        游戏结束 = findImage(captureScreen(), 结算确定);
        if (游戏结束 != null) { //跳出进入上分的循环
            click(random(500, 510), random(1840, 1850)) //结算确定
            threads.shutDownAll()
        }
        log("游戏没有结束")
        sleep(1000)

    }
})
for (;;) { //等待进入游戏主界面
                sleep(3000)
                var 进入游戏 = findImage(captureScreen(), 对战)
                if (进入游戏 != null) {
                    break;
                }
            }