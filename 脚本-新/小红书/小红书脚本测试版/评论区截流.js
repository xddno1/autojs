src = dialogs.rawInput("请输入分享码(请确保评论区有评论)")
src = "😆 " + src + " 😆"
setClip(src)

launchApp("小红书")
a = 1
into()

//点赞部分
while (a) {
    id("dfu").findOne().children().forEach(child => {
        var target = child.findOne(id("c1f"));
        if (target) {
            if (target.text() == "- THE END -") {
                a = 0
            }
        }
    });
    clicklike()
    sleep(1000)
    xiahua()
    sleep(1000)
}



//私信关注部分
backandinto()
guanzhuandsixin()
alert("ok")


function into() {


    id("brt").findOne().click()
    //id("a6f").findOne().click()
    //alert(id("commentTextView").findOne().text())
    while (id("commentTextView").findOne().text() == "评论");
    //alert(id("commentTextView").findOne().text())
    sleep(300)
    id("commentTextView").findOne().parent().click()
    id("c0p").findOne()
}

function backandinto() {
    id("a_s").findOne().click()
    while (id("commentTextView").findOne().text() == "评论");
    //alert(id("commentTextView").findOne().text())
    sleep(300)
    id("commentTextView").findOne().parent().click()
    id("c0p").findOne()


}

function clicklike() {
    id("dfu").findOne().children().forEach(child => {
        var target = child.findOne(id("c56"));
        //log(target.parent().parent().parent().id())
        if (target) {
            if (target.parent().parent().parent().id() == "com.xingin.xhs:id/c0p" && target.selected() == false) {
                target.parent().click()
                sleep(500)
            }
        }
    });
}


function guanzhuandsixin() {
    id("dfu").findOne().children().forEach(child => {
        var target = child.findOne(id("bri"));
        if (target) {
            target.click();
            var isfenghao = 0
            while (!id("euu").findOne().text());
            sleep(300)
            if (fenghao = id("cj5").findOne(300))
                if (fenghao.text() == "因相关投诉该账户违反") {
                    isfenghao = 1
                }

            if (id("euu").findOne().text() == "关注" && !isfenghao) {
                id("euu").findOne().click()



            }

            while (id("euu").findOne().text() == "关注");

            if (id("euu").findOne().text() == "发消息" && !isfenghao) {
                id("euu").findOne().click()
                id("a87").findOne()
                sleep(300)
                setText("你好！")
                id("a8b").findOne().click()
                id("co5").findOne().click()
            }
            id("d9o").findOne().click()
            
            id("c0p").findOne()
            
            
            
        }

    });


}


function xiahua() {
    var bounds_ = id("dfu").findOne().bounds()
    swipe((bounds_.left + bounds_.right) / 2, bounds_.bottom * 0.9, (bounds_.left + bounds_.right) / 2, bounds_.top, 800)
}