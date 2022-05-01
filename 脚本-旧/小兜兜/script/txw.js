var num = storages.create("num");
var txw = {};
 txw.yun = (function () {
     console.show()
    device.setBrightness(0);
    launch("com.coohua.xinwenzhuan");
    sleep(5000)
    var max = num.get("txwsy");
    var t = 0;
    var w = device.width,
        h = device.height;
    var 阅读计次 = 0
    while (t < max) {
        console.log("当前配置  "+"阅读:"+max +"  已阅读:"+ t)
        sleep(1000);
        click("新闻")
        sleep(200)
        id("home_feed_punch_the_clock").findOne().click()
        back()
        
        sleep(1000)
        
        
        click("新闻");
        
        swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
        
        sleep(1000 + 1000 * random());
        sleep(150);
        for (var i = 0; i < 2; i++) {
            click("新闻");
            swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
            
           // swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
           
            sleep(1000);
            
            click("分钟前",0)
            console.log("点击新闻")
            阅读计次 = 阅读计次 + 1
            console.log("淘新闻-篇幅：" + 阅读计次)
            for (var j = 0; j < 20; j++) {
                if (currentPackage() != "com.coohua.xinwenzhuan") {
                    console.log("请在淘新闻内运行");
                    exit();
                }
                console.log("滑动新闻"+ j)
                
                click("查看全文");
                
                swipe(540,1700,540,500,200);
             sleep(700+random()*300);
            }
            if (currentPackage() != "com.coohua.xinwenzhuan") {
                console.log("请在淘新闻内运行");
                exit();
            }
            back();
            t++;
            sleep(500);
        }
    }
    log("===淘新闻阅读完毕===")
    var max = num.get("txwsp");
    var t = 0;
    var 阅读计次 = 0
    while (t < max) {
        click("小视频")
        sleep(1000 + 1000 * random());
        sleep(150);
        for (var i = 0; i < 2; i++) {
            swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
            sleep(1000);
            click("万", i)
            阅读计次 = 阅读计次 + 1
            console.log("淘新闻-视频观看：" + 阅读计次);
            sleep(30000);
            back();
            t++;
            sleep(500);
        }
    }
openAppSetting("com.coohua.xinwenzhuan");
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

}
});

module.exports = txw;