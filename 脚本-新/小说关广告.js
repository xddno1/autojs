while(1)
{
    sleep(1000)
    click(680,60)
    sleep(1000)
    click(1250,700)
    //click(1100,700)
    while(className("android.widget.ImageView").findOne().id()=="com.dragon.read:id/a50"||!className("android.widget.ImageView").findOne().click());
    if(id("lw").findOne(500)){
        id("lw").findOne().click()
        sleep(500)
        while(className("android.widget.ImageView").findOne().id()=="com.dragon.read:id/a50"||!className("android.widget.ImageView").findOne().click());
    }
    className("android.widget.TextView").text("关闭广告").findOne().click()
    sleep(1000)
    
}