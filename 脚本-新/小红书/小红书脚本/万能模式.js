//alert("success")
iii = engines.myEngine().execArgv;
//log(iii)
/*istuijian: istuijian,
    isnearly: isnearly,
    isguanjianci: isguanjianci,
    guanjianci: guanjianci,
    isdianzan: isdianzan,
    isguanzhu: isguanzhu,
    ispinglun: ispinglun,
    i1: i1, //操作总次数
    i2: i2, //评论间隔左
    i3: i3, //评论间隔右
    i4: i4, //批量操作数
    i5: i5, //每轮休息时间左
    i6: i6, //每轮休息时间右
    cb3: cb3 //打招呼是否随机*/
var istuijian = 0,
    isnearly = 0,
    isguanjianci = 0,
    isdianzan = 0,
    isguanzhu = 0,
    ispinglun = 0,
    i2, i3, i4, guanjianci, text_

//参数初始化
init()

//alert(ispinglun)
launchApp("小红书")
if (istuijian) {
    xiahua()
    while (i4 > 0) {
        id("c_m").className("androidx.recyclerview.widget.RecyclerView").scrollable(true).findOne().children().forEach((child => {
            var target = child.findOne(id("a6f"));
            target.children().forEach((child => {
                var isvideo = child.findOne(id("brh"))
                if (target && isvideo) {
                    i4--;
                    log("还剩" + i4 + "次")
                    target.click()
                    sleep(1000)
                    if (isdianzan) {
                        clicklike()
                    }
                    sleep(200)
                    if (isguanzhu) {
                        guanzhu()
                    }
                    sleep(300)
                    if (ispinglun) {
                        pinglun()
                    }
                    sleep(500)
                    backtozhuye()
                    sleep(1000 * i2, 1000 * i3)
                    sleep(200)
                }
            }));
        }));
        xiahua()
        sleep(1000)
    }
}


if (isnearly) {
    //点击附近
    id("e5l").findOne().children().forEach((child => {
        if (child) {
            child.children().forEach((child => {
                var target = child.findOne(className("android.widget.TextView"))
                if (target) {
                    if (target.text() && target.text() != "关注" && target.text() != "推荐") {
                        target.parent().click()
                    }
                }
            }))
        }
    }))

    if (id("alh").findOne(1000)) {
        id("alh").findOne(1000).click()
    }
    sleep(1000)
    //主页的操作
    while (i4 > 0) {
        id("c1e").className("androidx.recyclerview.widget.RecyclerView").scrollable(true).findOne().children().forEach((child => {
            var target = child.findOne(id("a6f"));
            target.children().forEach((child => {
                var isvideo = child.findOne(id("brh"))
                if (target && isvideo) {
                    i4--;
                    log("还剩" + i4 + "次")
                    target.click()
                    sleep(1000)
                    if (isdianzan) {
                        clicklike()
                    }
                    sleep(200)
                    if (isguanzhu) {
                        guanzhu()
                    }
                    sleep(300)
                    if (ispinglun) {
                        pinglun()
                    }
                    sleep(500)
                    backtozhuye()
                    sleep(1000 * i2, 1000 * i3)
                    sleep(200)
                }
            }));
        }));
        xiahua()
        sleep(1000)
    }

}


if (isguanjianci) {
    id("blf").findOne().click()
    id("dqm").findOne().click()
    sousuo = id("cf7").findOne()
    setText(guanjianci)
    sousuo.click()



    //主页的操作
    while (i4 > 0) {
        id("cep").className("androidx.recyclerview.widget.RecyclerView").scrollable(true).findOne().children().forEach((child => {
            var target = child.findOne(className("android.widget.RelativeLayout"));
            if (target) {
                target.children().forEach((child => {
                    if (child) {
                        var isvideo = child.findOne(id("cx7"))
                        if (target && isvideo) {
                            i4--;
                            log("还剩" + i4 + "次")
                            target.click()
                            sleep(1000)
                            if (isdianzan) {
                                clicklike()
                            }
                            sleep(200)
                            if (isguanzhu) {
                                guanzhu()
                            }
                            sleep(300)
                            if (ispinglun) {
                                pinglun()
                            }
                            sleep(500)
                            backtoguanjiancizhuye()
                            sleep(1000 * i2, 1000 * i3)
                            sleep(200)
                        }
                    }
                }));
            }
        }));
        guanjiancizhuyexiahua()
        sleep(1000)
    }




}





//alert("ok")


function init() {
    if (iii.istuijian != 0) {
        istuijian = 1
    }
    if (iii.isnearly != 0) {
        isnearly = 1
    }
    if (iii.isguanjianci != 0) {
        isguanjianci = 1
    }
    if (iii.isdianzan != 0) {
        isdianzan = 1
    }
    if (iii.isguanzhu != 0) {
        isguanzhu = 1
    }
    if (iii.ispinglun != 0) {
        ispinglun = 1
    }
    i2 = iii.i2
    i3 = iii.i3
    i4 = iii.i4
    guanjianci = iii.guanjianci
    text_ = iii.text_
}


function clicklike() {
    var position, bounds_
    if (id("likeTextView").exists()) {
        if (position = id("likeTextView").findOne()) {
            var bounds_ = position.bounds()
            if (id("bx5").findOne().selected() == false) {
                click(bounds_.left, bounds_.top)
            }
            return 1
        }

    }
    return 0
}


function guanzhu() {
    id("exz").findOne().children().forEach(child => {
        var target = child.findOne(id("matrixFollowView"));
        if (!(target.text() == "已关注")) {
            var bounds_ = target.bounds();
            click((bounds_.left + bounds_.right) / 2, (bounds_.bottom + bounds_.top) / 2)
            return 1
        }
    });
    return 0
}


function pinglun() {
    if (id("commentTextView").exists()) {
        if (position = id("commentTextView").findOne()) {
            var bounds_ = position.bounds()
            click(bounds_.left, bounds_.top)
            id("c6y").findOne().click()
            sleep(500)
            setText(text_)
            var fasong = id("cfh").findOne()
            sleep(500)
            fasong.click()
            while (fasong = id("cfh").findOne(500)) {
                if (fasong.enabled() == true) {
                    log(fasong)
                    id("cfh").findOne().click()
                } else {
                    break
                }
            }
            sleep(1500)
            back()

        }

    }
}

/*
function back() {
    swipe(1050, 1000, 600, 1000, 300)
}*/

function xiahua() {
    var bounds_ = id("ax6").findOne().bounds()
    sleep(500)
    swipe((bounds_.left + bounds_.right) / 2, bounds_.bottom * 0.9, (bounds_.left + bounds_.right) / 2, bounds_.top, 2000)
    sleep(300)
    swipe((bounds_.left + bounds_.right) / 2, (bounds_.bottom + bounds_.top) / 2, (bounds_.left + bounds_.right) / 2, bounds_.top, 1000)
}

function backtozhuye() {
    while (!id("dqm").findOne(600)) {
        back()
    }
}

function guanjiancizhuyexiahua() {
    var bounds_ = id("cep").findOne().bounds()
    sleep(500)
    swipe((bounds_.left + bounds_.right) / 2, bounds_.bottom * 0.9, (bounds_.left + bounds_.right) / 2, bounds_.top, 2000)
    sleep(300)
    swipe((bounds_.left + bounds_.right) / 2, (bounds_.bottom + bounds_.top) / 2, (bounds_.left + bounds_.right) / 2, bounds_.top, 1000)
}




function backtoguanjiancizhuye() {
    while (!id("cep").findOne(600)) {
        back()
    }

}