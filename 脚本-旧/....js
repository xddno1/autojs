"auto";
var max=dialogs.input("大约刷多少分钟",60);
var t=0;
var w=device.width,h=device.height;
waitForActivity("com.jifen.qkbase.main.MainActivity");
function cha(){if(currentPackage()!="com.jifen.qukan"){toast("结束"); exit();}}
function is(parent){
    if(parent.childCount()==0){if(parent.text()=="\u5e7f\u544a"||(parent.text()=="\u7f6e\u9876"||parent.text()=="\u89c6\u9891"))return true;return false;}
    for(var i=0;i<parent.childCount();i++){
       if(is(parent.child(i)))return true;
    }
    return false;
}
while(t<max){
    sleep(300);
    click(w*0.1,h*0.95);
    sleep(1000+1000*random());
    var list=className("android.support.v7.widget.RecyclerView").findOne();
    sleep(150);
    var is_ent=false;
    for(var i=1;i<list.childCount()&&!is_ent;i++){
        if(is(list.child(i)))continue;
        is_ent=true;
        list.child(i).click();
        for(var j=0;j<10;j++){
            sleep(2000);
            cha();
            swipe(w/2,h*0.6+h*random()*0.1,w/2,h*0.3,600+600*random());
            sleep(2000);
        }
        cha();
        back();
        t++;
        sleep(100);
    }
}