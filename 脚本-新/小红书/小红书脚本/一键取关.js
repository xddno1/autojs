iii = engines.myEngine().execArgv;
launchApp("小红书")
init()

id("blg").findOne().click()
var b = 0,
    a = 0
while (1) {
    if (b = id("esu").findOne(1)) {
        if (b.text() != "我的关注") {
            if (a = id("py").findOne(1)) {
                a.click()
            }
        } else {
            break
        }
    }
}
id("aez").findOne()
while ((text("已关注").findOne(300) || text("互相关注").findOne(300))&&i4>0) {
    while ((target = text("已关注").findOne(300))&&i4>0) {
        target.click()
        id("button1").findOne().click()
        sleep(300)
        i4--
        sleep(random(1000*i2,1000*i3))
    }
    while ((target = text("互相关注").findOne(300))&&i4>0) {
        target.click()
        id("button1").findOne().click()
        sleep(300)
        i4--
        sleep(random(1000*i2,1000*i3))
    }
    xiahua()
}


function xiahua() {
    var bounds_ = id("csr").findOne().bounds()
    sleep(500)
    swipe((bounds_.left + bounds_.right) / 2, (bounds_.bottom + bounds_.top) * 0.8, (bounds_.left + bounds_.right) / 2, bounds_.top, 1000)
}



function init() {
    i2 = iii.i2
    i3 = iii.i3
    i4 = iii.i4
}