a=0
while(1)
{
    click(100,1000);
    sleep(100)
    click(540,1430)
    sleep(100)
    //click(540,1500)
    sleep(100)
    a++
    if(id("a50").exists()){
        
        while(className("android.widget.ImageView").findOne().id()=="com.dragon.read:id/a50"||!className("android.widget.ImageView").findOne().click());
        className("android.widget.TextView").text("关闭广告").findOne().click()
        id("microapp_m_titlebar_capsule_more").findOne().click()
        sleep(800)
        click(100,2000)
        sleep(5000)
        a=0
    } else if(a==50){
          id("microapp_m_titlebar_capsule_more").findOne().click()
        sleep(800)
        click(100,2000)
        sleep(5000)
        a=0
    }
}