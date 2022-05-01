"ui";


function showfunctionUI() {
    ui.layout(
        <vertical >
            <appbar>
                <toolbar id="toolbar" title="主页" />
            </appbar>
            <vertical padding="10">
             <img scaleType="fitXY" margin="15" radius="8" src="https://cdn.baidulx.cn/staticres/9302/img/a1.jpg"/>
                    <horizontal margin="10">
                        <img tint="#699DFF" src="@drawable/ic_equalizer_black_48dp"/>
                        <text layout_gravity="bottom" textColor="black" textSize="16sp" text="功能专区"/>
                    </horizontal>
                <ScrollView>
                    <vertical>
                        <card w="*" id="b1" h="80" margin="15 10" cardCornerRadius="2dp" cardElevation="2dp" gravity="center_vertical">
                            <horizontal>
                                <card w="auto" h="auto" layout_gravity="center" marginLeft="15" cardCornerRadius="20dp" cardElevation="2dp" gravity="center_vertical">
                                    <img padding="3" bg="#699DFF" tint="#ffffff" src="@drawable/ic_format_list_bulleted_black_48dp"/>
                                </card>
                                <vertical layout_gravity="center|left" marginLeft="15"  h="auto">
                                    <text text="万能模式" textColor="#222222" textSize="16sp"/>
                                    <text text="点赞/关注/评论/私信" textColor="#999999" textSize="14sp"/>
                                </vertical>
                            </horizontal>
                        </card>
                        
                        <card w="*" h="80" id="b2" margin="15 10" cardCornerRadius="2dp" cardElevation="2dp" gravity="center_vertical">
                            <horizontal>
                                <card w="auto" h="auto" layout_gravity="center" marginLeft="15" cardCornerRadius="20dp" cardElevation="2dp" gravity="center_vertical">
                                    <img padding="3" bg="#699DFF" tint="#ffffff" src="@drawable/ic_format_list_bulleted_black_48dp"/>
                                </card>
                                <vertical layout_gravity="center|left" marginLeft="15"  h="auto">
                                    <text text="评论区截流" textColor="#222222" textSize="16sp"/>
                                    <text text="操作指定作品" textColor="#999999" textSize="14sp"/>
                                </vertical>
                            </horizontal>
                        </card>
                        
                        <card w="*" h="80" id="b3" margin="15 10" cardCornerRadius="2dp" cardElevation="2dp" gravity="center_vertical">
                            <horizontal>
                                <card w="auto" h="auto" layout_gravity="center" marginLeft="15" cardCornerRadius="20dp" cardElevation="2dp" gravity="center_vertical">
                                    <img padding="3" bg="#699DFF" tint="#ffffff" src="@drawable/ic_format_list_bulleted_black_48dp"/>
                                </card>
                                <vertical layout_gravity="center|left" marginLeft="15"  h="auto">
                                    <text text="评论区截流" textColor="#222222" textSize="16sp"/>
                                    <text text="操作指定作品" textColor="#999999" textSize="14sp"/>
                                </vertical>
                            </horizontal>
                        </card>
                        
                        <card w="*" h="80" id="b4" margin="15 10" cardCornerRadius="2dp" cardElevation="2dp" gravity="center_vertical">
                            <horizontal>
                                <card w="auto" h="auto" layout_gravity="center" marginLeft="15" cardCornerRadius="20dp" cardElevation="2dp" gravity="center_vertical">
                                    <img padding="3" bg="#699DFF" tint="#ffffff" src="@drawable/ic_format_list_bulleted_black_48dp"/>
                                </card>
                                <vertical layout_gravity="center|left" marginLeft="15"  h="auto">
                                    <text text="私信粉丝" textColor="#222222" textSize="16sp"/>
                                    <text text="回关/评论" textColor="#999999" textSize="14sp"/>
                                </vertical>
                            </horizontal>
                        </card>
                        
                        <card w="*" h="80" id="b5" margin="15 10" cardCornerRadius="2dp" cardElevation="2dp" gravity="center_vertical">
                            <horizontal>
                                <card w="auto" h="auto" layout_gravity="center" marginLeft="15" cardCornerRadius="20dp" cardElevation="2dp" gravity="center_vertical">
                                    <img padding="3" bg="#699DFF" tint="#ffffff" src="@drawable/ic_format_list_bulleted_black_48dp"/>
                                </card>
                                <vertical layout_gravity="center|left" marginLeft="15"  h="auto">
                                    <text text="一键取关" textColor="#222222" textSize="16sp"/>
                                    <text text="已关注用户取关" textColor="#999999" textSize="14sp"/>
                                </vertical>
                            </horizontal>
                        </card>
                        
                        <card w="*" h="80" id="b6" margin="15 10" cardCornerRadius="2dp" cardElevation="2dp" gravity="center_vertical">
                            <horizontal>
                                <card w="auto" h="auto" layout_gravity="center" marginLeft="15" cardCornerRadius="20dp" cardElevation="2dp" gravity="center_vertical">
                                    <img padding="3" bg="#699DFF" tint="#ffffff" src="@drawable/ic_format_list_bulleted_black_48dp"/>
                                </card>
                                <vertical layout_gravity="center|left" marginLeft="15"  h="auto">
                                    <text text="设置" textColor="#222222" textSize="16sp"/>
                                    <text text="设置栏" textColor="#999999" textSize="14sp"/>
                                </vertical>
                            </horizontal>
                        </card>
                    </vertical>
                </ScrollView>
            </vertical>
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
        
          <text textColor="black" textSize="18sp"  text="权限申请"/>
                                <horizontal>
                                    <text layout_weight="1" text="辅助权限"/>
                                    <Switch checked="{{!!auto.service}}" id="s1"/>
                                </horizontal>
        
                        <View margin="8" w="*" h="2" bg="#F3F3F3"/>
                                
                                <horizontal>
                                    <text layout_weight="1" text="截图权限(未启用功能)"/>
                                    <Switch clickable="false" id="reqScreen"/>
                                </horizontal>
                                <View w="*" h="2" margin="8" bg="#F3F3F3"/>
                                
                                <horizontal>
                                    <text layout_weight="1" text="悬浮窗权限"/>
                                    <Switch checked="{{floaty.checkPermission()}}" id="reqFloat"/>
                                </horizontal>
                                <View w="*" h="2" margin="8" bg="#F3F3F3"/>
                                  
                                <horizontal>
                                    <text layout_weight="1" text="忽略电池优化(未启用功能)"/>
                                    <Switch clickable="false" id="ignore_bt_op"/>
                                </horizontal>
                                <View w="*" h="2" margin="8" bg="#F3F3F3"/>
                                
                                <text textColor="black" textSize="18sp"  text="参数配置"/>
                                
                                <horizontal>
                                    <text layout_weight="1" text="执行次数"/>
                                    <input id="total" w="auto" singleLine="true" text="{{i1}}" inputType="number"/>
                                </horizontal>
                                <View w="*" h="2" margin="8" bg="#F3F3F3"/>
                                
                                <horizontal>
                                    <text layout_weight="1" text="消息发送随机时间间隔"/>
                                    <input id="interval1" w="auto" singleLine="true" inputType="number|numberDecimal" text="{{i2}}"/>
                                    <text text="－"/>
                                    <input id="interval2" w="auto" singleLine="true" inputType="number|numberDecimal" text="{{i3}}"/>
                                </horizontal>
                                <View w="*" h="2" margin="8" bg="#F3F3F3"/>
                                
                                <horizontal>
                                    <text layout_weight="1" text="每轮操作数量"/>
                                    <input id="times" w="auto" singleLine="true" text="{{i4}}" inputType="number"/>
                                </horizontal>
                                <View w="*" h="2" margin="8" bg="#F3F3F3"/>
                                
                                <horizontal>
                                    <text layout_weight="1" text="执行完成随机休息时间"/>
                                    <input id="rest1" w="auto" singleLine="true" inputType="number|numberDecimal" text="{{i5}}"/>
                                    <text text="－"/>
                                    <input id="rest2" w="auto" singleLine="true" inputType="number|numberDecimal" text="{{i6}}"/>
                                </horizontal>
                                <View w="*" h="2" margin="8" bg="#F3F3F3"/>
                                    
                                <horizontal>
                                    <text layout_gravity="center" layout_weight="1" text="招呼语及私信内容随机发送"/>
                                    <Switch id="cb3"checked="{{cb3}}"/>
                                </horizontal>
                                <View w="*" h="2" margin="10" bg="#F3F3F3"/>
                                
                                  <button id="save" text="保存配置" w="*"/>
            <button id="helpdocument" text="帮助文档" bg="#ff00ff" w="*"/>
            <button id="back" text="返回" w="*"/>
                                
                                
                           
        
   
            
       
          
        </vertical>
    );
    //ui.s1.on("check", b(checked));
    ui.s1.on("check", function(checked) {
        // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        }
    });

    //ui.s1.on("resume", b1());
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

function b1() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.s1.checked = auto.service != null;
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
    i1 = 3
    i2 = 2
    i3 = 5
    i4 = 3
    i5 = 2
    i6 = 5
    cb3 = false
}

init()
showfunctionUI()