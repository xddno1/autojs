var a = 1
var hh = threads.start(function(){
    for(;;) {
        if (a = 3) {
            hh.interrupt()
            
        }
        a++
        alert(a)
    }
)}