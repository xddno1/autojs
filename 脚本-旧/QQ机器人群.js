auto.waitFor()
sleep(100)
console
if (!requestScreenCapture()) {
    alert("申请截屏权限失败")
}
log("申请截屏权限成功")
for (;;) {
    for (var 分身序号 = 1; 7 > 分身序号; 分身序号++) {
        跳转: for (;;) {
            log("一次")
            launchApp("QQ" + 分身序号)
            for (var qq号次数 = 0; qq号次数 < 7; qq号次数++) {
                判断是否等到: for (;;) {
                    if (className("android.widget.TextView").text("消息").depth(11).exists()) {
                        id("com.tencent.mobileqq:id/title").waitFor()
                        break
                    } else {
                        sleep(100)
                        log("等待控件")
                        continue 判断是否等到
                    }
                }
                a = null
                if (currentPackage() != "com.tencent.mobileqq") {
                    关qq分身进程()
                    continue 跳转
                }
                取qq群图片的坐标: for (;;) {
                    if (a != null) {
                        log(a)
                        break
                    } else {
                        sleep(1000)
                        log("等待找图")
                        a = findImage(captureScreen(), images.read("/storage/emulated/0/qq群图片.png"))
                        continue 取qq群图片的坐标
                    }
                }
                click(a.x, a.y)
                sleep(1000)
                sleep(500) //可删
                //等待qq群主界面
                for (;;) {
                    if (!id("com.tencent.mobileqq:id/ivTitleBtnRightImage").exists()) {
                        log("继续点击")
                        click(a.x, a.y)
                        sleep(1000)
                        if (currentPackage() != "com.tencent.mobileqq") {
                            关qq分身进程()
                            continue 跳转
                        }
                    } else {
                        break
                    }
                }
                setText("探险")
                log("成功set探险")
                click("发送")
                setText("进入副本 城外山林")
                click("发送")
                sleep(500)
               // sleep(1000) //可删
                setText("玩耍")
                click("发送")
                sleep(500)
               // sleep(28000) //可删
                click(48, 111)
                sleep(1000) //可删
                if (currentPackage() != "com.tencent.mobileqq") {
                    关qq分身进程()
                    continue 跳转
                }
                if (qq号次数 == 6) {
                    break
                }
                //等待qq主界面
                for (;;) {
                    if (!id("com.tencent.mobileqq:id/ivTitleName").exists()) {;
                    } else {
                        break
                    }
                }
                sleep(300)
                a = findImage(captureScreen(), images.read("/storage/emulated/0/换号.png"))
                click(a.x, a.y)
                sleep(1000)
                for (;;) {
                    if (!id("com.tencent.mobileqq:id/ivTitleBtnRightText").exists()) {
                        click(a.x,a.y)
                        sleep(1000)
                    } else {
                        break
                    }
                }
                sleep(500)
                //sleep(5000) //可删
                if (currentPackage() != "com.tencent.mobileqq") {
                    关qq分身进程()
                    continue 跳转
                }
                click(100, 900)
                log("完成一个QQ账号")
            }
            关qq分身进程()
            break
        }
    }
}

function 关qq分身进程() {
    sleep(500)
    recents()
    id("com.android.systemui:id/recent_igmbutton_clear_all").waitFor()
    sleep(500)
    className("android.widget.ImageView").desc("移除QQ" + 分身序号 + "。").findOne().click()
}