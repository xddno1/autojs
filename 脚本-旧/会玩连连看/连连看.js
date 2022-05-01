test1 = images.read('./test1.jpg')
test2 = images.read('./test2.jpg')
backimg = images.read('./back.jpg')
hallimg = images.read('./hallgold.jpg')
断线 = images.read('./断线.jpg')
engines.execScriptFile("./开启录屏权限.js")
requestScreenCapture()

// 0为空 1-8为目标种类
target = []
target[0] = images.read('./小鸡.jpg')
target[1] = images.read('./小熊.jpg')
target[2] = images.read('./兔兔.jpg')
target[3] = images.read('./小猪.jpg')
target[4] = images.read('./河马.jpg')
target[5] = images.read('./熊猫.jpg')
target[6] = images.read('./章鱼.jpg')
target[7] = images.read('./考拉.jpg')
while (1) {
    // 判断是否进入状态
    img = captureScreen()
    while (!findImage(img, target[2])) {
        if ((isgone = findImage(img, 断线))) {
            click(isgone.x, isgone.y)
            while (!(hallpot = findImage(captureScreen(), hallimg)));
            sleep(500)
            click(hallpot.x + 10, hallpot.y + 10)
            id("cancel_tv").findOne().click()
        }
        img = captureScreen()
        // images.save(img, "./test2.jpg")
    }


    // 记录所有方块类型和坐标
    // matchimg=captureScreen()
    //img=captureScreen()
    // 不加下一行代码无故报错
    images.save(img, "./test2.jpg")
    temparr = []
    for (j = 0; j < 8; j++) {
        temp = images.matchTemplate(img, target[j], {
            max: 70
        }).matches
        for (i = 0; i < temp.length; i++) {
            temparr.push({
                x: parseInt((temp[i].point.x - 60) / 136),
                y: parseInt((temp[i].point.y - 560) / 136),
                type: j + 1,
                color: images.pixel(img, parseInt((temp[i].point.x - 60) / 136) * 136 + 110, parseInt((temp[i].point.y - 560) / 136) * 136 + 610)
            })
        }
    }
log(temparr.length)

    // 初始化table
    table = []
    taps = []
    for (i = 0; i < 10; i++) {
        table[i] = []
    }

    // 按坐标摆好table
    //temparr=[]
    for (i = 0; i < 70; i++) {
        table[temparr[i].y][temparr[i].x] = temparr[i]
    }



    lastcheck = -1
    // 收集点击顺序
    while (!isempty()) {
        while (checkright());
        while (checkleft());
        while (checktop());
        while (checkbottom());
    }
    // 再次收集
    //  log(taps.length)
    if (taps.length != 70) {
        table = []
        taps = []
        for (i = 0; i < 10; i++) {
            table[i] = []
        }
        for (i = 0; i < 70; i++) {
            table[temparr[i].y][temparr[i].x] = temparr[i]
        }
        lastcheck = -1
        while (!isempty()) {
            while (checkbottom());
            while (checkright());
            while (checktop());
            while (checkleft());

        }
        // log(taps.length)
    }
    // 循环收集
    times = 0
    while (taps.length != 70 && times++ <= 300) {
        table = []
        taps = []
        for (i = 0; i < 10; i++) {
            table[i] = []
        }
        for (i = 0; i < 70; i++) {
            table[temparr[i].y][temparr[i].x] = temparr[i]
        }
        lastcheck = -1
        while (!isempty()) {
            switch (random(0, 3)) {
                case 0:
                    {
                        while (checkbottom());
                        break
                    }
                case 1:
                    {
                        while (checkright());
                        break
                    }
                case 2:
                    {
                        while (checktop());
                        break
                    }
                case 3:
                    {
                        while (checkleft());
                        break
                    }
            }
        }
        log(taps.length, times)
    }
    log("isok")
    // 将收集剩下的方块放入点击数组
 /*   while (taps.length != 70) {
        fristone = 0
        for (i = 0; i < 10; i++) {
            for (j = 0; j < 7; j++) {
                if (table[i][j] && fristone) {
                    taps.push(table[i][j])
                    table[i].splice(j, 1)
                    taps.push(fristone)
                    table[fristone.nowy].splice(fristone.nowx, 1)
                    i = 10
                    j = 10
                    continue
                }
                if (table[i][j] && !fristone) {
                    fristone = table[i][j]
                    fristone.nowy = i
                    fristone.nowx = j
                }

            }
        }
    }*/
    /*if (times > 2000) {
        taps = []
    }*/
    log("ok")

    randomroot = random(1, 2)
    if (1)
        for (i = 0; i < taps.length + 1; i++) {
            // 偶数时单独判断
            log("i", i)
            if (i % 2 == 0) {
                t1 = new Date().getTime()
                img = captureScreen()

                // 不是第一次进入循环
                if (i != 0 && i != 2) {

                    // 没消掉
                    if (taps[i - 4].color == images.pixel(img, taps[i - 4].x * 136 + 110, taps[i - 4].y * 136 + 610) && taps[i - 3].color == images.pixel(img, taps[i - 3].x * 136 + 110, taps[i - 3].y * 136 + 610) /*&&"-14077630"==images.pixel(img,650, 1110)*/ ) {
                        i -= 4
                    } else {
                        if (taps[i - 2].color == images.pixel(img, taps[i - 2].x * 136 + 110, taps[i - 2].y * 136 + 610) && taps[i - 1].color == images.pixel(img, taps[i - 1].x * 136 + 110, taps[i - 1].y * 136 + 610) /*&&"-14077630"==images.pixel(img,650, 1110)*/ ) {
                            i -= 2
                        }
                    }
                    // 消掉了
                }
                // 判断backimg

                if (!colors.isSimilar(-14077630, images.pixel(img, 740, 1510))) {
                    log(1)
                    if (findImage(img, backimg)) {
                        break
                    }
                }
                // sleep(random(240,270))
                t2 = new Date().getTime()
                log("t2-t1", t2 - t1)
                /*if(170 - (t2-t1)>0)
                    sleep(170 - (t2-t1))*/
                sleep(20 * randomroot)
                // 20   6s
                // 40   7s
                // 60   8s
                // 80   8s
                // 100  9s
                // 120  11s
                // if(t2-t1<800)
                // sleep(100 - (t2 - t1))
            }
            // sleep(170)
            //170，8秒
            if (i == 70) {
                break
            }
            press(random(taps[i].x * 136 + 90, taps[i].x * 136 + 100), random(taps[i].y * 136 + 590, taps[i].y * 136 + 600), 1)

            // log("click", i)
        }



    log("quit")

    // 退出游戏，进行下一把
    backpot = 0
    hallpot = 0
    hallpot1 = 0
    cancel = 0
    while (!(backpot = findImage(captureScreen(), backimg)) && !(hallpot1 = findImage(captureScreen(), hallimg)) && !(cancel = id("cancel_tv").findOne(500)));
    if (backpot) {
        sleep(500)
        click(random(backpot.x + 10, backpot.x + 20), random(backpot.y + 10, backpot.y + 20))
        while (!(hallpot = findImage(captureScreen(), hallimg)));
        sleep(500)
        click(random(hallpot.x + 10, hallpot.x + 20), random(hallpot.y + 10, hallpot.y + 20))
        //id("cancel_tv").findOne().click()
    }

    if (hallpot1) {
        sleep(500)
        click(random(hallpot1.x + 10, hallpot1.x + 20), random(hallpot1.y + 10, hallpot1.y + 20))
        //id("cancel_tv").findOne().click()
    }
    /*log(backpot)
    log(hallpot1)
    log(cancel)*/
    sleep(random(2, 5) * 1000)
    id("cancel_tv").findOne().click()
    log("clickdone")
}

