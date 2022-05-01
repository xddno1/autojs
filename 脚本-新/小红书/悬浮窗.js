var w = floaty.window(
    <frame>
    <vertical width="1000px">

        <horizontal>
        <button id="text" width="200px" height="100px"color="white" background="#28a745" float="left" margin-left="10px" margin-right="100pt">移动</button>
        <button id="text" width="200px" height="100px"color="white" background="#dc3545" float="right" margin-right="10px">关闭</button>
        </horizontal>
    </vertical>
    </frame>
);
setTimeout(()=>{
    w.close();
}, 2000);