launchApp("小红书")


id("blg").findOne().click()
var b = 0,
    a = 0
while (b = id("esu").findOne(10)) {
    if (b) {
        if (b.text() != "我的关注") {
            if (a = id("py").findOne(10)) {         
                a.click()
            }
        } else {
            break
        }
    }
}
id("aez").findOne()
while (text("已关注").findOne(300) || text("互相关注").findOne(300)) {
    while (target = text("已关注").findOne(300)) {
        target.click()
        id("button1").findOne().click()
        sleep(300)
    }
    while (target = text("互相关注").findOne(300)) {
        target.click()
        id("button1").findOne().click()
        sleep(300)
    }
    xiahua()
}
launchApp("Auto.js Pro")
alert("一键取关完成！")

function xiahua() {
    var bounds_ = id("csr").findOne().bounds()
    sleep(500)
    swipe((bounds_.left + bounds_.right) / 2, (bounds_.bottom + bounds_.top) * 0.8, (bounds_.left + bounds_.right) / 2, bounds_.top, 1000)
}