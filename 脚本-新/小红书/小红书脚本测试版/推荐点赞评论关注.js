launchApp("小红书")
while (1) {
    id("c_m").className("androidx.recyclerview.widget.RecyclerView").scrollable(true).findOne().children().forEach((child => {
        var target = child.findOne(id("a6f"));
        target.children().forEach((child => {
            var isvideo = child.findOne(id("brh"))
            if (target && isvideo) {
                target.click()
                sleep(1000)
                clicklike()
                sleep(200)
                guanzhu()
                sleep(300)
                pinglun()
                sleep(500)
                backtozhuye()
                sleep(200)
            }
        }));
    }));
    xiahua()
    sleep(1000)
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
            setText("优秀！")
            var fasong = text("发送").findOne()
            sleep(1000)
            fasong.click()
            sleep(1500)
            back()

        }

    }
}


function back() {
    swipe(1050, 1000, 600, 1000, 300)
}

function xiahua() {
    var bounds_ = id("ax6").findOne().bounds()
    sleep(500)
    swipe((bounds_.left + bounds_.right) / 2, bounds_.bottom - 1, (bounds_.left + bounds_.right) / 2, bounds_.top, 2000)
    sleep(300)
    swipe((bounds_.left + bounds_.right) / 2, (bounds_.bottom + bounds_.top) / 2, (bounds_.left + bounds_.right) / 2, bounds_.top, 1000)
}

function backtozhuye() {
    while (!id("dqm").findOne(600)) {
        back()
    }
}