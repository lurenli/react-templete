// const baseSize = 32
// // 设置 rem 函数
// function setRem () {
//   // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
//   const scale = document.documentElement.clientWidth / 375
//   // 设置页面根节点字体大小
//   document.documentElement.style.fontSize = (baseSize * scale) + 'px'
// }
// // 初始化
// setRem()
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem()
// }


!(function(win, doc) {
  function setFontSize() {
      var baseFontSize = 100;
      var baseWidth = 320;
      var clientWidth = document.documentElement.clientWidth ||         window.innerWidth;
      var innerWidth = Math.max(Math.min(clientWidth, 480), 320);
      var rem = 100;
      if (innerWidth > 362 && innerWidth <= 375) {
          rem = Math.floor(innerWidth / baseWidth * baseFontSize * 0.9);
      }
      if (innerWidth > 375) {
          rem = Math.floor(innerWidth / baseWidth * baseFontSize * 0.84);
      }
      window.__baseREM = rem;
      document.querySelector('html').style.fontSize = rem + 'px';
  }
  var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
  var timer = null;
  win.addEventListener(evt, function() {
      clearTimeout(timer);
      timer = setTimeout(setFontSize, 300);
  }, false);
  win.addEventListener("pageshow", function(e) {
      if (e.persisted) {
          clearTimeout(timer);
          timer = setTimeout(setFontSize, 300);
      }
  }, false);
  setFontSize();
}(window, document));

// https://www.jianshu.com/p/285d51730f5e  react 配置 rem（px转rem适配手机端）