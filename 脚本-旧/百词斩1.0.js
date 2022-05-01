threads.start(function(){
var bb=""
while(true){ 
var AA=idContains("a3_").findOne()
AA=AA.text()
if(AA!=bb){
    脚本=engines.all()
    for (var i =0; i <脚本.length; i++){
    if((脚本[i]+"").indexOf("运行1.0")!=-1){
    脚本[i].forceStop()
    }}
    打开图片()
    bb=AA
    }
    }
})

function 打开图片(){  
    var e = engines.execScriptFile("/storage/emulated/0/脚本/运行1.0.js")
}