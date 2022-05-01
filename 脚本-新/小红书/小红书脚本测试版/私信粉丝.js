launchApp("小红书")
src = "你好！"

into()
pilianghuifen()

piliangsixin()





alert("ok")


function into() {
    id("blg").findOne().click()
    var b = 0,
        a = 0
    while (b = id("esu").findOne(10)) {
        if (b) {
            if (b.text() != "我的粉丝") {
                if (a = id("axt").findOne(10)) {
                    a.click()
                }
            } else {
                break
            }
        }
    }
    id("ck4").findOne()
}



function pilianghuifen() {
    id("evv").findOne().children().forEach(child => {
        var target = child.findOne(id("epx"));
        if (target) {
            if (target.text() == "回粉") {
                target.click();
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
        setText(src)
        id("a8b").findOne().click()
        id("co5").findOne().click()
    }

}