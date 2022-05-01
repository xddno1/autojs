for(;;){
    if(id("goto_seev_tv").exists()){
  id("goto_seev_tv").findOne().click();
}
sleep(random(500,1000),random(1001,1500))
if(id("tt_video_ad_close_layout").exists()){
  id("tt_video_ad_close_layout").findOne().click();
}}