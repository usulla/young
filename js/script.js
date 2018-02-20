document.addEventListener("DOMContentLoaded", function(){
	$('.owl-carousel').owlCarousel({
		items:1,
		nav: true,
		navText: [
		"<img src='//dev-cdn.tnt-online.ru/super/img/prev.png'>",
		"<img src='//dev-cdn.tnt-online.ru/super/img/next.png'>"
		]
	});
}); // DOMContentLoaded

/* Сработает после загрузки всего контента страницы (картинок в том числе) */ 
window.onload = function() {
	var heightHeader = document.querySelector('.header_top').clientHeight;
	var heightBannerText = document.querySelector('.top-banner_text').offsetHeight;
	var marginTopBannerText = (heightHeader - heightBannerText - 80) / 2;
	console.log(heightHeader, heightBannerText, marginTopBannerText);
	document.querySelector('.top-banner_text').style.marginTop = marginTopBannerText + 'px';
  };