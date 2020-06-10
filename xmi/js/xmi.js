//jQuery是一个js库，他为我们封装了许多繁琐而常用的功能
//只需调用内部的方法，就能轻松实现炫酷效果
//基本语法：$(选择器).方法();
//1.利用美元符号定义jQuery函数
//2.完全兼容四种选择器
//3.点后面为需要调用的方法



$(".headBox .headCon .say").mouseenter(function(){
	
	//弹出下拉框
    $(".iot ").stop().slideDown(200);

});

$(".headBox .headCon .say").mouseleave(function(){
	
	//离开下拉框
    $(".iot ").stop().slideUp(200);

});

//鼠标经过
$(".car").mouseenter(function(){
	//替换图片  attr()修改某值的方法
	$(".car img").attr("src","img/car2.png");
	
	//弹出下拉框
    $(".car .carList").stop().slideDown(200);

});

    //鼠标离开
$(".car").mouseleave(function(){
	//替换图片  attr()修改某值的方法
	$(".car img").attr("src","img/car1.png");
	
	//收回(隐藏)下拉框
    $(".car .carList").stop().slideUp(200);
});

    //鼠标经过,animate({属性:"属性值"},时间(单位毫秒)); animate修改属性值
$(".logoBox .logo").mouseenter(function(){
	$(".logo .logoDouble").stop().animate({right:"-55px"},100);
	
});
$(".logoBox .logo").mouseleave(function(){
	$(".logo .logoDouble").stop().animate({right:"0px"},200);
	
});

//鼠标经过导航栏ul下拉列表框
 $(".logoBox ul").mouseenter(function(){
 	$(".goodsList").stop().slideDown(200);
 	
 });
 
 //鼠标离开//收回(隐藏)下拉框
  $(".logoBox ul").mouseleave(function(){
 	$(".goodsList").stop().slideUp(200);
 	
 });
  
  $(".goodsList").mouseenter(function(){
  	$(this).stop().slideDown(1);

  }).mouseleave(function(){
  	$(this).stop().slideUp(200);
  	
  });
  
//鼠标经过li
$(".logoBox ul li").mouseenter(function(){
	//读取当前元素的下标
	var index=$(this).index();
	
	//先全部隐藏
	$(".xiaomi,.hongmi,.dianshi").css("display","none");
	 if(index==0){
	 	$(".xiaomi").css("display","block");
	 }else if(index==1){
	 	$(".dianshi").css("display","block");
	 }else if(index==2){
	 	$(".hongmi").css("display","block");
	 }
	
});


















