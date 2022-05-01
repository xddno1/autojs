iii = engines.myEngine().execArgv;
//log(iii)
init()

launchApp("小红书")

src = text_
//into("944589332")
into(mubiaoid)
//0仅关注    1仅私信 2关注私信
bottomname2 = "\*\??"
sleep(1000)

var i = 0
var j = -1
var k = 1
while (i4>0) {

    //判断是否滑到底部
    id("evv").findOne().children().forEach(child => {
        var target = child.findOne(id("eqy"));
        bottomname1 = target.text()
    });
    if (i--) {
        if (bottomname1 == bottomname2) {
            break
        }
    }



    id("evv").findOne().children().forEach(child => {
        var target = child.children().findOne(id("epx"));
        //获取当前的用户名
        var nametarget = child.findOne(id("eqy"));
        currentname = nametarget.text();

        if (currentname == bottomname2) {
            j = 0 //跳过当前对象为上一个布局中的底部对象
            k = 1
        }


        if (j--) {
            if (k) {
                //仅关注
                if (isguanzhu) {
                    if (target.text() == "关注") {
                        target.click()
                    }
                }
                //仅私信
                if (ispinglun) {
                    target.parent().parent().click()
                    sleep(200)
                    sixin()
                    id("d9o").findOne().click()

                }
                i4--
                sleep(random(1000*i2,1000*i3))
                




                //lastname = currentname
                sleep(1000)
                var bounds_ = target.parent().bounds()
                xiahua(bounds_.bottom, bounds_.top)
            }


        }

    });
    bottomname2 = bottomname1
    k = 0
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
    mubiaoid = iii.mubiaoid
}



function into(str) {
    id("blf").findOne().click()
    id("dqm").findOne().click()
    sousuo = id("cf7").findOne()
    setText(str)
    sousuo.click()
    className("android.widget.TextView").text("用户").findOne().parent().click()
    id("cf_").findOne()
    id("cfb").text("小红书号：" + str).findOne().parent().parent().click()
    while (!id("esu").findOne(10)) {
        if (a = id("axt").findOne(10)) {
            a.click()
        }
    }
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
    if (id("euu").findOne().text() == "关注" && !isfenghao) {
        id("euv").findOne().click()
        id("a87").findOne()
        sleep(300)
        setText(src)
        id("a8b").findOne().click()
        id("co5").findOne().click()
    }


}



function xiahua(yb, yt) {
    var bounds_ = id("evv").findOne().bounds()
    swipe((bounds_.left + bounds_.right) / 2, yb - 1, (bounds_.left + bounds_.right) / 2, yt - (yb - yt) / 2, 400)
    sleep(100)
}