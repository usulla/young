var click = ('ontouchstart' in window) ? 'touchstart' : 'click';
var mousemove = ('ontouchmove' in window) ? 'touchmove' : 'mousemove';
var mousedown = ('ontouchstart' in window) ? 'touchstart' : 'mousedown';
var mouseup = ('ontouchend' in window) ? 'touchend' : 'mouseup';
document.addEventListener("DOMContentLoaded", function(){
	/* Owl-carousel */
	$('.owl-carousel').owlCarousel({
		items:1,
		nav: true,
		navText: [
		"<img src='//dev-cdn.tnt-online.ru/super/img/prev.png'>",
		"<img src='//dev-cdn.tnt-online.ru/super/img/next.png'>"
		]
	});

	/* Mobile menu */

	$('div.burger').on(click, function(){
		console.log(444);
		if( !$(this).hasClass('open') ){ openMenu(); } 
		else { closeMenu(); }


	});

	$('div.menu ul li a').on(click, function(e){
		e.preventDefault();
		closeMenu();
	});		

	function openMenu(){

		$('div.circle').addClass('expand');

		$('div.burger').addClass('open');	
		$('div.x, div.y, div.z').addClass('collapse');
		$('.menu li').addClass('animate');
		$('.mobile .socials').addClass('animate');

		setTimeout(function(){ 
			$('div.y').hide(); 
			$('div.x').addClass('rotate30'); 
			$('div.z').addClass('rotate150'); 
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45'); 
			$('div.z').addClass('rotate135');  
		}, 120);
	}

	function closeMenu(){

		$('div.burger').removeClass('open');	
		$('div.x').removeClass('rotate45').addClass('rotate30'); 
		$('div.z').removeClass('rotate135').addClass('rotate150');				
		$('div.circle').removeClass('expand');
		$('.menu li').removeClass('animate');
		$('.mobile .socials').removeClass('animate');

		setTimeout(function(){ 			
			$('div.x').removeClass('rotate30'); 
			$('div.z').removeClass('rotate150'); 			
		}, 50);
		setTimeout(function(){
			$('div.y').show(); 
			$('div.x, div.y, div.z').removeClass('collapse');
		}, 70);													

	}

}); // DOMContentLoaded

/* Сработает после загрузки всего контента страницы (картинок в том числе) */ 
window.onload = function() {
	/* Top banner Offset */
	var heightHeader = document.querySelector('.header_top').offsetHeight;
	var heightBannerText = document.querySelector('.top-banner_text').offsetHeight;
	var marginTopBannerText = (heightHeader - heightBannerText - 80) / 2;
	console.log(heightHeader, heightBannerText, marginTopBannerText);
	document.querySelector('.top-banner_text').style.marginTop = marginTopBannerText + 'px';
	// Show text-topbanner
	$('.top-banner_text').fadeTo( "slow" , 1);

/* 
Перетаскивание в блоке с возрастом
*/
var ageBlock26 = document.querySelector('.age26'); 
var ageSlider = document.querySelector('.age_slider');
var delta_w = 0; // Изменение блока возраста26 по ширине

ageSlider.addEventListener(mousedown, saveWH); // Ставим обработку на нажатие кнопки мыши
document.addEventListener(mouseup, clearXY);  // Ставим обработку на отпускание кнопки мыши

/* Функция для получения текущих координат курсора мыши */
function getXY(event) {

	if(event.type == 'touchstart' || event.type == 'touchmove' || event.type == 'touchend' || event.type == 'touchcancel'){
	//	var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
	    var touch = event.touches[0] || event.changedTouches[0];
		x = touch.pageX;
		y = touch.pageY;
	} else if (event.type == 'mousedown' || event.type == 'mouseup' || event.type == 'mousemove' || event.type == 'mouseover'|| event.type=='mouseout' || event.type=='mouseenter' || event.type=='mouseleave') {
		x = event.pageX;
		y = event.pageY;
	}
	else {
		x = window.event.clientX;
		y = window.event.clientY;
	}
	return new Array(x, y);
}

function saveWH(event) {
	var point = getXY(event);
    w_ageBlock26 = ageBlock26.clientWidth; // Текущая ширина блока
    console.log(w_ageBlock26, 'Текущая ширина блока');
    delta_w = w_ageBlock26 - point[0]; // Измеряем текущую разницу между шириной и x-координатой мыши
    console.log(point[0])
    console.log(delta_w, 'Дельта');  

   //Ставим обработку движения мыши для разных браузеров 
   document.addEventListener(mousemove, resizeBlock);
    return false; // Отключаем стандартную обработку нажатия мыши 
}
/* Функция для измерения ширины окна */
function clientWidth() {
	return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
}

function resizeBlock(event) {
	var point = getXY(event);

    new_w_ageBlock26 = delta_w + point[0]; // Изменяем новое приращение по ширине
    ageBlock26.style.width = new_w_ageBlock26 + "px"; // Устанавливаем новую ширину блока
    // Если блок выходит за пределы экрана, то устанавливаем максимальные значения для ширины и высоты 
    if (ageBlock26.offsetLeft + ageBlock26.clientWidth > clientWidth()) ageBlock26.style.width = (clientWidth() - ageBlock26.offsetLeft)  + "px";
}

// При отпускании кнопки мыши отключаем обработку движения курсора мыши 
function clearXY(event){
	document.removeEventListener(mousemove, resizeBlock);
}
//Перетаскивание в блоке с возрастом

}; // window.onload



