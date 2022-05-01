var num = storages.create("num");
var weilikk = {};
 weilikk.yun = (function () {
     console.show()
    device.setBrightness(0);
    launch("cn.weli.story");
    sleep(5000)
    var max = num.get("weilikksy");
    var t = 0;
    var w = device.width,
        h = device.height;
    var 阅读计次 = 0
    while (t < max) {
        console.log("当前配置  "+"阅读:"+max +"  已阅读:"+ t)
        sleep(1000);
        /*id("rl_head_line").findOne().click();
        sleep(200)
        if (id("ic_close").exists()) {
            id("ic_close").click();
        } else {
            id("rl_bottom_1").findOne().click();
        }
        sleep(1000)
        back()
        id("rl_bottom_1").findOne().click();*/
        
        swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
        if (click("领金币")) {
            sleep(1000);
            back();
        }
        sleep(1000 + 1000 * random());
        sleep(150);
        for (var i = 0; i < 2; i++) {
            swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
            if (click("领金币")) {
                sleep(1000);
                back();
            }
            swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
            sleep(1000);
            if (click("人看过", i)) {

            } else {
                click("人在线", i);

            }
            console.log("点击新闻")
            阅读计次 = 阅读计次 + 1
            console.log("微鲤看看-篇幅：" + 阅读计次)
            for (var j = 0; j < 10; j++) {
                if (currentPackage() != "cn.weli.story") {
                    console.log("请在微鲤看看内运行");
                    exit();
                }
                console.log("滑动新闻"+ j)
                sleep(2000);
                click("查看全文");
                click("收下");
                swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
                sleep(2000 + 1000 * random());
            }
            if (currentPackage() != "cn.weli.story") {
                console.log("请在微鲤看看内运行");
                exit();
            }
            back();
            t++;
            sleep(500);
        }
    }
    log("===微鲤看看阅读完毕===")
    var max = num.get("weilikksp");
    var t = 0;
    var 阅读计次 = 0
    while (t < max) {
        id("rl_bottom_2").findOne().click();
        sleep(1000 + 1000 * random());
        sleep(150);
        for (var i = 0; i < 2; i++) {
            swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
            sleep(1000);
            click("次观看", i)
            阅读计次 = 阅读计次 + 1
            console.log("微鲤看看-视频观看：" + 阅读计次);
            sleep(30000);
            back();
            t++;
            sleep(500);
        }
    }
openAppSetting("cn.weli.story");
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

}});

module.exports = weilikk;