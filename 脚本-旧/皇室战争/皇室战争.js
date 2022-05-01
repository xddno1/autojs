///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
requestScreenCapture()
console.show()
var 对战 = images.read("/storage/emulated/0/皇室战争图片/对战1.png") //random(320,450),random(1280,1340)
var 卡牌库 = images.read("/storage/emulated/0/皇室战争图片/卡牌库.png") //click(random(200,300),random(1900,2000))
var 杯数40加加 = images.read("/storage/emulated/0/皇室战争图片/杯数40加加.png")
var 杯数45加加 = images.read("/storage/emulated/0/皇室战争图片/杯数45加加.png")
var 杯数46加加 = images.read("/storage/emulated/0/皇室战争图片/杯数46加加.png")
var 箱满 = images.read("/storage/emulated/0/皇室战争图片/35箱子.png")
var 已排队 = images.read("/storage/emulated/0/皇室战争图片/已排队.png")
var 金币确定 = images.read("/storage/emulated/0/皇室战争图片/金币确定.png") //random(480,570),random(1260,1300)
var 宝箱确定 = images.read("/storage/emulated/0/皇室战争图片/宝箱确定.png") //random(470,600),random(1930,2000)
var 结算确定 = images.read("/storage/emulated/0/皇室战争图片/结算确定.jpg") //random(500,510), random(1840, 1850)
//random(250,300),random(270,330)一号卡组
//random(770,830),random(270,330)五号卡组
//random(580,660),random(1900,2000)对战ui
//random(400,900),random(320,470)查看宝箱位置
//八张卡
var 冰淇淋 = images.read("/storage/emulated/0/皇室战争图片/冰淇淋.png")
var 气球 = images.read("/storage/emulated/0/皇室战争图片/气球.png")
var 狗 = images.read("/storage/emulated/0/皇室战争图片/狗.png")
var 重甲亡灵 = images.read("/storage/emulated/0/皇室战争图片/重甲亡灵.png")
var 龙宝 = images.read("/storage/emulated/0/皇室战争图片/龙宝.png")
var 小电 = images.read("/storage/emulated/0/皇室战争图片/小电.png")
var 蝙蝠 = images.read("/storage/emulated/0/皇室战争图片/蝙蝠.png")
var 小骷髅 = images.read("/storage/emulated/0/皇室战争图片/小骷髅.png")
//
//圣水
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
//



launchApp("皇室战争")






var 宝箱数 = 0

