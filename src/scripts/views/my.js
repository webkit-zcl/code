// 引入模板
var myTpl = require('../tpl/my.string');

// 定义一个视图
SPA.defineView('my', {
  // 将模板写在body里
  html: myTpl,

  plugins: [
    'delegated'
  ],

  bindActions: {

  }
});