/*for(i=0;i<taps.length;i++){
   log(taps[i].x,taps[i].y,taps[i].type)
}*/

/*
// 调试table
for(i=0;i<10;i++){
    log(table[i][0].type,table[i][1].type,table[i][2].type,table[i][3].type,table[i][4].type,table[i][5].type,table[i][6].type)
}
*/
/*
// 调试处理过的table
for (i = 0; i < table.length; i++) {
    log(table[i])
}*/
/*
// 查看图片直接的间隔
for(i=0;i<10;i++){
    for(j=0;j<7;j++){
        log((table[i][j].x-60)%136<30)
    }
}
for(i=0;i<10;i++){
    for(j=0;j<7;j++){
        log((table[i][j].y-560)%136<30)
    }
}
*/

// X left=60
/*136  误差小于30
348-212=136
212-80=132
212-80=136
748-612=136
208-72=136
*/
// Y top=560
/*136  误差小于30
708-572=136
720-584=136
*/
function isempty() {
    if (lastcheck == taps.length) {
        return true
    }
    lastcheck = taps.length
    //log(taps.length)
    //log(table)
    if (taps.length == 70) {
        return true
    }
    for (i = 0; i < 9; i++) {
        if (table[i][0]) {
            // log(table[i][0])
            return false
        }
    }
    return true
}

