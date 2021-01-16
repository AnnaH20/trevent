$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	const $swipeBtn = $('.swipe');

	$swipeBtn.on('click', function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});

	$(window).on('scroll', function () {
		if (window.scrollY > window.innerHeight) {
			$swipeBtn.removeClass('hide');
		} else {
			$swipeBtn.addClass('hide');
		}
	});
});
