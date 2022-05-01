//threads.start(function()threads.start(function()threads.stafunction()threads.start(function()function()threads.start(function()function()threads.start(function()threads.start(functio(functio(functiort(function()
console.show()
var a=0
var storage = storages.create("ABC");
                    
threads.start(function() {
    //在新线程执行的代码
    for (;;) {
        for (;;) {
            
              a++
            // alert("子" + a);
            //var storage = storages.create("ABC");
            storage.put("a", a);
            sleep(2000)
           break;
        }
    }
});
threads.start(function() {
    for (;;) {
        var b=0
        storage.put("a",b);
       // alert(b)
      sleep(1000)
    }
})
for (;;) {
  //  var storage = storages.create("ABC");
    // log( storage.get("b"));
    
log("a = " + storage.get("a"))
    sleep(1000)

}