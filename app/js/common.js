$(function() {

	$('#my-menu').mmenu({
		extensions: ['effect-menu-slide', 'pagedim'],
		navbar: { title: "Студенческие отряды Республики Крым"},
		offCanvas: {
			position:'right'
		}
	});
	//
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});
	
	// $('.carousel-photo').owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	smartSpeed: 700
		
	// });
	

});

// function footerToBottom() {
// var browserHeight = $(window).height(),
// footerOuterHeight = $('#my-footer').outerHeight(true),
// mainHeightMarginPaddingBorder = $('#my-content').outerHeight(true) - $('#my-content').height();
// $('#my-content').css({
// 'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
// });
// };
// footerToBottom();
// $(window).resize(function () {
// footerToBottom();
// });

// $(document).ready(function() {

//    var docHeight = $(window).height();
//    var footerHeight = $('#my-footer').height();
//    var footerTop = $('#my-footer').position().top + footerHeight;

//    if (footerTop < docHeight) {
//     $('#my-footer').css('margin-top', 16+ (docHeight - footerTop) + 'px');
//    }
//   });


