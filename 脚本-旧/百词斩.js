var window = floaty.window(
    <vertical padding="16">
        <text id="按钮" text="开启窗口"textStyle="bold"
        />
    </vertical>
);
window.exitOnClose();
window.按钮.on("long_click", () => {
    window.setAdjustEnabled(!window.isAdjustEnabled());
});
//设置悬浮位置
window.setPosition(750, 700);
setInterval(() => {}, 1000);
window.按钮.click(() => {
    按钮 = window.按钮.text()
    if (按钮 == "开启窗口") {
        var e = engines.execScriptFile("/storage/emulated/0/脚本/运行.js")
        window.按钮.setText("关闭窗口")
    }
    if (按钮 == "关闭窗口") {
        脚本 = engines.all()
        for (var i = 0; i < 脚本.length; i++) {
            if ((脚本[i] + "").indexOf("运行") != -1) {
                脚本[i].forceStop()
            }
        }
        window.按钮.setText("开启窗口")
    }
})