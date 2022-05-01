var 冰淇淋 = images.read("/storage/emulated/0/皇室战争图片/冰淇淋.png")
var 气球 = images.read("/storage/emulated/0/皇室战争图片/气球.png")
var 狗 = images.read("/storage/emulated/0/皇室战争图片/狗.png") //click(400, 1500)
var 重甲亡灵 = images.read("/storage/emulated/0/皇室战争图片/重甲亡灵.png")
var 龙宝 = images.read("/storage/emulated/0/皇室战争图片/龙宝.png")
var 治疗 = images.read("/storage/emulated/0/皇室战争图片/治疗.png")
var 蝙蝠 = images.read("/storage/emulated/0/皇室战争图片/蝙蝠.png")
var 小骷髅 = images.read("/storage/emulated/0/皇室战争图片/小骷髅.png")
var 圣水一 = images.read("/storage/emulated/0/皇室战争图片/圣水一.png")
var 圣水二 = images.read("/storage/emulated/0/皇室战争图片/圣水二.png")
var 圣水三 = images.read("/storage/emulated/0/皇室战争图片/圣水三.png")
var 圣水四 = images.read("/storage/emulated/0/皇室战争图片/圣水四.png")
var 圣水五 = images.read("/storage/emulated/0/皇室战争图片/圣水五.png")
var 圣水六 = images.read("/storage/emulated/0/皇室战争图片/圣水六.png")
var 圣水七 = images.read("/storage/emulated/0/皇室战争图片/圣水七.png")
var 圣水八 = images.read("/storage/emulated/0/皇室战争图片/圣水八.jpg")
var 圣水九 = images.read("/storage/emulated/0/皇室战争图片/圣水九.png")
var 圣水十 = images.read("/storage/emulated/0/皇室战争图片/圣水十.png")
var 圣水一加边 = images.read("/storage/emulated/0/皇室战争图片/圣水一加边.png")
var 圣水二加边 = images.read("/storage/emulated/0/皇室战争图片/圣水二加边.png")
var 圣水三加边 = images.read("/storage/emulated/0/皇室战争图片/圣水三加边.png")
var 圣水四加边 = images.read("/storage/emulated/0/皇室战争图片/圣水四加边.png")
var 圣水五加边 = images.read("/storage/emulated/0/皇室战争图片/圣水五加边.png")
var 圣水六加边 = images.read("/storage/emulated/0/皇室战争图片/圣水六加边.png")
var 圣水七加边 = images.read("/storage/emulated/0/皇室战争图片/圣水七加边.png")
var 圣水八加边 = images.read("/storage/emulated/0/皇室战争图片/圣水八加边.png")
var 圣水九加边 = images.read("/storage/emulated/0/皇室战争图片/圣水九加边.png")
var 圣水十加边 = images.read("/storage/emulated/0/皇室战争图片/圣水十加边.png")
var 结算确定 = images.read("/storage/emulated/0/皇室战争图片/结算确定.jpg") //random(500,510), random(1840, 1850)
requestScreenCapture()
console.show()
var 当前圣水 = null
var 狗已放 = false
var 气球已放 = false
var 龙宝已放 = false
var 重甲亡灵已放 = false
var 准备反击 = false
for (;;) {
    img = captureScreen()
    if (findImage(img, 结算确定) != null) {
        log("游戏结束，进入主界面")
        click(random(500, 510), random(1840, 1850)); //结算确定
        break;
    } else {
        var a = null
        a = findImage(img, 圣水一, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 1) {
                log("当前圣水为1")
                当前圣水 = 1
            }
        }
        a = findImage(img, 圣水二, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 2) {
                log("当前圣水为2")
                当前圣水 = 2
            }
        }
        a = findImage(img, 圣水三, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 3) {
                log("当前圣水为3")
                当前圣水 = 3
            }
        }
        a = findImage(img, 圣水四, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 4) {
                log("当前圣水为4")
                当前圣水 = 4
            }
        }
        a = findImage(img, 圣水五, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 5) {
                log("当前圣水为5")
                当前圣水 = 5
            }
        }
        a = findImage(img, 圣水六, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 6) {
                log("当前圣水为6")
                当前圣水 = 6
            }
        }
        a = findImage(img, 圣水七, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 7) {
                log("当前圣水为7")
                当前圣水 = 7
            }
        }
        a = findImage(img, 圣水八, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 8) {
                log("当前圣水为8")
                当前圣水 = 8
            }
        }
        a = findImage(img, 圣水九, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 9) {
                log("当前圣水为9")
                当前圣水 = 9
            }
        }
        a = findImage(img, 圣水十, {
            region: [160, 1830, 200, 300],
            threshold: 0.9
        })
        if (a != null) {
            if (当前圣水 != 10) {
                log("当前圣水为10")
                当前圣水 = 10
            }
        }
        if (准备反击 == false) {
            var 小骷髅卡牌 = findImage(img, 小骷髅)
            var 冰淇淋卡牌 = findImage(img, 冰淇淋)
            var 治疗卡牌 = findImage(img, 治疗)
            var 蝙蝠卡牌 = findImage(img, 蝙蝠)
            var 狗卡牌 = findImage(img, 狗)
            var 气球卡牌 = findImage(img, 气球)
            var 龙宝卡牌 = findImage(img, 龙宝)
            var 重甲亡灵卡牌 = findImage(img, 重甲亡灵)
            if (小骷髅卡牌 != null) {
                click(小骷髅卡牌.x, 小骷髅卡牌.y)
                sleep(400)
                click(400, 1500)
                sleep(800)
            }
            if (冰淇淋卡牌 != null) {
                click(冰淇淋卡牌.x, 冰淇淋卡牌.y)
                sleep(400)
                click(400, 1500)
                sleep(800)
            }
            if (蝙蝠卡牌 != null) {
                click(蝙蝠卡牌.x, 蝙蝠卡牌.y)
                sleep(400)
                click(400, 1500)
                sleep(800)
            }
            if (治疗卡牌 != null) {
                click(治疗卡牌.x, 治疗卡牌.y)
                sleep(400)
                click(400, 1500)
                sleep(800)
            }
            if (狗卡牌 != null) {
                if (气球卡牌 != null) {
                    if (重甲亡灵卡牌 != null) {
                        if (龙宝卡牌 != null) {
                            准备反击 = true
                            log("准备反击！")
                        }
                    }
                }
            }
        }
        if (准备反击 == true) {
            if (狗已放 == false) {
                if (狗卡牌 != null) {
                    if (当前圣水 >= 9) {
                        click(狗卡牌.x, 狗卡牌.y)
                        sleep(800)
                        click(random(500, 510), random(1400, 1500))
                        sleep(800)
                        狗已放 = true
                    }
                }
            } else {
                if (气球已放 == false) {
                    if (气球卡牌 != null) {
                        if (当前圣水 >= 5) {
                            click(气球卡牌.x, 气球卡牌.y)
                            sleep(800)
                            click(random(500, 510), random(1400, 1500))
                            sleep(800)
                            气球已放 = true
                        }
                    }
                } else {
                    if (龙宝已放 == false) {
                        if (龙宝卡牌 != null) {
                            if (当前圣水 >= 4) {
                                click(龙宝卡牌.x, 龙宝卡牌.y)
                                sleep(3000)
                                click(random(500, 510), random(1400, 1500))
                                sleep(3000)
                                龙宝已放 = true
                            }
                        }
                    } else {
                        if (重甲亡灵已放 == false) {
                            if (重甲亡灵卡牌 != null) {
                                if (当前圣水 >= 3) {
                                    click(重甲亡灵卡牌.x, 重甲亡灵卡牌.y)
                                    sleep(800)
                                    click(random(500, 510), random(1440, 1550))
                                    sleep(800)
                                    重甲亡灵已放 = true
                                }
                            }
                        } else {
                            log("反击完成")
                            准备反击 = false
                            狗已放 = false
                            气球已放 = false
                            龙宝已放 = false
                            重甲亡灵已放 = false
                        }
                    }
                }
            }
        }






    }
}