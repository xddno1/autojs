requestScreenCapture()
console.show()
var 接受任务成功 = images.read("/storage/emulated/0/皇室战争图片/接受任务成功.png")
var 任务检测2图片 = images.read("/storage/emulated/0/皇室战争图片/任务检测2.png")
setText("1")
sleep(500)
click("发送")
for (;;) {
    sleep(1000)
     var 任务检测1=click("加人加好友")
    if (任务检测1 != false) {
        log("接收任务成功")
        break;
    } else {
        log("1")
        var 任务检测2 =click("佣点") 
        if (任务检测2 != false) {
            log("不是微信加任务，放弃")
            setText("2")
            sleep(500)
            click("发送")
            sleep(500)
            setText("1")
            sleep(500)
            click("发送")
        }
    }
    }