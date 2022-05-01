loseimg = images.read('./lose.jpg')
backimg = images.read('./back.jpg')
hallimg = images.read('./hall.jpg')

engines.execScriptFile("./开启录屏权限.js")
requestScreenCapture()
engines.execScriptFile("./连连看.js")
while (1) {
    while (!(backpot = findImage(captureScreen(), backimg)));
    log("ok")
    all = engines.all()
    killall()



    sleep(500)
    click(random(backpot.x + 10, backpot.x + 20), random(backpot.y + 10, backpot.y + 20))
    while (!(hallpot = findImage(captureScreen(), hallimg)));
    sleep(500)
    click(random(hallpot.x + 10, hallpot.x + 20), random(hallpot.y + 10, hallpot.y + 20))



    engines.execScriptFile("./连连看.js")
    id("cancel_tv").findOne().click()

}

function killall() {
    now = engines.myEngine()
    var i = 0
    while (all[i]) {
        if (all[i] != now) {
            all[i].forceStop()
        }
        i++
    }
}