i = 950
img = images.read('./test1.jpg')
img2 = images.read('./test4.jpg')

while (i++ < 1050) {
    t1 = new Date().getTime()
    // 4色一周期
    // 110 387 我方颜色坐标
    color = images.pixel(img2, i, 390)
    // 970 390
    // color2 = images.pixel(img2,i,387)
    //images.save(images.clip(img2, 950, 390, 50,50), "./test3.jpg")
    // t2=new Date().getTime()
    // log(t2-t1)
    //if(color=="-14077630")
    log(i, color)
    // log(color2)  -14699559 115
}