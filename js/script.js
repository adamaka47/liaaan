$(document).ready(function() {
	let count = 0;
	$('.header-slider').slick({
		arrows: true,
		dots: true,
		prevArrow: $('.header-buttons button:nth-child(1)'),
		nextArrow: $('.header-buttons button:nth-child(2)')
	});
	$('.header-list__link').click(function(event) {
		event.preventDefault();
		let hrefs = $(this).attr('href');
		let offTop = $(hrefs).offset().top;
		$('html, body').animate({scrollTop: offTop}, 200)
		$('.header-nav').removeClass('header-nav-active')
	});
	$('.header-burger').click(function(event) {
		event.preventDefault();
		$('.header-nav').addClass('header-nav-active')
	});
	$('.header-close').click(function(event) {
		event.preventDefault();
		$('.header-nav').removeClass('header-nav-active')
	});
	$('.header-slider button[role="tab"]').text('');
	$('.choose-list__link').on('click', function(event) {
		event.preventDefault();
		$('.choose-list__link').removeClass('choose-list__link-active');
		$(this).addClass('choose-list__link-active')
		$('.choose-items').removeClass('choose-items-active');
		let id = $(this).attr('href');
		$(id).addClass('choose-items-active')
		$('.choose-items-dop').removeClass('choose-items-dop-active')
		$('.choose__btn').css('display', 'block')
	});
	$('.choose__btn').on('click', function(event) {
		event.preventDefault();
		$(this).css('display', 'none');
		$('.choose-items-dop').addClass('choose-items-dop-active')
	});
	$('.choose-row__text a').on('click', function(event) {
		event.preventDefault();
		count++;
		alert(`Вы добавили элементов: ${count}`)
	});
});