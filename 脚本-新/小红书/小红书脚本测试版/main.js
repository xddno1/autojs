"ui";



function showfunctionUI() {
    ui.layout(
        <vertical >
            <appbar>
                <toolbar id="toolbar" title="主页" />
            </appbar>
            <vertical padding="25">
                <button id="b1" text="万能模式" w="*"/>
                <button id="b2" text="评论区截流" w="*"/>
                <button id="b3" text="粉丝区截流" w="*"/>
                <button id="b4" text="私信粉丝" w="*"/>
                <button id="b5" text="一键取关" w="*"/>
                <button id="b6" text="设置" w="*"/>
                <button id="b7" text="开启无障碍" w="*"/>
            </vertical>
        </vertical>
    );


    ui.b1.on("click", () => engines.execScriptFile("./推荐点赞评论关注.js"));
    ui.b2.on("click", () => engines.execScriptFile("评论区截流.js"));
    ui.b3.on("click", () => engines.execScriptFile("粉丝区截流.js"));
    ui.b4.on("click", () => engines.execScriptFile("私信粉丝.js"));
    ui.b5.on("click", () => engines.execScriptFile("一键取关.js"));
    ui.b6.on("click", () => showshezhiUI());
    ui.b7.on("click", () => wuzhangai());
}


function showshezhiUI() {
    ui.layout(
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="设置" />
            </appbar>
            
            <text textSize="30sp" textStyle="bold" textColor="red">关键权限</text>
            <horizontal>
                <text textSize="18sp">无障碍服务</text>
                <checkbox id="cb1"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">悬浮窗权限</text>
                <checkbox id="cb2"/>
            </horizontal>
            <text textSize="30sp" textStyle="bold" textColor="blue">参数设置</text>
            <horizontal>
                <text textSize="18sp">操作总次数</text>
                <input id="chaozuocishu" inputType="number" text="{{a}}"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">信息发送随机间隔时间</text>
                <input inputType="number" text="2"/>
                <text textSize="18sp">~</text>
                <input inputType="number" text="5"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">批量操作数</text>
                <input inputType="number" text="100"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">每轮休息等待时间</text>
                <input inputType="number" text="2"/>
                <text textSize="18sp">~</text>
                <input inputType="number" text="5"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">打招呼语随机发送</text>
                <checkbox id="cb3"/>
            </horizontal>
            <button id="save" text="保存配置" w="*"/>
            <button id="helpdocument" text="帮助文档" bg="#ff00ff" w="*"/>
            <button id="back" text="返回" w="*"/>
        </vertical>
    );

    ui.back.on("click", () => showfunctionUI());
    ui.save.on("click", () => save_(ui.chaozuocishu.text()));
    ui.helpdocument.on("click", () => alert("帮助文档制作中！"));
}
a = 1

function save_(anew) {
    a = anew
    alert("保存成功")
}

function wuzhangai() {
    app.startActivity({
        action: "android.settings.ACCESSIBILITY_SETTINGS"
    });



}


alert("作者：小兜兜\nqq：2196815716")

showfunctionUI()