for (;;) { //总循环
    if (宝箱数 != 35) {
        for (;;) { //等待进入游戏主界面
            sleep(300)
            var 进入游戏 = findImage(captureScreen(), 对战)
            if (进入游戏 != null) {
                break;
            }
        }
        执行掉杯 = findImage(captureScreen(), 圣水二)
        if (执行掉杯 != null) { //杯过高，执行掉杯，进行准备
            click(click(random(200, 300), random(1900, 2000))) //卡牌库
            sleep(random(2000, 3000))
            click(random(770, 830), random(270, 330)) //掉分卡组5
            sleep(random(1000, 2000))
            click(random(580, 660), random(1900, 2000)) //对战ui
            sleep(random(2000, 3000))
            for (;;) { //掉杯循环

                click(random(320, 450), random(1280, 1340)) //对战
                sleep(random(1000, 2000))
                金币打满 = findImage(captureScreen(), 金币确定)
                if (金币打满 != null) { //金币打满，多一个提醒的确定按键
                    click(random(480, 570), random(1260, 1300)) //金币确定
                }
                for (;;) { //正式进入掉分
                    游戏结束 = findImage(captureScreen(), 结算确定)
                    if (游戏结束 != null) { //跳出进入掉分的循环
                        click(random(500, 510), random(1840, 1850)) //结算确定
                        break;
                    } else { //对战内容后期丰富
                    }
                }
                //正式结束一把游戏掉杯成功
                for (;;) { //等待进入游戏主界面
                    sleep(300)
                    var 进入游戏 = findImage(captureScreen(), 对战)
                    if (进入游戏 != null) {
                        break;
                    }
                }
            }
            执行上分 = findImage(captureScreen(), 杯数40加加)
            if (执行上分 != null) {
                click(click(random(200, 300), random(1900, 2000))) //卡牌库
                sleep(random(1000, 2000))
                click(random(250, 300), random(270, 330)) //上分卡组1
                sleep(random(1000, 2000))
                click(random(580, 660), random(1900, 2000)) //对战ui
                sleep(random(1000, 2000))
                break;
                break;
            }
        }
        //上分不单独创循环，直接走总循环
        click(random(320, 450), random(1280, 1340)) //对战
        sleep(random(1000, 2000))
        金币打满 = findImage(captureScreen(), 金币确定)
        if (金币打满 != null) { //金币打满，多一个提醒的确定按键
            click(random(480, 570), random(1260, 1300)) //金币确定
        }
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
                } else {
                    a = findImage(img, 圣水二, {
                        region: [160, 1830, 200, 300],
                        threshold: 0.9
                    })
                    if (a != null) {
                        if (当前圣水 != 2) {
                            log("当前圣水为2")
                            当前圣水 = 2
                        }
                    } else {
                        a = findImage(img, 圣水三, {
                            region: [160, 1830, 200, 300],
                            threshold: 0.9
                        })
                        if (a != null) {
                            if (当前圣水 != 3) {
                                log("当前圣水为3")
                                当前圣水 = 3
                            }
                        } else {
                            a = findImage(img, 圣水四, {
                                region: [160, 1830, 200, 300],
                                threshold: 0.9
                            })
                            if (a != null) {
                                if (当前圣水 != 4) {
                                    log("当前圣水为4")
                                    当前圣水 = 4
                                }
                            } else {
                                a = findImage(img, 圣水五, {
                                    region: [160, 1830, 200, 300],
                                    threshold: 0.9
                                })
                                if (a != null) {
                                    if (当前圣水 != 5) {
                                        log("当前圣水为5")
                                        当前圣水 = 5
                                    }
                                } else {
                                    a = findImage(img, 圣水六, {
                                        region: [160, 1830, 200, 300],
                                        threshold: 0.9
                                    })
                                    if (a != null) {
                                        if (当前圣水 != 6) {
                                            log("当前圣水为6")
                                            当前圣水 = 6
                                        }
                                    } else {
                                        a = findImage(img, 圣水七, {
                                            region: [160, 1830, 200, 300],
                                            threshold: 0.9
                                        })
                                        if (a != null) {
                                            if (当前圣水 != 7) {
                                                log("当前圣水为7")
                                                当前圣水 = 7
                                            }
                                        } else {
                                            a = findImage(img, 圣水八, {
                                                region: [160, 1830, 200, 300],
                                                threshold: 0.9
                                            })
                                            if (a != null) {
                                                if (当前圣水 != 8) {
                                                    log("当前圣水为8")
                                                    当前圣水 = 8
                                                }
                                            } else {
                                                a = findImage(img, 圣水九, {
                                                    region: [160, 1830, 200, 300],
                                                    threshold: 0.9
                                                })
                                                if (a != null) {
                                                    if (当前圣水 != 9) {
                                                        log("当前圣水为9")
                                                        当前圣水 = 9
                                                    }
                                                } else {
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
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (准备反击 == false) {
                    var 小骷髅卡牌 = findImage(img, 小骷髅)
                    var 冰淇淋卡牌 = findImage(img, 冰淇淋)
                    var 小电卡牌 = findImage(img, 小电)
                    var 蝙蝠卡牌 = findImage(img, 蝙蝠)
                    var 狗卡牌 = findImage(img, 狗)
                    var 气球卡牌 = findImage(img, 气球)
                    var 龙宝卡牌 = findImage(img, 龙宝)
                    var 重甲亡灵卡牌 = findImage(img, 重甲亡灵)
                    if (小骷髅卡牌 != null) {
                        click(小骷髅卡牌.x, 小骷髅卡牌.y)
                        sleep(300)
                        click(400, 1500)
                        sleep(300)
                    }
                    if (冰淇淋卡牌 != null) {
                        click(冰淇淋卡牌.x, 冰淇淋卡牌.y)
                        sleep(300)
                        click(400, 1500)
                        sleep(300)
                    }
                    if (蝙蝠卡牌 != null) {
                        click(蝙蝠卡牌.x, 蝙蝠卡牌.y)
                        sleep(300)
                        click(400, 1500)
                        sleep(300)
                    }
                    if (小电卡牌 != null) {
                        click(小电卡牌.x, 小电卡牌.y)
                        sleep(300)
                        click(200, 1110)
                        sleep(300)
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
                                sleep(300)
                                click(random(490, 500), random(1550, 1560))
                                sleep(1000)
                                狗已放 = true
                            }
                        }
                    } else {
                        if (重甲亡灵已放 == false) {
                            if (重甲亡灵卡牌 != null) {
                                if (当前圣水 >= 3) {
                                    click(重甲亡灵卡牌.x, 重甲亡灵卡牌.y)
                                    sleep(5000)
                                    click(random(10, 80), random(1380, 1400))
                                    sleep(4000)
                                    重甲亡灵已放 = true
                                }
                            }
                        } else {
                            if (龙宝已放 == false) {
                                if (龙宝卡牌 != null) {
                                    if (当前圣水 >= 4) {
                                        click(龙宝卡牌.x, 龙宝卡牌.y)
                                        sleep(3000)
                                        click(random(210, 220), random(1080, 1100))
                                        sleep(3000)
                                        龙宝已放 = true
                                    }
                                }
                            } else {
                                if (气球已放 == false) {
                                    if (气球卡牌 != null) {
                                        if (当前圣水 >= 5) {
                                            click(气球卡牌.x, 气球卡牌.y)
                                            sleep(4000)
                                            click(random(10, 80), random(880, 900))
                                            sleep(4000)
                                            气球已放 = true
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


























        for (;;) { //等待进入游戏主界面
            sleep(300)
            var 进入游戏 = findImage(captureScreen(), 对战)
            if (进入游戏 != null) {
                break;
            }
        }
        /*    click(random(400, 900), random(320, 470)) //查看宝箱位置
            sleep(random(5000, 8000))
           程序结束 = findImage(captureScreen(), 箱满, {
                        region: [0, 240, 1080, 500],
                        threshold: 0.9
                    })
            if (程序结束 != null) {
                log("刷完了")
                home()
                quickSettings() //飞行操作
                sleep(500)
                click(100, 400)
                sleep(500)
                click(100, 400)
                engines.stopAll()
            } else {
                click(random(470, 600), random(1930, 2000)) //宝箱确定
            }*/
    }
}