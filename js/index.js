(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var mybody = document.getElementsByTagName("body")[0];
			var w=window.innerWidth
				|| document.documentElement.clientWidth
				|| document.body.clientWidth;
			var h=window.innerHeight
				|| document.documentElement.clientHeight
				|| document.body.clientHeight;
			
			if(w>=640){
				mybody.style.width=640+"px";
				mybody.style.height=640*3/2+"px";
				docEl.style.fontSize = '100px';
			}else{
				mybody.style.scroll="hidden";
				mybody.style.height="100%";
				if(h/w<1.5){
					mybody.style.width=h*2/3+"px";
					docEl.style.fontSize = h*2/3/6.4+"px";
				}else{
					mybody.style.width="100%";
					docEl.style.fontSize = w/6.4+"px";
				}
			}
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

onload=function(){
	var loading = document.getElementById("loading");
	loading.style.display="none";
	var main = document.getElementById("main");
	main.style.display="block";
	swip();
}
function swip(){
	//初始化swiper.js
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		direction:'vertical',
		slideToClickedSlide: true,//slide1向slide2 swipe的过程中轻点slide1会回到slide1
		
		/* 初始化animate */
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
	})
}
