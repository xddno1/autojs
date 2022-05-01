img=images.read("./test2.jpg")

// images.save(images.clip(img,900,350,140,180),"./head.jpg")

images.save(img,"/storage/emulated/0/Pictures/Screenshots/head.jpg")

media.scanFile("./head.jpg")


while(1){
    log(random(1,3))
}