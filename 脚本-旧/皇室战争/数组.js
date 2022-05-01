var nums = [];
var numsLock = threads.lock();
threads.start(function() { //向数组添加元素123 
    numsLock.lock();
    nums.push(123);
    log("线程: %s, 数组: %s", threads.currentThread(), nums);
    numsLock.unlock();
});
threads.start(function() { //向数组添加元素456 
    numsLock.lock();
    nums.push(456);
    log("线程: %s, 数组: %s", threads.currentThread(), nums);
    numsLock.unlock();
}); //删除数组最后一个元素
numsLock.lock();
//nums.pop();
log("线程: %s, 数组: %s", threads.currentThread(), nums);
numsLock.unlock();
