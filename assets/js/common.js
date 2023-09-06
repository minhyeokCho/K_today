$(document).ready(function(){
	AOS.init();
	$(window).on('load', function () {
		AOS.refresh();
	})
	$('.header').length && header(); //header
	$('.site_menu').length && siteMenu(); //전체메뉴
	$('.main_slide').length && mainSlide(); //main slide
	$('.we_slide').length && weSlide(); //we are slide
	$('.recipe_list').length && recipeSlide(); //recipe slide
	$('.review_slide').length && reviewSlide(); //review slide
	$('.go_top').length && goTop(); //페이지상단이동
	$('.sub_menu_wrap').length && subTab(); //서브 탭 메뉴
	$('.js-thum').length && detailImg(); //제품상세 썸네일
});

function header(){
	$('.gnb_01').on('mouseenter', function(){
		$('.header').addClass('on');
		$('.header_bg').stop().slideDown();
		$('.gnb_02').addClass('on');
	})
	$('.gnb_01').on('mouseleave', function(){
		$('.header').removeClass('on');
		$('.header_bg').stop().slideUp();
		$('.gnb_02').removeClass('on');
	})
}

function siteMenu() {
	$('.btn_menu').on('click', function(){
		if($(this).hasClass('close')){
			$('.site_menu_wrap').stop().removeClass('on');
			$(this).children('span').text('menu');
			$(this).removeClass('close');
		}else{
			$('.site_menu_wrap').stop().addClass('on');
			$(this).children('span').text('');
			$(this).addClass('close');
		}
	})
	$('.site_menu_01').on('click', function(){
		$('.site_menu_01').removeClass('mo_active');
		$(this).addClass('mo_active');
	});
	$('.site_menu_01').on('mouseover', function(){
		$('.site_menu_01').removeClass('on');
		$(this).addClass('on');
	});
	$('.site_gnb_01').on('mouseleave', function(){
		$('.site_menu_01').removeClass('on');
	});
}

function mainSlide(){ //main slide
	$('.main_slide').slick({
		speed:600,
		autoplay:true,
		autoplaySpeed: 8000,
		infinite: true,
		slidesToScroll: 1,
		focusOnSelect: true,
		arrows: true,
		pauseOnHover:false,
		pauseOnFocus:false,
		loop:true,
		dots:true,
		fade: true,
		cssEase: 'linear',
		prevArrow: $('.sec_01').find('.btn_arrow.prev'),
		nextArrow: $('.sec_01').find('.btn_arrow.next'),
		customPaging: function (slider, i) {
			return '<span class="crt">' + '0' + (i + 1) + '</span>' + '<span class="total">' + '0' + slider.slideCount + '</span>';
		},
	});
}

function weSlide(){ //We Are slide
	var weSlide = new Swiper('.we_slide', {
		slidesPerView:'auto',
		spaceBetween: 15,
		loop: true,
		loopAdditionalSlides : 1,
		speed : 1000,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.btn_arrow.next',
			prevEl: '.btn_arrow.prev',
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints:{
			1280: {
				spaceBetween: 60,
			},
			768: {
				spaceBetween: 30,
			},
		}
	});
}

function recipeSlide(){ //recipe slide
	var recipeSlide = new Swiper('.recipe_list', {
		slidesPerView:1,
		spaceBetween: 10,
		loop: true,
		loopedSlides : 300,
		speed : 1000,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: '.recipe_arrow.next',
			prevEl: '.recipe_arrow.prev',
		},
		autoplay: {
			delay:4000,
			disableOnInteraction: false,
		},
		breakpoints:{
			768: {
				slidesPerView:'auto',
				spaceBetween: 40,
			},
		}
	});
}

function reviewSlide(){ //review slide
	var reviewSlide = new Swiper('.review_slide', {
		slidesPerView:'auto',
		roundLengths: true,
		loop: true,
		speed : 1000,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
	});
}


function goTop(){ //페이지상단이동
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){
			$('.go_top').addClass('active')
		}else{
			$('.go_top').removeClass('active')
		}
		if(scrollTop > 200){
			$('.quick_wrap').addClass('on')
		}else{
			$('.quick_wrap').removeClass('on')
		}
	});

	$('.go_top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
}

function subTab() {//서브 탭메뉴
	$('.sub_menu_wrap.menu_mo .curt').on('click', function(e){
		$('.mo_wrap').stop().slideToggle();
		return false;
	})

}

function detailImg() {//제품상세 썸네일
	$('.js-thum .list a').on('mouseover', function(){
		var item = $(this).find('img').attr('src')
		$('.thum img').attr('src', item);
	})
	$('.js-thum .list a').on('click', function(){
		return false;
	})
}