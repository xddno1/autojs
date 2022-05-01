let oldlist = []
//hwjwjwhid("hf1").findOne().children().forEach(child).children().forEach(child").children().forEach(child).children().forEach(child).children().forEach(child).children().forEach(child => {
function check(text) {
    
    log(oldlist)
    
    return !text.includes("ππ") && !oldlist.some(e=> e === text)

}

function sentmessage(child) {
    child.click()
    sleep(1000)
    setText("海大主校区 星期四56节女 轻松")
    sleep(1000)
    id("ay5").findOne().click()
    sleep(300)
    id("eh").findOne().click()
    sleep(1000)
}

while (1) {
    id("hf1").findOne().children().forEach(child => {
        if (!child.findOne(id("ir3"))) return;
        let text = child.findOne(id("ir3")).text()
        if (check(text)) {
            log(text)
            oldlist.push(text)
            sentmessage(child)
            sleep(1000)
        }
        
    })
    scrollDown()
    sleep(1000)
}