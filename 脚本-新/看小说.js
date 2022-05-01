while (1) {
    //swipe(1000,1000,200,200,3000)
    a = random(10, 15)
    while (a--) {
        swipe(800, 800, 200, 200, 3000)
        sleep(6000)
    }
    //log(text("下一章").findOne(500).y)
    id("nextChapter").findOne().click()
    sleep(6000)
}