function checkleft() {
    for (i = 0; i < table.length; i++) {
        if (!table[i][0]) {
            continue
        }
        for (j = i + 1; j < table.length - 1; j++) {
            if (!table[j][0]) {
                continue
            }
            // log(table[i][0])
            if (table[i][0].type == table[j][0].type) {
                taps.push(table[i][0])
                taps.push(table[j][0])
                taps[taps.length - 2].click = "left"
                taps[taps.length - 1].click = "left"
                table[i].splice(0, 1)
                table[j].splice(0, 1)
                return true
            }
        }
    }
    return false
}

function checkright() {
    for (i = 0; i < table.length; i++) {
        if (!table[i][0]) {
            continue
        }
        for (j = i + 1; j < table.length - 1; j++) {
            if (!table[j][0]) {
                continue
            }
            // log(table[i][0])
            if (table[i][table[i].length - 1].type == table[j][table[j].length - 1].type) {
                taps.push(table[i].pop())
                taps.push(table[j].pop())
                taps[taps.length - 2].click = "right"
                taps[taps.length - 1].click = "right"
                return true
            }
        }
    }
    return false
}

function checktop() {
    while (!table[0][0]) {
        table.splice(0, 1)
        // log(table)
        if (!table[0]) {
            return false
        }
    }
    // x 列 y 行
    toplist = [0, 0, 0, 0, 0, 0, 0]
    for (i = 0; i < table.length; i++) {
        if (!table[i][0]) {
            continue
        }
        for (j = 0; j < 7; j++) {
            if (!table[i][j]) {
                break
            }
            // log(table[i][0])
            if (!toplist[table[i][j].x]) {
                toplist[table[i][j].x] = table[i][j]
                toplist[table[i][j].x].nowx = j
                toplist[table[i][j].x].nowy = i
            }
        }
    }

    for (i = 0; i < 6; i++) {
        if (toplist[i] == 0) {
            continue
        }
        for (j = i + 1; j < 7; j++) {

            if (toplist[i].type == toplist[j].type) {
                taps.push(table[toplist[i].nowy][toplist[i].nowx])
                taps.push(table[toplist[j].nowy][toplist[j].nowx])
                taps[taps.length - 2].click = "top"
                taps[taps.length - 1].click = "top"
                table[toplist[j].nowy].splice(toplist[j].nowx, 1)
                table[toplist[i].nowy].splice(toplist[i].nowx, 1)
                return true
            }
        }
    }
    return false
}

function checkbottom() {
    /*while (!table[0][0]) {
        table.splice(0, 1)
        // log(table)
        if (!table[0]) {
            return false
        }
    }*/
    // x 列 y 行
    bottomlist = [0, 0, 0, 0, 0, 0, 0]
    for (i = table.length - 1; i >= 0; i--) {
        if (!table[i][0]) {
            continue
        }
        for (j = 0; j < 7; j++) {
            if (!table[i][j]) {
                break
            }
            // log(table[i][0])
            if (!bottomlist[table[i][j].x]) {
                bottomlist[table[i][j].x] = table[i][j]
                bottomlist[table[i][j].x].nowx = j
                bottomlist[table[i][j].x].nowy = i
            }
        }
    }
    // log(bottomlist)
    for (i = 0; i < 6; i++) {
        if (bottomlist[i] == 0) {
            continue
        }
        for (j = i + 1; j < 7; j++) {

            if (bottomlist[i].type == bottomlist[j].type) {
                taps.push(table[bottomlist[i].nowy][bottomlist[i].nowx])
                taps.push(table[bottomlist[j].nowy][bottomlist[j].nowx])
                taps[taps.length - 2].click = "bottom"
                taps[taps.length - 1].click = "bottom"
                table[bottomlist[j].nowy].splice(bottomlist[j].nowx, 1)
                table[bottomlist[i].nowy].splice(bottomlist[i].nowx, 1)
                return true
            }
        }
    }
    return false
}