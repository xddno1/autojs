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
            </vertical>
            <text textSize="18sp"gravity="center" >作者QQ:2196815716</text>
        </vertical>
    );


    ui.b1.on("click", () => wannengmoshi());
    ui.b2.on("click", () => pinglunqujieliu());
    ui.b3.on("click", () => fensiqujieliu());
    ui.b4.on("click", () => sixinfensi());
    ui.b5.on("click", () => yijianquguan());
    ui.b6.on("click", () => showshezhiUI());
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
                <Switch id="s1" checked="{{auto.service != null}}"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">悬浮窗权限</text>
                <Switch id="s2" clickable="false" checked="true"/>
            </horizontal>*/
            <text textSize="30sp" textStyle="bold" textColor="blue">参数设置</text>
            <horizontal>
                <text textSize="18sp">操作总轮数</text>
                <input id="i1" inputType="number" text="{{i1}}"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">单次操作随机间隔时间</text>
                <input id="i2"inputType="number" text="{{i2}}"/>
                <text textSize="18sp">~</text>
                <input id="i3"inputType="number" text="{{i3}}"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">单轮操作次数数</text>
                <input id="i4"inputType="number" text="{{i4}}"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">每轮休息等待时间</text>
                <input id="i5"inputType="number" text="{{i5}}"/>
                <text textSize="18sp">~</text>
                <input id="i6"inputType="number" text="{{i6}}"/>
            </horizontal>
            <horizontal>
                <text textSize="18sp">打招呼语随机发送</text>
                <checkbox id="cb3" checked="{{cb3}}"/>
            </horizontal>
            <button id="save" text="保存配置" w="*"/>
            <button id="helpdocument" text="帮助文档" bg="#ff00ff" w="*"/>
            <button id="back" text="返回" w="*"/>
        </vertical>
    );
    ui.s1.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if(checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if(!checked && auto.service != null){
        auto.service.disableSelf();
    }
});

    ui.back.on("click", () => showfunctionUI());
    ui.save.on("click", () => save_(ui.i1.text(), ui.i2.text(), ui.i3.text(), ui.i4.text(), ui.i5.text(), ui.i6.text()));
    ui.helpdocument.on("click", () => alert("帮助文档制作中！"));
}


var istuijian = 0,
    isnearly = 0,
    isguanjianci = 0,
    isdianzan = 0,
    isguanzhu = 0,
    ispinglun = 0,
    moshi

//activity1
function wannengmoshi() {
    if (wuzhangaijiance()) {
        moshi = 1
        var options = ["点赞", "关注", "评论"]
        var b = 0,
            op,
            dp
        dialogs.singleChoice("请选择", ["推荐", "附近", "关键词"])
            .then(d => {
                dp = d
                if (dp == 0) {
                    istuijian = 1
                }
                if (dp == 1) {
                    isnearly = 1
                }
                if (dp == 2) {
                    isguanjianci = 1
                }
                return dialogs.multiChoice("请选择", options)
            })
            .then(o => {
                op = o
                while (op[b] != undefined) {
                    if (op[b] == 0) {
                        isdianzan = 1
                    }
                    if (op[b] == 1) {
                        isguanzhu = 1
                    }
                    if (op[b] == 2) {
                        ispinglun = 1
                    }
                    b++
                    log(b)
                }
                //log(ispinglun)
                engines.execScriptFile("./main.js", {
                    arguments: {
                        istuijian: istuijian,
                        isnearly: isnearly,
                        isguanjianci: isguanjianci,
                        isdianzan: isdianzan,
                        isguanzhu: isguanzhu,
                        ispinglun: ispinglun,
                        moshi: moshi,
                        i1: i1, //操作总次数
                        i2: i2, //评论间隔左
                        i3: i3, //评论间隔右
                        i4: i4, //批量操作数
                        i5: i5, //每轮休息时间左
                        i6: i6, //每轮休息时间右
                        cb3: cb3 //打招呼是否随机
                    }
                })
            })

    }

}



