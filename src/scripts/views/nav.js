// 引入模板
var navTpl = require('../tpl/nav.string');

// 定义一个视图
SPA.defineView('nav', {
  	// 将模板写在body里
  	html: navTpl,

  	plugins: [
    	'delegated',
    	{
			name:'avalon',
			options: function(vm){
				vm.navList = [];
			
			}
		}
  	],

  	bindActions: {
		show:function(){
			/*$.ajax({
				url:"/api/homeList.php",
				success:function(res){
					vm.navList = res.data;
				}
			});*/
		}
  	}
});
