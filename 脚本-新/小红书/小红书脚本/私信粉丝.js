iii = engines.myEngine().execArgv;

init()




launchApp("小红书")
bottomname2 = "hsiwmb!=!&("

into()
if (isguanzhu) {
    while (!isbottom() && i4 > 0) {
        pilianghuifen()
        xiahua()
    }
}
i4 = iii.i4
if (ispinglun) {
    while (!isbottom() && i4 > 0) {
        piliangsixin()
        sleep(1000)
        xiahua()
        sleep(1000)
    }
}





function init() {
    if (iii.isguanzhu != 0) {
        isguanzhu = 1
    } else {
        isguanzhu = 0
    }
    if (iii.ispinglun != 0) {
        ispinglun = 1
    } else {
        ispinglun = 0
    }
    i2 = iii.i2
    i3 = iii.i3
    i4 = iii.i4
    text_ = iii.text_
}



function into() {
    id("blg").findOne().click()
    var b = 0,
        a = 0
    while (1) {
        b = id("esu").findOne(10)
        if (b) {
            if (b.text() != "我的粉丝") {
                if (a = id("axt").findOne(10)) {
                    log("click！")
                    a.click()
                }
            } else {

                break
            }
        }
    }
    log("ok")
    id("ck4").findOne()
}



function pilianghuifen() {
    id("evv").findOne().children().forEach(child => {
        var target = child.findOne(id("epx"));
        if (target) {
            if (target.text() == "回粉") {
                target.click();
                i4--
            }
        }
    });
}

function piliangsixin() {

    id("ck4").findOne()
    id("evv").findOne().children().forEach(child => {
        var target = child.findOne(id("bpd"));


        if (target) {
            target.click(); //进入
            sixin() //私信
            id("d9o").findOne().click() //返回
        }
        id("ck4").findOne()
    });





}




function sixin() {
    var isfenghao = 0
    while (!id("euu").findOne().text());
    sleep(300)
    if (fenghao = id("cj5").findOne(300))
        if (fenghao.text() == "因相关投诉该账户违反") {
            isfenghao = 1
        }
    if (id("euu").findOne().text() == "发消息" && !isfenghao) {
        id("euu").findOne().click()
        id("a87").findOne()
        sleep(300)
        setText(text_)
        id("a8b").findOne().click()
        id("co5").findOne().click()
    }
    if (id("euu").findOne().text() == "回粉" && !isfenghao) {
        id("euv").findOne().click()
        id("a87").findOne()
        sleep(300)
        setText(text_)
        id("a8b").findOne().click()
        id("co5").findOne().click()
    }
    i4--
}

function xiahua() {
    target_ = id("evv").findOne()
    bounds_ = target_.bounds()
    swipe((bounds_.left + bounds_.right) / 2, bounds_.bottom * 0.9, (bounds_.left + bounds_.right) / 2, bounds_.top, 800)
    sleep(1000)
}

function isbottom() {
    id("evv").findOne().children().forEach(child => {
        var target = child.findOne(id("eqy"));
        bottomname1 = target.text()
    });
    if (bottomname1 == bottomname2) {
        return 1
    }
    bottomname2 = bottomname1
    return 0
}