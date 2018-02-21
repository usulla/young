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
	if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }

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
}; // window.onload

