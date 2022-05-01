x=350
y=300
var win = floaty.rawWindow(
    <vertical>
        <img id="图片" src="http://img04.sogoucdn.com/app/a/100520021/90f8607906a237b4efa04ec85084c702"
        w="{{x}}" h="{{y}}" radius="20dp" scaleType="fitXY"/>
       </vertical>
);
win.setSize(-1, -1);
win.setPosition(1, 1000);
win.setTouchable(false);
setInterval(() => {}, 100);