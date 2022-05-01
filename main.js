const database = require('./database')
const { comments, qqs } = database
/**
 * 换号
 */

// 拉出菜单栏()
// 点击设置()
// 点击退出()
// 确认退出()
// if (需要设置密码()) {
//   设置密码()
//   确认设置密码()
// }
// 导航栏点击我()
// 同意用户协议()
// 点击其它方式登录()
// 点击qq登录()
// 点击其它qq号登录()
// 点击添加账号()
//设置账号()
function 拉出菜单栏() {
  id('left_btn').findOne().click()
}
function 点击设置() {
  id('tab_settings').findOne().click()
}
function 点击退出() {
  id('button').text('退出登录').findOne().click()
}
function 确认退出() {
  text('退出登录').findOne().parent().click()
}
function 需要设置密码() {
  return text('设置登录密码').findOne(500)
}
function 设置密码() {
  setText(password)
}
function 确认设置密码() {
  id('logout_alert_dialog_ok_btn').findOne().click()
}
function 导航栏点击我() {
  className('androidx.appcompat.app.ActionBar$c').desc('我').findOne().click()
}
function 同意用户协议() {
  id('protocol_checkbox').findOne().click()
}
function 点击其它方式登录() {
  id('btn_other_login_ways').findOne().click()
}
function 点击qq登录() {
  id('qq_login').findOne().click()
}
function 点击其它qq号登录() {
  id('asz').findOne().click()
}
function 点击添加账号() {
  id('a0v').findOne().click()
}
function 设置账号() {
  setText(qqs[0].qq)
}
/**
 * 蹭评论
 */
commentbtn = {}
likebtn = {}
skiplike = 0
skipcomment = 0
commentnum = 10
app.launchApp('快手')
导航栏点击首页()
点击首页搜索框()
设置文本('头发')
点击搜索()
点击第一个视频()
记录点赞坐标()
记录评论坐标()
while (commentnum) {
  睡觉(500, 1000)
  if (skipcomment-- <= 0 && 验证评论数()) {
    上一个视频()
    评论()
    下一个视频()
    skipcomment = random(3, 8)
    commentnum--
  }
  睡觉(500, 1000)
  下一个视频()
}

function 导航栏点击首页() {
  className('androidx.appcompat.app.ActionBar$c').desc('首页').findOne().click()
}

function 点击首页搜索框() {
  id('search_btn').findOne().click()
  id('search_icon').findOne()
}
function 设置文本(文本) {
  setText(文本)
}
function 点击搜索() {
  id('right_tv').findOne().click()
}
function 点击第一个视频() {
  sleep(1000)
  id('recycler_view').findOne().children()[0].click()
  sleep(1000)
}
function 记录点赞坐标() {
  likebtn.x = id('like_button').findOne().bounds().centerX()
  likebtn.y = id('like_button').findOne().bounds().centerY()
}
function 记录评论坐标() {
  commentbtn.x = id('comment_button').findOne().bounds().centerX()
  commentbtn.y = id('comment_button').findOne().bounds().centerY()
}
function 点赞() {
  click(likebtn.x, likebtn.y)
}
function 评论() {
  click(commentbtn.x, commentbtn.y)
  id('editor_holder_text').findOne().click()
  sleep(1000)
  setText(comments[random(0, comments.length - 1)])
  id('finish_button').findOne().click()
  id('tabs_panel_close').findOne().click()
}
function 验证评论数() {
  log(id('comment_count_view').findOne().text(), skipcomment)
  return id('comment_count_view').findOne().text() > 100
}
function 下一个视频() {
  sleep(500)
  swipe(800, 1800, 200, 200, 1500)
  sleep(500)
}
function 上一个视频() {
  sleep(500)
  swipe(800, 200, 200, 1800, 1500)
  sleep(500)
}

/**
 * 不传参数睡觉1000ms
 * 传一个参数睡觉lms
 * 传两个取两个参数之间的随机值睡觉
 * @param {Number} l
 * @param {Number} r
 */
function 睡觉(l, r) {
  if (l && !r) {
    sleep(l)
  } else if (l && r) {
    sleep(random(l, r))
  } else if (!l) {
    sleep(1000)
  }
}
