while(1)
{
    click(100,1000);
    sleep(50)
    click(540,1430)
    sleep(1000)
    if(id("nko").exists()){
        while(id("nko").exists()){
            sleep(5000)
            id("nko").findOne().click()
            if(id("dialogRightBtn").findOne(600))
            {
                id("dialogRightBtn").findOne().click()
                sleep(1000)
            }
            }
        className("android.widget.ImageView").desc("更多").findOne().click()
        sleep(2000)
        click(700,2000)
    }
}