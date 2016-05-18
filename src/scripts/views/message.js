// 引入模板
var messageTpl = require('../tpl/message.string');

// 定义一个视图
SPA.defineView('message', {
  // 将模板写在body里
  html: messageTpl,

  plugins: [
    'delegated'
  ],

  bindActions: {

  }
});
