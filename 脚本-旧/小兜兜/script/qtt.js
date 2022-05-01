var num = storages.create("num");
var qtt = {};
qtt.yun = (function () {
console.show()
 launch("com.jifen.qukan");
 device.setBrightness(0);
 //sleep(1000)

yuedu()
//函数

})
function cha() {
    if (currentPackage() != "com.jifen.qukan") {
        toast("结束");
        exit();
    }
}

function 阅读过滤(parent) {
    if (parent.childCount() == 5 || parent.childCount() == 1) {
        return 0;
    }; //视频 应用过滤
    //if(parent.childCount()==1){parent=parent.child(0);if(parent.child(2).text()=="+120"){return 2}}; //金币奖励
    for (var i = 0; i < parent.childCount(); i++) {
        if (parent.child(i).childCount() == 0) {
            var 提取汉字 = parent.child(i).text();
            if (提取汉字 == "广告" || 提取汉字 == "视频" || 提取汉字 == "立即下载") {
                return 0;
            };
        } //广告过滤
    }
    if (parent.child(0).enabled() == false) {
        return 0;
    }; //已读过滤
    return 1;
}

function 关闭APP(包名) {
    openAppSetting(包名);
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
    while (true) {
        if (text("确定").exists()) {
            if (click("确定")) {
                break;
            }
        }
        sleep(100)
    }
    home();
}


function 时段奖励() {
    var list = className("android.widget.RelativeLayout").findOne();
    if (list.childCount() == 3) {
        if (list.childCount() == 3) {
            if (list.child(2).text() == "领取") {
                list.click();
            }
        }
    }
}


function yuedu() {
    var max = num.get("qttsy");
var t = 0;
var w = device.width,
    h = device.height;
    //启动APP
    app.startActivity({
        packageName: "com.jifen.qukan",
       className: "com.jifen.qkbase.main.MainActivity",
     //   root: true
    });
    click("去签到")
    sleep(1000)
    //看新闻
    log("----趣头条开始阅读----")
    id("jz").findOne().click();
    var 阅读计次 = 0
    while (t < max) {
        时段奖励();
        sleep(300);
        sleep(1000 + 1000 * random());
        swipe(w / 2, h * 0.6 + h * random() * 0.1, w / 2, h * 0.3, 600 + 600 * random());
        var list = className("android.support.v7.widget.RecyclerView").findOne();
        sleep(150);
        var is_ent = false;
        for (var i = 1; i < list.childCount() && !is_ent; i++) {
            var 新闻判定 = 阅读过滤(list.child(i));
            //toast(新闻判定);
            if (新闻判定 == 0) {
                continue;
            };
            if (新闻判定 == 1) {
                list.child(i).click();
            };
            //if(新闻判定==2){list.child(i).child(0).click();};
            阅读计次 = 阅读计次 + 1
            log("趣头条-篇幅：" + 阅读计次)
            is_ent = true;
            for (var j = 0; j < 10; j++) {
                sleep(2000);
                cha();
                swipe(device.width / 2*random()+device.width*0.1*random(), device.height * random() + device.height * random() * 0.05, device.width / 2*random(), random()*device.height * 0.3, 600 + 600 * random());
                sleep(2000 + 1000 * random());
            }
            cha();
            back();
            t++;
            sleep(100);
        }
    }
    关闭APP("com.jifen.qukan")
    log("===趣头条阅读完毕===")
}
module.exports = qtt;