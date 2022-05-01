var num = storages.create("num");
var shzx = {};
shzx.yun = (function () {
console.show()
device.setBrightness(0);
launch("com.sohu.infonews");
sleep(5000)
var max = num.get("shzxsy");
var t = 0;
var w = device.width,
    h = device.height;
var 阅读计次 = 0
while (t < max) {
    console.log("当前配置  " + "阅读:" + max + "  已阅读:" + t)
    sleep(1000);
    sleep(1000);
    back();
    if (click("首页", 0)) {

    } else {
        click("刷新", 0);

    }
    //swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
    //领金币
    for (var i = 0; i < 2; i++) {
        console.log("当前配置  " + "阅读:" + max + "  已阅读:" + t)
        console.log("滑动主页")
        if (id("energy_open").exists()) {
            id("energy_open").click();
            sleep(200);
            back();
        }
        sleep(2000)
        swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
        if (id("energy_open").exists()) {
            id("energy_open").click();
            sleep(200);
            back();
        }
        sleep(2000)
        back()
        swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
        sleep(1000);
        if (click("刚刚", i)) {

        } else {
            click("分钟前", i);

        }
        console.log("点击新闻")
        阅读计次 = 阅读计次 + 1
        //console.log("搜狐资讯-篇幅：" + 阅读计次)
        for (var j = 0; j < 10; j++) {
            if (currentPackage() != "com.sohu.infonews") {
                console.log("请在搜狐资讯内运行");
                exit();
            }
            console.log("滑动新闻" + j)
            sleep(2000);
            click("查看全文");
            swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
            sleep(2000 + 1000 * random());
        }
        if (currentPackage() != "com.sohu.infonews") {
            console.log("请在搜狐资讯内运行");
            exit();
        }
        back();
        t++;
        sleep(500);
    }
}
log("===搜狐资讯阅读完毕===")
var max = num.get("shzxsp");
var t = 0;
var 阅读计次 = 0
while (t < max) {
    //text("视频").click();
    click("视频");
    sleep(1000 + 1000 * random());
    sleep(150);
    for (var i = 0; i < 2; i++) {
        if (currentPackage() != "com.sohu.infonews") {
                console.log("请在搜狐资讯内运行");
                exit();
            }
        swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
        sleep(1000);
        id("start").findOne().click();
        阅读计次 = 阅读计次 + 1
        console.log("搜狐资讯-视频观看：" + 阅读计次);
       if (currentPackage() != "com.sohu.infonews") {
                console.log("请在搜狐资讯内运行");
                exit();
            }
        sleep(30000);
        
        back();
        t++;
        sleep(500);
        if (currentPackage() != "com.sohu.infonews") {
                console.log("请在搜狐资讯内运行");
                exit();
            }
    }
}
openAppSetting("com.sohu.infonews");
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

module.exports = shzx;