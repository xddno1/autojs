///var 对战 = images.read("/storage/emulated/0/皇室战争图片/对战1.png")var 对战 = images.read("/storage/emulated/0/皇室战争图片/对战1.png")var 对战 = images.read("/storage/emulated/0/皇室战争图片/对战1.png")var 对战 = images.read("/storage/emulated/0/皇室战争图片/对战1.png")
var 一号小人 = images.read("/storage/emulated/0/皇室战争图片/1号小人.jpg")
var 存入步数 = images.read("/storage/emulated/0/皇室战争图片/存入步数.jpg")
var watchVdio = images.read("/storage/emulated/0/皇室战争图片/看视频升级.jpg")
requestScreenCapture()
for (;;) {
    sleep(1000)
    toastLog("没得")
    img = captureScreen()
    var  一号小人点击 = findImage(img, 一号小人,{
                                    region: [50,1450,1000,350],
                                    threshold: 0.5
                                })
    var 存入步数点击 = findImage(img, 存入步数)
    if (一号小人点击 != null) {
        toast("hh")
        click(一号小人点击.x, 一号小人点击.y)
        for (;;) {
            toastLog(1)
            sleep(2000)
           if (id("tvInviteTime").findOne(500)) {
                log(11)
                click("看视频升级+1")
                log(111)
            }
            toastLog(2)
            sleep(1000)
            if (className("android.widget.ImageView").findOne(500)) {
                log(22)
                className("android.widget.ImageView").findOne().click()
                log(222)
            }
            toastLog(3)
            sleep(1500)
            quickSettings()
            sleep(1000)
            back()
            sleep(1000)
            if (id("tt_video_ad_close_layout").findOne(500)) {
                log(33)
                id("tt_video_ad_close_layout").findOne().click()
                log(333)
            };
            toastLog(4)
           // sleep(1000)
          quickSettings()
            sleep(500)
            back()
            sleep(1000)
            if (id("abc_action_mode_done").findOne(500)) {
                log(44);
                id("abc_action_mode_done").findOne().click();
                log(444);
            }
            toastLog(5);
          quickSettings()
            sleep(500)
            back()
            sleep(1000)
            if (id("tt_top_mute").findOne(500)) {
                log(55);
                id("tt_top_mute").findOne().click();
                log(555);
            }
            toastLog(6);
            quickSettings()
            sleep(500)
            back()
            sleep(1000)
            img = captureScreen()
            一号小人点击 = findImage(img, 一号小人,{
                                    region: [50,1450,1000,350],
                                    threshold: 0.5
                                })
            log(一号小人点击)
            if (一号小人点击 != null) {
                log("退出！")
                break;
            }
            log("hh")
        }

    }

}