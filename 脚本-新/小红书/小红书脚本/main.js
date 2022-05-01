iii = engines.myEngine().execArgv;
init() //导入数据并初始化

toastLog(cb3)


while (i1--) {
    star()
    sleep(5000)
    log(all = engines.all())
    sleep(1000)
    log(now = engines.myEngine())
    i = 0
    n1 = getnumber()
    n2 = n1
    while (check()) {
        n2 = getnumber()
        //toast(n2)
        sleep(5000)
    }
    killall()
    killapp()
    sleep(random(1000 * i5, 1000 * i6))
}


alert("脚本执行完成！")


function killapp() {
    let packageName = "com.xingin.xhs"
    app.openAppSetting(packageName);
    text(app.getAppName(packageName)).waitFor();
    let is_sure = textMatches("强行停止").findOne();
    if (is_sure.enabled()) {
        textMatches("强行停止").findOne().click();
        sleep(1000)
        textMatches("强行停止").findOne().click();
        log(app.getAppName(packageName) + "应用已被关闭");
        sleep(1000);
        back();
    } else {
        log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
        back();
    }
}


function killall() {
    var i = 0
    while (all[i]) {
        if (all[i] != now) {
            all[i].forceStop()
        }
        i++
    }
}

function getnumber() {
    all = engines.all()
    var i = 0
    while (all[i]) {

        i++
    }
    return i
}

function check() {
    if (n1 == n2) {
        return 1
    } else {
        return 0
    }
    if (n2 < 3) {
        return 0
    } else {
        return 1
    }
}


function init() {
    if (iii.istuijian != 0) {
        istuijian = 1
    } else {
        istuijian = 0
    }

    if (iii.isnearly != 0) {
        isnearly = 1
    } else {
        isnearly = 0
    }
    if (iii.isguanjianci != 0) {
        isguanjianci = 1
        guanjianci = dialogs.rawInput("请输入关键词")
    } else {
        isguanjianci = 0
        guanjianci = null
    }
    if (iii.isdianzan != 0) {
        isdianzan = 1
    } else {
        isdianzan = 0
    }
    if (iii.isguanzhu != 0) {
        isguanzhu = 1
    } else {
        isguanzhu = 0
    }
    if (iii.ispinglun != 0) {
        ispinglun = 1
        if (iii.cb3 == false) {
            text_ = dialogs.rawInput("请输入(私信 或 评论)内容")
        } else {
            text_ = "你好！"
        }
    } else {
        ispinglun = 0
        text_ = null
    }
    i1 = iii.i1
    i2 = iii.i2
    i3 = iii.i3
    i4 = iii.i4
    i5 = iii.i5
    i6 = iii.i6
    cb3 = iii.cb3
    moshi = iii.moshi
    if (moshi == 2) {
        link = dialogs.rawInput("请输入跳转链接");
    }
    if (moshi == 3) {
        mubiaoid = dialogs.rawInput("请输入目标id");
    }
}


function star() {
    if (moshi == 1) {
        engines.execScriptFile("./截屏监控.js")
        engines.execScriptFile("./万能模式.js", {
            arguments: {
                istuijian: istuijian,
                isnearly: isnearly,
                isguanjianci: isguanjianci,
                isdianzan: isdianzan,
                isguanzhu: isguanzhu,
                ispinglun: ispinglun,
                i2: i2, //评论间隔左
                i3: i3, //评论间隔右
                i4: i4, //批量操作数
                text_: text_,
                guanjianci: guanjianci
            }
        })
    }
    if (moshi == 2) {
        engines.execScriptFile("./截屏监控.js")
        engines.execScriptFile("./评论区截流.js", {
            arguments: {
                isdianzan: isdianzan,
                isguanzhu: isguanzhu,
                ispinglun: ispinglun,
                link: link,
                text_: text_,
                i2: i2, //评论间隔左
                i3: i3, //评论间隔右
                i4: i4, //批量操作数
            }
        })
    }

    if (moshi == 3) {
        engines.execScriptFile("./截屏监控.js")
        engines.execScriptFile("./粉丝区截流.js", {
            arguments: {
                isguanzhu: isguanzhu,
                ispinglun: ispinglun,
                i2: i2, //评论间隔左
                i3: i3, //评论间隔右
                i4: i4, //批量操作数
                mubiaoid: mubiaoid,
                text_: text_
            }
        })
    }
    if (moshi == 4) {
        engines.execScriptFile("./截屏监控.js")
        engines.execScriptFile("./私信粉丝.js", {
            arguments: {
                isguanzhu: isguanzhu,
                ispinglun: ispinglun,
                i2: i2, //评论间隔左
                i3: i3, //评论间隔右
                i4: i4, //批量操作数
                text_ : text_
            }
        })
    }
    if (moshi == 5) {
        engines.execScriptFile("./截屏监控.js")
        engines.execScriptFile("./一键取关.js", {
            arguments: {
                i2: i2, //评论间隔左
                i3: i3, //评论间隔右
                i4: i4, //批量操作数
            }
        })
    }
}