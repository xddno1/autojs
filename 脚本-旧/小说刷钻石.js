a=1
while(1)
{
    
    a++
    click(100,1000);
    sleep(600)
    click(540,1330)
    sleep(600)
    //
    //click(540,1500)
    sleep(100)
    if(id("a50").exists()){
        
        while(className("android.widget.ImageView").findOne().id()=="com.dragon.read:id/a50"||!className("android.widget.ImageView").findOne().click());
        className("android.widget.TextView").text("关闭广告").findOne().click()
        id("microapp_m_titlebar_capsule_more").findOne().click()
        sleep(1800)
        click(150,1800)
        sleep(5000)
        a=0
    }
    else if(a==50){
        id("microapp_m_titlebar_capsule_more").findOne().click()
        sleep(1800)
        click(150,1800)
        sleep(5000)
        a=0
    }
}