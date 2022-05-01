engines.execScriptFile("./开启录屏权限.js")
requestScreenCapture()
getimg = images.read("./领取.jpg")


while(1){
    sleep(1000)
    click(792,150)
    sleep(1000)
    img = captureScreen()
    if (a=findImage(img, getimg))
        click(a.x, a.y)
    else
        continue;
    sleep(500)
    while (a=findImage(captureScreen(), getimg))
    {
        sleep(3000)
        click(a.x, a.y)
        sleep(500)
    }
        
    while(!className("android.widget.TextView").text("奖励将于").findOne(100)&&!className("android.view.View").text("反馈").findOne(100));
    // 腾讯广告
    if(className("android.widget.TextView").text("奖励将于").findOne(100)){
        className("android.widget.ImageView").clickable(true).findOne().click()
        className("android.widget.Button").findOne()
        className("android.widget.ImageView").findOne().click()
    }
    // 穿山甲广告
    if(className("android.view.View").text("反馈").findOne(100)){
        click(100,200)
        id("tt_video_ad_close_layout").findOne().click()
        sleep(500)
    }
    
}