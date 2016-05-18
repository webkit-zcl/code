// 引入模板
var homeTpl = require('../tpl/home.string');


//定义一个视图
SPA.defineView('home',{
	//将模板放在body里面
	html:homeTpl,
	plugins:[
		'delegated',
		{
			name:'avalon',
			//新建ajax获取的数组
			options:function(vm){
				vm.homeList = [];
				//定义一个临时公共数组  用来存放第一次加载的数据（和加载更多时的一维数组）
				vm.homeTempList = [];
			}
		}
	],
	//给视图定义公共的属性和方法
	init:{
		//将一维数组转化为二维数组
		formatArray:function(arr){
			var newArr = [];//定义二维数组
			for(var i=0;i<Math.ceil(arr.length/3);i++){
				newArr[i] = [];
				newArr[i][0] = arr[3*i]
				newArr[i][1] = arr[3*i+1]
				newArr[i][2] = arr[3*i+2]
			}
			return newArr;
		}
	},
	bindEvents:{
		show:function(){
			//保存视图对象
			var that = this;
			//获得avalon的vm
			var vm= that.getVM();
			
			$.ajax({
				url:'/api/homeList.php',
				success:function(res){
					// 第一次获得的数据临时存储在homeTempList里
					//console.log(homeTempList);
					vm.homeTempList = res.data;
					
					// 第一次渲染数据
					vm.homeList = that.formatArray(vm.homeTempList);
					
				}
			});
			
			var mySwiper = new Swiper ('.swiper-container', {
			    autoplay:2000,
			    loop: false,
			    
			    // 分页器
			    pagination: '.swiper-pagination',
			});
			// 下拉刷新，上拉加载
      		// 使scroll pullToRefresh 滞后执行
		}
	}
})


