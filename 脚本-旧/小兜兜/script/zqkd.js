var num = storages.create("num");
var zqkd = {};
zqkd.yun = (function() {
console.show()
    launch("cn.youth.news");
    device.setBrightness(0);

    var max = num.get("zqkdsy");
    var t = 0;
    var w = device.width,
        h = device.height;
    sleep(10000);
    back();
    var 阅读计次 = 0
    while (t < max) {
        console.log("当前配置  " + "阅读:" + max + "  已阅读:" + t)
        id("tv_home_tab").findOne().click();
        sleep(1000 + 1000 * random());
        sleep(150);
        for (var i = 0; i < 2; i++) {
            while (!click("阅读", i));
            阅读计次 = 阅读计次 + 1
            console.log("中青看点-篇幅：" + 阅读计次)
            for (var j = 0; j < 10; j++) {
                sleep(2000);
                if (currentPackage() != "cn.youth.news") {
                    toast("结束");
                    exit();
                }

                click("查看全文");

                swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());


                sleep(2000 + 1000 * random());
            }
            back();
            t++;
            sleep(500);
        }
    }
    var max = num.get("zqkdsp");
    var t = 0;
    var 阅读计次 = 0
    while (t < max) {
        id("tv_video_tab").findOne().click()
        sleep(1000 + 1000 * random());
        sleep(150);
        for (var i = 0; i < 2; i++) {
            swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
            sleep(1000);
            click("次播放", 0)
            阅读计次 = 阅读计次 + 1
            console.log("中青看点-视频观看：" + 阅读计次);
            sleep(30000);
            back();
            t++;
            sleep(500);
        }
    }

openAppSetting("cn.youth.news");
    sleep(500);
    while (true) {
        if (text("结束运行").exists() || text("强行停止").exists()) {
            if (click("结束运行") || click("强行停止")) {
                sleep(500);
                click("强行停止");
                break;
            }
        }
        sleep(100)

}})

module.exports = zqkd;