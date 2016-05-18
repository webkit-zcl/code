//引入模板
var indexTpl = require('../tpl/index.string');

// 定义一个视图
SPA.defineView('index', {
		// 将模板写在body里
		html: indexTpl,
		// 定义子视图
		modules: [{
			name: 'content',
			views: ['home', 'nav', 'my', 'message'],
			container: '.m-index-container',
			defaultTag: 'home'
		}],

		plugins: [
			'delegated'
		],

		bindActions: {
			// 切换子视图
			'tap.switch': function(e, data) {
				// 切换：launch方法里传入视图的名字
				this.modules.content.launch(data.tag);
				$(e.el).addClass('active').siblings().removeClass('active');
			},
			/*'tap.exit': function () {
		  	// 关闭视图
		  	this.hide();
			}*/
		}
});