function pinglunqujieliu() {
    if (wuzhangaijiance()) {
        moshi = 2
        var options = ["点赞", "关注", "私信"]
        var b = 0,
            op
        isdianzan = 0,
            isguanzhu = 0,
            ispinglun = 0
        dialogs.multiChoice("请选择", options)
            .then(o => {
                op = o
                while (op[b] != undefined) {
                    if (op[b] == 0) {
                        isdianzan = 1
                    }
                    if (op[b] == 1) {
                        isguanzhu = 1
                    }
                    if (op[b] == 2) {
                        ispinglun = 1
                    }
                    b++
                    log(b)
                }
                engines.execScriptFile("./main.js", {
                    arguments: {
                        istuijian: istuijian,
                        isnearly: isnearly,
                        isguanjianci: isguanjianci,
                        isdianzan: isdianzan,
                        isguanzhu: isguanzhu,
                        ispinglun: ispinglun,
                        moshi: moshi,
                        i1: i1, //操作总次数
                        i2: i2, //评论间隔左
                        i3: i3, //评论间隔右
                        i4: i4, //批量操作数
                        i5: i5, //每轮休息时间左
                        i6: i6, //每轮休息时间右
                        cb3: cb3 //打招呼是否随机
                    }
                })
            })
    }
}

function fensiqujieliu() {
    if (wuzhangaijiance()) {
        moshi = 3
        var options = ["关注", "私信"]
        var b = 0,
            op
        isguanzhu = 0,
            ispinglun = 0
        dialogs.multiChoice("请选择", options)
            .then(o => {
                op = o
                while (op[b] != undefined) {
                    if (op[b] == 0) {
                        isguanzhu = 1
                    }
                    if (op[b] == 1) {
                        ispinglun = 1
                    }
                    b++
                    log(b)
                }
                engines.execScriptFile("./main.js", {
                    arguments: {
                        istuijian: istuijian,
                        isnearly: isnearly,
                        isguanjianci: isguanjianci,
                        isdianzan: isdianzan,
                        isguanzhu: isguanzhu,
                        ispinglun: ispinglun,
                        moshi: moshi,
                        i1: i1, //操作总次数
                        i2: i2, //评论间隔左
                        i3: i3, //评论间隔右
                        i4: i4, //批量操作数
                        i5: i5, //每轮休息时间左
                        i6: i6, //每轮休息时间右
                        cb3: cb3 //打招呼是否随机
                    }
                })
            })
    }
}

function sixinfensi() {
    if (wuzhangaijiance()) {
        moshi = 4
        var options = ["回粉", "私信"]
        var b = 0,
            op
        ishuifen = 0,
            ispinglun = 0
        dialogs.multiChoice("请选择", options)
            .then(o => {
                op = o
                while (op[b] != undefined) {
                    if (op[b] == 0) {
                        isguanzhu = 1
                    }
                    if (op[b] == 1) {
                        ispinglun = 1
                    }
                    b++
                    log(b)
                }
                engines.execScriptFile("./main.js", {
                    arguments: {
                        istuijian: istuijian,
                        isnearly: isnearly,
                        isguanjianci: isguanjianci,
                        isdianzan: isdianzan,
                        isguanzhu: isguanzhu,
                        ispinglun: ispinglun,
                        moshi: moshi,
                        i1: i1, //操作总次数
                        i2: i2, //评论间隔左
                        i3: i3, //评论间隔右
                        i4: i4, //批量操作数
                        i5: i5, //每轮休息时间左
                        i6: i6, //每轮休息时间右
                        cb3: cb3 //打招呼是否随机
                    }
                })
            })
    }
}

function yijianquguan() {
    if (wuzhangaijiance()) {
        moshi = 5
        engines.execScriptFile("./main.js", {
            arguments: {
                istuijian: istuijian,
                isnearly: isnearly,
                isguanjianci: isguanjianci,
                isdianzan: isdianzan,
                isguanzhu: isguanzhu,
                ispinglun: ispinglun,
                moshi: moshi,
                i1: i1, //操作总次数
                i2: i2, //评论间隔左
                i3: i3, //评论间隔右
                i4: i4, //批量操作数
                i5: i5, //每轮休息时间左
                i6: i6, //每轮休息时间右
                cb3: cb3 //打招呼是否随机
            }
        })
    }
}

function wuzhangaijiance() {
    if (auto.service == null) {
        toastLog("请先开启无障碍服务！");
        return 0;
    };
    return 1;
}




//activity2
function b(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        alert("请先开启无障碍服务！")
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
}


function save_(i1new, i2new, i3new, i4new, i5new, i6new) {
    if (i1new <= 0 || i2new <= 0 || i3new <= 0 || i4new <= 0 || i5new <= 0 || i6new <= 0 || i2new > i3new || i5new > i6new) {
        alert("参数错误！\n保存失败！")
    } else {
        i1 = i1new
        i2 = i2new
        i3 = i3new
        i4 = i4new
        i5 = i5new
        i6 = i6new
        cb3 = ui.cb3.checked
        alert("保存成功")
    }
}

function init() {
    i1 = 1
    i2 = 2
    i3 = 5
    i4 = 100
    i5 = 2
    i6 = 5
    cb3 = false
}

init()
showfunctionUI()