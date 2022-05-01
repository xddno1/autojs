iii = engines.myEngine().execArgv;
init()








link = "ZDtFqdGaEFctChT"
src = "😆 " + link + " 😆"
setClip(src)

launchApp("小红书")
a = 1
into()

//点赞部分
if (isdianzan) {
    while (a&&i4>0) {
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
    a = 1
    backandinto()
}



//私信关注部分

while (a&&i4>0) {
    id("dfu").findOne().children().forEach(child => {
        var target = child.findOne(id("c1f"));
        if (target) {
            if (target.text() == "- THE END -") {
                a = 0
            }
        }
    });
    guanzhuandsixin()
    sleep(1000)
    xiahua()
    sleep(1000)
}





function init(){
    if (iii.isdianzan != 0) {
        isdianzan = 1
    } else{
      isdianzan=0  
    }
    if (iii.isguanzhu != 0) {
        isguanzhu = 1
    } else{
      isguanzhu=0  
    }
    if (iii.ispinglun != 0) {
        ispinglun = 1
    } else{
      ispinglun=0  
    }
    i2 = iii.i2
    i3 = iii.i3
    i4 = iii.i4
    text_ = iii.text_
    link=iii.link
}

    
    





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
                i4--
                sleep(random(1000*i2,1000*i3))
                sleep(500)
            }
        }
    });
}


function guanzhuandsixin() {
    id("dfu").findOne().children().forEach(child => {
        var target = child.findOne(id("bri"));
        if (target) {
            i4--
            sleep(random(1000*i2,1000*i3))
            target.click();
            var isfenghao = 0
            while (!id("euu").findOne().text());
            sleep(300)
            if (fenghao = id("cj5").findOne(300))
                if (fenghao.text() == "因相关投诉该账户违反") {
                    isfenghao = 1
                }
            if (isguanzhu) {
                if (id("euu").findOne().text() == "关注" && !isfenghao) {
                    id("euu").findOne().click()
                }
                while (id("euu").findOne().text() == "关注");
            }
            if (ispinglun) {
                if (id("euu").findOne().text() == "发消息" && !isfenghao) {
                    id("euu").findOne().click()
                    id("a87").findOne()
                    sleep(300)
                    setText(text_)
                    id("a8b").findOne().click()
                    id("co5").findOne().click()
                }
                if (id("euu").findOne().text() == "关注" && !isfenghao) {
                    id("euv").findOne().click()
                    id("a87").findOne()
                    sleep(300)
                    setText(text_)
                    id("a8b").findOne().click()
                    id("co5").findOne().click()
                }


            }
            id("d9o").findOne().click()

            id("c0p").findOne()



        }

    });


}


function xiahua() {
    var bounds_ = id("dfu").findOne().bounds()
    swipe((bounds_.left + bounds_.right) / 2, bounds_.bottom * 0.9, (bounds_.left + bounds_.right) / 2, bounds_.top, 800)
    sleep(1000)
    bounds_ = id("dfu").findOne().bounds()
    swipe((bounds_.left + bounds_.right) / 2, bounds_.bottom * 0.8, (bounds_.left + bounds_.right) / 2, bounds_.top, 800)
    sleep(1000)
}