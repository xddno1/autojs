/*
  作者：@selp
  QQ：201228773
  在线调用腾讯(云)批量翻译接口，
  单次请求的文本长度应在2000字以内，
  其他语言参阅官方文档：https://cloud.tencent.com/document/product/551/40566
  大量调用请使用自己的appid与key!
*/
var fy = require('./腾讯云翻译.js');
var arr = ["Meow ~", "Meow ~","Meow ~","Experience plus 3?"];
var soi = fy({
    SourceTextList: arr, //需要翻译的内容数组
    source: "en", //源语言
    target: "zh" //翻译的语言
});
log(soi);
toast(soi.Response.TargetTextList);