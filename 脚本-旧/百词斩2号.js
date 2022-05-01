
requestScreenCapture()
var a=captureScreen()
a=images.clip(a,421,324,658,718)
for(;;){
    var b=captureScreen()
    b=images.clip(b,421,324,658,718)
    if(a==b){}
    else{
        alert("嘿嘿")
        sleep(1000)
        a=captureScreen()
        }}