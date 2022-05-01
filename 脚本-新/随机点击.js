/**
 * 点击控件
 * @param {控件} obj 
 * @param {关闭随机} closeRandom
 * @returns 
 */
function clickObj(obj, closeRandom) {

  if (!obj) {
    console.log("控件为空，跳过点击");
    return
  }
  var b = obj.bounds()
  if (closeRandom) {
    click(b.centerX(), b.centerY())
  } else {
    click(random(b.left, b.right), random(b.top, b.bottom))
  }
}