x=400
y=600
var win = floaty.rawWindow(
    <vertical>
        <img id="图片" src="file:///storage/emulated/0/皇室战争图片/龙宝.png"
        w="{{x}}" h="{{y}}" radius="20dp"/>
       </vertical>
);
//win.setSize(-2, -2);
win.图片.on("click", ()=>{
   exit()
    });

setInterval(() => {}, 100);


win.setPosition(-10, 750);